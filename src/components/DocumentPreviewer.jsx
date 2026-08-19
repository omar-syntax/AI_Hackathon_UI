import { useState, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfjsWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorkerUrl;

export default function DocumentPreviewer({ isOpen, fileName, fileUrl, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.2);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setScale(1.2);
      setNumPages(null);
      setLoading(true);
      setError(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

  const onDocumentLoadError = useCallback((err) => {
    setError(err.message || "Failed to load PDF");
    setLoading(false);
  }, []);

  const zoomIn = () => setScale((s) => Math.min(3, s + 0.2));
  const zoomOut = () => setScale((s) => Math.max(0.4, s - 0.2));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col animate-fade-in">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-[var(--color-border)] shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm">📄</span>
            </div>
            <span className="text-[15px] font-medium text-[var(--color-text-primary)] truncate">
              {fileName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={zoomOut}
              className="p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors text-[var(--color-text-secondary)]"
              aria-label="Zoom out"
            >
              <ZoomOut size={18} />
            </button>
            <span className="text-[13px] text-[var(--color-text-secondary)] w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors text-[var(--color-text-secondary)]"
              aria-label="Zoom in"
            >
              <ZoomIn size={18} />
            </button>

            <div className="w-px h-6 bg-[var(--color-border)] mx-2" />

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body — continuous scrollable document */}
        <div className="flex-1 overflow-auto bg-gray-800 py-6 relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="flex items-center gap-3 text-white">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="text-[15px]">Loading PDF...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center py-20 text-white">
              <X size={40} className="text-red-400 mb-3" />
              <p className="text-[15px] font-medium">Failed to load document</p>
              <p className="text-[13px] text-gray-400 mt-1">{error}</p>
            </div>
          )}

          {!error && fileUrl && (
            <Document
              file={fileUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
            >
              {numPages &&
                Array.from({ length: numPages }, (_, i) => (
                  <div key={i} className="flex justify-center mb-4">
                    <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
                      <Page
                        pageNumber={i + 1}
                        scale={scale}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    </div>
                  </div>
                ))}
            </Document>
          )}
        </div>
      </div>
    </div>
  );
}
