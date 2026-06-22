import Image from "next/image";

export default function Products() {
  const row1Products = [
    {
      image: "/images/surface-light.jpg",
      name: "Surface Light (Square)",
    },
    {
      image: "/images/service1.png",
      name: "Alpha Cob",
    },
    {
      image: "/images/12w-pc.jpg",
      name: "12w PC Panel (round)",
    },

    {
      image: "/images/alpha-down.png",
      name: "Alpha Down Light",
    },
    {
      image: "/images/deep-cob.png",
      name: "Deep Cob - White",
    },
    {
      image: "/images/4w-deep.png",
      name: "4w Deep Cob",
    },
    {
      image: "/images/cylinder-black.jpg",
      name: "Cylinder Surface(Black)",
    },
    {
      image: "/images/cylinder-white.png",
      name: "Cylinder Surface(White)",
    },
    {
      image: "/images/desizer.png",
      name: "Desizer Surface Round",
    },
    {
      image: "/images/15w-deep.png",
      name: "15w Deep Light",
    },
    {
      image: "/images/2w-cob.jpg",
      name: "2w Cob Light",
    },
    {
      image: "/images/7w-down.png",
      name: "7w Down Light",
    },
    {
      image: "/images/12w-panel.jpg",
      name: "12w Panel Light",
    },
    {
      image: "/images/adjustable.png",
      name: "Adjustable Panel 12+12",
    },
    {
      image: "/images/deep-black.png",
      name: "Deep Cob - Black",
    },
    {
      image: "/images/eco-series.png",
      name: "Eco Series Panel",
    },
    {
      image: "/images/3w-deep.png",
      name: "3w Deep",
    },
    {
      image: "/images/crown-light.png",
      name: "Crown Cob Light",
    },
    {
      image: "/images/12w-square.jpg",
      name: "12w Panel Light (Square)",
    },

    {
      image: "/images/diamond-panel.png",
      name: "Diamond Panel",
    },
  ];

  const row2Products = [
    {
      image: "/images/5w-stricker.png",
      name: "5w Stricker",
    },
    {
      image: "/images/6w-handi.jpg",
      name: "6w Handi Surface",
    },
    {
      image: "/images/nova-light.png",
      name: "Nova Down Light",
    },
    {
      image: "/images/flood-light.jpg",
      name: "Flood Light",
    },
    {
      image: "/images/tracklight-black.png",
      name: "Track Light (Black)",
    },
    {
      image: "/images/tracklight-white.png",
      name: "Track Light (White)",
    },
    {
      image: "/images/walllight-black.png",
      name: "Wall Light (Black)",
    },
    {
      image: "/images/lexus-panel.png",
      name: "Lexus Panel",
    },
    {
      image: "/images/lexus-panel-18w.png",
      name: "Lexus Panel 18w",
    },
    {
      image: "/images/max-down.png",
      name: "Max Down Light 7w",
    },
    {
      image: "/images/moveable.png",
      name: "Moveable Cylinder",
    },
    {
      image: "/images/safari-cob.png",
      name: "Safari Cob",
    },
    {
      image: "/images/cylinder-eco.png",
      name: "Cylinder Eco Series",
    },
    {
      image: "/images/glitter-black.png",
      name: "Glitter Down Lighter(Black)",
    },
    {
      image: "/images/glitter-white.png",
      name: "Glitter Down Lighter(White)",
    },
    {
      image: "/images/street-glass.png",
      name: "Street Light Glass Model",
    },
    {
      image: "/images/magic-cob.jpg",
      name: "Magic Cob",
    },
    {
      image: "/images/street-lens.png",
      name: "Street Light Lens Model",
    },
    {
      image: "/images/royal-cob.png",
      name: "Royal Cob",
    },
    {
      image: "/images/Flood-lens.jpg",
      name: "Flood Light Lens Model",
    },
  ];

  const row3Products = [
    {
      image: "/images/step-round.jpg",
      name: "Step Surface (Round)",
    },
    {
      image: "/images/jumbo-down.png",
      name: "Jumbo Down Light",
    },
    {
      image: "/images/moon-surface.jpg",
      name: "Moon Surface Light",
    },
    {
      image: "/images/desizer-surface.png",
      name: "Desizer Surface Square",
    },
    {
      image: "/images/nexa-down.jpg",
      name: "Nexa Down Light",
    },
    {
      image: "/images/flower-cob.png",
      name: "Flower Cob",
    },
    {
      image: "/images/diamond-square.jpg",
      name: "Diamond Panel (Square)",
    },
     {
      image: "/images/cob-surface.png",
      name: "PC Cob Surface",
    },
    {
      image: "/images/surface-round.jpg",
      name: "Surface Light (Round)",
    },
     {
      image: "/images/step-panel.png",
      name: "Step Panel Light (Square)",
    }, 
    {
      image: "/images/rimless-panel.jpg",
      name: "Rimless Panel",
    },
    {
      image: "/images/galaxy-white.png",
      name: "Galaxy Cob (White)",
    },
    {
      image: "/images/cob-panel.jpg",
      name: "PC Cob Panel",
    },
    {
      image: "/images/step-pvc.png",
      name: "Step Panel Series (PVC)",
    },
    {
      image: "/images/pc-square.jpg",
      name: "PC Panel (Square)",
    },
    {
      image: "/images/galaxy-black.png",
      name: "Galaxy Cob (Black)",
    },
    {
      image: "/images/steppanel-round.jpg",
      name: "Step Panel Round",
    },
    {
      image: "/images/glitter.png",
      name: "Glitter",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-black py-20 md:py-28"
      id="products"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,#d78c4315,transparent_60%)]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
            \ OUR PRODUCTS \
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-[55px]">
            Wide Range of
            <br />
            Lighting Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-white/70">
            Premium quality lighting products designed for homes, offices,
            commercial projects and architectural spaces.
          </p>
        </div>

        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Row 1 */}
        <div className="group relative flex overflow-hidden py-3">
          <div className="marquee flex gap-6 group-hover:[animation-play-state:paused]">
            {[...row1Products, ...row1Products].map((item, index) => (
              <ProductCard key={index} img={item.image} name={item.name} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="group relative mt-6 flex overflow-hidden py-3">
          <div className="marquee-reverse flex gap-6 group-hover:[animation-play-state:paused]">
            {[...row2Products, ...row2Products].map((item, index) => (
              <ProductCard key={index} img={item.image} name={item.name} />
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="group relative mt-6 flex overflow-hidden py-3">
          <div className="marquee flex gap-6 group-hover:[animation-play-state:paused]">
            {[...row3Products, ...row3Products].map((item, index) => (
              <ProductCard key={index} img={item.image} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ img, name }) {
  return (
    <div className="group/card w-[170px] shrink-0 sm:w-[200px] lg:w-[220px]">
      <div className="overflow-hidden rounded-2xl border border-primary/20 bg-[#111111] transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_35px_rgba(215,140,67,0.25)]">
        {/* Fixed Image Area */}
        <div className="flex h-[180px] items-center justify-center p-6 sm:h-[200px] lg:h-[230px]">
          <div className="relative h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] lg:h-[170px] lg:w-[170px]">
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover transition duration-700 group-hover/card:scale-105"
            />
          </div>
        </div>

        {/* Golden Line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Product Name */}
        <div className="p-4">
          <h3 className="text-center text-xs font-medium text-white sm:text-sm">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
}
