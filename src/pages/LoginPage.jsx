import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    const result = login(email, password);
    if (result.success) navigate("/chat");
  };

  return (
    <AuthForm
      title="Welcome Back"
      subtitle="Log in to Epilepsies AI"
      footerLink={{ path: "/signup", label: "Sign Up" }}
      footerText="Don't have an account?"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p className="text-[13px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 hero-anim" style={{ "--d": 0 }}>
            {error}
          </p>
        )}

        <div className="hero-anim" style={{ "--d": 100 }}>
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

        <div className="hero-anim" style={{ "--d": 200 }}>
          <label className="block text-[13px] font-medium text-[var(--color-text-secondary)] mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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

        <button
          type="submit"
          className="hero-anim btn-primary w-full justify-center !py-2.5"
          style={{ "--d": 300 }}
        >
          Log In
        </button>
      </form>
    </AuthForm>
  );
}
