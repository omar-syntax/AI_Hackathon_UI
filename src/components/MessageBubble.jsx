import { useState, useCallback } from "react";
import { Bot, User } from "lucide-react";
import TypingIndicator from "./TypingIndicator";
import AnswerCard from "./AnswerCard";
import DocumentPreviewer from "./DocumentPreviewer";

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";
  const [previewFile, setPreviewFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handlePreview = useCallback((file) => {
    if (file.file) {
      const url = URL.createObjectURL(file.file);
      setPreviewUrl(url);
      setPreviewFile(file);
    }
  }, []);

  const handleClosePreview = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setPreviewFile(null);
  }, [previewUrl]);

  return (
    <>
      <div
        className={`flex gap-2.5 ${isUser ? "justify-end" : "justify-start"} ${
          isUser ? "animate-fade-in-up" : "animate-fade-in-left"
        }`}
      >
        {!isUser && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center mt-1">
            <Bot size={16} className="text-[var(--color-accent)]" />
          </div>
        )}

        <div
          className={`relative max-w-[70%] ${isUser ? "max-w-[70%]" : "max-w-[75%]"}`}
        >
          <div
            className={`px-4 py-3 ${
              isUser
                ? "bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)]"
                : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]"
            } ${
              isUser
                ? "rounded-[18px_18px_4px_18px]"
                : "rounded-[18px_18px_18px_4px]"
            }`}
          >
            {message.status === "typing" && <TypingIndicator />}

            {message.status === "streaming" && (
              <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                {message.content}
                <span className="inline-block w-0.5 h-4 ml-0.5 bg-[var(--color-text-primary)] animate-pulse" />
              </p>
            )}

            {message.status === "done" && (
              <>
                {message.files && message.files.length > 0 && (
                  <div className="flex flex-col gap-2 mb-2">
                    {message.files.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center gap-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2.5"
                      >
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center">
                          <span className="text-sm">📄</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-medium text-[var(--color-text-primary)] truncate">
                            {file.name}
                          </p>
                          {file.file && (
                            <button
                              onClick={() => handlePreview(file)}
                              className="text-[11px] text-[var(--color-accent)] font-medium cursor-pointer hover:underline"
                            >
                              Preview document
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {message.content && (
                  <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                )}
                <AnswerCard answerCard={message.answerCard} />
              </>
            )}
          </div>
        </div>

        {isUser && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mt-1">
            <User size={16} className="text-gray-500" />
          </div>
        )}
      </div>

      <DocumentPreviewer
        isOpen={!!previewFile}
        fileName={previewFile?.name || ""}
        fileUrl={previewUrl || ""}
        onClose={handleClosePreview}
      />
    </>
  );
}
