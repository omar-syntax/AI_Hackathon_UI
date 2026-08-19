import { Link } from "react-router-dom";
import {
  Search,
  CheckCircle,
  FileText,
  ShieldCheck,
  ArrowRight,
  Database,
  BarChart3,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedProgressRing from "../components/AnimatedProgressRing";
import useScrollReveal from "../hooks/useScrollReveal";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const features = [
  {
    icon: Search,
    title: "Hybrid Retrieval",
    desc: "Dense + BM25 retrieval with cross-encoder reranking for maximum evidence coverage.",
    stat: "100% candidate recall",
  },
  {
    icon: CheckCircle,
    title: "100% Grounded",
    desc: "Every answer is grounded in the retrieved context. The system refuses rather than invents.",
    stat: "44/44 grounded",
  },
  {
    icon: FileText,
    title: "Traceable Citations",
    desc: "Each claim links to the exact page, chunk, and source text in the NICE NG217 guideline.",
    stat: "130/130 validated",
  },
  {
    icon: ShieldCheck,
    title: "Appropriate Refusal",
    desc: "When the guideline lacks the answer, the system says so. It never hallucinates.",
    stat: "3/3 correct refusals",
  },
];

const pipelineSteps = [
  { num: "01", label: "Document Ingestion", desc: "NICE NG217 PDF (161 pages)" },
  { num: "02", label: "Chunking", desc: "800 / 100 characters" },
  { num: "03", label: "Embedding", desc: "all-MiniLM-L6-v2 (384-dim)" },
  { num: "04", label: "Hybrid Retrieval", desc: "Dense Top-20 + BM25 Top-20" },
  { num: "05", label: "Cross-Encoder Reranking", desc: "ms-marco-MiniLM-L-6-v2" },
  { num: "06", label: "Grounded Generation", desc: "DeepSeek v4 Flash, temp 0" },
  { num: "07", label: "Citation Mapping", desc: "Claim → chunk → page → text" },
  { num: "08", label: "Validation", desc: "Deterministic traceability" },
  { num: "09", label: "API", desc: "FastAPI POST /ask" },
];

const configCards = [
  { icon: Database, label: "800-char chunks", sub: "100 overlap" },
  { icon: Search, label: "MiniLM embeddings", sub: "384-dim vectors" },
  { icon: BarChart3, label: "Cross-encoder", sub: "ms-marco reranking" },
  { icon: Zap, label: "DeepSeek generation", sub: "temp 0, deterministic" },
];

const stats = [
  { value: 85, label: "P@1 Precision", sublabel: "Top-1 retrieval", decimals: 0 },
  { value: 87.9, label: "MRR", sublabel: "Mean Reciprocal Rank", decimals: 1 },
  { value: 100, label: "Grounded", sublabel: "All answers verified", decimals: 0 },
  { value: 90.9, label: "Complete", sublabel: "Key components covered", decimals: 1 },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export default function LandingPage() {
  const pipelineSection = useScrollReveal();
  const statsSection = useScrollReveal();

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-white">
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center justify-center pt-14">
        <div className="dot-pattern absolute inset-0 pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Ghost annotation */}
          <p className="ghost-label hero-anim mb-6" style={{ "--d": 50 }}>
            text-5xl tracking-tighter text-white text-balance
          </p>

          <h1
            className="hero-anim text-[36px] sm:text-[46px] md:text-[56px] lg:text-[68px] font-bold tracking-tighter leading-[1.05] mb-6 text-balance"
            style={{ "--d": 200 }}
          >
            Rapidly build evidence-grounded
            <br />
            answers for <span className="text-[var(--color-accent)]">epilepsy care</span>
          </h1>

          <p
            className="hero-anim text-[17px] md:text-[19px] font-medium text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed mb-10"
            style={{ "--d": 400 }}
          >
            An AI-powered question-answering system over the NICE NG217 guideline.
            Every answer traceable to the exact source text, never invented.
          </p>

          <div
            className="hero-anim flex items-center justify-center gap-4"
            style={{ "--d": 600 }}
          >
            <Link to="/signup" className="btn-primary">
              Get started
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <a href="#pipeline" className="btn-ghost">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ EDITORIAL GRID ═══════ */}
      <Section>
        <EditorialGridSection />
      </Section>

      {/* ═══════ STATS BAR ═══════ */}
      <Section>
        <StatsBar />
      </Section>

      {/* ═══════ WHY THIS MATTERS ═══════ */}
      <Section className="py-16 md:py-20">
        <WhySection />
      </Section>

      {/* ═══════ PRODUCT MOCKUP ═══════ */}
      <Section className="py-16 md:py-20">
        <ProductMockup />
      </Section>

      {/* ═══════ PIPELINE ═══════ */}
      <Section id="pipeline" className="py-16 md:py-20">
        <div
          ref={pipelineSection.ref}
          className="reveal"
          data-visible={pipelineSection.isVisible ? "true" : undefined}
        >
          <div className="max-w-5xl mx-auto px-6">
            <GhostHeading eyebrow="Architecture" title="The pipeline" />

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Code block */}
              <div className="lg:col-span-3 flex">
                <div className="code-block flex flex-col w-full">
                  <div className="code-block-header">
                    <div className="code-block-dot" />
                    <div className="code-block-dot" />
                    <div className="code-block-dot" />
                    <span className="ml-3 text-[11px] text-white/20 font-[var(--font-mono)]">pipeline.py</span>
                  </div>
                  <div className="code-block-body">
                    <div><span className="kw">def</span> <span className="fn">query</span><span className="op">(</span>question<span className="op">:</span> <span className="type">str</span><span className="op">)</span> <span className="op">-&gt;</span> <span className="type">Answer</span><span className="op">:</span></div>
                    <div className="pl-4">retrieved <span className="op">=</span> <span className="fn">retrieve_top_k</span><span className="op">(</span>question<span className="op">)</span></div>
                    <div className="pl-4"><span className="cm">// hybrid retrieval + cross-encoder → Top-10</span></div>
                    <div className="pl-4">answer <span className="op">=</span> <span className="fn">generate_answer</span><span className="op">(</span>question, retrieved<span className="op">)</span></div>
                    <div className="pl-4"><span className="cm">// grounded generation, temp 0</span></div>
                    <div className="pl-4">claims <span className="op">=</span> <span className="fn">build_citations</span><span className="op">(</span>answer, retrieved<span className="op">)</span></div>
                    <div className="pl-4"><span className="cm">// claim-level citation layer</span></div>
                    <div className="pl-4"><span className="fn">validate_citations</span><span className="op">(</span>claims<span className="op">)</span></div>
                    <div className="pl-4"><span className="cm">// deterministic traceability checks</span></div>
                    <div className="pl-4"><span className="kw">return</span> <span className="type">Answer</span><span className="op">(</span>claims, retrieved<span className="op">)</span></div>
                  </div>
                </div>
              </div>

              {/* Pipeline steps */}
              <div className="lg:col-span-2 space-y-0">
                {pipelineSteps.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-3 py-3 border-b border-white/[0.04] last:border-0"
                  >
                    <span className="text-[11px] font-bold text-[var(--color-accent)] font-[var(--font-mono)] mt-0.5 w-5 shrink-0">
                      {step.num}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-white">{step.label}</p>
                      <p className="text-[11px] text-[var(--color-text-muted)]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Config cards */}
            <div
              className="stagger grid grid-cols-2 md:grid-cols-4 gap-3 mt-8"
              data-visible={pipelineSection.isVisible ? "true" : undefined}
            >
              {configCards.map((c, i) => (
                <div key={c.label} className="card p-4 text-center" style={{ "--i": i }}>
                  <c.icon size={16} className="text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-[12px] font-semibold text-white">{c.label}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════ RESULTS ═══════ */}
      <Section className="py-16 md:py-20">
        <div
          ref={statsSection.ref}
          className="reveal"
          data-visible={statsSection.isVisible ? "true" : undefined}
        >
          <div className="max-w-5xl mx-auto px-6">
            <GhostHeading eyebrow="Performance" title="Proven results" />

            <p className="text-[14px] text-[var(--color-text-secondary)] max-w-lg mx-auto text-center mt-4 mb-14">
              Evaluated on a 20-question benchmark and a 27-question independent holdout dataset. LLM-as-a-Judge labeled.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {stats.map((s) => (
                <AnimatedProgressRing
                  key={s.label}
                  value={s.value}
                  label={s.label}
                  sublabel={s.sublabel}
                  decimals={s.decimals}
                />
              ))}
            </div>

            <p className="text-center text-[12px] text-[var(--color-text-muted)] mt-10">
              Retrieval metrics are LLM-judged evidence, not clinical validation.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════ CTA ═══════ */}
      <Section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="ghost-label mb-4">text-4xl tracking-tighter text-white</p>
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-tighter text-white mb-4 leading-tight">
            Ready to build?
          </h2>
          <p className="text-[16px] text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
            Start asking evidence-grounded questions about the NICE NG217 epilepsy guideline.
          </p>
          <Link to="/signup" className="btn-primary !px-8 !py-3 !text-[15px]">
            Sign up free
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════ */

function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`relative section-separator ${className}`}>
      <div className="hatch-gutter hatch-gutter-left" />
      <div className="hatch-gutter hatch-gutter-right" />
      {children}
    </section>
  );
}

