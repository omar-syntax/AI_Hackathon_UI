import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-14 bg-[var(--color-bg-primary)]/95 border-b border-white/[0.08]">
      <div className="h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img src="/logo.png" alt="Epilepsies AI" className="h-6 w-auto" />
          <span className="text-[14px] font-semibold tracking-tight text-white">
            Epilepsies <span className="text-[var(--color-accent)]">AI</span>
          </span>
        </Link>

        <div className="flex items-center gap-5">
          {isAuthenticated ? (
            <>
              <Link
                to="/chat"
                className="text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors duration-150 no-underline"
              >
                Chat
              </Link>
              <span className="text-[12px] text-[var(--color-text-muted)] hidden sm:block">
                {user?.name}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-muted)] hover:text-white transition-colors duration-150 cursor-pointer bg-transparent border-none"
              >
                <LogOut size={14} />
                <span className="hidden sm:block">Log Out</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors duration-150 no-underline"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="btn-primary !py-1.5 !px-4 !text-[13px]"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
