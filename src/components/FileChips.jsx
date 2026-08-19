import { X } from "lucide-react";

export default function FileChips({ files, onRemove }) {
  if (!files || files.length === 0) return null;

  return (
    <div className="flex items-center gap-2 px-4 pb-2 animate-fade-in">
      {files.map((file) => (
        <div
          key={file.id}
          className="animate-fade-in inline-flex items-center gap-1.5 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] px-3 py-1.5 text-[13px] text-[var(--color-text-primary)]"
        >
          <span>📄</span>
          <span className="max-w-[180px] truncate">{file.name}</span>
          <button
            onClick={() => onRemove(file.id)}
            className="ml-0.5 rounded-full p-0.5 hover:bg-gray-200 transition-colors"
            aria-label={`Remove ${file.name}`}
          >
            <X size={12} className="text-[var(--color-text-muted)]" />
          </button>
        </div>
      ))}
    </div>
  );
}
