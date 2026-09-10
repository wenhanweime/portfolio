import type { CSSProperties } from "react";
import "./AnimatedMark.css";

type Props = {
  size?: number;
  className?: string;
  label?: string;
};

/** Port of logoanime (Jan 2026): navy circle, white gear bars, gearRotate + slide. */
export default function AnimatedMark({
  size = 64,
  className = "",
  label = "Peter mark",
}: Props) {
  const bars = [0.42, 0.68, 1, 0.55, 0.82, 0.48, 0.72];

  return (
    <div
      className={`animated-mark ${className}`.trim()}
      style={{ width: size, height: size }}
      role="img"
      aria-label={label}
    >
      <div className="animated-mark__disc">
        <div className="animated-mark__gear">
          {bars.map((h, i) => (
            <span
              key={i}
              className="animated-mark__bar"
              style={
                {
                  "--bar-h": h,
                  "--bar-i": i,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
