import Link from "next/link";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-black pt-28 pb-10 px-5 md:px-10 lg:px-40">

      <div>

        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr_1fr]">

          {/* Logo */}
          <div>

            <img
              src="/images/logo.png"
              alt="Led light manufacturer in Delhi"
              className="w-[220px] bg-white/70 py-1 rounded-xl"
            />

            <p className="mt-8 max-w-[420px] leading-relaxed text-white/70">
              SCOOT (PK Led Light), established in 2017, is a trusted LED light manufacturer in Delhi, supplying panel lights, street lights, flood lights, COB lights, and more across India.
            </p>

            <div className="mt-7 flex gap-4">

              <a
                href="https://www.facebook.com/people/P-K-Lighting/61577281115809/" target="_blank"
                className="flex h-8 w-8 items-center justify-center bg-primary text-black transition hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 "/>
              </a>

              <a
                href="https://www.instagram.com/office.pklighting/" target="_blank"
                className="flex h-8 w-8 items-center justify-center bg-primary text-black transition hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 "/>
              </a>

              <a
                href="https://www.youtube.com/@pklighting78" target="_blank"
                className="flex h-8 w-8 items-center justify-center bg-primary text-black transition hover:scale-110"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5 "/>
              </a>

            </div>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-xs font-semibold tracking-[0.25em] text-white uppercase">
              Navigation
            </h3>

            <div className="mt-4 h-[2px] w-12 bg-primary" />

            <ul className="mt-5 space-y-3">

              <li>
                <Link href="#about" className="text-[15px] text-white/80 hover:text-primary">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#features" className="text-[15px] text-white/80 hover:text-primary">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#services" className="text-[15px] text-white/80 hover:text-primary">
                  Services
                </Link>
              </li>

               <li>
                <Link href="#collections" className="text-[15px] text-white/80 hover:text-primary">
                  Collections
                </Link>
              </li>

              <li>
                <Link href="/blogs" className="text-[15px] text-white/80 hover:text-primary">
                  Blogs
                </Link>
              </li>

              <li>
                <Link href="#faq" className="text-[15px] text-white/80 hover:text-primary">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="#" className="text-[15px] text-white/80 hover:text-primary">
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* Contact Card */}
          <div>

            <div className="rounded-tr-[120px] bg-[#111111] p-10">

              <div className="flex gap-4">

                <MapPin
                  size={22}
                  className="mt-1 shrink-0 text-primary"
                />

                <p className="text-[15px] leading-relaxed text-white/80">
                 M-34, Sector-1, Bawana, 
                  <br />
                  Delhi, India, 110039
                </p>

              </div>

              <div className="mt-5 flex gap-4">

                <Mail
                  size={22}
                  className="mt-1 shrink-0 text-primary"
                />

                <a
                  href="mailto:office.pklighting@gmail.com"
                  className="text-[15px] text-white/80"
                >
                  office.pklighting@gmail.com
                </a>

              </div>

              <div className="mt-5 flex gap-4">

                <Phone
                  size={22}
                  className="mt-1 shrink-0 text-primary"
                />

                <a
                  href="tel:+919212533254"
                  className="text-[15px] text-white/80"
                >
                  +91 92125 33254
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/20 pt-7">

          <div className="flex flex-col items-center justify-between gap-4 text-white/60 md:flex-row">

            <p className="text-xs">
              © {new Date().getFullYear()} PK Led Lights. All rights reserved | Powered By <Link className="text-primary" href="https://www.cybertricksmedia.com/" target="_blank">Bharat Bizmart</Link>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}