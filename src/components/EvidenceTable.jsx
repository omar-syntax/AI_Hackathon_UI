import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function EvidenceTable({ evidence }) {
  const [expanded, setExpanded] = useState(false);

  if (!evidence || evidence.length === 0) return null;

  return (
    <div className="mt-3 border-t border-[var(--color-border)]">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 w-full py-2 text-left text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
      >
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
        Evidence — {evidence.length} source{evidence.length !== 1 ? "s" : ""}
      </button>

      {expanded && (
        <div className="animate-slide-down">
          <div className="overflow-x-auto rounded-lg border border-[var(--color-border)] mb-2">
            <table className="evidence-table w-full text-left">
              <thead>
                <tr className="bg-[var(--color-bg-primary)]">
                  <th>Document</th>
                  <th>Section</th>
                  <th>Page</th>
                  <th>Chunk ID</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {evidence.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="max-w-[200px] truncate" title={row.document}>
                      {row.document}
                    </td>
                    <td className="max-w-[200px] truncate" title={row.section}>
                      {row.section}
                    </td>
                    <td>{row.page}</td>
                    <td className="font-mono text-[11px] text-[var(--color-text-muted)]">
                      {row.chunkId}
                    </td>
                    <td className="font-mono text-[11px]">{row.score.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
