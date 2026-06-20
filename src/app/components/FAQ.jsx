"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who is the best LED light manufacturer in Delhi?",
    answer:
      "SCOOT (PK Led Light) is a trusted LED light manufacturer in Delhi, offering high-quality panel lights, street lights, flood lights, COB lights, and other lighting solutions for residential, commercial, and industrial applications.",
  },
  {
    question: "What types of LED products does SCOOT manufacture?",
    answer:
      "We manufacture more than 50 types of LED lighting products, including panel lights, surface-mounted lights, flood lights, street lights, concealed lights, COB lights, spotlights, step lights, and deep downlights.",
  },
  {
    question: "Do you offer bulk purchasing options?",
    answer:
      "Yes, we specialize in bulk and wholesale orders for businesses, distributors, contractors, wholesalers, and retailers across India at competitive pricing.",
  },
  {
    question: "Are your LED lights energy-efficient?",
    answer:
      "Absolutely. All our LED lighting products are designed to deliver maximum brightness while consuming minimal power, helping customers reduce energy costs.",
  },
  {
    question: "Do you provide a warranty on your products?",
    answer:
      "Yes, we provide warranty coverage on our LED products to ensure long-term performance, reliability, and customer satisfaction.",
  },
  {
    question: "Where is SCOOT (PK Led Light) located?",
    answer:
      "Our manufacturing facility is located in Bawana Industrial Area, Delhi, and we supply LED lighting products to customers across India.",
  },
  {
    question: "What wattage range do your LED panel lights come in?",
    answer:
      "Our LED panel lights are available in 6W to 18W variants, including Eco Series, Slim Panel, Diamond Panel, and Step Panel models suitable for homes, offices, and commercial spaces.",
  },
  {
    question: "Which LED street light wattage is suitable for roads and industrial areas?",
    answer:
      "We offer 24W and 50W LED street lights. The 24W model is ideal for parking areas and internal roads, while the 50W model is suitable for larger roads, industrial zones, and outdoor applications.",
  },
  {
    question: "Is SCOOT (PK Led Light) a verified LED manufacturer?",
    answer:
      "Yes, SCOOT (PK Led Light) is a verified LED lighting manufacturer with over 8 years of industry experience and a portfolio of 50+ lighting products across multiple categories.",
  },
  {
    question: "Do you supply LED lights for wholesale and bulk orders?",
    answer:
      "Yes, we supply LED panel lights, street lights, flood lights, COB lights, and other products in bulk quantities for retailers, contractors, project developers, and businesses throughout India.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-black pt-20 pb-10" id="faq">
      {/* Background Text */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
        <h2 className="text-[120px] md:text-[180px] lg:text-[250px] font-bold leading-none text-white/[0.03]">
          FAQ
        </h2>
      </div>

      <div className="container-custom px-5 md:px-10 lg:px-20">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            \ FREQUENTLY ASKED QUESTIONS \
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Got Questions?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-white/60">
            Find answers to the most common questions about our lighting
            products, services, and project consultation process.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-7xl grid gap-5 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="h-fit overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-6 text-left"
              >
                <h3 className=" md:text-lg font-medium text-white">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-relaxed text-white/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
