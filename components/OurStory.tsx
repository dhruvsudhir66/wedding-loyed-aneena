"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";

const photos = {
  background: "/images/couple-gallery-6.webp",
  childhood: "/images/childhood-couple.jpeg",
};

export default function OurStory() {
  const brideName = weddingConfig.couple.secondName;
  const groomName = weddingConfig.couple.firstName;

  return (
    <section
      id="our-story"
      aria-labelledby="our-story-title"
      className="relative isolate w-full overflow-hidden bg-[#59674D] text-[#30352B]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={photos.background}
          alt=""
          fill
          sizes="100vw"
          className="scale-[1.025] object-cover object-center saturate-[0.56] brightness-[0.78]"
        />

        <div className="absolute inset-0 bg-[#F8F4EA]/16 mix-blend-screen" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#30352B]/38 via-[#F8F4EA]/10 to-[#30352B]/48" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(248,244,234,0.20)_0%,rgba(248,244,234,0.08)_34%,rgba(48,53,43,0.18)_78%,rgba(48,53,43,0.34)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#30352B]/42 via-[#59674D]/16 to-transparent" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F8F4EA 0.5px, transparent 0.5px)",
          backgroundSize: "15px 15px",
        }}
      />

      <div className="pointer-events-none absolute right-[-2vw] top-[-1%] select-none font-display text-[clamp(9rem,21vw,21rem)] font-light leading-none tracking-[-0.11em] text-[#F8F4EA]/[0.055]">
        05
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px] px-5 pb-7 pt-7 sm:px-8 sm:pb-9 sm:pt-8 lg:px-12 lg:pb-10 lg:pt-9">
        <header className="flex items-center justify-between text-[#F8F4EA]">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-px w-8 bg-[#F8F4EA]/48 sm:w-12" />

            <span className="font-display text-[8px] font-medium uppercase tracking-[0.34em] text-[#F8F4EA]/88 sm:text-[9px]">
              Our story
            </span>
          </div>

          <span className="font-display text-[14px] italic text-[#F8F4EA]/52 sm:text-[16px]">
            05
          </span>
        </header>

        <div className="relative z-20 mx-auto mt-8 max-w-[820px] sm:mt-10 lg:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center">
              <span className="font-display text-[7px] uppercase tracking-[0.38em] text-[#F8F4EA]/72 sm:text-[8px]">
                before there was an us
              </span>
            </div>

            <div className="relative mx-auto mt-6 sm:mt-8">
              <div className="pointer-events-none absolute left-1/2 top-[43%] h-[72%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#F8F4EA]/10 blur-[35px]" />

              <motion.figure
                initial={{ opacity: 0, rotate: -2, scale: 0.97 }}
                whileInView={{ opacity: 1, rotate: -1, scale: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.85,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-20 mx-auto w-[68%] bg-[#F8F4EA] p-2 pb-11 shadow-[0_25px_55px_-25px_rgba(24,30,24,0.62)] sm:w-[52%] sm:p-2.5 sm:pb-12"
              >
                <div className="relative aspect-[0.72] overflow-hidden bg-[#D9D6CA]">
                  <Image
                    src={photos.childhood}
                    alt={`${brideName} and ${groomName} as children`}
                    fill
                    sizes="(max-width: 640px) 68vw, 430px"
                    className="object-cover"
                  />
                </div>

                <figcaption className="absolute bottom-2.5 left-0 right-0 text-center sm:bottom-3">
                  <span className="font-display text-[15px] text-[#30352B] sm:text-[17px]">
                    where it all began
                  </span>
                </figcaption>

                <span className="absolute left-1/2 top-[-9px] h-6 w-20 -translate-x-1/2 rotate-[1deg] bg-[#C8B58A]/65" />
              </motion.figure>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.22,
                }}
              >
                <h2
                  id="our-story-title"
                  className="mt-7 text-center font-display text-[clamp(3.2rem,9vw,5.2rem)] font-light leading-[0.82] tracking-[-0.06em] text-[#F8F4EA]"
                >
                  Two little
                  <br />
                  <span className="italic text-[#D8CAA9]">lives.</span>
                </h2>

                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#F8F4EA]/24 sm:w-16" />
                  <span className="h-1.5 w-1.5 rotate-45 border border-[#D8CAA9]/60" />
                  <span className="h-px w-10 bg-[#F8F4EA]/24 sm:w-16" />
                </div>

                <p className="mx-auto mt-6 max-w-[570px] text-center font-display text-[15px] font-light leading-[1.6] text-[#F8F4EA]/82 sm:mt-7 sm:text-[17px]">
                  Long before there was a story to tell, there were simply two
                  little lives growing in their own directions, completely
                  unaware of where they would eventually meet.
                </p>

                <p className="mx-auto mt-3 max-w-[470px] text-center font-display text-[14px] font-light leading-[1.55] text-[#F8F4EA]/58 sm:text-[15px]">
                  Different days. Different places. Different versions of who
                  they were becoming.
                </p>

                <div className="mt-7 text-center sm:mt-8">
                  <span className="block font-display text-[7px] uppercase tracking-[0.32em] text-[#F8F4EA]/42">
                    And somehow
                  </span>

                  <div className="mt-2.5 flex flex-wrap items-baseline justify-center gap-x-3">
                    <span className="font-script text-[clamp(2.9rem,7vw,4.8rem)] leading-none text-[#F8F4EA]">
                      {brideName}
                    </span>

                    <span className="font-display text-[17px] italic text-[#D8CAA9]/90">
                      &
                    </span>

                    <span className="font-script text-[clamp(2.9rem,7vw,4.8rem)] leading-none text-[#F8F4EA]">
                      {groomName}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="mx-auto mt-9 max-w-[600px] text-center sm:mt-10">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-[#F8F4EA]/18" />

              <span className="font-display text-[7px] uppercase tracking-[0.28em] text-[#F8F4EA]/52 sm:text-[8px]">
                before us
              </span>

              <span className="h-px flex-1 bg-[#F8F4EA]/18" />
            </div>

            <p className="mt-3 font-display text-[12px] italic text-[#F8F4EA]/50 sm:text-[14px]">
              And this was only the beginning.
            </p>
          </div>
        </div>

        <div className="relative z-30 mt-8 border-t border-[#F8F4EA]/16 pt-4 sm:mt-10 sm:pt-5">
          <div className="flex items-center justify-between">
            <span className="font-display text-[7px] uppercase tracking-[0.28em] text-[#F8F4EA]/38 sm:text-[8px]">
              chapter 01
            </span>

            <span className="font-display text-[7px] uppercase tracking-[0.28em] text-[#F8F4EA]/38 sm:text-[8px]">
              our story
            </span>

            <span className="font-display text-[7px] uppercase tracking-[0.28em] text-[#F8F4EA]/38 sm:text-[8px]">
              05
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
