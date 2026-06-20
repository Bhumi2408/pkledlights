"use client";
import CountUp from "react-countup";

export default function AboutSection() {
  const stats = [
    {
      number: "8",
      suffix: "+",
      label: "Years of Experience",
    },
    {
      number: "40",
      suffix: "+",
      label: "Employee Count",
    },
    {
      number: "50",
      suffix: "+",
      label: "Product Types",
    },
    {
      number: "100",
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#252527] px-5 py-20 md:px-10 lg:px-20 xl:px-32 xl:pt-32 xl:pb-28"
    >
      {/* Background Text */}
      <div className="pointer-events-none absolute -left-10 bottom-0 select-none">
        <h2 className="text-[120px] md:text-[180px] xl:text-[230px] font-bold leading-none text-white/[0.06] [writing-mode:vertical-rl] rotate-180">
          ABOUT
        </h2>
      </div>

      <div className="container-custom relative z-10">
        {/* Top Content */}
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-8 text-sm lg:text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              \ ABOUT US \
            </p>

            <h2 className=" text-[40px] md:text-[52px] xl:text-[60px] font-semibold leading-[1.05] text-white">
              Delhi's Leading, 
              <br />
              LED Light Manufacturer
              <br />
              Built on Trust & Quality
            </h2>

          </div>

          {/* Right */}
          <div>
            <h3 className="max-w-[650px] text-3xl md:text-4xl font-medium leading-tight text-white">
              Manufacturing Excellence Since 2017
            </h3>

            <p className="mt-7 leading-relaxed text-white/70">
              SCOOT (PK Led Light) has built a strong reputation as one of Delhi's most reliable LED light manufacturers, supplying panel lights, wall lights, ceiling lighting, surface-mounted lighting, street lighting, and deep downlights. Based in Bawana Industrial Area, Delhi, we are recognised for delivering high-quality lighting solutions across residential, commercial, and industrial sectors.

            </p>

            <p className="mt-5 leading-relaxed text-white/70">
              As a verified LED light manufacturer in Delhi, we offer a wide range of premium lighting products — including panel lights, surface-mounted lights, flood lights, street lights, concealed lights, COB LEDs, and spotlights — in bulk, with a strong focus on quality and timely delivery.

            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 xl:mt-24 grid gap-5 grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`border border-white/10 p-6 xl:p-7 min-h-[160px] xl:min-h-[180px] flex flex-col justify-between ${
                index === 3 ? "xl:rounded-tr-[80px]" : ""
              }`}
            >
              <h3 className="text-[42px] md:text-[52px] xl:text-[62px] font-semibold leading-none text-white">
                <CountUp
                  end={parseInt(item.number.replace("K", ""))}
                  duration={3}
                />

                {item.number.includes("K") && "K"}

                {item.suffix && (
                  <span className="text-primary"> {item.suffix}</span>
                )}
              </h3>

              <p className="text-white/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
