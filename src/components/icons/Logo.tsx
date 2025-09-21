export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="20" fill="#ff6b35"/>
      <path
        d="M25 30h50v10H35v10h30v10H35v10h40v10H25V30z"
        fill="white"
      />
      <path
        d="M60 45l15 15-15 15v-10H50v-10h10V45z"
        fill="white"
      />
    </svg>
  );
}