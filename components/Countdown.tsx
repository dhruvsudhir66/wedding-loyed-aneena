"use client";

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

/* =========================================================
   WEDDING DATE
   ========================================================= */

const weddingDate = new Date("2026-11-22T00:00:00");

/* =========================================================
   TYPES
   ========================================================= */

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/* =========================================================
   COUNTDOWN CALCULATION
   ========================================================= */

function getTimeLeft(): TimeLeft {
  const difference = weddingDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

/* =========================================================
   MINI CALENDAR
   ========================================================= */

const calendarDays = Array.from({ length: 30 }, (_, index) => index + 1);

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

/* =========================================================
   COMPONENT
   ========================================================= */

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());

    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const isWeddingDay =
    mounted &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F3EFE5]
        text-[#30352B]
      "
    >
      {/* =========================================================
          ATMOSPHERIC BACKGROUND
          ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_12%_10%,
            rgba(255,255,255,0.9),
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
            ellipse_at_88%_88%,
            rgba(200,144,167,0.055),
            transparent_40%
          )]
        "
      />

      {/* Subtle paper grain */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.028]
          mix-blend-multiply
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='.32'/%3E%3C/svg%3E\")",
        }}
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
          border
          border-[#59674D]/15
          sm:inset-6
          lg:inset-9
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-4
          top-4
          h-9
          w-9
          border-l
          border-t
          border-[#59674D]/45
          sm:left-6
          sm:top-6
          lg:left-9
          lg:top-9
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-4
          right-4
          h-9
          w-9
          border-b
          border-r
          border-[#59674D]/35
          sm:bottom-6
          sm:right-6
          lg:bottom-9
          lg:right-9
        "
      />

      {/* =========================================================
          HEADER
          ========================================================= */}

      <header
        className="
          absolute
          left-0
          right-0
          top-0
          z-20
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
          <span className="h-px w-7 bg-[#59674D]/55 sm:w-10" />

          <span
            className="
              font-sans
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.38em]
              text-[#59674D]/75
              sm:text-[8px]
            "
          >
            CHAPTER TWO
          </span>
        </div>

        <span
          className={`
            ${cormorant.className}
            text-[18px]
            italic
            leading-none
            text-[#59674D]/70
            sm:text-[21px]
          `}
        >
          02
        </span>
      </header>

      {/* =========================================================
          MAIN CONTENT
          ========================================================= */}

      <main
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
          px-7
          pb-20
          pt-28
          sm:px-10
          sm:pb-24
          sm:pt-32
        "
      >
        {/* =====================================================
            INTRO
            ===================================================== */}

        <div className="flex flex-col items-center text-center">
          <p
            className="
              font-sans
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.38em]
              text-[#59674D]/65
              sm:text-[8px]
            "
          >
            THE DAY IS GETTING CLOSER
          </p>

          <h1
            id="countdown-title"
            className={`
              ${cormorant.className}
              mt-3
              text-[clamp(3.5rem,13vw,6.5rem)]
              font-medium
              leading-[0.78]
              tracking-[-0.045em]
              text-[#30352B]
            `}
          >
            Until we say
            <br />
            <span className="ml-[9%]">I do.</span>
          </h1>
        </div>

        {/* =====================================================
            MINI CALENDAR
            ===================================================== */}

        <div
          className="
            mt-8
            flex
            w-full
            max-w-[440px]
            flex-col
            items-center
            sm:mt-9
          "
        >
          {/* Decorative divider */}

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#59674D]/25 sm:w-12" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#C890A7]" />

            <span className="h-px w-8 bg-[#59674D]/25 sm:w-12" />
          </div>

          {/* Calendar */}

          <div
            className="
              mt-4
              w-[220px]
              border-y
              border-[#59674D]/16
              py-3
              sm:w-[240px]
              sm:py-3.5
            "
          >
            {/* Month */}

            <div className="mb-2 flex items-center justify-between px-1">
              <span
                className={`
                  ${cormorant.className}
                  text-[17px]
                  leading-none
                  text-[#30352B]
                  sm:text-[19px]
                `}
              >
                November
              </span>

              <span
                className="
                  font-sans
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#59674D]/50
                "
              >
                2026
              </span>
            </div>

            {/* Weekdays */}

            <div className="grid grid-cols-7">
              {weekDays.map((day, index) => (
                <span
                  key={`${day}-${index}`}
                  className="
                    text-center
                    font-sans
                    text-[6px]
                    font-semibold
                    uppercase
                    text-[#59674D]/40
                  "
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Dates */}

            <div className="mt-1 grid grid-cols-7">
              {calendarDays.map((day) => {
                const isWeddingDay = day === 22;

                return (
                  <div
                    key={day}
                    className="
                      relative
                      flex
                      h-[24px]
                      items-center
                      justify-center
                      sm:h-[26px]
                    "
                  >
                    {isWeddingDay && (
                      <>
                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            h-[21px]
                            w-[21px]
                            rounded-full
                            bg-[#59674D]
                            sm:h-[23px]
                            sm:w-[23px]
                          "
                        />

                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            h-[26px]
                            w-[26px]
                            rounded-full
                            border
                            border-[#C890A7]/65
                            sm:h-[28px]
                            sm:w-[28px]
                          "
                        />
                      </>
                    )}

                    <span
                      className={`
                        relative
                        z-10
                        font-sans
                        text-[7px]
                        sm:text-[8px]
                        ${
                          isWeddingDay
                            ? "font-semibold text-[#F8F4EA]"
                            : "font-normal text-[#59674D]/65"
                        }
                      `}
                    >
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Date */}

          <div className="mt-3 text-center">
            <span
              className="
                font-sans
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#59674D]/55
              "
            >
              OUR WEDDING DAY
            </span>

            <p
              className={`
                ${cormorant.className}
                mt-1
                text-[18px]
                text-[#30352B]
                sm:text-[20px]
              `}
            >
              Sunday · 22 November 2026
            </p>
          </div>
        </div>

        {/* =====================================================
            COUNTDOWN DIVIDER
            ===================================================== */}

        <div className="mt-7 flex items-center gap-3 sm:mt-8">
          <span className="h-px w-10 bg-[#59674D]/20 sm:w-14" />

          <span className="h-1 w-1 rounded-full bg-[#C890A7]/80" />

          <span className="h-px w-10 bg-[#59674D]/20 sm:w-14" />
        </div>

        {/* =====================================================
            COUNTDOWN
            ===================================================== */}

        <div className="mt-5 w-full max-w-[650px] sm:mt-6">
          {isWeddingDay ? (
            <div className="text-center">
              <p
                className={`
                  ${cormorant.className}
                  text-[42px]
                  leading-none
                  text-[#30352B]
                  sm:text-[52px]
                `}
              >
                Today is the day.
              </p>

              <p
                className={`
                  ${allura.className}
                  mt-2
                  text-[30px]
                  text-[#59674D]
                `}
              >
                finally, forever begins
              </p>
            </div>
          ) : (
            <div
              className="
                grid
                grid-cols-4
                divide-x
                divide-[#59674D]/20
                border-y
                border-[#59674D]/15
                py-4
                sm:py-5
              "
            >
              <CountdownUnit value={timeLeft.days} label="Days" />

              <CountdownUnit value={timeLeft.hours} label="Hours" />

              <CountdownUnit value={timeLeft.minutes} label="Minutes" />

              <CountdownUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          )}
        </div>

        {/* =====================================================
            CLOSING LINE
            ===================================================== */}

        <p
          className={`
            ${cormorant.className}
            mt-5
            text-center
            text-[15px]
            italic
            text-[#59674D]/65
            sm:mt-6
            sm:text-[17px]
          `}
        >
          A little closer to forever, every second.
        </p>
      </main>

      {/* =========================================================
          PAGE FOOTER
          ========================================================= */}

      <div
        className="
          absolute
          bottom-5
          left-7
          z-30
          flex
          items-center
          gap-3
          sm:bottom-7
          sm:left-10
          md:left-12
          lg:left-16
        "
      >
        <span
          className="
            font-sans
            text-[7px]
            font-semibold
            tracking-[0.25em]
            text-[#59674D]/70
            sm:text-[8px]
          "
        >
          04
        </span>

        <span className="h-px w-7 bg-[#59674D]/30 sm:w-8" />

        <span
          className="
            font-sans
            text-[6px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#59674D]/50
            sm:text-[7px]
          "
        >
          COUNTDOWN
        </span>
      </div>

      {/* =========================================================
          NEXT
          ========================================================= */}

      <div
        className="
          absolute
          bottom-5
          right-7
          z-30
          flex
          flex-col
          items-center
          gap-2
          sm:bottom-7
          sm:right-10
        "
      >
        <span
          className="
            font-sans
            text-[6px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#59674D]/50
            [writing-mode:vertical-rl]
            sm:text-[7px]
          "
        >
          NEXT
        </span>

        <span className="h-7 w-px bg-[#59674D]/30 sm:h-8" />

        <span className="h-1.5 w-1.5 rounded-full bg-[#C890A7]" />
      </div>
    </section>
  );
}

/* =========================================================
   COUNTDOWN UNIT
   ========================================================= */

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center px-1 sm:px-3">
      <span
        className={`
          ${cormorant.className}
          text-[clamp(2.7rem,11vw,5rem)]
          font-medium
          leading-[0.8]
          tracking-[-0.045em]
          text-[#30352B]
        `}
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        className="
          mt-2.5
          font-sans
          text-[7px]
          font-semibold
          uppercase
          tracking-[0.24em]
          text-[#59674D]/65
          sm:mt-3
          sm:text-[8px]
        "
      >
        {label}
      </span>
    </div>
  );
}

export default Countdown;
