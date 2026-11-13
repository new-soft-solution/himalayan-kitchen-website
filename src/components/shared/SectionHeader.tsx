interface SectionHeaderProps { subtitle: string; title: string; centered?: boolean; light?: boolean }

export default function SectionHeader({ subtitle, title, centered = true }: SectionHeaderProps) {
  return <div className={`section-heading ${centered ? "centered" : ""}`}>
    <p className="template-subtitle"><svg width="13" height="30" viewBox="0 0 13 30" fill="none" aria-hidden="true"><path d="M9 29 8 17c3-1 5-2 5-4L12 1h-1l-1 10H8L7 1H6L5 11H3L2 1H1L0 13c0 2 2 4 5 4L4 29c0 2 5 2 5 0Z" fill="currentColor" /></svg>{subtitle}</p>
    <h2>{title}</h2>
  </div>;
}
