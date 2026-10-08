"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

export function SaveTheDate() {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = isOpening ? "" : "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpening]);

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
        fixed
        inset-0
        z-[100]
        flex
        h-[100dvh]
        w-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#F7F3ED]
        px-3
        py-3
        sm:px-5
        sm:py-4
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#F7F3ED]"
      />

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

      <div
        aria-hidden="true"
        className="
          paper-grain
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-[0.045]
        "
      />

      {/* =====================================================
          CARD SHADOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-[7]
          h-[min(760px,calc(100dvh-24px))]
          w-[min(540px,calc(100vw-24px))]
          translate-y-3
          bg-[#47372F]/18
          blur-[20px]
          sm:h-[min(850px,calc(100dvh-32px))]
          sm:w-[min(540px,calc(100vw-40px))]
          sm:translate-y-5
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
          flex
          h-[min(760px,calc(100dvh-24px))]
          w-[min(540px,calc(100vw-24px))]
          shrink-0
          overflow-hidden
          rounded-[2px]
          bg-[#E7E1D8]
          shadow-[0_6px_12px_rgba(60,45,38,0.10),0_18px_38px_rgba(60,45,38,0.13),0_30px_70px_rgba(60,45,38,0.12)]
          ring-1
          ring-[#FFFFFF]/45
          transition-all
          duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          sm:h-[min(850px,calc(100dvh-32px))]
          sm:w-[min(540px,calc(100vw-40px))]
          ${
            isOpening
              ? "-translate-y-8 scale-[1.025] opacity-0"
              : "translate-y-0 scale-100 opacity-100"
          }
        `}
      >
        {/* ===================================================
            CARD EDGE
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
            PHOTO
        =================================================== */}

        <Image
          src={weddingConfig.assets.invitation}
          alt={weddingConfig.copy.saveDate.invitationAlt}
          fill
          priority
          quality={72}
          sizes="(max-width: 640px) calc(100vw - 24px), 540px"
          className="object-cover object-center"
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

        {/* Inner photo frame */}

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
            relative
            z-[4]
            flex
            h-full
            w-full
            flex-col
            items-center
            px-6
            py-6
            text-[#F8F4EA]
            sm:px-9
            sm:py-8
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <header className="flex w-full shrink-0 items-start justify-between">
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
              flex
              min-h-0
              w-full
              flex-1
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            {/* Eyebrow */}

            <div className="flex shrink-0 items-center gap-3">
              <span className="h-px w-6 bg-white/50" />

              <p className="font-sans text-[8px] font-medium uppercase tracking-[0.4em] text-white/85 sm:text-[9px]">
                {invitation.eyebrow}
              </p>

              <span className="h-px w-6 bg-white/50" />
            </div>

            <p className="mt-3 shrink-0 font-sans text-[7px] font-medium uppercase tracking-[0.38em] text-[#D7DECB]/75 sm:mt-4">
              A new chapter begins
            </p>

            {/* Names */}

            <div className="mt-3 flex shrink-0 w-full flex-col items-center sm:mt-4">
              <div
                className={`
                  ${allura.className}
                  whitespace-nowrap
                  text-[clamp(3.6rem,15vw,7rem)]
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
                  my-2
                  text-[20px]
                  font-normal
                  italic
                  leading-none
                  text-[#E5D7D4]
                  sm:my-3
                  sm:text-[24px]
                `}
              >
                &amp;
              </div>

              <div
                className={`
                  ${allura.className}
                  whitespace-nowrap
                  text-[clamp(3.6rem,15vw,7rem)]
                  leading-[0.76]
                  tracking-[-0.02em]
                  text-[#FFF9F1]
                  drop-shadow-[0_4px_16px_rgba(0,0,0,0.48)]
                `}
              >
                {weddingConfig.couple.secondName}
              </div>
            </div>

            {/* Divider */}

            <div className="mt-4 flex shrink-0 items-center gap-3 sm:mt-5">
              <span className="h-px w-7 bg-[#D7DECB]/55" />
              <span className="h-1 w-1 rounded-full bg-[#C890A7]" />
              <span className="h-px w-7 bg-[#D7DECB]/55" />
            </div>

            {/* Message */}

            <p
              className={`
                ${cormorant.className}
                mt-4
                max-w-[300px]
                shrink-0
                text-[16px]
                font-normal
                italic
                leading-[1.38]
                text-[#F4EFE5]/95
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.48)]
                sm:mt-5
                sm:max-w-[340px]
                sm:text-[18px]
              `}
            >
              {invitation.message}
            </p>

            {/* Date */}

            <div className="mt-4 flex shrink-0 flex-col items-center sm:mt-5">
              <p
                className="
                  font-sans
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-[#FFF8ED]
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.48)]
                  sm:text-[11px]
                  sm:tracking-[0.36em]
                "
              >
                {invitation.date}
              </p>

              <p
                className={`
                  ${cormorant.className}
                  mt-1
                  text-[17px]
                  italic
                  leading-none
                  text-[#F0E9DE]/95
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                  sm:text-[19px]
                `}
              >
                {invitation.weekday}
              </p>

              <div
                className="mt-2 text-[#E8E2D5] sm:mt-3"
                aria-label={weddingConfig.copy.saveDate.ringsAriaLabel}
              >
                <WeddingRings />
              </div>
            </div>
          </div>

          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="flex w-full shrink-0 flex-col items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openInvitation}
              disabled={isOpening}
              aria-label={weddingConfig.copy.saveDate.openButtonAriaLabel}
              className="
                group
                relative
                min-h-10
                min-w-[170px]
                overflow-hidden
                border
                border-[#F0EBE0]/80
                bg-[#30352B]/15
                px-7
                py-3
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
                sm:min-w-[180px]
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

            <span className="font-sans text-[7px] uppercase tracking-[0.27em] text-[#F0EBE0]/65 sm:text-[8px]">
              {weddingConfig.copy.saveDate.tagline}
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default SaveTheDate;
