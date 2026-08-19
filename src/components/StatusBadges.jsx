export default function StatusBadges({ status, evidenceQuality }) {
  const qualityColor = {
    High: "bg-green-100 text-green-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-red-100 text-red-700",
  };

  return (
    <div className="flex items-center gap-2 mb-3">
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
          status === "Answered"
            ? "bg-[var(--color-accent-light)] text-[var(--color-accent)]"
            : "bg-red-100 text-red-700"
        }`}
      >
        Status: {status}
      </span>
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
          qualityColor[evidenceQuality] || "bg-gray-100 text-gray-600"
        }`}
      >
        Evidence quality: {evidenceQuality}
      </span>
    </div>
  );
}
