import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative section-separator">
      <div className="hatch-gutter hatch-gutter-left" />
      <div className="hatch-gutter hatch-gutter-right" />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Epilepsies AI" className="h-5 w-auto" />
              <span className="text-[13px] font-semibold text-white">
                Epilepsies <span className="text-[var(--color-accent)]">AI</span>
              </span>
            </div>
            <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed max-w-[240px]">
              AI-Powered Care for Children, Young People &amp; Adults. Evidence-grounded answers from the NICE NG217 guideline.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[12px] font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/signup" className="text-[13px] text-[var(--color-text-muted)] hover:text-white transition-colors duration-150 no-underline">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-[13px] text-[var(--color-text-muted)] hover:text-white transition-colors duration-150 no-underline">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-[13px] text-[var(--color-text-muted)] hover:text-white transition-colors duration-150 no-underline">
                  Open Chat
                </Link>
              </li>
            </ul>
          </div>

          {/* Source */}
          <div>
            <h4 className="text-[12px] font-semibold text-white mb-4">Source</h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-[13px] text-[var(--color-text-muted)]">
                  NICE NG217 Guideline
                </span>
              </li>
              <li>
                <span className="text-[13px] text-[var(--color-text-muted)]">
                  161-page clinical guideline
                </span>
              </li>
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-[12px] font-semibold text-white mb-4">Technology</h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-[13px] text-[var(--color-text-muted)]">
                  Hybrid RAG Pipeline
                </span>
              </li>
              <li>
                <span className="text-[13px] text-[var(--color-text-muted)]">
                  Cross-Encoder Reranking
                </span>
              </li>
              <li>
                <span className="text-[13px] text-[var(--color-text-muted)]">
                  Citation Validation
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 full-bleed-border-top">
          <p className="text-[12px] text-[var(--color-text-muted)]">
            Epilepsies AI. Retrieval-augmented generation over clinical guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
}
