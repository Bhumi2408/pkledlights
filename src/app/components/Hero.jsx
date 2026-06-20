import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section className="relative min-h-[1100px] overflow-hidden bg-linear-to-b from-black to-[#191511] lg:min-h-screen">
      {/* Background Product Image */}
      <div
        className="absolute inset-0 z-[1] bg-no-repeat
             bg-[length:480px] sm:bg-[length:600px]
             md:bg-[length:800px] lg:bg-[length:950px]
            bg-[center_bottom]"
        style={{
          backgroundImage: "url('/images/spot-light.png')",
        }}
      />
      

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* White Glow */}
      <div className="absolute left-1/2 bottom-[120px] z-[2] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-[180px]" />

      {/* Warm Glow */}
      <div className="absolute left-1/2 bottom-[50px] z-[2] h-[280px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]" />

      <div className="absolute inset-y-0 right-0 z-[2] hidden w-[500px] bg-gradient-to-l from-black via-black/90 via-40% to-transparent lg:block" />

      <div className="absolute inset-y-0 right-0 z-[2] hidden w-[500px] bg-gradient-to-l from-black via-black/90 to-transparent lg:block" />

      {/* Divider */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

      <div className="relative z-10 px-5 md:px-10 lg:px-20">
        {/* TOP CONTENT */}
        <div className="grid gap-12 pt-[140px] lg:grid-cols-2 lg:pt-[180px]">
          {/* LEFT */}
          <div>
            <p className="mb-8 text-sm lg:text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              \ WELCOME TO \
            </p>

            <h1 className="max-w-[700px] text-[42px] font-semibold leading-[1] text-white sm:text-[55px] lg:text-[65px]">
             SCOOT - 
              <br />
              PK LED LIGHT
            </h1>

            <Link
              href="#contact"
              className="mt-10 inline-flex h-12 w-[160px] items-center justify-center bg-primary text-sm font-semibold text-white lg:mt-12 lg:h-14 lg:w-[170px]"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex justify-start lg:justify-end">
            <div className="max-w-[380px] text-left lg:text-center">
              <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-primary">
                NEW ARRIVAL
              </p>

              <h3 className="text-[30px] font-semibold leading-tight text-white lg:text-[40px]">
                "Premium LED"
                <br />
                Spot Light
              </h3>

              <button className="mt-5 text-primary">
                <ArrowRight size={40} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* SPACER FOR CENTER PRODUCT */}
        <div className="h-[100px] lg:h-[180px]" />

        {/* BOTTOM CONTENT */}
        <div className="grid gap-12 pb-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-[430px]">
            <p className=" leading-relaxed text-white/90">
              Delhi's Trusted LED Light Manufacturer
            </p>

            <Link href="#contact">
              <p className="mt-6 font-semibold text-primary">
                Send a request now!
              </p>
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-white">
              <a
                href="https://www.facebook.com/people/P-K-Lighting/61577281115809/"
                target="_blank"
                className="flex items-center justify-center text-white transition hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 " />
              </a>

              <a
                href="https://www.instagram.com/office.pklighting/"
                target="_blank"
                className="flex items-center justify-center text-white transition hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 " />
              </a>

              <a
                href="https://www.youtube.com/@pklighting78"
                target="_blank"
                className="flex items-center justify-center text-white transition hover:scale-110"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5 " />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="max-w-[400px] text-left lg:ml-auto lg:text-right">
            <div className="mb-5 flex justify-start lg:justify-end">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl">💡</span>
              </div>
            </div>

            <p className=" leading-relaxed text-white/90">
             With 8+ years of manufacturing experience and 50+ product types, 
              <span className="font-semibold text-white"> SCOOT (PK Led Light) </span>
               is a trusted name for LED lighting across India.
            </p>

            <Link
              href="#about"
              className="mt-5 inline-block text-xs font-bold tracking-[0.25em] text-white underline underline-offset-4"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
