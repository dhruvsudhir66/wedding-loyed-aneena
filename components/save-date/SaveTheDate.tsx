"use client";

import Image from "next/image";
import { useState } from "react";
import { Allura } from "next/font/google";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const invitation = {
  eyebrow: "Save the date",
  date: "22 · 11 · 2026",
  weekday: "Sunday",
  location: "Kerala, India",
  message:
    "A new chapter is about to begin. We would love for you to be part of it.",
};

/* =========================================================
   WEDDING RINGS
   ========================================================= */

function WeddingRings() {
  return (
    <svg
      viewBox="0 0 100 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-8 w-[72px] opacity-80"
    >
      <circle cx="39" cy="22" r="14" stroke="currentColor" strokeWidth="1.2" />

      <circle cx="61" cy="22" r="14" stroke="currentColor" strokeWidth="1.2" />

      <path
        d="M39 8L42 11L39 14L36 11L39 8Z"
        fill="currentColor"
        opacity="0.8"
      />

      <path
        d="M61 30L64 33L61 36L58 33L61 30Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

/* =========================================================
   BACKGROUND
   ========================================================= */

function BackgroundImage() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 18% 16%, rgba(255,255,255,0.58), transparent 42%), radial-gradient(ellipse at 82% 78%, rgba(143,112,77,0.13), transparent 48%), linear-gradient(135deg, #e9ddc7 0%, #d8c6a8 48%, #eee5d5 100%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(83,65,43,0.12)_100%)]" />

      <div className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(92,73,49,0.12)_0px,rgba(92,73,49,0.12)_1px,transparent_1px,transparent_5px),repeating-linear-gradient(90deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_7px)]" />

      <div className="absolute inset-0 bg-[#f4ecdd]/15" />
    </div>
  );
}

/* =========================================================
   SAVE THE DATE
   ========================================================= */

