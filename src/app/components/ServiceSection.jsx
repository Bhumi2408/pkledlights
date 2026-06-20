import React from "react";

const services = [
  {
    icon: "/images/service5.svg",
    title: "CEILING FIXTURES",
    items: ["Chandeliers", "Flush Mount", "Pendant Lights", "Track Lighting"],
  },
  {
    icon: "/images/service6.svg",
    title: "FLOOR LAMPS",
    items: ["Arc Lamps", "Tripod Lamps", "Task Lamps", "Torchiere Lamps"],
  },
  {
    icon: "/images/service7.svg",
    title: "WALL SCONCES",
    items: [
      "Swing Arm Sconces",
      "Candle Sconces",
      "Picture Lights",
      "Uplight Sconces",
    ],
  },
  {
    icon: "/images/service8.svg",
    title: "WALL MOUNTED LIGHTS",
    items: [
      "Wall Washers",
      "Vanity Lights",
      "Reading Lights",
      "Outdoor Wall Lights",
    ],
  },
  {
    icon: "/images/service9.svg",
    title: "KITCHEN ISLAND LIGHTS",
    items: [
      "Linear Pendant Lights",
      "Globe Pendant Lights",
      "Mini Pendant Lights",
      "Recessed Lighting",
    ],
  },
  {
    icon: "/images/service10.svg",
    title: "MODULAR LIGHTING",
    items: [
      "Modular Track Systems",
      "Magnetic LED Panels",
      "Modular Wall Lights",
      "Adjustable Clusters",
    ],
  },
  {
    icon: "/images/service11.svg",
    title: "LED LIGHTING",
    items: [
      "Recessed Downlights",
      "Strip Lights",
      "Pendant Fixtures",
      "Wall Washers",
    ],
  },
  {
    icon: "/images/service12.svg",
    title: "SMART LIGHTING",
    items: [
      "Smart Bulbs",
      "Smart Light Strips",
      "Smart Dimmer Switches",
      "Smart Lighting Kits",
    ],
  },
];

const ServiceSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-black py-28 px-32">
        {/* Background Text */}
        <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 translate-x-[43%] -rotate-90 select-none">
          <span className="text-[300px] font-bold leading-none text-white/[0.08]">
            SERVICES
          </span>
        </div>

        <div className="container-custom">
          {/* Top */}
          <div className="mb-24 grid gap-16 lg:grid-cols-2 items-end">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                \ SERVICES \
              </p>

              <h2 className="max-w-[700px] text-[62px] font-semibold leading-[0.95] text-white">
                Discover Power of
                <br />
                Perfect Lighting
              </h2>
            </div>

            <div className="max-w-[650px] lg:ml-auto">
              <h3 className="text-[19px] font-medium leading-tight text-white">
                Welcome to our diverse world of lighting solutions.
              </h3>

              <p className="mt-5 leading-relaxed text-white/70">
                From ambient to task lighting, our expertise spans a wide range
                of styles and functionalities to suit every space and
                requirement.
              </p>

              <p className="mt-5 flex items-center gap-3 font-semibold text-primary">
                ✦ Explore our curated selection of lighting options.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid gap-y-20 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex gap-6 transition-all duration-500"
              >
                <img
                  src={service.icon}
                  alt=""
                  className="h-16 w-16 object-contain opacity-80 transition duration-500 group-hover:scale-110"
                />

                <div>
                  <h4 className="mb-5 text-xs font-semibold tracking-[0.1em] text-primary">
                    {service.title}
                  </h4>

                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-white/80 transition duration-300 hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

         <div className="mx-auto max-w-[1400px] mt-20 relative z-10">
          <div className="grid h-[720px] grid-cols-12 gap-6">
            {/* Top Left */}
            <div className="col-span-6 row-span-1 overflow-hidden">
              <img
                src="/images/service2.png"
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Center Tall */}
            <div className="col-span-3 row-span-2 overflow-hidden">
              <img
                src="/images/service3.png"
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Right Tall Rounded */}
            <div className="col-span-3 row-span-2 overflow-hidden rounded-tr-[180px]">
              <img
                src="/images/service4.png"
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom Left Rounded */}
            <div className="col-span-6 overflow-hidden rounded-bl-[180px]">
              <img
                src="/images/service1.png"
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ServiceSection;
