import Link from "next/link";

interface FindATableCTAProps {
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function FindATableCTA({
  text = "Reserve a Table",
  className = "",
  size = "md",
}: FindATableCTAProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-[14px]",
    md: "px-7 py-3 text-[16px]",
    lg: "px-10 py-4 text-[18px]",
  };

  return (
    <Link
      href="/reservation"
      className={`btn inline-flex items-center justify-center gap-2 bg-primary rounded-md font-jost font-semibold text-white hover:bg-primary-dark transition-colors ${sizeClasses[size]} ${className}`}
    >
      <span className="btn__inner">{text}</span>
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.23096 5.78125L1.66846 10.4062C1.51221 10.5625 1.26221 10.5625 1.13721 10.4062L0.512207 9.78125C0.355957 9.625 0.355957 9.40625 0.512207 9.25L4.19971 5.5L0.512207 1.78125C0.355957 1.625 0.355957 1.375 0.512207 1.25L1.13721 0.625C1.26221 0.46875 1.51221 0.46875 1.66846 0.625L6.23096 5.25C6.38721 5.40625 6.38721 5.625 6.23096 5.78125Z"
          fill="white"
        />
      </svg>
    </Link>
  );
}
