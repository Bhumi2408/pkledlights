import Link from "next/link";
import {
  ArrowRight
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-black to-[#191511]">
      {/* Background Product Image */}
      <div
        className="absolute inset-0 z-1 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/spot-light.png')",
          backgroundPosition: "center bottom",
          backgroundSize: "950px",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* White Glow */}
      <div className="absolute left-1/2 bottom-[120px] z-[2] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-[180px]" />

      {/* Warm Glow */}
      <div className="absolute left-1/2 bottom-[50px] z-[2] h-[280px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]" />

      <div className="absolute inset-y-0 right-0 w-[500px] bg-gradient-to-l from-black via-black/90 via-40% to-transparent z-[2]" />

      <div className="absolute inset-y-0 right-0 z-[2] w-[500px] bg-gradient-to-l from-black via-black/90 to-transparent" />

      {/* Divider */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

      <div className="relative z-10 px-8 lg:px-20">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-2 pt-[180px]">
          {/* LEFT */}
          <div>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              \ WELCOME TO \
            </p>

            <h1 className="max-w-[700px] text-[65px] font-semibold leading-[0.95] text-white">
              Scoot Lighting
              <br />
              Studio in NY
            </h1>

            <Link
              href="#collections"
              className="mt-12 inline-flex h-14 w-[170px] items-center justify-center bg-primary text-sm font-semibold text-white"
            >
              Collections
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end">
            <div className="max-w-[380px] text-center">
              <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-primary">
                NEW ARRIVAL
              </p>

              <h3 className="text-[40px] font-semibold leading-tight text-white">
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
        <div className="h-[180px]" />

        {/* BOTTOM CONTENT */}
        <div className="grid grid-cols-2 pb-10">
          {/* LEFT */}
          <div className="max-w-[430px]">
            <p className=" leading-relaxed text-white/90">
              Enhance your home or office with effective and stylish
              <span className="font-semibold text-white"> lighting </span>
              by Scoot Studio.
            </p>

            <Link href="#contact">
              <p className="mt-6 font-semibold text-primary">
                Send a request now!
              </p>
            </Link>

            <div className="flex items-center gap-6 text-white mt-7">
              <FontAwesomeIcon
                icon={faYoutube}
                className="w-5 h-5 hover:text-primary transition"
              />

              <FontAwesomeIcon
                icon={faFacebookF}
                className="w-5 h-5 hover:text-primary transition"
              />

              <FontAwesomeIcon
                icon={faInstagram}
                className="w-5 h-5 hover:text-primary transition"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="ml-auto max-w-[400px] text-right">
            <div className="mb-5 flex justify-end">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl">💡</span>
              </div>
            </div>

            <p className=" leading-relaxed text-white/90">
              We have more than
              <span className="font-semibold text-white"> 10 years </span>
              of experience improving clients' projects with lighting solutions.
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
