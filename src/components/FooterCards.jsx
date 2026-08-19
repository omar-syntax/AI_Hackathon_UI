import { AlertTriangle, XCircle } from "lucide-react";

export default function FooterCards({ suggestedAction, error }) {
  if (!suggestedAction && !error) return null;

  return (
    <div className="flex gap-3 mt-3">
      {suggestedAction && (
        <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50 p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <AlertTriangle size={14} className="text-amber-600" />
            <span className="text-[13px] font-semibold text-amber-800">
              Suggested next action
            </span>
          </div>
          <p className="text-[13px] text-amber-700 leading-relaxed">
            {suggestedAction}
          </p>
        </div>
      )}
      {error && (
        <div className="flex-1 rounded-lg border border-red-200 bg-red-50 p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <XCircle size={14} className="text-red-600" />
            <span className="text-[13px] font-semibold text-red-800">
              Error state
            </span>
          </div>
          <p className="text-[13px] text-red-700 leading-relaxed">{error}</p>
        </div>
      )}
    </div>
  );
}
