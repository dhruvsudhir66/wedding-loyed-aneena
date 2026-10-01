"use client";

import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { Allura, Cormorant_Garamond } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

export default function MeetTheBride() {
  const brideName = weddingConfig.couple.secondName;

  /*
    Replace these three paths with the bride's final photos.

    bride.jpeg is kept as the main image for now.
  */
  const photos = {
    main: "/images/bride-5.jpeg",
    second: "/images/bride-2.jpeg",
    third: "/images/bride-4.jpg",
  };

  return (
    <section
      id="bride"
      className={`${allura.variable} ${cormorant.variable} relative w-full overflow-hidden bg-[#E9E8DC] text-[#30352B]`}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Soft sage wash */}
        <div className="absolute -left-[25%] top-[18%] h-[60%] w-[60%] rounded-full bg-[#59674D]/[0.035] blur-[130px]" />

        {/* Warm light around photo collage */}
        <div className="absolute right-[-10%] top-[10%] h-[70%] w-[55%] rounded-full bg-[#F8F4EA]/[0.72] blur-[120px]" />

        {/* Lower subtle depth */}
        <div className="absolute bottom-[-20%] left-[25%] h-[45%] w-[55%] rounded-full bg-[#59674D]/[0.025] blur-[120px]" />
      </div>

      {/* Fine paper grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 20% 20%,
              #30352B 0.5px,
              transparent 0.7px
            )
          `,
          backgroundSize: "7px 7px",
        }}
      />

      {/* Large background 03 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[4vw] top-[2vh] select-none font-[var(--font-cormorant)] text-[clamp(11rem,25vw,26rem)] font-medium leading-none tracking-[-0.09em] text-[#59674D]/[0.028]"
      >
        03
      </div>

      {/* =========================================================
          MAIN PAGE
      ========================================================= */}

      <div className="relative mx-auto min-h-[100svh] max-w-[1500px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-14 lg:py-12">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <header className="relative z-30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#30352B]/40 sm:w-14" />

            <span className="font-[var(--font-cormorant)] text-[9px] font-medium uppercase tracking-[0.34em] text-[#59674D] sm:text-[10px]">
              The bride
            </span>
          </div>

          <span className="font-[var(--font-cormorant)] text-[16px] italic text-[#30352B]/40 sm:text-[18px]">
            03
          </span>
        </header>

        {/* =======================================================
            DESKTOP / MOBILE CONTENT
        ======================================================= */}

        <div className="relative z-10 mx-auto mt-10 grid max-w-[1220px] grid-cols-1 items-center gap-14 lg:mt-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          {/* =====================================================
              LEFT TYPOGRAPHIC CONTENT
          ===================================================== */}

          <div className="relative z-30 order-2 flex flex-col justify-center lg:order-1">
            <h2 className="max-w-[560px] font-[var(--font-cormorant)] text-[clamp(3.8rem,8vw,7.5rem)] font-medium leading-[0.78] tracking-[-0.055em] text-[#30352B]">
              Meet
              <br />
              <span className="ml-[0.1em]">the bride.</span>
            </h2>

            <div className="relative mt-4 sm:mt-6">
              <h3 className="font-[var(--font-allura)] text-[clamp(4.2rem,8vw,7.5rem)] leading-[0.8] text-[#59674D]">
                {brideName}
              </h3>
            </div>

            <p className="mt-8 max-w-[390px] font-[var(--font-cormorant)] text-[18px] leading-[1.5] text-[#30352B]/65 sm:mt-10 sm:text-[20px]">
              A little bit of sunshine, a lot of heart, and a story that brought
              her here.
            </p>

            {/* Small editorial detail */}
            <div className="mt-9 flex items-center gap-4 sm:mt-11">
              <span className="h-px w-9 bg-[#59674D]/35" />

              <span className="font-[var(--font-cormorant)] text-[9px] uppercase tracking-[0.3em] text-[#30352B]/40">
                03 · Her story
              </span>
            </div>
          </div>

          {/* =====================================================
              THREE-PHOTO COLLAGE
          ===================================================== */}

          <div className="relative order-1 flex min-h-[600px] items-center justify-center sm:min-h-[700px] lg:order-2 lg:min-h-[720px]">
            {/* =================================================
                SOFT COLLAGE BACKDROP
            ================================================= */}

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[78%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-[#F8F4EA]/60 blur-[65px]"
            />

            {/* =================================================
                BACKGROUND EDITORIAL LINE
            ================================================= */}

            <div
              aria-hidden="true"
              className="absolute left-[5%] top-[18%] hidden h-px w-[34%] bg-[#59674D]/15 sm:block"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[14%] right-[3%] hidden h-px w-[30%] bg-[#59674D]/15 sm:block"
            />

            {/* =================================================
                PHOTO 01 — LEFT / SMALL
            ================================================= */}

            <div className="absolute left-[3%] top-[9%] z-10 w-[35%] max-w-[190px] rotate-[-5deg] sm:left-[5%] sm:top-[10%] sm:w-[31%] sm:max-w-[215px] lg:left-[7%] lg:w-[28%]">
              {/* Tape */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[-12px] z-30 h-7 w-16 -translate-x-1/2 rotate-[-4deg] bg-[#C6BFAF]/65"
              />

              {/* Photo frame */}
              <div className="relative bg-[#F8F4EA] p-2.5 pb-11 shadow-[0_18px_40px_-28px_rgba(48,53,43,0.45)] sm:p-3 sm:pb-12">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#D9D6CA]">
                  <Image
                    src={photos.second}
                    alt={`Portrait of ${brideName}`}
                    fill
                    sizes="(max-width: 640px) 35vw, 220px"
                    className="object-cover"
                  />
                </div>

                {/* Small frame notation */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between sm:bottom-3 sm:left-4 sm:right-4">
                  <span className="font-[var(--font-cormorant)] text-[7px] tracking-[0.22em] text-[#30352B]/35">
                    01
                  </span>

                  <span className="h-px w-5 bg-[#59674D]/20" />
                </div>
              </div>
            </div>

            {/* =================================================
                PHOTO 02 — MAIN / CENTER
            ================================================= */}

            <div className="relative z-20 w-[55%] max-w-[320px] sm:w-[48%] sm:max-w-[350px] lg:w-[47%] lg:max-w-[370px]">
              {/* Offset fine frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -right-3 inset-0 border border-[#59674D]/25 sm:-bottom-4 sm:-right-4"
              />

              {/* Main photo print */}
              <div className="relative bg-[#F8F4EA] p-2.5 pb-12 shadow-[0_25px_60px_-30px_rgba(48,53,43,0.45)] sm:p-3 sm:pb-14">
                <div className="group relative aspect-[3/4] overflow-hidden bg-[#D9D6CA]">
                  <Image
                    src={photos.main}
                    alt={`Portrait of ${brideName}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 55vw, (max-width: 1024px) 48vw, 370px"
                    className="object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
                  />

                  {/* Very subtle image edge */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-black/[0.07]"
                  />
                </div>

                {/* Main print notation */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between sm:bottom-3.5 sm:left-4 sm:right-4">
                  <span className="font-[var(--font-cormorant)] text-[8px] tracking-[0.22em] text-[#30352B]/40">
                    FRAME 02
                  </span>

                  <span className="font-[var(--font-cormorant)] text-[8px] tracking-[0.16em] text-[#30352B]/30">
                    AN · 26
                  </span>
                </div>
              </div>

              {/* Main tape */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[-13px] z-30 h-8 w-20 -translate-x-1/2 rotate-[1deg] bg-[#C6BFAF]/70 sm:h-9 sm:w-24"
              />
            </div>

            {/* =================================================
                PHOTO 03 — RIGHT / SMALL
            ================================================= */}

            <div className="absolute bottom-[8%] right-[2%] z-30 w-[36%] max-w-[195px] rotate-[4deg] sm:bottom-[7%] sm:right-[5%] sm:w-[31%] sm:max-w-[215px] lg:right-[7%] lg:w-[28%]">
              {/* Tape */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[-11px] z-30 h-7 w-16 -translate-x-1/2 rotate-[5deg] bg-[#C6BFAF]/65"
              />

              {/* Frame */}
              <div className="relative bg-[#F8F4EA] p-2.5 pb-11 shadow-[0_18px_40px_-28px_rgba(48,53,43,0.45)] sm:p-3 sm:pb-12">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#D9D6CA]">
                  <Image
                    src={photos.third}
                    alt={`Portrait of ${brideName}`}
                    fill
                    sizes="(max-width: 640px) 36vw, 220px"
                    className="object-cover"
                  />
                </div>

                {/* Frame notation */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between sm:bottom-3 sm:left-4 sm:right-4">
                  <span className="font-[var(--font-cormorant)] text-[7px] tracking-[0.22em] text-[#30352B]/35">
                    03
                  </span>

                  <span className="h-px w-5 bg-[#59674D]/20" />
                </div>
              </div>
            </div>

            {/* =================================================
                TINY EDITORIAL CROSS
            ================================================= */}

            <div
              aria-hidden="true"
              className="absolute right-[10%] top-[7%] hidden h-6 w-6 sm:block"
            >
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#59674D]/20" />
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#59674D]/20" />
            </div>

            {/* Bottom marker */}
            <div
              aria-hidden="true"
              className="absolute bottom-[4%] left-[12%] flex items-center gap-2"
            >
              <span className="h-[4px] w-[4px] rounded-full bg-[#59674D]/45" />

              <span className="h-px w-8 bg-[#59674D]/20" />
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM INDICATOR
        ======================================================= */}

        <div className="pointer-events-none absolute bottom-6 left-5 right-5 flex items-center justify-between sm:bottom-8 sm:left-8 sm:right-8 lg:left-14 lg:right-14">
          <span className="h-1 w-1 rounded-full bg-[#30352B]/25" />

          <span className="relative h-7 w-px bg-[#30352B]/15">
            <span className="absolute bottom-0 left-1/2 h-1.5 w-1 -translate-x-1/2 bg-[#30352B]/30" />
          </span>
        </div>
      </div>
    </section>
  );
}
