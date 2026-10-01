"use client";

import Image from "next/image";
import { Allura, Cormorant_Garamond } from "next/font/google";
import { weddingConfig } from "@/config/wedding";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
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
          COLLAGE PHOTOGRAPH
          ========================================================= */}

      <div className="absolute inset-0">
        <Image
          src={weddingConfig.assets.hero}
          alt={weddingConfig.copy.hero.photoAlt}
          fill
          priority
          quality={88}
          sizes="100vw"
          className="
            object-cover
            object-center
            md:object-center
          "
        />
      </div>

      {/* =========================================================
          PHOTOGRAPHIC COLOR TREATMENT
          ========================================================= */}

      {/* Subtle sage photographic tint */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#30352B]/18
          mix-blend-multiply
        "
      />

      {/* Top readability */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(
            180deg,
            rgba(25,30,24,0.62)_0%,
            rgba(25,30,24,0.16)_22%,
            transparent_48%,
            rgba(22,27,22,0.10)_62%,
            rgba(20,25,20,0.82)_100%
          )]
        "
      />

      {/* Bottom cinematic fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[55%]
          bg-[linear-gradient(
            180deg,
            transparent_0%,
            rgba(20,25,20,0.14)_25%,
            rgba(20,25,20,0.52)_62%,
            rgba(20,25,20,0.88)_100%
          )]
        "
      />

      {/* Slight warm center wash */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_50%_45%,
            rgba(248,244,234,0.06),
            transparent_55%
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
          left-0
          right-0
          top-0
          z-30
          flex
          items-start
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

        {/* Couple initials */}
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
          FRAME MARKERS
          ========================================================= */}

      {/* Desktop */}
      <div
        className="
          absolute
          left-0
          right-0
          top-1/3
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
            text-white/55
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
            text-white/55
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
            text-white/55
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
          px-7
          pb-24
          pt-32
          sm:px-10
          sm:pb-28
          md:px-12
          lg:px-16
          lg:pb-24
        "
      >
        <div className="w-full max-w-[920px]">
          {/* Small editorial label */}

          <div className="mb-5 flex items-center gap-3 sm:mb-7">
            <span
              className="
                font-sans
                text-[7px]
                font-medium
                uppercase
                tracking-[0.36em]
                text-[#F8F4EA]/75
                sm:text-[8px]
              "
            >
              THREE MOMENTS · ONE STORY
            </span>

            <span className="h-px w-9 bg-[#D7DECB]/55 sm:w-14" />
          </div>

          {/* =====================================================
              MAIN HEADING
              ===================================================== */}

          <h1
            className={`
              ${cormorant.className}
              max-w-[800px]
              text-[clamp(3.6rem,14vw,8.8rem)]
              font-medium
              leading-[0.78]
              tracking-[-0.04em]
              text-[#FFF9F1]
              drop-shadow-[0_5px_20px_rgba(15,20,15,0.55)]
              sm:text-[clamp(4.5rem,11vw,8.8rem)]
            `}
          >
            A story
            <br />
            <span className="ml-[8%]">in motion.</span>
          </h1>

          {/* Allura statement */}

          <div
            className={`
              ${allura.className}
              ml-[25%]
              mt-3
              rotate-[-4deg]
              text-[clamp(2rem,6vw,3.6rem)]
              leading-none
              text-[#D7DECB]
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.42)]
              sm:ml-[32%]
            `}
          >
            and somehow, it became us
          </div>

          {/* =====================================================
              STORY COPY
              ===================================================== */}

          <div
            className="
              mt-7
              max-w-[570px]
              border-l
              border-[#D7DECB]/70
              pl-4
              sm:mt-9
              sm:pl-6
            "
          >
            <p
              className={`
                ${cormorant.className}
                text-[16px]
                leading-[1.48]
                text-[#F8F4EA]/92
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.48)]
                sm:text-[20px]
                sm:leading-[1.5]
              `}
            >
              A little laughter. A little movement. A thousand small moments
              that slowly became something more. And somewhere along the way,
              two separate stories began moving in the same direction.
            </p>
          </div>

          {/* =====================================================
              COUPLE / DATE INFORMATION
              ===================================================== */}

          <div
            className="
              mt-8
              flex
              items-end
              gap-7
              sm:mt-10
              sm:gap-11
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
                  tracking-[0.32em]
                  text-[#D7DECB]/65
                  sm:text-[8px]
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
                  tracking-[0.32em]
                  text-[#D7DECB]/65
                  sm:text-[8px]
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
                  tracking-[0.22em]
                  text-[#FFF9F1]/90
                  sm:text-[10px]
                "
              >
                {weddingConfig.date.display}
              </p>
            </div>

            {/* Location */}

            <div className="hidden sm:block">
              <p
                className="
                  font-sans
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-[#D7DECB]/65
                "
              >
                THE PLACE
              </p>

              <p
                className={`
                  ${cormorant.className}
                  mt-1
                  text-[18px]
                  italic
                  text-[#FFF9F1]/90
                `}
              >
                {weddingConfig.date.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE FRAME INDICATOR
          ========================================================= */}

      <div
        className="
          absolute
          right-6
          top-1/2
          z-30
          flex
          -translate-y-1/2
          flex-col
          items-center
          gap-3
          sm:right-8
          lg:hidden
        "
      >
        <span className="h-8 w-px bg-[#D7DECB]/40" />

        <span
          className="
            font-sans
            text-[6px]
            uppercase
            tracking-[0.28em]
            text-white/60
            [writing-mode:vertical-rl]
          "
        >
          OUR STORY
        </span>

        <span className="h-8 w-px bg-[#D7DECB]/25" />
      </div>

      {/* =========================================================
          DESKTOP SIDE MARKER
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
        <span className="h-14 w-px bg-[#D7DECB]/40" />

        <span
          className="
            font-sans
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-white/55
            [writing-mode:vertical-rl]
          "
        >
          THEN
        </span>

        <span className="h-8 w-px bg-[#D7DECB]/20" />

        <span
          className="
            font-sans
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-white/80
            [writing-mode:vertical-rl]
          "
        >
          NOW
        </span>

        <span className="h-14 w-px bg-[#D7DECB]/40" />
      </div>

      {/* =========================================================
          PAGE NUMBER
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
            text-[#F8F4EA]/75
            sm:text-[8px]
          "
        >
          01
        </span>

        <span className="h-px w-7 bg-[#D7DECB]/45 sm:w-8" />

        <span
          className="
            font-sans
            text-[6px]
            uppercase
            tracking-[0.25em]
            text-[#F8F4EA]/50
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
            text-[#F8F4EA]/60
            [writing-mode:vertical-rl]
            sm:text-[7px]
          "
        >
          CONTINUE
        </span>

        <span className="h-8 w-px bg-[#D7DECB]/45 sm:h-9" />

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
          opacity-[0.035]
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
