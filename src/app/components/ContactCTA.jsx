import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-tl from-black to-[#13151B] py-32 px-32">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_left,#d78c4320,transparent_45%)]" />

      <div className="container-custom relative z-10">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              \ CONTACT US \
            </p>

            <h2 className="max-w-[700px] text-[62px] font-semibold leading-[0.95] text-white">
              Ready to Transform
              <br />
              Your Space With Us?
            </h2>

            <p className="mt-7 max-w-[650px] text-[19px] font-medium leading-relaxed text-white/90">
              Get a full-scale analysis of your project and recommended
              solutions.
            </p>

            <p className="mt-7 text-white/80">
              Call us{" "}
              <a
                href="tel:+12345678900"
                className="font-semibold text-primary underline underline-offset-4"
              >
                +1 (234) 567 89 00
              </a>{" "}
              or write us{" "}
              <a
                href="mailto:info@scootlighting.com"
                className="font-semibold text-primary underline underline-offset-4"
              >
                info@scootlighting.com
              </a>
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex h-10 items-center justify-center bg-primary px-7 text-base font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end">

            {/* Light Glow */}
            <div className="absolute bottom-20 left-1/2 h-[250px] w-[400px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />

            <img
              src="/images/cta.png"
              alt="Pendant Light"
              className="relative z-10 w-full max-w-[850px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
}