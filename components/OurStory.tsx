"use client";

import Image from "next/image";
import { Allura, Cormorant_Garamond } from "next/font/google";
import { weddingConfig } from "@/config/wedding";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export default function OurStory() {
  const brideName = weddingConfig.couple.secondName;
  const groomName = weddingConfig.couple.firstName;

  const photos = {
    background: "/images/couple-gallery-6.webp",
    childhood: "/images/childhood-couple.jpeg",
  };

  return (
    <section
      id="our-story"
      aria-labelledby="our-story-title"
      className={`${allura.variable} ${cormorant.variable} relative isolate w-full overflow-hidden bg-[#59674D] text-[#30352B]`}
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <Image
          src={photos.background}
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            scale-[1.025]
            object-cover
            object-center
            saturate-[0.56]
            brightness-[0.78]
          "
        />

        {/* -----------------------------------------------------
            TRANSLUCENT SHEEN
            Soft ivory veil directly over the photograph.
        ------------------------------------------------------ */}

        <div
          className="
            absolute
            inset-0
            bg-[#F8F4EA]/16
            mix-blend-screen
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#30352B]/38
            via-[#F8F4EA]/10
            to-[#30352B]/48
          "
        />

        {/* Central warm diffusion */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_45%,rgba(248,244,234,0.20)_0%,rgba(248,244,234,0.08)_34%,rgba(48,53,43,0.18)_78%,rgba(48,53,43,0.34)_100%)]
          "
        />

        {/* Soft lower haze */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[42%]
            bg-gradient-to-t
            from-[#30352B]/42
            via-[#59674D]/16
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          SUBTLE GRAIN
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 20% 20%,
              #F8F4EA 0.45px,
              transparent 0.7px
            )
          `,
          backgroundSize: "7px 7px",
        }}
      />

      {/* =========================================================
          LARGE SECTION NUMBER
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-2vw]
          top-[-1%]
          select-none
          font-[var(--font-cormorant)]
          text-[clamp(9rem,21vw,21rem)]
          font-light
          leading-none
          tracking-[-0.11em]
          text-[#F8F4EA]/[0.055]
        "
      >
        05
      </div>

      {/* =========================================================
          PAGE
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1250px] px-5 pb-7 pt-7 sm:px-8 sm:pb-9 sm:pt-8 lg:px-12 lg:pb-10 lg:pt-9">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <header className="relative z-30 flex items-center justify-between text-[#F8F4EA]">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-px w-8 bg-[#F8F4EA]/48 sm:w-12" />

            <span
              className="
                font-[var(--font-cormorant)]
                text-[8px]
                font-medium
                uppercase
                tracking-[0.34em]
                text-[#F8F4EA]/88
                sm:text-[9px]
              "
            >
              Our story
            </span>
          </div>

          <span className="font-[var(--font-cormorant)] text-[14px] italic text-[#F8F4EA]/52 sm:text-[16px]">
            05
          </span>
        </header>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div className="relative z-20 mx-auto mt-8 max-w-[820px] sm:mt-10 lg:mt-12">
          {/* =====================================================
              INTRO LABEL
          ===================================================== */}

          <div className="text-center text-[#F8F4EA]">
            <span
              className="
                font-[var(--font-cormorant)]
                text-[7px]
                uppercase
                tracking-[0.38em]
                text-[#F8F4EA]/72
                sm:text-[8px]
              "
            >
              before there was an us
            </span>
          </div>

          {/* =====================================================
              IMMERSIVE STORY COMPOSITION
          ===================================================== */}

          <div className="relative mx-auto mt-6 sm:mt-8">
            {/* ===================================================
                SOFT TEXT SHEEN
                No rectangular box.
            =================================================== */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[43%]
                h-[72%]
                w-[118%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-[50%]
                bg-[#E9E8DC]/24
                blur-[54px]
                sm:h-[78%]
                sm:w-[108%]
                sm:blur-[72px]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[44%]
                h-[54%]
                w-[92%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-[50%]
                bg-[#F8F4EA]/12
                blur-[28px]
                sm:h-[58%]
                sm:w-[86%]
                sm:blur-[38px]
              "
            />

            {/* =================================================
                POLAROID
            ================================================= */}

            <div
              className="
                relative
                z-30
                mx-auto
                w-[67%]
                max-w-[365px]
                rotate-[-1.2deg]
                bg-[#F8F4EA]
                p-2
                pb-[45px]
                shadow-[0_25px_55px_-25px_rgba(24,30,24,0.62)]
                sm:w-[48%]
                sm:max-w-[390px]
                sm:p-2.5
                sm:pb-[52px]
              "
            >
              {/* Tape */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-[-11px]
                  z-40
                  h-[24px]
                  w-[78px]
                  -translate-x-1/2
                  rotate-[1deg]
                  bg-[#D8CAA9]/68
                "
                style={{
                  clipPath:
                    "polygon(2% 8%,98% 0%,97% 90%,73% 94%,48% 88%,25% 96%,1% 90%)",
                }}
              />

              {/* Childhood photo */}
              <div className="relative aspect-[0.72] overflow-hidden bg-[#D9D6CA]">
                <Image
                  src={photos.childhood}
                  alt={`${brideName} and ${groomName} as children`}
                  fill
                  priority
                  sizes="(max-width: 640px) 67vw, 390px"
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    border
                    border-[#30352B]/[0.10]
                  "
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 left-0 right-0 text-center sm:bottom-3.5">
                <div
                  className="
                    font-[var(--font-cormorant)]
                    text-[15px]
                    font-medium
                    leading-none
                    text-[#30352B]
                    sm:text-[17px]
                  "
                >
                  where it all began
                </div>

                <div
                  className="
                    mt-1
                    font-[var(--font-cormorant)]
                    text-[6px]
                    uppercase
                    tracking-[0.27em]
                    text-[#30352B]/38
                    sm:text-[7px]
                  "
                >
                  before the story
                </div>
              </div>
            </div>

            {/* =================================================
                STORY TEXT
                Floating directly over the image.
            ================================================= */}

            <div className="relative z-20 mx-auto mt-[-2px] max-w-[720px] px-2 sm:mt-[-14px] sm:px-4">
              {/* Small rule */}
              <div className="mx-auto mb-5 h-px w-9 bg-[#F8F4EA]/42 sm:mb-6 sm:w-12" />

              {/* Heading */}
              <h2
                id="our-story-title"
                className="
                  text-center
                  font-[var(--font-cormorant)]
                  text-[clamp(3rem,8vw,5.5rem)]
                  font-light
                  leading-[0.82]
                  tracking-[-0.06em]
                  text-[#F8F4EA]
                  drop-shadow-[0_3px_15px_rgba(31,38,29,0.18)]
                "
              >
                Two little
                <br />
                <span className="italic text-[#D8CAA9]">lives.</span>
              </h2>

              {/* Thin dividing line */}
              <div className="mx-auto mt-6 flex items-center justify-center gap-3 sm:mt-7">
                <span className="h-px w-10 bg-[#F8F4EA]/24 sm:w-16" />

                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rotate-45
                    border
                    border-[#D8CAA9]/60
                  "
                />

                <span className="h-px w-10 bg-[#F8F4EA]/24 sm:w-16" />
              </div>

              {/* Main paragraph */}
              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[570px]
                  text-center
                  font-[var(--font-cormorant)]
                  text-[15px]
                  font-light
                  leading-[1.6]
                  text-[#F8F4EA]/82
                  drop-shadow-[0_2px_10px_rgba(31,38,29,0.16)]
                  sm:mt-7
                  sm:text-[17px]
                "
              >
                Long before there was a story to tell, there were simply two
                little lives growing in their own directions, completely unaware
                of where they would eventually meet.
              </p>

              {/* Supporting paragraph */}
              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[470px]
                  text-center
                  font-[var(--font-cormorant)]
                  text-[14px]
                  font-light
                  leading-[1.55]
                  text-[#F8F4EA]/58
                  sm:text-[15px]
                "
              >
                Different days. Different places. Different versions of who they
                were becoming.
              </p>

              {/* =================================================
                  NAMES
              ================================================= */}

              <div className="mt-7 text-center sm:mt-8">
                <span
                  className="
                    block
                    font-[var(--font-cormorant)]
                    text-[7px]
                    uppercase
                    tracking-[0.32em]
                    text-[#F8F4EA]/42
                  "
                >
                  And somehow
                </span>

                <div className="mt-2.5 flex flex-wrap items-baseline justify-center gap-x-3">
                  <span
                    className="
                      font-[var(--font-allura)]
                      text-[clamp(2.9rem,7vw,4.8rem)]
                      leading-none
                      text-[#F8F4EA]
                      drop-shadow-[0_3px_12px_rgba(31,38,29,0.18)]
                    "
                  >
                    {brideName}
                  </span>

                  <span
                    className="
                      font-[var(--font-cormorant)]
                      text-[17px]
                      italic
                      text-[#D8CAA9]/90
                    "
                  >
                    &
                  </span>

                  <span
                    className="
                      font-[var(--font-allura)]
                      text-[clamp(2.9rem,7vw,4.8rem)]
                      leading-none
                      text-[#F8F4EA]
                      drop-shadow-[0_3px_12px_rgba(31,38,29,0.18)]
                    "
                  >
                    {groomName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CLOSING LINE
          ===================================================== */}

          <div className="mx-auto mt-9 max-w-[600px] text-center sm:mt-10">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-[#F8F4EA]/18" />

              <span
                className="
                  font-[var(--font-cormorant)]
                  text-[7px]
                  uppercase
                  tracking-[0.28em]
                  text-[#F8F4EA]/52
                  sm:text-[8px]
                "
              >
                before us
              </span>

              <span className="h-px flex-1 bg-[#F8F4EA]/18" />
            </div>

            <p
              className="
                mt-3
                font-[var(--font-cormorant)]
                text-[12px]
                italic
                text-[#F8F4EA]/50
                sm:text-[14px]
              "
            >
              And this was only the beginning.
            </p>
          </div>
        </div>

        {/* =======================================================
            FOOTER
        ======================================================= */}

        <div className="relative z-30 mt-8 border-t border-[#F8F4EA]/16 pt-4 sm:mt-10 sm:pt-5">
          <div className="flex items-center justify-between">
            <span
              className="
                font-[var(--font-cormorant)]
                text-[7px]
                uppercase
                tracking-[0.28em]
                text-[#F8F4EA]/38
                sm:text-[8px]
              "
            >
              chapter 01
            </span>

            <span
              className="
                font-[var(--font-cormorant)]
                text-[7px]
                uppercase
                tracking-[0.28em]
                text-[#F8F4EA]/38
                sm:text-[8px]
              "
            >
              our story
            </span>

            <span
              className="
                font-[var(--font-cormorant)]
                text-[7px]
                uppercase
                tracking-[0.28em]
                text-[#F8F4EA]/38
                sm:text-[8px]
              "
            >
              05
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          PAGE EDGE MARK
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-4
          left-5
          right-5
          z-50
          flex
          items-center
          justify-between
          sm:bottom-6
          sm:left-8
          sm:right-8
          lg:left-12
          lg:right-12
        "
      >
        <span className="h-1 w-1 bg-[#F8F4EA]/30" />

        <span className="relative h-6 w-px bg-[#F8F4EA]/14">
          <span className="absolute bottom-0 left-1/2 h-1.5 w-1 -translate-x-1/2 bg-[#F8F4EA]/30" />
        </span>
      </div>
    </section>
  );
}
