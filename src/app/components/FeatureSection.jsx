import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function FeatureSection() {
  const features = [
    "We listen to our clients",
    "We factor in the architect's intent",
    "We take your budget into account",
    "We are attentive to details",
    "We design lighting to be seen by everyone",
  ];
  const projects = [
    {
      image: "/images/project-1.png",
      title: "Hospitality Projects",
      description:
        "Premium lighting solutions crafted for restaurants, cafés and luxury hospitality spaces.",
    },
    {
      image: "/images/project-2.png",
      title: "Healthcare Projects",
      description:
        "We focus on providing soothing and functional lighting solutions to promote healing and well-being.",
    },
    {
      image: "/images/project-3.png",
      title: "Corporate Projects",
      description:
        "Modern office lighting systems that improve productivity and create inspiring workspaces.",
    },
    {
      image: "/images/project-4.png",
      title: "Residential Projects",
      description:
        "Elegant decorative and architectural lighting for modern homes and luxury interiors.",
    },
  ];

  return (
    <>
      <section className="bg-black">
        <div className="grid lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative min-h-[850px]">
            <Image
              src="/images/feature.png"
              alt="Feature"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-black px-10 py-28 lg:px-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              \ FEATURES \
            </p>

            <h2 className="max-w-[700px] text-[62px] font-semibold leading-[1.05] text-white">
              What Makes Our
              <br />
              Offering Seamless
            </h2>

            <h3 className="mt-9 text-[19px] font-medium text-[#E1E1E1]">
              Looking for a lighting solution for your home or office?
            </h3>

            <p className="mt-8 max-w-[700px] leading-relaxed text-white/70">
              At Scoot Lighting, we're dedicated to illuminating your spaces
              with creativity and precision. With our expertise in lighting
              design for residential and office environments, we're your top
              choice for bringing your vision to life with innovative and
              tailored solutions.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/20">
                    <Check size={16} className="text-primary" strokeWidth={3} />
                  </div>

                  <span className="text-[15px] text-white">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 font-semibold text-[#f1d1af]">
              Trust us to light up your world with brilliance.
            </p>

            <Link
              href="#"
              className="mt-8 inline-flex h-12 w-[150px] items-center justify-center bg-primary font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#191919] px-7 py-10">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((item, index) => (
              <div
                key={index}
                className="group relative h-[450px] overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Default Overlay */}
                <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/50" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-[2px] px-8 text-center opacity-0 transition-all duration-700 ease-out group-hover:opacity-100">
                  {/* Title */}
                  <h3 className="translate-y-8 text-2xl font-semibold text-white opacity-0 transition-all duration-700 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 translate-y-8 leading-relaxed text-white/80 opacity-0 transition-all duration-700 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
