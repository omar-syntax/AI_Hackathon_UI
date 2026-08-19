import { useEffect, useRef, useMemo } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages }) {
  const scrollContainerRef = useRef(null);
  const prevMessageCount = useRef(messages.length);
  const userScrolledUp = useRef(false);

  const scrollTrigger = useMemo(() => {
    if (messages.length === 0) return "";
    const last = messages[messages.length - 1];
    return `${messages.length}-${last.content?.length || 0}`;
  }, [messages]);

  // Track user scroll position via passive scroll listener
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      userScrolledUp.current = distanceFromBottom > 150;
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // New message added → always scroll to bottom, reset flag
  useEffect(() => {
    if (messages.length > prevMessageCount.current) {
      userScrolledUp.current = false;
      const el = scrollContainerRef.current;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }
    prevMessageCount.current = messages.length;
  }, [messages.length]);

  // Content streaming → only scroll if user hasn't scrolled up
  useEffect(() => {
    if (userScrolledUp.current) return;
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [scrollTrigger]);

  if (messages.length === 0) return null;

  return (
    <div ref={scrollContainerRef} className="chat-scroll flex-1 overflow-y-auto px-4 py-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>
    </div>
  );
}
