import React from "react";

const materials = [
  {
    image: "/images/collection1.png",
    title: "Indoor LED Lighting Solutions",
    alt:"Led light manufacturer in Delhi",
    description:
      "Explore our range of panel lights, surface-mounted lights, and concealed downlights, manufactured to enhance comfort and ambiance in modern homes and offices across Delhi.",
  },
  {
    image: "/images/collection2.png",
    title: "Outdoor & Street LED Lighting",
    alt:"Led light manufacturer in Delhi",
    description:
      "Weatherproof LED street lights and flood lights engineered for durability and reliable performance in Delhi's outdoor conditions — ideal for roads, facades, and public spaces.",
  },
  {
    image: "/images/collection3.png",
    title: "Commercial & Industrial LED Lighting",
    alt:"Led light manufacturer in Delhi",
    description:
      "COB lights, spotlights, and high-output panel and flood lighting built for offices, retail stores, warehouses, and industrial facilities.",
  },
];

const Collections = () => {
  return (
    <section className="relative overflow-hidden bg-black" id="collections">
      {/* Vertical Background Text */}
      <div className="pointer-events-none absolute left-0 top-0 flex h-full items-center">
  <span
    className="
      text-[90px]
      md:text-[100px]
      lg:text-[150px]
      font-bold
      leading-none
      text-white/[0.09]
      md:text-white/[0.08]
      lg:text-white/[0.08]
    "
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
        <div className="relative z-10 px-10 py-10 md:py-24 lg:px-24">
          <p className="mb-6 text-sm lg:text-xs font-semibold uppercase tracking-[0.1em] text-primary">
            \ COLLECTIONS \
          </p>

          <h2 className="text-4xl md:text-[62px] font-semibold leading-[0.95] text-white">
            Our LED Lighting Collections
          </h2>

          <p className="mt-8 text-[19px] font-medium text-white">
            As a complete LED light manufacturer, SCOOT (PK Led Light) offers solutions designed for every space — indoor, outdoor, and industrial.
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
            alt="Led light manufacturer in Delhi"
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
