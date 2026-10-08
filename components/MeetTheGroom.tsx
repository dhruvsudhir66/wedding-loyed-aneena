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

export default function MeetTheGroom() {
  const groomName = weddingConfig.couple.firstName;

  /*
    Replace these three paths with the groom's final photos.
  */
  const photos = {
    main: "/images/loyed.webp",
    second: "/images/groom-4.jpeg",
    third: "/images/groom-3.jpeg",
  };

  return (
    <section
      id="meet-the-groom"
      aria-labelledby="meet-the-groom-title"
      className={`
        ${allura.variable}
        ${cormorant.variable}
        relative
        w-full
        overflow-hidden
        bg-[#F8F4EA]
        text-[#30352B]
      `}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Soft sage wash */}
        <div
          className="
            absolute
            -right-[28%]
            top-[10%]
            h-[52%]
            w-[70%]
            rounded-full
            bg-[#59674D]/[0.035]
            blur-[90px]
            sm:-right-[25%]
            sm:top-[15%]
            sm:h-[60%]
            sm:w-[60%]
            sm:blur-[120px]
          "
        />

        {/* Warm light around collage */}
        <div
          className="
            absolute
            -left-[18%]
            top-[12%]
            h-[54%]
            w-[70%]
            rounded-full
            bg-white/[0.58]
            blur-[90px]
            sm:left-[-10%]
            sm:top-[10%]
            sm:h-[70%]
            sm:w-[55%]
            sm:blur-[120px]
          "
        />

        {/* Lower subtle depth */}
        <div
          className="
            absolute
            bottom-[-10%]
            right-[15%]
            h-[35%]
            w-[70%]
            rounded-full
            bg-[#59674D]/[0.022]
            blur-[90px]
            sm:bottom-[-20%]
            sm:right-[25%]
            sm:h-[45%]
            sm:w-[55%]
            sm:blur-[120px]
          "
        />
      </div>

      {/* =========================================================
          FINE PAPER GRAIN
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.022]
        "
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

      {/* =========================================================
          LARGE BACKGROUND CHAPTER NUMBER
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[3vw]
          top-[1%]
          select-none
          font-[var(--font-cormorant)]
          text-[clamp(8rem,24vw,26rem)]
          font-medium
          leading-none
          tracking-[-0.09em]
          text-[#59674D]/[0.026]
          sm:-right-[4vw]
          sm:top-[2vh]
        "
      >
        04
      </div>

      {/* =========================================================
          MAIN PAGE
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          pb-10
          pt-8
          sm:px-8
          sm:pb-14
          sm:pt-10
          lg:px-14
          lg:pb-16
          lg:pt-12
        "
      >
        {/* =======================================================
            HEADER
        ======================================================= */}

        <header className="relative z-30 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-px w-7 bg-[#30352B]/35 sm:w-12" />

            <span
              className="
                font-[var(--font-cormorant)]
                text-[8px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-[#59674D]
                sm:text-[10px]
              "
            >
              The groom
            </span>
          </div>

          <span
            className="
              font-[var(--font-cormorant)]
              text-[14px]
              italic
              leading-none
              text-[#30352B]/40
              sm:text-[18px]
            "
          >
            04
          </span>
        </header>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            mt-7
            grid
            w-full
            max-w-[1220px]
            grid-cols-1
            gap-8
            lg:mt-10
            lg:grid-cols-[0.78fr_1.22fr]
            lg:items-center
            lg:gap-10
          "
        >
          {/* =====================================================
              TYPOGRAPHIC CONTENT
          ===================================================== */}

          <div
            className="
              relative
              z-30
              order-1
              flex
              flex-col
              justify-center
              lg:order-1
            "
          >
            {/* Main heading */}
            <h2
              id="meet-the-groom-title"
              className="
                max-w-[500px]
                font-[var(--font-cormorant)]
                text-[clamp(2.8rem,12vw,6rem)]
                font-medium
                leading-[0.82]
                tracking-[-0.05em]
                text-[#30352B]
                sm:text-[clamp(3.5rem,8vw,6rem)]
                lg:text-[clamp(4rem,6vw,6rem)]
              "
            >
              Meet
              <br />
              <span className="ml-[0.06em]">the groom.</span>
            </h2>

            {/* Groom name */}
            <div className="relative mt-3 sm:mt-5">
              <h3
                className="
                  font-[var(--font-allura)]
                  text-[clamp(3.3rem,12vw,6rem)]
                  leading-[0.8]
                  text-[#59674D]
                  sm:text-[clamp(4rem,7vw,6rem)]
                "
              >
                {groomName}
              </h3>
            </div>

            {/* First paragraph */}
            <p
              className="
                mt-6
                max-w-[390px]
                font-[var(--font-cormorant)]
                text-[15px]
                leading-[1.45]
                text-[#30352B]/65
                sm:mt-8
                sm:text-[18px]
                lg:text-[19px]
              "
            >
              Son of Varghese &amp; Ancy, and brother to Leanda. Rooted in the
              love, memories, and values of the family that shaped him.
            </p>

            {/* Second paragraph */}
            <p
              className="
                mt-5
                max-w-[390px]
                font-[var(--font-cormorant)]
                text-[15px]
                leading-[1.45]
                text-[#30352B]/65
                sm:mt-7
                sm:text-[18px]
                lg:text-[19px]
              "
            >
              Works as a Merchant Navy officer, travelling the seas while
              building a life grounded in family and purpose.
            </p>

            {/* Editorial detail */}
            <div
              className="
                mt-6
                flex
                items-center
                gap-3
                sm:mt-9
                sm:gap-4
              "
            >
              <span className="h-px w-7 bg-[#59674D]/35 sm:w-9" />

              <span
                className="
                  font-[var(--font-cormorant)]
                  text-[7px]
                  uppercase
                  tracking-[0.28em]
                  text-[#30352B]/40
                  sm:text-[9px]
                "
              >
                04 · His story
              </span>
            </div>
          </div>

          {/* =====================================================
              THREE PHOTO COLLAGE
          ===================================================== */}

          <div
            className="
              relative
              order-2
              flex
              min-h-[410px]
              items-center
              justify-center
              sm:min-h-[510px]
              lg:order-2
              lg:min-h-[650px]
              xl:min-h-[700px]
            "
          >
            {/* =================================================
                SOFT COLLAGE BACKDROP
            ================================================= */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-1/2
                h-[76%]
                w-[82%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-[45%]
                bg-white/[0.55]
                blur-[50px]
                sm:h-[78%]
                sm:w-[72%]
                sm:blur-[65px]
              "
            />

            {/* =================================================
                EDITORIAL LINES
            ================================================= */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-[4%]
                top-[18%]
                hidden
                h-px
                w-[30%]
                bg-[#59674D]/15
                sm:block
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[13%]
                right-[3%]
                hidden
                h-px
                w-[28%]
                bg-[#59674D]/15
                sm:block
              "
            />

            {/* =================================================
                PHOTO 01 — LEFT
            ================================================= */}

            <div
              className="
                absolute
                left-[2%]
                top-[9%]
                z-10
                w-[31%]
                max-w-[165px]
                rotate-[-5deg]
                sm:left-[5%]
                sm:top-[10%]
                sm:w-[31%]
                sm:max-w-[205px]
                lg:left-[7%]
                lg:w-[27%]
                lg:max-w-[215px]
              "
            >
              {/* Tape */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-[-9px]
                  z-30
                  h-5
                  w-12
                  -translate-x-1/2
                  rotate-[-4deg]
                  bg-[#C6BFAF]/65
                  sm:top-[-12px]
                  sm:h-7
                  sm:w-16
                "
              />

              {/* Frame */}
              <div
                className="
                  relative
                  bg-[#F8F4EA]
                  p-1.5
                  pb-7
                  shadow-[0_18px_40px_-28px_rgba(48,53,43,0.45)]
                  sm:p-3
                  sm:pb-12
                "
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#D9D6CA]">
                  <Image
                    src={photos.second}
                    alt={`Portrait of ${groomName}`}
                    fill
                    sizes="(max-width: 640px) 31vw, (max-width: 1024px) 210px, 220px"
                    className="object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      border
                      border-black/[0.07]
                    "
                  />
                </div>

                {/* Frame notation */}
                <div
                  className="
                    absolute
                    bottom-1.5
                    left-2
                    right-2
                    flex
                    items-center
                    justify-between
                    sm:bottom-3
                    sm:left-4
                    sm:right-4
                  "
                >
                  <span
                    className="
                      font-[var(--font-cormorant)]
                      text-[6px]
                      tracking-[0.2em]
                      text-[#30352B]/35
                      sm:text-[7px]
                    "
                  >
                    01
                  </span>

                  <span className="h-px w-4 bg-[#59674D]/20 sm:w-5" />
                </div>
              </div>
            </div>

            {/* =================================================
                PHOTO 02 — MAIN
            ================================================= */}

            <div
              className="
                relative
                z-20
                w-[54%]
                max-w-[275px]
                sm:w-[48%]
                sm:max-w-[340px]
                lg:w-[46%]
                lg:max-w-[365px]
              "
            >
              {/* Offset frame */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-2
                  -right-2
                  inset-0
                  border
                  border-[#59674D]/22
                  sm:-bottom-4
                  sm:-right-4
                "
              />

              {/* Main photo print */}
              <div
                className="
                  relative
                  bg-[#F8F4EA]
                  p-1.5
                  pb-8
                  shadow-[0_25px_60px_-30px_rgba(48,53,43,0.45)]
                  sm:p-3
                  sm:pb-14
                "
              >
                <div className="group relative aspect-[3/4] overflow-hidden bg-[#D9D6CA]">
                  <Image
                    src={photos.main}
                    alt={`Portrait of ${groomName}`}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 54vw, (max-width: 1024px) 48vw, 365px"
                    className="
                      object-cover
                      object-[center_18%]
                      transition-transform
                      duration-700
                      ease-out
                      motion-safe:group-hover:scale-[1.02]
                      sm:object-[center_16%]
                      lg:object-center
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      border
                      border-black/[0.07]
                    "
                  />
                </div>

                {/* Main frame notation */}
                <div
                  className="
                    absolute
                    bottom-2
                    left-2
                    right-2
                    flex
                    items-center
                    justify-between
                    sm:bottom-3.5
                    sm:left-4
                    sm:right-4
                  "
                >
                  <span
                    className="
                      font-[var(--font-cormorant)]
                      text-[6px]
                      tracking-[0.18em]
                      text-[#30352B]/40
                      sm:text-[8px]
                    "
                  >
                    FRAME 02
                  </span>

                  <span
                    className="
                      font-[var(--font-cormorant)]
                      text-[6px]
                      tracking-[0.14em]
                      text-[#30352B]/30
                      sm:text-[8px]
                    "
                  >
                    LY · 26
                  </span>
                </div>
              </div>

              {/* Main tape */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-[-10px]
                  z-30
                  h-6
                  w-14
                  -translate-x-1/2
                  rotate-[1deg]
                  bg-[#C6BFAF]/70
                  sm:top-[-13px]
                  sm:h-9
                  sm:w-24
                "
              />
            </div>

            {/* =================================================
                PHOTO 03 — RIGHT
            ================================================= */}

            <div
              className="
                absolute
                bottom-[7%]
                right-[1%]
                z-30
                w-[32%]
                max-w-[170px]
                rotate-[4deg]
                sm:bottom-[7%]
                sm:right-[5%]
                sm:w-[31%]
                sm:max-w-[205px]
                lg:right-[7%]
                lg:w-[27%]
                lg:max-w-[215px]
              "
            >
              {/* Tape */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-[-8px]
                  z-30
                  h-5
                  w-12
                  -translate-x-1/2
                  rotate-[5deg]
                  bg-[#C6BFAF]/65
                  sm:top-[-11px]
                  sm:h-7
                  sm:w-16
                "
              />

              {/* Frame */}
              <div
                className="
                  relative
                  bg-[#F8F4EA]
                  p-1.5
                  pb-7
                  shadow-[0_18px_40px_-28px_rgba(48,53,43,0.45)]
                  sm:p-3
                  sm:pb-12
                "
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#D9D6CA]">
                  <Image
                    src={photos.third}
                    alt={`Portrait of ${groomName}`}
                    fill
                    sizes="(max-width: 640px) 32vw, (max-width: 1024px) 210px, 220px"
                    className="object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      border
                      border-black/[0.07]
                    "
                  />
                </div>

                {/* Frame notation */}
                <div
                  className="
                    absolute
                    bottom-1.5
                    left-2
                    right-2
                    flex
                    items-center
                    justify-between
                    sm:bottom-3
                    sm:left-4
                    sm:right-4
                  "
                >
                  <span
                    className="
                      font-[var(--font-cormorant)]
                      text-[6px]
                      tracking-[0.2em]
                      text-[#30352B]/35
                      sm:text-[7px]
                    "
                  >
                    03
                  </span>

                  <span className="h-px w-4 bg-[#59674D]/20 sm:w-5" />
                </div>
              </div>
            </div>

            {/* =================================================
                SMALL EDITORIAL CROSS
            ================================================= */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-[8%]
                top-[7%]
                hidden
                h-5
                w-5
                sm:block
                sm:h-6
                sm:w-6
              "
            >
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#59674D]/20" />

              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#59674D]/20" />
            </div>

            {/* Bottom marker */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[3%]
                right-[10%]
                hidden
                items-center
                gap-2
                sm:flex
              "
            >
              <span className="h-px w-7 bg-[#59674D]/20" />
              <span className="h-1 w-1 rounded-full bg-[#59674D]/45" />
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM INDICATOR
        ======================================================= */}

        <div
          className="
            pointer-events-none
            mt-7
            flex
            items-center
            justify-between
            sm:mt-9
            lg:mt-4
          "
        >
          <span className="h-1 w-1 rounded-full bg-[#30352B]/25" />

          <span className="relative h-5 w-px bg-[#30352B]/15 sm:h-7">
            <span className="absolute bottom-0 left-1/2 h-1.5 w-1 -translate-x-1/2 bg-[#30352B]/30" />
          </span>
        </div>
      </div>

      {/* =========================================================
          MOBILE FADE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[12%]
          bg-gradient-to-t
          from-[#F8F4EA]
          via-transparent
          to-transparent
          sm:h-[14%]
        "
      />
    </section>
  );
}
