import Link from "next/link";

export const metadata = {
  title: "Thank You | SCOOT (PK Led Light)",
  description: "Thank you for contacting SCOOT (PK Led Light) — Delhi's leading LED light manufacturer.",
};

export default function ThankYouPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-tl from-black to-[#13151B] px-5 py-32 md:px-10">
      {/* Background Glow - same as ContactCTA */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_left,#d78c4320,transparent_45%)]" />

      {/* Faint background text like AboutSection */}
      <div className="pointer-events-none absolute -left-10 bottom-0 select-none">
        <h2 className="text-[120px] font-bold leading-none text-white/[0.06] [writing-mode:vertical-rl] rotate-180 md:text-[180px] xl:text-[230px]">
          THANKS
        </h2>
      </div>

      <div className="container-custom relative z-10 mx-auto max-w-[650px] text-center">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.1em] text-primary lg:text-xs">
          \ THANK YOU \
        </p>

        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <svg
            className="h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-semibold leading-[1.05] text-white md:text-[52px]">
          Your Inquiry Has Been
          <br />
          Received!
        </h1>

        <p className="mt-7 text-[19px] font-medium leading-relaxed text-white/80">
          Thank you for reaching out to SCOOT (PK Led Light). Our team will review your request and get back to you within 24 hours.
        </p>

        <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">
          <p className="text-white/80">
            Need urgent help? Call us{" "}
            <a
              href="tel:+919212533254"
              className="font-semibold text-primary underline underline-offset-4"
            >
              +91 92125 33254
            </a>{" "}
            or write us{" "}
            <a
              href="mailto:office.pklighting@gmail.com"
              className="font-semibold text-primary underline underline-offset-4"
            >
              office.pklighting@gmail.com
            </a>
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 font-semibold text-white transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}