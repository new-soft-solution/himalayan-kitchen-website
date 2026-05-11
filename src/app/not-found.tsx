import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-[100px] md:py-[150px]">
      <div className="section-container text-center">
        <h1 className="font-jakarta font-bold text-[80px] md:text-[120px] text-primary mb-4">
          404
        </h1>
        <h2 className="font-jakarta font-semibold text-[24px] md:text-[32px] text-white mb-4">
          Page Not Found
        </h2>
        <p className="font-manrope text-[15px] text-white/60 max-w-[400px] mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-primary rounded-md font-jost font-semibold text-white px-7 py-3 text-[16px] hover:bg-primary-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
