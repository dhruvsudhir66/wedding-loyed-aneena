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
      <span className="font-display text-[clamp(2.7rem,11vw,5rem)] font-medium leading-[0.8] tracking-[-0.045em] text-[#30352B]">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-2.5 font-sans text-[7px] font-semibold uppercase tracking-[0.24em] text-[#59674D]/65 sm:mt-3 sm:text-[8px]">
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
      className="relative w-full overflow-hidden bg-[#F3EFE5] text-[#30352B]"
    >
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #30352B 0.5px, transparent 0.5px)",
          backgroundSize: "15px 15px",
        }}
      />

      <div className="pointer-events-none absolute inset-4 border border-[#59674D]/15 sm:inset-6 lg:inset-9" />

      <div className="pointer-events-none absolute left-4 top-4 h-9 w-9 border-l border-t border-[#59674D]/45 sm:left-6 sm:top-6 lg:left-9 lg:top-9" />

      <div className="pointer-events-none absolute bottom-4 right-4 h-9 w-9 border-b border-r border-[#59674D]/35 sm:bottom-6 sm:right-6 lg:bottom-9 lg:right-9" />

      <header className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-7 pt-8 sm:px-10 sm:pt-10 md:px-12 lg:px-16 lg:pt-14">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#59674D]/45 sm:w-12" />

          <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.28em] text-[#59674D]/70 sm:text-[9px]">
            CHAPTER TWO
          </span>
        </div>

        <span className="font-display text-[18px] italic text-[#30352B]/45 sm:text-[20px]">
          02
        </span>
      </header>

      <div className="relative z-10 flex w-full flex-col items-center px-7 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.32em] text-[#59674D]/60">
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
            "
          >
            Until we say
            <br />
            <span className="ml-[9%]">I do.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex w-full max-w-[440px] flex-col items-center sm:mt-9"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#59674D]/25 sm:w-12" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C890A7]" />
            <span className="h-px w-8 bg-[#59674D]/25 sm:w-12" />
          </div>

          <div className="mt-4 w-[220px] border-y border-[#59674D]/16 py-3 sm:w-[240px] sm:py-3.5">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="font-display text-[17px] leading-none text-[#30352B] sm:text-[19px]">
                November
              </span>

              <span className="font-sans text-[6px] font-semibold uppercase tracking-[0.25em] text-[#59674D]/50">
                2026
              </span>
            </div>

            <div className="grid grid-cols-7">
              {weekDays.map((day, index) => (
                <span
                  key={`${day}-${index}`}
                  className="text-center font-sans text-[6px] font-semibold uppercase text-[#59674D]/40"
                >
                  {day}
                </span>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7">
              {calendarDays.map((day) => {
                const isWeddingDay = day === 22;

                return (
                  <div
                    key={day}
                    className="relative flex h-[24px] items-center justify-center sm:h-[26px]"
                  >
                    {isWeddingDay && (
                      <>
                        <span className="absolute h-[20px] w-[20px] rounded-full bg-[#59674D]" />
                        <span className="absolute h-[26px] w-[26px] rounded-full border border-[#A87E8E]/60" />
                      </>
                    )}

                    <span
                      className={[
                        "relative z-10 font-sans text-[7px]",
                        isWeddingDay
                          ? "font-semibold text-[#F8F4EA]"
                          : "text-[#59674D]/72",
                      ].join(" ")}
                    >
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="font-sans text-[7px] font-semibold uppercase tracking-[0.28em] text-[#59674D]/55 sm:text-[8px]">
              OUR WEDDING DAY
            </span>

            <p className="mt-1 font-display text-[18px] text-[#30352B] sm:text-[20px]">
              Sunday · 22 November 2026
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 w-full max-w-[650px] sm:mt-8"
        >
          {isWeddingDay ? (
            <div className="text-center">
              <p className="font-display text-[42px] leading-none text-[#30352B] sm:text-[52px]">
                Today is the day.
              </p>

              <p className="mt-2 font-script text-[30px] text-[#59674D]">
                finally, forever begins
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 divide-x divide-[#59674D]/20 border-y border-[#59674D]/15 py-4 sm:py-5">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <CountdownUnit value={timeLeft.minutes} label="Minutes" />
              <CountdownUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          )}
        </motion.div>

        <p className="mt-5 text-center font-display text-[15px] italic text-[#59674D]/65 sm:mt-6 sm:text-[17px]">
          A little closer to forever, every second.
        </p>
      </div>

      <div className="absolute bottom-5 left-7 z-30 flex items-center gap-3 sm:bottom-7 sm:left-10 lg:left-16">
        <span className="font-sans text-[7px] font-semibold tracking-[0.25em] text-[#59674D]/70 sm:text-[8px]">
          02
        </span>

        <span className="h-px w-7 bg-[#59674D]/30 sm:w-8" />

        <span className="font-sans text-[6px] font-semibold uppercase tracking-[0.25em] text-[#59674D]/50 sm:text-[7px]">
          COUNTDOWN
        </span>
      </div>

      <div className="absolute bottom-5 right-7 z-30 flex flex-col items-center gap-2 sm:bottom-7 sm:right-10">
        <span className="font-sans text-[6px] font-medium uppercase tracking-[0.3em] text-[#59674D]/50 [writing-mode:vertical-rl] sm:text-[7px]">
          NEXT
        </span>

        <span className="h-7 w-px bg-[#59674D]/30 sm:h-8" />

        <span className="h-1.5 w-1.5 rounded-full bg-[#C890A7]" />
      </div>
    </section>
  );
}
