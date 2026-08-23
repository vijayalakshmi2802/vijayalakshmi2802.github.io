// Recurring signature motif: a node-and-path diagram evoking the cloud
// architecture / network diagrams the trainer actually teaches (VPC, subnets,
// routing). Used sparingly as background texture and section dividers.
export default function NetworkMotif({ className = "", variant = "hero", style }) {
  if (variant === "divider") {
    return (
      <svg
        className={className}
        style={style}
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 20 H420" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="420" cy="20" r="4" fill="currentColor" fillOpacity="0.5" />
        <path d="M420 20 L470 6 H730" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="730" cy="6" r="3" fill="currentColor" fillOpacity="0.4" />
        <path d="M420 20 L470 34 H780" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="780" cy="34" r="3" fill="currentColor" fillOpacity="0.4" />
        <path d="M780 34 H1200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
      </svg>
    );
  }

  // hero variant
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="var(--gold-400)" strokeOpacity="0.55" strokeWidth="1.2">
        <path d="M110 480 L250 380 L250 220 L400 140" />
        <path d="M250 380 L420 420 L560 340" />
        <path d="M250 220 L120 160" />
        <path d="M400 140 L520 90" />
        <path d="M400 140 L470 240 L560 340" />
        <path d="M470 240 L400 340" strokeDasharray="3 5" />
      </g>
      <g stroke="rgba(255,255,255,0.18)" strokeWidth="1">
        <path d="M60 560 L110 480" />
        <path d="M560 340 L600 430" />
      </g>
      {[
        [110, 480, 5],
        [250, 380, 7],
        [250, 220, 5],
        [400, 140, 8],
        [420, 420, 5],
        [560, 340, 6],
        [120, 160, 4],
        [520, 90, 5],
        [470, 240, 4],
        [400, 340, 3],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="var(--gold-400)" fillOpacity={i % 3 === 0 ? 0.9 : 0.5} />
      ))}
    </svg>
  );
}
