"use client";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { weddingConfig } from "@/config/wedding";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Our story"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#30352B]
        text-[#F8F4EA]
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}

      <div className="absolute inset-0">
        <Image
          src={weddingConfig.assets.hero}
          alt={weddingConfig.copy.hero.photoAlt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="
            object-cover
            object-center
            md:object-center
          "
        />
      </div>

      {/* =========================================================
          IMAGE TREATMENT
      ========================================================= */}

      {/* Sage tint */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#30352B]/15
          mix-blend-multiply
        "
      />

      {/* Overall readability */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(
            180deg,
            rgba(20,25,20,0.58)_0%,
            rgba(20,25,20,0.16)_22%,
            rgba(20,25,20,0.02)_44%,
            rgba(20,25,20,0.26)_72%,
            rgba(20,25,20,0.84)_100%
          )]
        "
      />

      {/* Bottom cinematic depth */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[58%]
          bg-[linear-gradient(
            180deg,
            transparent_0%,
            rgba(20,25,20,0.10)_20%,
            rgba(20,25,20,0.46)_63%,
            rgba(20,25,20,0.88)_100%
          )]
        "
      />

      {/* Soft warm veil */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_50%_48%,
            rgba(248,244,234,0.06),
            transparent_58%
          )]
        "
      />

      {/* =========================================================
          EDITORIAL FRAME
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-4
          z-20
          border
          border-white/20
          sm:inset-6
          lg:inset-9
        "
      />

      {/* Top left corner */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-4
          top-4
          z-30
          h-10
          w-10
          border-l
          border-t
          border-[#D7DECB]/65
          sm:left-6
          sm:top-6
          lg:left-9
          lg:top-9
        "
      />

      {/* Bottom right corner */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-4
          right-4
          z-30
          h-10
          w-10
          border-b
          border-r
          border-[#D7DECB]/45
          sm:bottom-6
          sm:right-6
          lg:bottom-9
          lg:right-9
        "
      />

      {/* =========================================================
          TOP HEADER
      ========================================================= */}

      <header
        className="
          absolute
          inset-x-0
          top-0
          z-30
          flex
          items-center
          justify-between
          px-7
          pt-8
          sm:px-10
          sm:pt-10
          md:px-12
          md:pt-12
          lg:px-16
          lg:pt-14
        "
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[#D7DECB]/70 sm:w-10" />

          <span
            className="
              font-sans
              text-[7px]
              font-medium
              uppercase
              tracking-[0.38em]
              text-[#F8F4EA]/90
              sm:text-[9px]
            "
          >
            CHAPTER ONE
          </span>
        </div>

        <div
          className={`
            ${cormorant.className}
            text-[18px]
            italic
            leading-none
            tracking-[0.08em]
            text-[#F8F4EA]/90
            sm:text-[21px]
          `}
        >
          {weddingConfig.couple.firstName?.charAt(0)}

          <span className="mx-1.5 text-[#C890A7]">&amp;</span>

          {weddingConfig.couple.secondName?.charAt(0)}
        </div>
      </header>

      {/* =========================================================
          DESKTOP FRAME LABELS
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-[34%]
          z-20
          hidden
          items-center
          justify-between
          px-12
          lg:flex
        "
      >
        <span
          className="
            font-sans
            text-[7px]
            uppercase
            tracking-[0.32em]
            text-white/45
          "
        >
          FRAME 01
        </span>

        <span
          className="
            font-sans
            text-[7px]
            uppercase
            tracking-[0.32em]
            text-white/45
          "
        >
          FRAME 02
        </span>

        <span
          className="
            font-sans
            text-[7px]
            uppercase
            tracking-[0.32em]
            text-white/45
          "
        >
          FRAME 03
        </span>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[100svh]
          w-full
          flex-col
          justify-end
          px-6
          pb-24
          pt-32
          sm:px-10
          sm:pb-28
          md:px-12
          lg:px-16
          lg:pb-24
        "
      >
        <div className="w-full max-w-[1160px]">
          {/* =====================================================
              HERO TITLE
          ===================================================== */}

          <div className="max-w-[1050px]">
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-8 bg-[#D7DECB]/55 sm:w-12" />

              <span
                className="
                  font-sans
                  text-[6px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-[#F8F4EA]/65
                  sm:text-[7px]
                "
              >
                OUR STORY
              </span>
            </div>

            <h1
              className={`
                ${cormorant.className}
                max-w-[980px]
                text-[#FFF9F1]
                drop-shadow-[0_6px_24px_rgba(15,20,15,0.58)]
              `}
            >
              <span
                className="
                  block
                  text-[clamp(4rem,15vw,9rem)]
                  font-medium
                  leading-[0.78]
                  tracking-[-0.055em]
                "
              >
                WE FOUND LOVE.
              </span>
            </h1>
          </div>

          {/* =====================================================
              STORY COPY
          ===================================================== */}

          <div
            className="
              mt-6
              max-w-[560px]
              border-l
              border-[#D7DECB]/65
              pl-4
              sm:mt-7
              sm:pl-6
            "
          >
            <p
              className={`
                ${cormorant.className}
                text-[15px]
                leading-[1.52]
                text-[#F8F4EA]/92
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.48)]
                sm:text-[19px]
                sm:leading-[1.5]
              `}
            >
              A little laughter. A little movement. A thousand small moments
              that slowly became something more. And somewhere along the way,
              two separate stories began moving in the same direction.
            </p>
          </div>

          {/* =====================================================
              COUPLE / DATE / LOCATION
          ===================================================== */}

          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-x-8
              gap-y-5
              sm:mt-10
              sm:flex
              sm:items-end
              sm:gap-10
              lg:gap-14
            "
          >
            {/* Couple */}
            <div>
              <p
                className="
                  font-sans
                  text-[6px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#D7DECB]/60
                  sm:text-[7px]
                "
              >
                THE COUPLE
              </p>

              <p
                className={`
                  ${cormorant.className}
                  mt-1
                  text-[20px]
                  leading-none
                  text-[#FFF9F1]
                  sm:text-[25px]
                `}
              >
                {weddingConfig.couple.firstName}

                <span className="mx-1.5 italic text-[#C890A7]">&amp;</span>

                {weddingConfig.couple.secondName}
              </p>
            </div>

            {/* Date */}
            <div>
              <p
                className="
                  font-sans
                  text-[6px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#D7DECB]/60
                  sm:text-[7px]
                "
              >
                THE DAY
              </p>

              <p
                className="
                  mt-1
                  font-sans
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#FFF9F1]/90
                  sm:text-[9px]
                "
              >
                {weddingConfig.date.display}
              </p>
            </div>

            {/* Location */}
            <div className="col-span-2 sm:block">
              <p
                className="
                  font-sans
                  text-[6px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#D7DECB]/60
                  sm:text-[7px]
                "
              >
                THE PLACE
              </p>

              <p
                className={`
                  ${cormorant.className}
                  mt-1
                  text-[17px]
                  italic
                  leading-none
                  text-[#FFF9F1]/90
                  sm:text-[19px]
                `}
              >
                {weddingConfig.date.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE SIDE LABEL
      ========================================================= */}

      <div
        className="
          absolute
          right-5
          top-1/2
          z-30
          flex
          -translate-y-1/2
          flex-col
          items-center
          gap-3
          lg:hidden
        "
      >
        <span className="h-7 w-px bg-[#D7DECB]/35" />

        <span
          className="
            font-sans
            text-[6px]
            uppercase
            tracking-[0.26em]
            text-white/50
            [writing-mode:vertical-rl]
          "
        >
          OUR STORY
        </span>

        <span className="h-7 w-px bg-[#D7DECB]/20" />
      </div>

      {/* =========================================================
          DESKTOP SIDE STORY MARKER
      ========================================================= */}

      <div
        className="
          absolute
          right-8
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          flex-col
          items-center
          gap-4
          lg:flex
        "
      >
        <span className="h-12 w-px bg-[#D7DECB]/35" />

        <span
          className="
            font-sans
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-white/45
            [writing-mode:vertical-rl]
          "
        >
          THEN
        </span>

        <span className="h-7 w-px bg-[#D7DECB]/20" />

        <span
          className="
            font-sans
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-white/75
            [writing-mode:vertical-rl]
          "
        >
          NOW
        </span>

        <span className="h-12 w-px bg-[#D7DECB]/35" />
      </div>

      {/* =========================================================
          BOTTOM LEFT PAGE MARKER
      ========================================================= */}

      <div
        className="
          absolute
          bottom-7
          left-7
          z-30
          flex
          items-center
          gap-3
          sm:bottom-9
          sm:left-10
          md:left-12
          lg:left-16
        "
      >
        <span
          className="
            font-sans
            text-[7px]
            font-medium
            tracking-[0.25em]
            text-[#F8F4EA]/70
            sm:text-[8px]
          "
        >
          01
        </span>

        <span className="h-px w-7 bg-[#D7DECB]/40 sm:w-8" />

        <span
          className="
            font-sans
            text-[6px]
            uppercase
            tracking-[0.25em]
            text-[#F8F4EA]/45
            sm:text-[7px]
          "
        >
          OUR STORY
        </span>
      </div>

      {/* =========================================================
          CONTINUE INDICATOR
      ========================================================= */}

      <div
        className="
          absolute
          bottom-7
          right-7
          z-30
          flex
          flex-col
          items-center
          gap-2
          sm:bottom-9
          sm:right-10
        "
      >
        <span
          className="
            font-sans
            text-[6px]
            uppercase
            tracking-[0.3em]
            text-[#F8F4EA]/55
            [writing-mode:vertical-rl]
            sm:text-[7px]
          "
        >
          CONTINUE
        </span>

        <span className="h-8 w-px bg-[#D7DECB]/40 sm:h-9" />

        <span className="h-1.5 w-1.5 rounded-full bg-[#C890A7]" />
      </div>

      {/* =========================================================
          SUBTLE FILM GRAIN
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-40
          opacity-[0.03]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='.4'/%3E%3C/svg%3E\")",
        }}
      />
    </section>
  );
}

export default Hero;
