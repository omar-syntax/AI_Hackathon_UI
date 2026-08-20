import { PanelRight } from "lucide-react";

export default function SidebarToggleButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className={`fixed top-4 right-4 z-50 p-2 rounded-lg transition-colors ${
        isOpen
          ? "bg-[var(--color-bg-tertiary)] text-white"
          : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-white hover:bg-white/[0.08]"
      } shadow-[var(--shadow-sm)] border border-white/[0.08]`}
      aria-label="Toggle sidebar"
    >
      <PanelRight size={20} />
    </button>
  );
}