function GhostHeading({ eyebrow, title }) {
  return (
    <div className="text-center">
      {eyebrow && <p className="ghost-label mb-3">{eyebrow.toLowerCase()}</p>}
      <h2 className="text-[32px] md:text-[40px] font-bold tracking-tighter text-white leading-tight">
        {title}
      </h2>
    </div>
  );
}

function StatsBar() {
  const { ref, isVisible } = useScrollReveal();
  const barStats = [
    { value: "85%", label: "P@1 Precision" },
    { value: "87.9%", label: "MRR" },
    { value: "100%", label: "Grounded" },
    { value: "130", label: "Citations Validated" },
  ];

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "data-visible" : ""}`}
      data-visible={isVisible ? "true" : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {barStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[28px] md:text-[36px] font-bold tracking-tight text-white">
                {s.value}
              </p>
              <p className="text-[13px] text-[var(--color-text-muted)] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "data-visible" : ""}`}
      data-visible={isVisible ? "true" : undefined}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <GhostHeading eyebrow="Problem" title="Why this matters" />
        <p className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-relaxed mt-6">
          Answering questions about clinical guidelines is{" "}
          <strong className="text-white">high-stakes</strong>.
          A plausible-sounding wrong answer is{" "}
          <strong className="text-white">worse than no answer</strong>.
          Healthcare professionals need responses that are{" "}
          <strong className="text-white">grounded in evidence and auditable</strong>,
          not a free-form chatbot that might hallucinate.
        </p>
      </div>
    </div>
  );
}

