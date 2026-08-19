import { FileText, MessageSquare } from "lucide-react";

const mockSessions = [
  { id: 1, title: "ACE Inhibitor Guidelines", type: "chat", date: "2 min ago" },
  { id: 2, title: "NSCLC Treatment Options", type: "chat", date: "1 hr ago" },
  { id: 3, title: "Drug Interaction Query", type: "chat", date: "Yesterday" },
];

const mockFiles = [
  { id: 1, name: "cardiology_2023.pdf", size: "2.4 MB" },
  { id: 2, name: "oncology.pdf", size: "5.1 MB" },
  { id: 3, name: "ACC_AHA_HF_Guidelines_2023.pdf", size: "3.8 MB" },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay fixed inset-0 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white border-l border-[var(--color-border)] shadow-[var(--shadow-md)] z-50 transform transition-transform duration-250 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-[var(--color-border)]">
            <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
              History
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] px-2 mb-2">
                Sessions
              </h3>
              <div className="space-y-1">
                {mockSessions.map((session) => (
                  <button
                    key={session.id}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-[var(--color-bg-tertiary)] transition-colors group"
                    onClick={onClose}
                  >
                    <MessageSquare
                      size={16}
                      className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[var(--color-text-primary)] truncate">
                        {session.title}
                      </p>
                      <p className="text-[11px] text-[var(--color-text-muted)]">
                        {session.date}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 border-t border-[var(--color-border)]">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] px-2 mb-2">
                Uploaded Files
              </h3>
              <div className="space-y-1">
                {mockFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors group"
                  >
                    <FileText
                      size={16}
                      className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[var(--color-text-primary)] truncate">
                        {file.name}
                      </p>
                      <p className="text-[11px] text-[var(--color-text-muted)]">
                        {file.size}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
