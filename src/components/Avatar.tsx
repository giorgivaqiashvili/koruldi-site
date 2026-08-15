const palette = [
  { from: "#0e7490", to: "#06b6d4" },
  { from: "#0f172a", to: "#334155" },
  { from: "#0891b2", to: "#0f172a" },
  { from: "#155e75", to: "#22d3ee" },
  { from: "#1e293b", to: "#0e7490" },
];

function initialsFrom(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function hashIndex(name: string, mod: number) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return hash % mod;
}

export default function Avatar({ name, size = 80 }: { name: string; size?: number }) {
  const { from, to } = palette[hashIndex(name, palette.length)];
  const gradientId = `avatar-gradient-${initialsFrom(name)}-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      role="img"
      aria-label={`${name} avatar`}
      className="mx-auto"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="40" fill={`url(#${gradientId})`} />
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="28"
        fontWeight="600"
        fontFamily="var(--font-geist-sans), sans-serif"
      >
        {initialsFrom(name)}
      </text>
    </svg>
  );
}
