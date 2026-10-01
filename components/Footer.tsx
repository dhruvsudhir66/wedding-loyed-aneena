"use client";

import React from "react";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.7" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8F4EA] text-[#30352B]">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        {/* Couple */}
        <div className="flex flex-col items-center text-center">
          <p className="font-sans text-[7px] font-medium uppercase tracking-[0.3em] text-[#59674D]/65">
            Stay connected
          </p>

          <h2 className="mt-2 font-[family-name:var(--font-allura)] text-[2.4rem] leading-none text-[#30352B] sm:text-[2.8rem]">
            Loyed & Aneena
          </h2>

          <a
            href="https://instagram.com/yourcouplehandle"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-3
              inline-flex
              items-center
              gap-1.5
              font-sans
              text-[7px]
              uppercase
              tracking-[0.18em]
              text-[#59674D]
              transition-colors
              hover:text-[#A87E8E]
              sm:text-[8px]
            "
          >
            <InstagramIcon size={13} />
            @yourcouplehandle
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-full max-w-[700px] bg-[#30352B]/10 sm:my-10" />

        {/* Company */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-sans text-[6px] font-medium uppercase tracking-[0.22em] text-[#30352B]/45">
            Website crafted by
          </p>

          <p className="font-sans text-[8px] font-medium uppercase tracking-[0.18em] text-[#30352B]">
            Wyvernstack
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a
              href="https://wyvernstack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-mono
                text-[6px]
                tracking-[0.08em]
                text-[#59674D]/65
                transition-colors
                hover:text-[#A87E8E]
                sm:text-[7px]
              "
            >
              aevonsolutions.co.in
            </a>

            <span className="h-1 w-1 rounded-full bg-[#A87E8E]/45" />

            <a
              href="https://instagram.com/yourcompanyhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1
                font-mono
                text-[6px]
                tracking-[0.08em]
                text-[#59674D]/65
                transition-colors
                hover:text-[#A87E8E]
                sm:text-[7px]
              "
            >
              <InstagramIcon size={11} />
              @yourcompanyhandle
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-7 text-center">
          <p className="font-mono text-[5.5px] uppercase tracking-[0.16em] text-[#30352B]/30">
            © 2026 · Loyed & Aneena
          </p>
        </div>
      </div>
    </footer>
  );
}
