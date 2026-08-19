import { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import useCountUp from "../hooks/useCountUp";

export default function AnimatedProgressRing({
  value = 0,
  size = 150,
  strokeWidth = 7,
  color = "var(--color-accent)",
  label = "",
  sublabel = "",
  decimals = 0,
  suffix = "%",
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const { value: animatedValue, start } = useCountUp(value, 1400);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedValue / 100) * circumference;

  useEffect(() => {
    if (isVisible) start();
  }, [isVisible, start]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? offset : circumference}
            style={{
              transition: "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="font-bold leading-none text-white"
            style={{ fontSize: size * 0.22 }}
          >
            {animatedValue.toFixed(decimals)}{suffix}
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[14px] font-semibold text-white">
          {label}
        </p>
        {sublabel && (
          <p className="text-[12px] text-[var(--color-text-muted)]">{sublabel}</p>
        )}
      </div>
    </div>
  );
}