export function SaveTheDate() {
  const [isOpening, setIsOpening] = useState(false);

  const openInvitation = () => {
    if (isOpening) return;

    setIsOpening(true);

    /*
     * Tell WeddingMainContent to begin revealing
     * the Hero underneath.
     */
    window.dispatchEvent(new CustomEvent("wedding:open-invitation"));
  };

  return (
    <section
      id="save-the-date"
      aria-label="Save the date"
      className={`
        absolute
        inset-0
        z-30

        flex
        min-h-[100svh]
        items-center
        justify-center

        overflow-hidden

        bg-[#e4d5bd]

        px-3
        py-6

        sm:px-8
        sm:py-8

        lg:px-12

        transition-all
        duration-[1100ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${
          isOpening
            ? "pointer-events-none scale-[1.018] opacity-0"
            : "scale-100 opacity-100"
        }
      `}
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="absolute inset-0 bg-[#e4d5bd]" />

      <BackgroundImage />

      <div
        className="
          paper-grain
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-[0.055]
        "
      />

      {/* =====================================================
          CARD AMBIENT SHADOW
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-[7]

          h-[min(790px,calc(100svh-3rem))]
          w-[calc(100vw-2.75rem)]
          max-w-[560px]

          translate-y-5
          scale-[0.985]

          rounded-[3px]

          bg-[#30352B]/20

          blur-[22px]

          sm:h-[min(920px,calc(100svh-4rem))]
          sm:w-[calc(100%-4rem)]

          sm:translate-y-6
          sm:blur-[28px]

          transition-all
          duration-700
        "
      />

      {/* =====================================================
          CONTACT SHADOW
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-[8]

          h-[min(790px,calc(100svh-3rem))]
          w-[calc(100vw-2.75rem)]
          max-w-[560px]

          translate-y-3
          scale-[0.995]

          rounded-[2px]

          bg-[#30352B]/12

          blur-[8px]

          sm:h-[min(920px,calc(100svh-4rem))]
          sm:w-[calc(100%-4rem)]

          sm:translate-y-4
        "
      />

      {/* =====================================================
          INVITATION CARD
          ===================================================== */}

      <div
        className={`
          relative
          z-10

          h-[min(790px,calc(100svh-3rem))]
          w-[calc(100vw-2.75rem)]
          max-w-[560px]

          overflow-hidden
          rounded-[2px]

          bg-[#e9e5db]

          shadow-[0_4px_6px_rgba(48,53,43,0.10),0_12px_25px_rgba(48,53,43,0.13),0_28px_55px_rgba(48,53,43,0.17),0_45px_90px_rgba(48,53,43,0.12)]

          ring-1
          ring-[#F8F4EA]/40

          transition-all
          duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          sm:h-[min(920px,calc(100svh-4rem))]
          sm:w-full

          ${
            isOpening
              ? "-translate-y-10 scale-[1.025] opacity-0"
              : "translate-y-0 scale-100 opacity-100"
          }
        `}
      >
        {/* Paper edge */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[3]

            border
            border-white/10

            shadow-[inset_0_0_0_1px_rgba(48,53,43,0.06)]
          "
        />

        {/* Couple image */}

        <Image
          src="/images/couple-holding-hands.png"
          alt="A couple holding hands by the sea"
          fill
          priority
          sizes="(max-width: 640px) calc(100vw - 44px), 560px"
          className="object-cover object-center"
        />

        {/* Uniform overlay */}

        <div className="absolute inset-0 bg-[#30352B]/45" />

        {/* Vignette */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(20,24,19,0.18)_100%)]
          "
        />

        {/* =====================================================
            CONTENT
            ===================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[4]

            flex
            flex-col
            justify-between

            p-6

            text-[#F8F4EA]

            sm:p-10
          "
        >
          {/* Header */}

          <header className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-current/60 sm:w-7" />

              <span
                className="
                  font-sans
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.3em]

                  sm:text-[9px]
                  sm:tracking-[0.32em]
                "
              >
                Wedding invitation
              </span>
            </div>

            <div
              className="
                font-display
                text-lg
                italic
                leading-none
                opacity-90

                sm:text-xl
              "
            >
              L&nbsp;&nbsp;·&nbsp;&nbsp;A
            </div>
          </header>

          {/* Main */}

          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[420px]
              flex-1
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            <p
              className="
                font-sans
                text-[9px]
                font-medium
                uppercase
                tracking-[0.38em]

                text-[#F0EBE0]

                drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]

                sm:text-[10px]
                sm:tracking-[0.42em]
              "
            >
              {invitation.eyebrow}
            </p>

            <div
              className="
                my-4
                h-px
                w-10
                bg-[#E8E2D5]/75

                sm:my-5
                sm:w-12
              "
            />

            {/* Names */}

            <div
              className={`
                ${allura.className}

                flex
                w-full
                flex-col
                items-center

                text-[#F8F4EA]

                drop-shadow-[0_3px_14px_rgba(0,0,0,0.5)]
              `}
            >
              <div
                className="
                  flex
                  w-full
                  justify-center
                  overflow-visible

                  whitespace-nowrap

                  text-[clamp(3.7rem,17vw,7.8rem)]
                  leading-[0.78]
                "
              >
                Loyed
              </div>

              <div
                className="
                  flex
                  h-[clamp(2.8rem,9vw,4rem)]
                  w-full
                  items-center
                  justify-center

                  text-[clamp(2rem,8vw,3.2rem)]
                  leading-none

                  opacity-90
                "
              >
                &amp;
              </div>

              <div
                className="
                  flex
                  w-full
                  justify-center
                  overflow-visible

                  whitespace-nowrap

                  text-[clamp(3.7rem,17vw,7.8rem)]
                  leading-[0.78]
                "
              >
                Aneena
              </div>
            </div>

            {/* Message */}

            <p
              className="
                mt-7
                max-w-[260px]

                font-display
                text-sm
                italic
                leading-relaxed

                text-[#F0EBE0]

                drop-shadow-[0_2px_9px_rgba(0,0,0,0.5)]

                sm:mt-8
                sm:max-w-[290px]
                sm:text-lg
              "
            >
              {invitation.message}
            </p>

            {/* Date */}

            <div
              className="
                mt-6
                flex
                flex-col
                items-center

                sm:mt-8
              "
            >
              <p
                className="
                  font-sans
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]

                  text-[#F7F1E6]

                  drop-shadow-[0_2px_9px_rgba(0,0,0,0.5)]

                  sm:text-[10px]
                  sm:tracking-[0.4em]
                "
              >
                {invitation.date}
              </p>

              <p
                className="
                  mt-2

                  font-display
                  text-base
                  italic

                  text-[#F4EFE5]

                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]

                  sm:text-xl
                "
              >
                {invitation.weekday}
              </p>

              <p
                className="
                  mt-1

                  font-sans
                  text-[7px]
                  uppercase
                  tracking-[0.28em]

                  text-[#E8E2D5]/90

                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]

                  sm:text-[9px]
                  sm:tracking-[0.3em]
                "
              >
                {invitation.location}
              </p>

              <div
                className="mt-4 text-[#E8E2D5] sm:mt-5"
                aria-label="Wedding rings"
              >
                <WeddingRings />
              </div>
            </div>
          </div>

          {/* Footer */}

          <footer className="flex flex-col items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={openInvitation}
              disabled={isOpening}
              aria-label="Open invitation"
              className="
                min-w-[175px]

                border
                border-[#F0EBE0]/80

                bg-[#30352B]/15

                px-6
                py-3

                font-sans
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.3em]

                text-[#F8F4EA]

                shadow-[0_8px_30px_rgba(0,0,0,0.12)]

                backdrop-blur-[4px]

                transition-all
                duration-300

                hover:bg-[#F0EBE0]
                hover:text-[#30352B]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#F0EBE0]

                disabled:cursor-default

                sm:min-w-[184px]
                sm:px-7
                sm:py-3.5
                sm:text-[9px]
                sm:tracking-[0.34em]
              "
            >
              Open invitation
            </button>

            <span
              className="
                font-sans
                text-[7px]
                uppercase
                tracking-[0.25em]

                text-[#F0EBE0]/65

                sm:text-[8px]
                sm:tracking-[0.28em]
              "
            >
              A little beginning
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}
