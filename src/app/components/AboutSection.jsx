export default function AboutSection() {
  const stats = [
    {
      number: "15K",
      suffix: "+",
      label: "Lamps installed in 2023",
    },
    {
      number: "298",
      label: "Custom solutions",
    },
    {
      number: "2K",
      suffix: "+",
      label: "Clients in the USA",
    },
    {
      number: "599",
      label: "Large-scale projects",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#252527] pt-32 pb-28 px-32">
      {/* Background Text */}
      <div className="pointer-events-none absolute -left-10 bottom-0 select-none">
        <h2 className="text-[230px] font-bold leading-none text-white/[0.03] [writing-mode:vertical-rl] rotate-180">
          ABOUT
        </h2>
      </div>

      <div className="container-custom relative z-10">

        {/* Top Content */}
        <div className="grid gap-20 lg:grid-cols-2">

          {/* Left */}
          <div>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              \ ABOUT US \
            </p>

            <h2 className="max-w-[650px] text-[62px] font-semibold leading-[1.05] text-white">
              Illuminate Your
              <br />
              Space, Illuminate
              <br />
              Your Life With Us
            </h2>

            <p className="mt-8 text-[19px] font-medium text-white">
              Get a lightning solution that suits your needs.
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="max-w-[650px] text-4xl font-medium leading-tight text-white">
              Place the Right Accents with Modern Lights by Scoot Studio
            </h3>

            <p className="mt-7 leading-relaxed text-white/70">
              We closely cooperate with our clients to fully understand
              their needs and goals during the early stages of the project.
              We provide accurate lighting analysis, detailed specifications,
              schedules for integration, detailed fixture design, and more.
            </p>

            <p className="mt-5 leading-relaxed text-white/70">
              Our true passion is the art of integrating light within
              architecture. We have completed over 2000 residential
              projects and built complex lighting system designs nearly
              in every interior and exterior imaginable.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`border border-white/10 p-7 min-h-[180px] flex flex-col justify-between
              ${
                index === 3
                  ? "rounded-tr-[80px]"
                  : ""
              }`}
            >
              <h3 className="text-[62px] font-semibold leading-none text-white">
                {item.number}
                {item.suffix && (
                  <span className="text-primary"> {item.suffix}</span>
                )}
              </h3>

              <p className="text-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}