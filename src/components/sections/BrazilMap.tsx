// Stylized abstract Brazil silhouette — outline only, integrated with section bg.
export function BrazilMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 440"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mapGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.65 0.18 255)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="oklch(0.32 0.18 258)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Approximated Brazil shape */}
      <path
        d="M150 30 C 200 20, 260 35, 285 70 C 310 95, 330 110, 345 145
           C 360 180, 365 215, 350 250 C 340 285, 320 315, 290 350
           C 260 385, 220 410, 180 415 C 140 418, 105 405, 80 375
           C 55 345, 40 305, 45 265 C 50 225, 70 195, 75 160
           C 80 125, 95 90, 120 60 C 130 45, 140 35, 150 30 Z"
        fill="url(#mapGlow)"
        stroke="oklch(0.65 0.18 255)"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
      {/* Soft internal divisions */}
      <g stroke="oklch(0.85 0.05 255)" strokeWidth="0.6" strokeOpacity="0.18" fill="none">
        <path d="M130 90 Q 200 110 280 100" />
        <path d="M90 170 Q 200 180 340 175" />
        <path d="M70 240 Q 200 250 350 240" />
        <path d="M85 310 Q 200 325 320 320" />
        <path d="M170 60 L 180 410" />
        <path d="M240 70 L 235 400" />
      </g>
      {/* Highlighted state markers */}
      {[
        [200, 180],
        [240, 240],
        [180, 300],
        [260, 130],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="10" fill="oklch(0.65 0.18 255)" opacity="0.2">
            <animate attributeName="r" values="6;14;6" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          </circle>
          <circle cx={cx} cy={cy} r="3.5" fill="oklch(0.78 0.15 80)" />
        </g>
      ))}
    </svg>
  );
}
