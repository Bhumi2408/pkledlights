import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-tl from-black to-[#13151B] py-32 px-5 md:px-10 lg:px-32" id="contact">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_left,#d78c4320,transparent_45%)]" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-8 text-sm lg:text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              \ CONTACT US \
            </p>

            <h2 className="max-w-[700px] text-4xl md:text-[58px] font-semibold leading-[0.95] text-white">
               Looking for a Reliable 

              <br />
              LED Light Manufacturer in Delhi?
            </h2>

            <p className="mt-7 max-w-[650px] text-[19px] font-medium leading-relaxed text-white/90">
              Get in touch with SCOOT (PK Led Light) for bulk orders, custom LED lighting solutions, and competitive wholesale pricing.
            </p>

            <p className="mt-7 text-white/80">
              Call us{" "}
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

          {/* RIGHT IMAGE */}
          {/* RIGHT FORM */}
          <div className="relative">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Request a Consultation
              </h3>

              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 w-full rounded-xl border border-white/10 bg-black/40 px-5 text-white outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 w-full rounded-xl border border-white/10 bg-black/40 px-5 text-white outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-14 w-full rounded-xl border border-white/10 bg-black/40 px-5 text-white outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <textarea
                    rows="5"
                    placeholder="Message..."
                    className="w-full rounded-xl border border-white/10 bg-black/40 p-5 text-white outline-none transition focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="h-14 w-full rounded-xl bg-primary font-semibold text-white transition hover:opacity-90"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
