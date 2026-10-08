"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate = new Date("2026-11-22T00:00:00+05:30");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calendarDays = Array.from({ length: 30 }, (_, index) => index + 1);

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

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

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center px-1 sm:px-3">
      <span
        className="
          font-display
          text-[clamp(2.8rem,11vw,5rem)]
          font-medium
          leading-[0.8]
          tracking-[-0.045em]
          text-[#30352B]
        "
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        className="
          mt-2.5
          font-sans
          text-[8px]
          font-bold
          uppercase
          tracking-[0.23em]
          text-[#59674D]/80
          sm:mt-3
          sm:text-[9px]
        "
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
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

    return () => window.clearInterval(timer);
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
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_12%_10%,
            rgba(255,255,255,0.92),
            transparent_44%
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
            rgba(200,144,167,0.065),
            transparent_42%
          )]
        "
      />

      {/* Central visual focus behind the date */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[58%]
          w-[72%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.46]
          blur-[90px]
        "
      />

      {/* Subtle texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #30352B 0.5px, transparent 0.5px)",
          backgroundSize: "15px 15px",
        }}
      />

      {/* =========================================================
          DECORATIVE FRAME
      ========================================================== */}

      <div className="pointer-events-none absolute inset-4 border border-[#59674D]/17 sm:inset-6 lg:inset-9" />

      <div className="pointer-events-none absolute left-4 top-4 h-9 w-9 border-l border-t border-[#59674D]/48 sm:left-6 sm:top-6 lg:left-9 lg:top-9" />

      <div className="pointer-events-none absolute bottom-4 right-4 h-9 w-9 border-b border-r border-[#59674D]/40 sm:bottom-6 sm:right-6 lg:bottom-9 lg:right-9" />

      {/* =========================================================
          HEADER
      ========================================================== */}

      <header className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-7 pt-8 sm:px-10 sm:pt-10 md:px-12 lg:px-16 lg:pt-14">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#59674D]/52 sm:w-12" />

          <span className="font-sans text-[8px] font-bold uppercase tracking-[0.28em] text-[#59674D]/84 sm:text-[9px]">
            CHAPTER TWO
          </span>
        </div>

        <span className="font-display text-[18px] font-medium italic text-[#30352B]/58 sm:text-[20px]">
          02
        </span>
      </header>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 flex w-full flex-col items-center px-7 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32">
        {/* =======================================================
            TITLE
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center text-center"
        >
          <span className="font-sans text-[8px] font-bold uppercase tracking-[0.32em] text-[#59674D]/78 sm:text-[9px]">
            THE DAY IS GETTING CLOSER
          </span>

          <h1
            id="countdown-title"
            className="
              mt-4
              font-display
              text-[clamp(3.5rem,12vw,6.2rem)]
              font-medium
              leading-[0.8]
              tracking-[-0.045em]
              text-[#30352B]
            "
          >
            Until we say
            <br />
            <span className="ml-[9%]">I do.</span>
          </h1>
        </motion.div>

        {/* =======================================================
            DATE + CALENDAR
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 flex w-full max-w-[460px] flex-col items-center sm:mt-10"
        >
          {/* Divider */}
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#59674D]/30 sm:w-14" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#C890A7]" />

            <span className="h-px w-9 bg-[#59674D]/30 sm:w-14" />
          </div>

          {/* =====================================================
              DATE CARD
          ====================================================== */}

          <div
            className="
              mt-5
              w-[250px]
              border-y
              border-[#59674D]/22
              py-4
              sm:w-[280px]
              sm:py-5
            "
          >
            {/* Month / year */}
            <div className="mb-3 flex items-center justify-between px-1.5">
              <span className="font-display text-[20px] font-medium leading-none text-[#30352B] sm:text-[22px]">
                November
              </span>

              <span className="font-sans text-[7px] font-bold uppercase tracking-[0.25em] text-[#59674D]/72 sm:text-[8px]">
                2026
              </span>
            </div>

            {/* Weekday headings */}
            <div className="grid grid-cols-7">
              {weekDays.map((day, index) => (
                <span
                  key={`${day}-${index}`}
                  className="
                    text-center
                    font-sans
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.05em]
                    text-[#59674D]/58
                    sm:text-[8px]
                  "
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Calendar */}
            <div className="mt-2 grid grid-cols-7 gap-y-1">
              {calendarDays.map((day) => {
                const isWeddingDay = day === 22;

                return (
                  <div
                    key={day}
                    className="
                      relative
                      flex
                      h-[31px]
                      items-center
                      justify-center
                      sm:h-[34px]
                    "
                  >
                    {isWeddingDay && (
                      <>
                        {/* Soft highlight */}
                        <motion.span
                          initial={{ scale: 0.85, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.45,
                            delay: 0.18,
                          }}
                          className="
                            absolute
                            h-[27px]
                            w-[27px]
                            rounded-full
                            bg-[#59674D]
                            shadow-[0_5px_18px_rgba(89,103,77,0.28)]
                            sm:h-[30px]
                            sm:w-[30px]
                          "
                        />

                        {/* Champagne outer ring */}
                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            h-[36px]
                            w-[36px]
                            rounded-full
                            border
                            border-[#C8B58A]/85
                            sm:h-[40px]
                            sm:w-[40px]
                          "
                        />

                        {/* Small accent dot */}
                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            -right-[1px]
                            -top-[1px]
                            h-2
                            w-2
                            rounded-full
                            bg-[#A87E8E]
                            ring-2
                            ring-[#F3EFE5]
                            sm:right-0
                            sm:top-0
                          "
                        />
                      </>
                    )}

                    <span
                      className={[
                        "relative z-10 font-sans text-[8px] sm:text-[9px]",
                        isWeddingDay
                          ? "font-bold text-[#F8F4EA]"
                          : "font-medium text-[#59674D]/78",
                      ].join(" ")}
                    >
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              SELECTED DATE — PRIMARY FOCUS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 flex flex-col items-center"
          >
            <span className="font-sans text-[8px] font-bold uppercase tracking-[0.3em] text-[#59674D]/70 sm:text-[9px]">
              OUR WEDDING DAY
            </span>

            <div className="mt-2 flex items-center gap-3">
              <span className="h-px w-6 bg-[#A87E8E]/55" />

              <p className="font-display text-[21px] font-medium leading-none text-[#30352B] sm:text-[24px]">
                Sunday · 22 November 2026
              </p>

              <span className="h-px w-6 bg-[#A87E8E]/55" />
            </div>
          </motion.div>
        </motion.div>

        {/* =======================================================
            COUNTDOWN
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.8,
            delay: 0.14,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 w-full max-w-[650px] sm:mt-9"
        >
          {isWeddingDay ? (
            <div className="text-center">
              <p className="font-display text-[44px] font-medium leading-none text-[#30352B] sm:text-[54px]">
                Today is the day.
              </p>

              <p className="mt-2 font-script text-[31px] text-[#59674D] sm:text-[34px]">
                finally, forever begins
              </p>
            </div>
          ) : (
            <div className="border-y border-[#59674D]/20 py-5 sm:py-6">
              <div className="grid grid-cols-4 divide-x divide-[#59674D]/22">
                <CountdownUnit value={timeLeft.days} label="Days" />

                <CountdownUnit value={timeLeft.hours} label="Hours" />

                <CountdownUnit value={timeLeft.minutes} label="Minutes" />

                <CountdownUnit value={timeLeft.seconds} label="Seconds" />
              </div>
            </div>
          )}
        </motion.div>

        {/* =======================================================
            SUPPORTING MESSAGE
        ======================================================== */}

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-6
            text-center
            font-display
            text-[15px]
            font-medium
            italic
            text-[#59674D]/78
            sm:mt-7
            sm:text-[17px]
          "
        >
          A little closer to forever, every second.
        </motion.p>
      </div>

      {/* =========================================================
          BOTTOM CHAPTER LABEL
      ========================================================== */}

      <div className="absolute bottom-5 left-7 z-30 flex items-center gap-3 sm:bottom-7 sm:left-10 lg:left-16">
        <span className="font-sans text-[7px] font-bold tracking-[0.25em] text-[#59674D]/78 sm:text-[8px]">
          02
        </span>

        <span className="h-px w-7 bg-[#59674D]/38 sm:w-8" />

        <span className="font-sans text-[6px] font-bold uppercase tracking-[0.25em] text-[#59674D]/62 sm:text-[7px]">
          COUNTDOWN
        </span>
      </div>

      {/* =========================================================
          NEXT INDICATOR
      ========================================================== */}

      <div className="absolute bottom-5 right-7 z-30 flex flex-col items-center gap-2 sm:bottom-7 sm:right-10">
        <span className="font-sans text-[6px] font-semibold uppercase tracking-[0.3em] text-[#59674D]/62 sm:text-[7px] [writing-mode:vertical-rl]">
          NEXT
        </span>

        <span className="h-7 w-px bg-[#59674D]/38 sm:h-8" />

        <span className="h-1.5 w-1.5 rounded-full bg-[#C890A7]" />
      </div>
    </section>
  );
}
