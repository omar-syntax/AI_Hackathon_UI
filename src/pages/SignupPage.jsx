import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import AuthForm from "../components/AuthForm";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    const result = signup(name, email, password);
    if (result.success) navigate("/chat");
  };

  return (
    <AuthForm
      title="Create Account"
      subtitle="Start asking evidence-grounded questions"
      footerLink={{ path: "/login", label: "Log In" }}
      footerText="Already have an account?"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p className="text-[13px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 hero-anim" style={{ "--d": 0 }}>
            {error}
          </p>
        )}

        <div className="hero-anim" style={{ "--d": 100 }}>
          <label className="block text-[13px] font-medium text-[var(--color-text-secondary)] mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className="input-dark"
          />
        </div>

        <div className="hero-anim" style={{ "--d": 200 }}>
          <label className="block text-[13px] font-medium text-[var(--color-text-secondary)] mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="input-dark"
          />
        </div>

        <div className="hero-anim" style={{ "--d": 300 }}>
          <label className="block text-[13px] font-medium text-[var(--color-text-secondary)] mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="input-dark pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] cursor-pointer bg-transparent border-none"
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="hero-anim" style={{ "--d": 400 }}>
          <label className="block text-[13px] font-medium text-[var(--color-text-secondary)] mb-1.5">
            Confirm Password
          </label>
          <input
            type={showPw ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm your password"
            className="input-dark"
          />
        </div>

        <button
          type="submit"
          className="hero-anim btn-primary w-full justify-center !py-2.5"
          style={{ "--d": 500 }}
        >
          Sign Up
        </button>
      </form>
    </AuthForm>
  );
}
