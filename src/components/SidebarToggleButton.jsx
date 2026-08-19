import { PanelRight } from "lucide-react";

export default function SidebarToggleButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className={`fixed top-4 right-4 z-50 p-2 rounded-lg transition-colors ${
        isOpen
          ? "bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)]"
          : "bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]"
      } shadow-[var(--shadow-sm)] border border-[var(--color-border)]`}
      aria-label="Toggle sidebar"
    >
      <PanelRight size={20} />
    </button>
  );
}
