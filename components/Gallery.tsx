"use client";

import { motion } from "framer-motion";

const galleryDetails = {
  sectionNumber: "06",
  eyebrow: "A PRIVATE COLLECTION",
  title: "Little moments.",
  subtitle: "The memories we keep close.",

  strips: [
    {
      images: [
        {
          src: "/images/couple-gallery-3.webp",
          alt: "Aneena and Loyed at the beach",
        },
        {
          src: "/images/couple-gallery-2.webp",
          alt: "Aneena and Loyed walking together",
        },
        {
          src: "/images/couple-gallery-1.webp",
          alt: "Aneena and Loyed in the car",
        },
      ],
    },
    {
      images: [
        {
          src: "/images/couple-gallery-4.webp",
          alt: "Aneena and Loyed together",
        },
        {
          src: "/images/couple-gallery-5.webp",
          alt: "Aneena and Loyed with their dog",
        },
        {
          src: "/images/couple-gallery-6.webp",
          alt: "Aneena and Loyed walking on the beach",
        },
      ],
    },
  ],
};

function SmallMark() {
  return (
    <span aria-hidden="true" className="relative block h-4 w-4 shrink-0">
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#59674D]/25" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#59674D]/25" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#C8B58A] bg-[#F8F4EA]" />
    </span>
  );
}

function PhotoStrip({
  images,
  side,
}: {
  images: { src: string; alt: string }[];
  side: "left" | "right";
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 32,
        rotate: side === "left" ? -3 : 3,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: side === "left" ? -1 : 1,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative w-[44vw] max-w-[228px] min-w-0 shrink-0"
    >
      <div
        aria-hidden="true"
        className={[
          "absolute inset-0 bg-[#DCD5C6] shadow-[0_22px_45px_-28px_rgba(48,53,43,0.5)]",
          side === "left"
            ? "translate-x-[5px] translate-y-[7px] rotate-[1.2deg]"
            : "-translate-x-[5px] translate-y-[7px] rotate-[-1.2deg]",
        ].join(" ")}
      />

      <div className="relative z-10 overflow-hidden bg-[#FFFDF9] px-2 pt-2 pb-12 shadow-[0_22px_48px_-27px_rgba(48,53,43,0.5)] transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:px-2.5 sm:pt-2.5 sm:pb-[56px]">
        <div className="space-y-2 sm:space-y-2.5">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="relative overflow-hidden bg-[#E7E2D8]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.012]"
              />

              <span className="pointer-events-none absolute inset-0 border border-black/[0.06]" />
            </div>
          ))}
        </div>

        <div className="relative h-[56px] sm:h-[64px]">
          <span className="absolute bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#A87E8E]/55" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative w-full overflow-hidden bg-[#F8F4EA] px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20%] top-[4%] h-[35%] w-[55%] rounded-full bg-[#59674D]/[0.035] blur-[120px]" />
        <div className="absolute -right-[15%] bottom-[10%] h-[30%] w-[50%] rounded-full bg-[#A87E8E]/[0.025] blur-[120px]" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-[820px]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#59674D]/35 sm:w-12" />

            <span className="font-sans text-[7px] font-semibold uppercase tracking-[0.28em] text-[#59674D]/70 sm:text-[8px]">
              {galleryDetails.sectionNumber}
            </span>

            <span className="h-px w-6 bg-[#59674D]/25" />

            <span className="font-display text-[7px] tracking-[0.28em] text-[#59674D]/55">
              GALLERY
            </span>
          </div>

          <span className="font-display text-[7px] tracking-[0.23em] text-[#59674D]/35">
            A + L / 2026
          </span>
        </div>

        <div className="py-8 sm:py-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 font-sans text-[7px] font-medium uppercase tracking-[0.32em] text-[#59674D]/58">
                A collection of us
              </p>

              <h2
                id="gallery-title"
                className="font-display text-[43px] font-light leading-[0.8] tracking-[-0.06em] text-[#30352B] sm:text-[58px] lg:text-[68px]"
              >
                Little
                <br />
                <span className="italic text-[#59674D]">moments.</span>
              </h2>
            </div>

            <div className="hidden pb-1 sm:block">
              <p className="font-script text-[23px] leading-[0.92] text-[#59674D]/65 lg:text-[27px]">
                the memories
                <br />
                we keep close
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <SmallMark />

            <span className="h-px w-8 bg-[#59674D]/18 sm:w-12" />

            <span className="font-sans text-[6px] tracking-[0.28em] text-[#59674D]/40">
              A PRIVATE COLLECTION
            </span>

            <span className="h-px flex-1 bg-[#59674D]/18" />
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 mx-auto max-w-[620px]">
        <div className="flex items-start justify-center gap-3 sm:gap-6 md:gap-9">
          <PhotoStrip images={galleryDetails.strips[0].images} side="left" />
          <PhotoStrip images={galleryDetails.strips[1].images} side="right" />
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-7 flex max-w-[190px] items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-[#59674D]/15" />
          <SmallMark />
          <span className="h-px flex-1 bg-[#59674D]/15" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mt-7 max-w-[820px] border-t border-[#59674D]/16 pt-5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A87E8E]/65" />

            <span className="font-sans text-[7px] tracking-[0.27em] text-[#59674D]/45">
              ANEENA &amp; LOYED
            </span>
          </div>

          <span className="font-sans text-[7px] tracking-[0.22em] text-[#59674D]/30">
            22 · 11 · 2026
          </span>
        </div>

        <p className="mt-4 text-center font-script text-[25px] leading-none text-[#59674D]/62 sm:text-[29px]">
          collected along the way
        </p>
      </motion.div>
    </section>
  );
}
