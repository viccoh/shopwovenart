// A small SVG built from concentric squares, echoing the granny-square
// construction of the products themselves. Used as a wordmark companion
// and as a quiet decorative motif — not a generic gradient blob.
export default function GrannySquareMark({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="38" height="38" rx="2" stroke="#C24B23" strokeWidth="2" />
      <rect x="7" y="7" width="26" height="26" rx="2" stroke="#E4A93B" strokeWidth="2" />
      <rect x="13" y="13" width="14" height="14" rx="1" stroke="#3E9B93" strokeWidth="2" />
      <rect x="17" y="17" width="6" height="6" rx="1" fill="#2C2560" />
    </svg>
  );
}