function ProductMockup() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal-scale ${isVisible ? "data-visible" : ""}`}
      data-visible={isVisible ? "true" : undefined}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="mockup-browser">
          <div className="mockup-chrome">
            <div className="mockup-dot" />
            <div className="mockup-dot" />
            <div className="mockup-dot" />
            <div className="mockup-url">epilepsies-ai.com/chat</div>
          </div>
          <div className="p-6 space-y-4 min-h-[320px]">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/20 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[75%]">
                <p className="text-[13px] text-white/90">Which medicine is offered as first-line treatment for absence seizures?</p>
              </div>
            </div>

            {/* Bot message */}
            <div className="flex justify-start">
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p className="text-[13px] text-white/80 leading-relaxed mb-3">
                  According to the NICE NG217 guideline, <strong className="text-white">ethosuximide</strong> is recommended as first-line treatment for absence seizures in children and young people.
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-[var(--color-text-muted)]">
                    Citation: NG217, Section 1.4, Page 24. Source text verified
                  </span>
                </div>
              </div>
            </div>

            {/* Another user message */}
            <div className="flex justify-end">
              <div className="bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/20 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[75%]">
                <p className="text-[13px] text-white/90">What about if the child also has tonic-clonic seizures?</p>
              </div>
            </div>

            {/* Typing indicator */}
            <div className="flex justify-start">
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorialGridSection() {
  const gridItems = [
    ...features.map((f) => ({ icon: f.icon, title: f.title, desc: f.desc, stat: f.stat })),
    ...configCards.map((c) => ({ icon: c.icon, title: c.label, desc: c.sub, stat: null })),
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-9 lg:px-[36px]">
      {/* ── Intro block ── */}
      <div className="py-16 md:py-20 lg:py-[72px]">
        <p className="ghost-label mb-4">system overview</p>

        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-tighter text-white leading-[1.05] mb-6 md:mb-7 max-w-2xl">
          The complete evidence pipeline, from guideline to answer
        </h2>

        <p className="text-[15px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.5] max-w-[540px] mb-7 md:mb-8">
          Every component is designed for one purpose: producing answers that are
          fully grounded in the NICE NG217 guideline, with traceable citations
          to the exact source text.
        </p>

        <Link to="/signup" className="btn-primary">
          Get started
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>

      {/* ── 4x2 Grid ── */}
      <div className="editorial-grid">
        {gridItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center text-center px-6 py-10 md:py-12 lg:py-14"
          >
            <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
              <item.icon size={18} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-[14px] font-semibold text-white mb-1.5">
              {item.title}
            </h3>
            <p className="text-[12px] text-[var(--color-text-secondary)] leading-relaxed max-w-[200px]">
              {item.desc}
            </p>
            {item.stat && (
              <span className="inline-block mt-3 px-2 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[11px] font-semibold">
                {item.stat}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
