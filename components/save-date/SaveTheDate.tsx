"use client";

import Image from "next/image";
import { useState } from "react";
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

const invitation = {
  eyebrow: weddingConfig.copy.saveDate.eyebrow,
  date: "22 · 11 · 2026",
  weekday: weddingConfig.date.weekday,
  location: weddingConfig.date.location,
  message: weddingConfig.copy.saveDate.message,
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
      className="h-7 w-[64px] opacity-70"
    >
      <circle cx="39" cy="22" r="14" stroke="currentColor" strokeWidth="1.1" />

      <circle cx="61" cy="22" r="14" stroke="currentColor" strokeWidth="1.1" />

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
   SAVE THE DATE
   ========================================================= */

export function SaveTheDate() {
  const [isOpening, setIsOpening] = useState(false);

  const openInvitation = () => {
    if (isOpening) return;

    setIsOpening(true);

    window.dispatchEvent(new CustomEvent("wedding:open-invitation"));
  };

  return (
    <section
      id="save-the-date"
      aria-label={weddingConfig.copy.saveDate.ariaLabel}
      className={`
        absolute
        inset-0
        z-30
        flex
        min-h-[100svh]
        items-center
        justify-center
        overflow-hidden
        bg-[#F7F3ED]
        px-5
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
          Same beige tone as Couple section
          No decorative frame
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#F7F3ED]"
      />

      {/* Very subtle warm tonal variation */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_20%_10%,
            rgba(255,255,255,0.72),
            transparent_42%
          )]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_85%_90%,
            rgba(200,144,167,0.06),
            transparent_38%
          )]
        "
      />

      {/* Subtle edge depth */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(
            circle_at_center,
            transparent_55%,
            rgba(70,55,45,0.07)_100%
          )]
        "
      />

      {/* Paper grain */}

      <div
        className="
          paper-grain
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-[0.045]
        "
        aria-hidden="true"
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
          w-[calc(100vw-3rem)]
          max-w-[540px]
          translate-y-5
          bg-[#47372F]/18
          blur-[20px]
          sm:h-[min(900px,calc(100svh-4rem))]
          sm:w-[calc(100%-4rem)]
          sm:translate-y-6
          sm:blur-[25px]
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
          w-[calc(100vw-3rem)]
          max-w-[540px]
          overflow-hidden
          rounded-[2px]
          bg-[#E7E1D8]
          shadow-[0_6px_12px_rgba(60,45,38,0.10),0_18px_38px_rgba(60,45,38,0.13),0_30px_70px_rgba(60,45,38,0.12)]
          ring-1
          ring-[#FFFFFF]/45
          transition-all
          duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          sm:h-[min(900px,calc(100svh-4rem))]
          sm:w-full
          ${
            isOpening
              ? "-translate-y-10 scale-[1.025] opacity-0"
              : "translate-y-0 scale-100 opacity-100"
          }
        `}
      >
        {/* ===================================================
            CARD EDGE
            This remains unchanged
            =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[3]
            border
            border-white/20
            shadow-[inset_0_0_0_1px_rgba(70,55,45,0.08)]
          "
        />

        {/* ===================================================
            COUPLE IMAGE
            =================================================== */}

        <Image
          src={weddingConfig.assets.invitation}
          alt={weddingConfig.copy.saveDate.invitationAlt}
          fill
          priority
          quality={72}
          sizes="(max-width: 640px) calc(100vw - 48px), 540px"
          className="
            object-cover
            object-center
          "
        />

        {/* ===================================================
            PHOTO TREATMENT
            =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[#30352B]/32
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(
              180deg,
              rgba(25,29,24,0.46)_0%,
              rgba(25,29,24,0.10)_30%,
              rgba(25,29,24,0.04)_48%,
              rgba(25,29,24,0.16)_66%,
              rgba(20,24,20,0.62)_100%
            )]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(
              circle_at_center,
              transparent_38%,
              rgba(20,24,20,0.20)_100%
            )]
          "
        />

        {/* ===================================================
            INNER CARD PHOTO FRAME
            This remains unchanged
            =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[10px]
            z-[3]
            border
            border-white/20
            sm:inset-[12px]
          "
        />

        {/* ===================================================
            CONTENT
            =================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[4]
            flex
            flex-col
            justify-between
            p-7
            text-[#F8F4EA]
            sm:p-10
          "
        >
          {/* =================================================
              HEADER
              ================================================= */}

          <header className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-white/60 sm:w-8" />

              <span
                className="
                  font-sans
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.34em]
                  text-white/85
                  sm:text-[9px]
                "
              >
                {weddingConfig.copy.saveDate.header}
              </span>
            </div>

            <span
              className={`
                ${cormorant.className}
                text-[17px]
                italic
                leading-none
                tracking-[0.08em]
                text-white/80
                sm:text-[19px]
              `}
            >
              L&nbsp;&nbsp;·&nbsp;&nbsp;A
            </span>
          </header>

          {/* =================================================
              MAIN CONTENT
              ================================================= */}

          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[430px]
              flex-1
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            {/* Eyebrow */}

            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-white/50" />

              <p
                className="
                  font-sans
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.4em]
                  text-white/85
                  sm:text-[9px]
                "
              >
                {invitation.eyebrow}
              </p>

              <span className="h-px w-6 bg-white/50" />
            </div>

            {/* Small editorial label */}

            <p
              className="
                mt-6
                font-sans
                text-[7px]
                font-medium
                uppercase
                tracking-[0.38em]
                text-[#D7DECB]/75
              "
            >
              A new chapter begins
            </p>

            {/* =================================================
                NAMES
                ================================================= */}

            <div className="mt-5 flex w-full flex-col items-center">
              <div
                className={`
                  ${allura.className}
                  whitespace-nowrap
                  text-[clamp(3.8rem,16vw,7.1rem)]
                  leading-[0.76]
                  tracking-[-0.02em]
                  text-[#FFF9F1]
                  drop-shadow-[0_4px_16px_rgba(0,0,0,0.48)]
                `}
              >
                {weddingConfig.couple.firstName}
              </div>

              <div
                className={`
                  ${cormorant.className}
                  my-3
                  text-[21px]
                  font-normal
                  italic
                  leading-none
                  text-[#E5D7D4]
                  sm:my-4
                  sm:text-[25px]
                `}
              >
                &amp;
              </div>

              <div
                className={`
                  ${allura.className}
                  whitespace-nowrap
                  text-[clamp(3.8rem,16vw,7.1rem)]
                  leading-[0.76]
                  tracking-[-0.02em]
                  text-[#FFF9F1]
                  drop-shadow-[0_4px_16px_rgba(0,0,0,0.48)]
                `}
              >
                {weddingConfig.couple.secondName}
              </div>
            </div>

            {/* Editorial divider */}

            <div className="mt-7 flex items-center gap-3 sm:mt-8">
              <span className="h-px w-7 bg-[#D7DECB]/55" />
              <span className="h-1 w-1 rounded-full bg-[#C890A7]" />
              <span className="h-px w-7 bg-[#D7DECB]/55" />
            </div>

            {/* Message */}

            <p
              className={`
                ${cormorant.className}
                mt-6
                max-w-[310px]
                text-[17px]
                font-normal
                italic
                leading-[1.45]
                text-[#F4EFE5]/95
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.48)]
                sm:mt-7
                sm:max-w-[350px]
                sm:text-[19px]
              `}
            >
              {invitation.message}
            </p>

            {/* =================================================
                DATE
                ================================================= */}

            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                sm:mt-9
              "
            >
              <p
                className="
                  font-sans
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.34em]
                  text-[#FFF8ED]
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.48)]
                  sm:text-[12px]
                  sm:tracking-[0.38em]
                "
              >
                {weddingConfig.date.display}
              </p>

              <p
                className={`
                  ${cormorant.className}
                  mt-1.5
                  text-[17px]
                  italic
                  text-[#F0E9DE]/95
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                  sm:text-[20px]
                `}
              >
                {invitation.weekday}
              </p>

              <div className="mt-2 flex items-center gap-3">
                <span className="h-px w-5 bg-[#D7DECB]/45" />

                <p
                  className="
                    font-sans
                    text-[7px]
                    font-medium
                    uppercase
                    tracking-[0.32em]
                    text-[#E8E2D5]/85
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                    sm:text-[8px]
                  "
                >
                  {invitation.location}
                </p>

                <span className="h-px w-5 bg-[#D7DECB]/45" />
              </div>

              <div
                className="mt-4 text-[#E8E2D5] sm:mt-5"
                aria-label={weddingConfig.copy.saveDate.ringsAriaLabel}
              >
                <WeddingRings />
              </div>
            </div>
          </div>

          {/* =================================================
              FOOTER
              ================================================= */}

          <footer className="flex flex-col items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={openInvitation}
              disabled={isOpening}
              aria-label={weddingConfig.copy.saveDate.openButtonAriaLabel}
              className="
                group
                relative
                min-w-[175px]
                overflow-hidden
                border
                border-[#F0EBE0]/80
                bg-[#30352B]/15
                px-7
                py-3.5
                font-sans
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#F8F4EA]
                shadow-[0_8px_24px_rgba(0,0,0,0.14)]
                transition-all
                duration-300
                hover:bg-[#F0EBE0]
                hover:text-[#30352B]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#F0EBE0]
                disabled:cursor-default
                sm:min-w-[185px]
                sm:text-[9px]
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-y-0
                  left-0
                  w-0
                  bg-[#F0EBE0]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

              <span className="relative z-10">
                {weddingConfig.copy.saveDate.openButton}
              </span>
            </button>

            <span
              className="
                font-sans
                text-[7px]
                uppercase
                tracking-[0.27em]
                text-[#F0EBE0]/65
                sm:text-[8px]
              "
            >
              {weddingConfig.copy.saveDate.tagline}
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default SaveTheDate;
