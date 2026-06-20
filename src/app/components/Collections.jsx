import React from "react";

const materials = [
  {
    image: "/images/collection1.png",
    title: "Indoor Lighting Solutions",
    description:
      "Discover a versatile range of downlights, panel lights, track lights, and decorative fixtures designed to enhance comfort, ambiance, and functionality in modern interiors.",
  },
  {
    image: "/images/collection2.png",
    title: "Commercial Lighting Systems",
    description:
      "Our commercial lighting solutions provide optimal illumination for offices, retail stores, hospitality spaces, and workplaces while maximizing energy efficiency.",
  },
  {
    image: "/images/collection3.png",
    title: "Outdoor & Industrial Lighting",
    description:
      "Engineered for durability and performance, our outdoor and industrial fixtures deliver reliable illumination for landscapes, facades, warehouses, and public spaces.",
  },
];

const Collections = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Vertical Background Text */}
      <div className="absolute -left-10 top-0 h-full flex items-center pointer-events-none">
        <span
          className="text-[150px] font-bold leading-none text-white/[0.07]"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          COLLECTIONS
        </span>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* LEFT */}
        <div className="relative z-10 px-10 py-24 lg:px-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
            \ COLLECTIONS \
          </p>

          <h2 className="text-[62px] font-semibold leading-[0.95] text-white">
            Lighting Solutions
          </h2>

          <p className="mt-8 text-[19px] font-medium text-white">
            Innovative lighting solutions designed for every space.
          </p>

          <p className="mt-6 max-w-[700px] leading-relaxed text-white/75">
            At Scoot Lighting, we combine modern design, advanced LED
            technology, and premium materials to create lighting solutions that
            enhance residential, commercial, and architectural environments.
          </p>

          <div className="mt-16 space-y-10">
            {materials.map((item, index) => (
              <div key={index} className="group flex items-center gap-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 shrink-0 object-cover transition duration-500 group-hover:scale-105"
                />

                <div>
                  <h3 className="text-[26px] font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[600px] leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[1000px]">
          <img
            src="/images/collection4.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Collections;
