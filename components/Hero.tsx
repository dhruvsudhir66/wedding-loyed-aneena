"use client";

import Image from "next/image";
import { Allura, Cormorant_Garamond } from "next/font/google";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="The beginning"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#E9DDC7]
        text-[#34342D]
      "
    >
      {/* =====================================================
          PAPER BASE
          ===================================================== */}

      <div className="absolute inset-0 bg-[#E9DDC7]" />

      {/* Soft paper variation + subtle sage wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 14% 16%,
              rgba(255,255,255,0.72) 0,
              transparent 27%
            ),
            radial-gradient(
              circle at 86% 76%,
              rgba(126,105,76,0.08) 0,
              transparent 30%
            ),
            radial-gradient(
              circle at 18% 74%,
              rgba(89,103,76,0.065) 0,
              transparent 24%
            ),
            linear-gradient(
              105deg,
              rgba(255,255,255,0.12),
              transparent 38%,
              rgba(112,91,63,0.04)
            )
          `,
        }}
      />

      {/* Paper grain */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          mix-blend-multiply
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='.42'/%3E%3C/svg%3E\")",
        }}
      />

      {/* =====================================================
          SOFT TONAL DETAILS
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-[#F8F1E4]/30
          blur-3xl
        "
      />

      {/* Subtle sage glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-24
          h-72
          w-72
          rounded-full
          bg-[#59674D]/[0.045]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-28
          -right-24
          h-72
          w-72
          rounded-full
          bg-[#C7B99D]/15
          blur-3xl
        "
      />

      {/* =====================================================
          EDITORIAL RULE
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-6
          top-[12%]
          h-px
          w-10
          bg-[#59674D]/45
          sm:left-10
          sm:w-14
          lg:left-[8%]
        "
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1100px]
          flex-col
          px-6
          pb-24
          pt-24
          sm:px-10
          sm:pb-28
          sm:pt-28
          lg:px-16
          lg:pt-24
        "
      >
        {/* =====================================================
            CHAPTER
            ===================================================== */}

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#59674D]/55" />

          <span
            className="
              font-sans
              text-[8px]
              font-medium
              uppercase
              tracking-[0.38em]
              text-[#59624D]/75
              sm:text-[9px]
            "
          >
            Chapter one
          </span>
        </div>

        {/* =====================================================
            IMAGE FIRST
            ===================================================== */}

        <div
          className="
            relative
            mt-10
            flex
            justify-center
            sm:mt-12
            lg:mt-14
          "
        >
          {/* Photograph shadow */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[-4%]
              left-1/2
              h-[94%]
              w-[70%]
              -translate-x-[47%]
              translate-y-5
              rotate-[2deg]
              bg-[#59624D]/[0.12]
              blur-[24px]
              sm:w-[58%]
              sm:translate-y-7
              sm:blur-[28px]
              lg:w-[46%]
            "
          />

          {/* Photograph */}
          <div
            className="
              relative
              z-10
              w-[70%]
              max-w-[310px]
              rotate-[-2.2deg]
              bg-[#F7F1E5]
              p-2.5
              pb-10
              shadow-[0_18px_40px_rgba(57,48,38,0.16),0_4px_10px_rgba(57,48,38,0.10)]
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:rotate-[-0.5deg]
              sm:w-[58%]
              sm:max-w-[370px]
              sm:p-3
              sm:pb-12
              lg:w-[46%]
              lg:max-w-[430px]
              lg:p-4
              lg:pb-14
            "
          >
            {/* =================================================
                TAPE
                ================================================= */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-[-17px]
                z-30
                h-[32px]
                w-[96px]
                -translate-x-1/2
                rotate-[1.5deg]
                bg-[#D8CAA9]/75
                shadow-[0_2px_5px_rgba(65,55,40,0.10)]
                backdrop-blur-[1px]
                sm:h-[36px]
                sm:w-[112px]
                lg:top-[-20px]
                lg:h-[42px]
                lg:w-[132px]
              "
              style={{
                clipPath:
                  "polygon(2% 8%, 98% 0%, 96% 90%, 72% 94%, 48% 88%, 25% 96%, 1% 90%)",
              }}
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-17px]
                z-[31]
                h-[32px]
                w-[96px]
                -translate-x-1/2
                rotate-[1.5deg]
                opacity-20
                sm:h-[36px]
                sm:w-[112px]
                lg:top-[-20px]
                lg:h-[42px]
                lg:w-[132px]
              "
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent 0, transparent 9px, rgba(90,75,53,0.12) 10px, transparent 11px)",
              }}
            />

            {/* =================================================
                IMAGE
                ================================================= */}

            <div className="relative aspect-[0.72] w-full overflow-hidden bg-[#D8CCB7]">
              <Image
                src="/images/childhood-couple.jpeg"
                alt="A childhood photograph of the couple together"
                fill
                priority
                sizes="70vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[#59624D]/[0.035]
                  mix-blend-multiply
                "
              />
            </div>

            {/* =================================================
                PHOTO CAPTION
                ================================================= */}

            <div
              className={`
                ${cormorant.className}
                absolute
                bottom-2
                left-3
                text-[16px]
                italic
                leading-none
                text-[#4F5545]
                sm:bottom-3
                sm:left-4
                sm:text-[19px]
                lg:text-[21px]
              `}
            >
              look where it all began
            </div>

            {/* Small heart */}
            <div
              aria-hidden="true"
              className={`
                ${cormorant.className}
                absolute
                bottom-2
                right-3
                rotate-[-5deg]
                text-[13px]
                text-[#59674D]/65
                sm:bottom-3
                sm:right-4
                sm:text-[15px]
              `}
            >
              ♡
            </div>
          </div>
        </div>

        {/* =====================================================
            STORY CONTENT
            ===================================================== */}

        <div
          className="
            mx-auto
            mt-14
            w-full
            max-w-[760px]
            text-center
            sm:mt-16
            lg:mt-20
          "
        >
          {/* Small label */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#59674D]/30" />

            <span
              className="
                font-sans
                text-[8px]
                font-medium
                uppercase
                tracking-[0.38em]
                text-[#59624D]/65
                sm:text-[9px]
              "
            >
              The beginning
            </span>

            <span className="h-px w-8 bg-[#59674D]/30" />
          </div>

          {/* =================================================
              MAIN HEADING
              ================================================= */}

          <h1
            className={`
              ${allura.className}
              mt-7
              text-[clamp(4.2rem,17vw,8rem)]
              leading-[0.8]
              tracking-[-0.025em]
              text-[#46523E]
              sm:mt-8
            `}
          >
            Before we knew.
          </h1>

          {/* Sage divider */}
          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-8
              h-px
              w-12
              bg-[#59674D]/30
              sm:mt-10
              sm:w-16
            "
          />

          {/* Story */}
          <p
            className="
              mx-auto
              mt-7
              max-w-[470px]
              font-sans
              text-[11px]
              font-normal
              leading-[1.9]
              tracking-[0.01em]
              text-[#4A4940]/72
              sm:mt-8
              sm:text-[12px]
              sm:leading-[1.95]
            "
          >
            Long before there was a story to tell, there was simply a
            photograph, a moment, and two little people who had no idea what was
            ahead.
          </p>

          {/* Handwritten note */}
          <div
            className={`
              ${cormorant.className}
              mt-8
              rotate-[-2deg]
              text-[18px]
              italic
              leading-none
              text-[#59674D]
              sm:mt-10
              sm:text-[22px]
            `}
          >
            and somehow, it all began here
          </div>
        </div>

        {/* =====================================================
            THEN / NOW
            ===================================================== */}

        <div className="mt-12 flex justify-center sm:mt-14">
          <div className="flex items-center gap-4">
            <span
              className="
                font-sans
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-[#59624D]/55
              "
            >
              Then
            </span>

            <span className="h-px w-8 bg-[#59674D]/25" />

            <span
              className="
                font-sans
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-[#59624D]/55
              "
            >
              Now
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          PAGE NUMBER
          ===================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-6
          z-30
          flex
          items-center
          gap-3
          sm:bottom-8
          sm:left-10
          lg:left-16
        "
      >
        <span
          className="
            font-sans
            text-[8px]
            font-medium
            tracking-[0.25em]
            text-[#59674D]/65
          "
        >
          01
        </span>

        <span className="h-px w-8 bg-[#59674D]/25" />

        <span
          className="
            font-sans
            text-[7px]
            uppercase
            tracking-[0.25em]
            text-[#59624D]/45
          "
        >
          The beginning
        </span>
      </div>

      {/* =====================================================
          CONTINUE INDICATOR
          ===================================================== */}

      <div
        className="
          absolute
          bottom-6
          right-6
          z-30
          flex
          flex-col
          items-center
          gap-2
          sm:bottom-8
          sm:right-10
        "
      >
        <span
          className="
            font-sans
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-[#59624D]/45
            [writing-mode:vertical-rl]
          "
        >
          Continue
        </span>

        <span className="h-8 w-px bg-[#59674D]/25" />
      </div>
    </section>
  );
}
