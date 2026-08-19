import { useState, useRef, useCallback } from "react";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import SidebarToggleButton from "./components/SidebarToggleButton";
import Sidebar from "./components/Sidebar";
import { askQuestion } from "./utils/api";
import { transformResponse } from "./utils/transformResponse";
import { streamText } from "./utils/mockStream";

let messageIdCounter = 0;

function generateId() {
  messageIdCounter++;
  return `msg_${Date.now()}_${messageIdCounter}`;
}

export default function App() {
  const [messages, setMessages] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef(null);

  const updateMessage = useCallback((id, updates) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, ...updates } : msg))
    );
  }, []);

  const handleSend = useCallback(
    (text) => {
      if (!text) return;

      setHasStarted(true);
      setIsLoading(true);

      const userMessage = {
        id: generateId(),
        role: "user",
        content: text,
        status: "done",
        answerCard: null,
      };

      setMessages((prev) => [...prev, userMessage]);

      const botMessageId = generateId();

      setTimeout(() => {
        const botPlaceholder = {
          id: botMessageId,
          role: "bot",
          content: "",
          status: "typing",
          answerCard: null,
        };
        setMessages((prev) => [...prev, botPlaceholder]);

        askQuestion(text)
          .then((apiResponse) => {
            const { content, answerCard } = transformResponse(apiResponse);

            updateMessage(botMessageId, { status: "streaming", content: "" });

            const cleanup = streamText(
              content,
              (partial) => {
                updateMessage(botMessageId, { content: partial });
              },
              () => {
                updateMessage(botMessageId, {
                  status: "done",
                  content,
                  answerCard,
                });
              }
            );

            abortRef.current = cleanup;
          })
          .catch((err) => {
            updateMessage(botMessageId, {
              status: "done",
              content: "Unable to reach the RAG system. Please try again.",
              answerCard: {
                status: "No Answer",
                evidenceQuality: "Low",
                evidence: [],
                suggestedAction: null,
                error: err.name === "AbortError"
                  ? "Request timed out. The RAG system took too long to respond."
                  : err.message || "Network error. Is the backend running?",
              },
            });
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, 300);
    },
    [updateMessage]
  );

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-primary)]">
      <SidebarToggleButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
        isOpen={sidebarOpen}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div
        className={`flex flex-col flex-1 ${
          hasStarted ? "pb-[88px]" : ""
        }`}
      >
        <ChatWindow messages={messages} />
      </div>

      <ChatInput
        onSend={handleSend}
        hasStarted={hasStarted}
        isLoading={isLoading}
      />
    </div>
  );
}
