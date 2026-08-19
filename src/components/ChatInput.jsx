import { useState, useRef, useCallback } from "react";
import { Send } from "lucide-react";

export default function ChatInput({ onSend, hasStarted, isLoading }) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = useCallback((e) => {
    setText(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div
      className={`w-full transition-all duration-300 ease-in-out ${
        hasStarted
          ? "fixed bottom-0 left-0 right-0 z-50 py-4"
          : "flex items-center justify-center min-h-screen"
      }`}
    >
      <div className="w-[50%] min-w-[400px] mx-auto">
        {!hasStarted && (
          <div className="flex flex-col items-center gap-4 mb-6">
            <h1 className="text-5xl font-bold tracking-tight">
              <span style={{ color: "#164B73" }}>EPILEPSIES </span>
              <span style={{ color: "#398DAF" }}>AI</span>
            </h1>
            <div className="animate-float flex justify-center w-full">
              <img src="/logo.png" alt="Logo" className="w-[43%] max-w-md h-auto" />
            </div>
            <p className="text-[15px] text-[var(--color-text-secondary)] text-center max-w-md">
              AI-Powered Care for Children, Young People &amp; Adults
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)] px-2 py-1.5 focus-within:ring-2 focus-within:ring-[var(--color-accent)] focus-within:border-transparent transition-shadow"
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={text}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            placeholder={isLoading ? "Waiting for response..." : "Ask a medical question..."}
            className="flex-1 resize-none px-2 py-2 bg-transparent text-[15px] leading-snug text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none max-h-[120px] overflow-y-auto disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={!text.trim() || isLoading}
            className="flex-shrink-0 p-2.5 rounded-full bg-[var(--color-accent)] text-white hover:bg-[#0f3a5c] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
