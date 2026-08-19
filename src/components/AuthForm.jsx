import { Link } from "react-router-dom";

export default function AuthForm({ title, subtitle, children, footerLink, footerText }) {
  return (
    <div className="auth-split min-h-screen flex pt-14">
      {/* Left: dark info panel */}
      <div className="hidden lg:flex lg:w-[50%] relative items-center justify-center dot-pattern">
        <div className="relative z-10 text-center px-12 max-w-md hero-anim" style={{ "--d": 200 }}>
          <img src="/logo.png" alt="Logo" className="w-24 h-auto mx-auto mb-6 animate-float" />
          <h2 className="text-[28px] font-bold text-white tracking-tight mb-3">
            Epilepsies AI
          </h2>
          <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
            Evidence-grounded answers from the NICE NG217 epilepsy guideline.
            Every claim traceable to its source.
          </p>
        </div>
      </div>

      {/* Right: form */}
      <div className="w-full lg:w-[50%] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[360px]">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8 hero-anim" style={{ "--d": 100 }}>
            <Link to="/" className="inline-flex items-center gap-2 mb-4 no-underline">
              <img src="/logo.png" alt="Epilepsies AI" className="h-10 w-auto animate-float" />
              <span className="text-[14px] font-semibold text-white tracking-tight">
                Epilepsies <span className="text-[var(--color-accent)]">AI</span>
              </span>
            </Link>
          </div>

          <div className="hero-anim" style={{ "--d": 300 }}>
            <h1 className="text-[24px] font-bold text-white tracking-tight mb-1">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[14px] text-[var(--color-text-muted)] mb-8">
                {subtitle}
              </p>
            )}
          </div>

          <div className="hero-anim" style={{ "--d": 450 }}>
            {children}
          </div>

          {footerLink && (
            <p className="hero-anim text-center text-[13px] text-[var(--color-text-muted)] mt-6" style={{ "--d": 600 }}>
              {footerText}{" "}
              <Link to={footerLink.path} className="font-semibold text-[var(--color-accent)] hover:underline no-underline">
                {footerLink.label}
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
