import React from "react";

const services = [
  {
    icon: "/images/service5.svg",
    title: "PANEL LIGHTS",
    items: ["Eco Series Panel Light (12W)", "Slim Panel Light (12W / 18W)", "Diamond Panel Light (15W)", "Step Panel Light (6W)"],
  },
  {
    icon: "/images/service6.svg",
    title: "SURFACE MOUNTED LIGHTS",
    items: ["Cylinder Surface Light (12W / 18W)", "Step Surface Light (12W)", "LED Surface Light (12W)", "Moon Surface Light (15W)"],
  },
  {
    icon: "/images/service7.svg",
    title: "LED FLOODLIGHTS",
    items: [
      "LED Flood Light (100W)",
      "LED Flood Light with Lens (100W)",
    ],
  },
  {
    icon: "/images/service8.svg",
    title: "LED STREET LIGHTS",
    items: [
      "LED Street Light (24W)",
      "LED Street Light (50W)",
    ],
  },
  {
    icon: "/images/service9.svg",
    title: "LED CONCEALED LIGHTS",
    items: [
      "Nexa Downlight (9W)",
      "Eco Downlight (7W)",
    ],
  },
  {
    icon: "/images/service10.svg",
    title: "COB LIGHTS",
    items: [
      "PC COB Light (7W)",
      "Deep COB Magic Light (12W)",
    ],
  },
  {
    icon: "/images/service11.svg",
    title: "LED SPOTLIGHTS",
    items: [
      "LED Spot Light (7W)",
      "LED Spot COB Light (2W)",
    ],
  },
  {
    icon: "/images/service12.svg",
    title: "STEP LIGHTS & DEEP LIGHTS",
    items: [
      "Step Panel Light (6W, Square)",
      "LED Deep Downlight",
    ],
  },
];
 
const ServiceSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-black py-28 px-2 md:px-10 lg:px-32" id="services">
        {/* Background Text */}
        <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 translate-x-[43%] -rotate-90 select-none">
          <span className="text-[100px] md:text-[300px] font-bold leading-none text-white/[0.08]">
            SERVICES
          </span>
        </div>

        <div className="container-custom">
          {/* Top */}
          <div className="mb-24 grid gap-16 lg:grid-cols-2 items-end">
            <div>
              <p className="mb-6 text-sm md:text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                \ SERVICES \
              </p>

              <h2 className="max-w-[700px] text-4xl md:text-[55px] font-semibold leading-[0.95] text-white">
                Explore Our Wide Range of 
                <br />
                LED Lighting Solutions
              </h2>
            </div>

            <div className="max-w-[650px] lg:ml-auto">
              <h3 className="text-[19px] font-medium leading-tight text-white">
                OUR PRODUCT RANGE
              </h3>

              <p className="mt-5 leading-relaxed text-white/70">
                As a full-scale LED light manufacturer in Delhi, SCOOT (PK Led Light) manufactures 50+ product types across the categories below.
              </p>

              <p className="mt-5 flex items-center gap-3 font-semibold text-primary">
                ✦ Explore our curated selection of lighting options.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid gap-y-20 grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex gap-6 transition-all duration-500"
              >
                <img
                  src={service.icon}
                  alt="Led light manufacturer in Delhi"
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
          <div className="grid h-[720px] grid lg:grid-cols-12 gap-6">
            {/* Top Left */}
            <div className="col-span-6 row-span-1 overflow-hidden">
              <img
                src="/images/service2.png"
                alt="Led light manufacturer in Delhi"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Center Tall */}
            <div className="col-span-3 row-span-2 overflow-hidden">
              <img
                src="/images/service3.png"
                alt="Led light manufacturer in Delhi"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Right Tall Rounded */}
            <div className="col-span-3 row-span-2 overflow-hidden rounded-tr-[180px]">
              <img
                src="/images/service4.png"
                alt="Led light manufacturer in Delhi"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom Left Rounded */}
            <div className="col-span-6 overflow-hidden rounded-bl-[180px]">
              <img
                src="/images/service1.png"
                alt="Led light manufacturer in Delhi"
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
