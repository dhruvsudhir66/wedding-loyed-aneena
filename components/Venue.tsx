"use client";

import React from "react";

/* =========================================================
   VENUE DATA
========================================================= */

const weddingDetails = {
  date: {
    day: "22",
    month: "November",
    year: "2026",
    weekday: "Sunday",
  },

  time: {
    value: "6:00 PM",
    note: "Evening",
  },

  event: {
    title: "The Wedding",
    couple: "Loyed & Aneena",
  },

  venue: {
    name: "Wedding Venue",
    address: "Complete Venue Address, Kerala, India",
    mapUrl: "https://maps.google.com/",
  },

  dressCode: {
    title: "Garden elegance",
    intro:
      "Soft tones, natural textures and understated elegance. Come dressed in colours that feel natural to the setting and comfortable for an evening of celebration.",

    male: {
      label: "For him",
      title: "Refined & relaxed",
      description: "Linen shirts, tailored separates and warm natural tones.",
      colors: [
        { name: "Sand", hex: "#C9BEA7" },
        { name: "Stone", hex: "#D8D4C8" },
        { name: "Sage", hex: "#A3B18A" },
        { name: "Olive", hex: "#59674D" },
      ],
    },

    female: {
      label: "For her",
      title: "Soft & effortless",
      description:
        "Flowing dresses, elegant silhouettes and soft garden-inspired tones.",
      colors: [
        { name: "Mauve", hex: "#A87E8E" },
        { name: "Sage", hex: "#A3B18A" },
        { name: "Champagne", hex: "#C8B58A" },
        { name: "Olive", hex: "#59674D" },
      ],
    },
  },

  calendar: {
    fileName: "Loyed-and-Aneena-Wedding.ics",
    year: 2026,
    month: 11,
    day: 22,
    hour: 18,
    minute: 0,
    durationHours: 2,
  },
};

/* =========================================================
   ICONS
========================================================= */

function CalendarIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5.5" y="7" width="21" height="20" rx="2" />
      <path d="M10.5 4.5V10" />
      <path d="M21.5 4.5V10" />
      <path d="M5.5 13H26.5" />

      <circle cx="11" cy="18" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="18" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="21" cy="18" r="0.9" fill="currentColor" stroke="none" />

      <circle cx="11" cy="23" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="23" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="21" cy="23" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ClockIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="10.8" />
      <path d="M16 9.2V16L20.4 18.8" />
      <circle cx="16" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WeddingIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 26.5V16L16 11L24 16V26.5" />
      <path d="M5 26.5H27" />
      <path d="M16 5V11" />
      <path d="M13 8H19" />
      <path d="M13 26.5V20H19V26.5" />
      <path d="M9 17H11" />
      <path d="M21 17H23" />
    </svg>
  );
}

function PinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function HeartIcon({ size = 21 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 8.9c0 5-8.5 10.2-8.5 10.2S3.5 13.9 3.5 8.9A4.55 4.55 0 0 1 12 6.45 4.55 4.55 0 0 1 20.5 8.9Z" />
    </svg>
  );
}

function BookIcon({ size = 21 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20V20H7.5A2.5 2.5 0 0 0 5 22V5.5Z" />
      <path d="M5 5.5V22" />
      <path d="M9 7.5H16" />
      <path d="M9 10.5H15" />
    </svg>
  );
}

function CameraIcon({ size = 21 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 7.5H8L9.4 5H14.6L16 7.5H19C20.1 7.5 21 8.4 21 9.5V17.5C21 18.6 20.1 19.5 19 19.5H5C3.9 19.5 3 18.6 3 17.5V9.5C3 8.4 3.9 7.5 5 7.5Z" />
      <circle cx="12" cy="13.5" r="3.25" />
      <circle cx="17.5" cy="10.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DressIcon({ size = 21 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 5.2L6 8.1L3.5 18C6 19.1 8.8 19.7 12 19.7C15.2 19.7 18 19.1 20.5 18L18 8.1L15 5.2" />
      <path d="M9.2 4.5C9.2 3.7 9.9 3 10.7 3H13.3C14.1 3 14.8 3.7 14.8 4.5" />
      <path d="M9 7C9.9 8.2 10.9 8.8 12 8.8C13.1 8.8 14.1 8.2 15 7" />
    </svg>
  );
}

function ArrowIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 19L19 5" />
      <path d="M8 5H19V16" />
    </svg>
  );
}

function SparkleIcon({ size = 11 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.05"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3L13.7 10.3L21 12L13.7 13.7L12 21L10.3 13.7L3 12L10.3 10.3L12 3Z" />
    </svg>
  );
}

/* =========================================================
   CALENDAR FILE
========================================================= */

function createCalendarFile() {
  const { year, month, day, hour, minute, durationHours } =
    weddingDetails.calendar;

  const start = new Date(year, month - 1, day, hour, minute, 0);

  const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);

  const pad = (value: number) => String(value).padStart(2, "0");

  const formatDate = (date: Date) =>
    `${date.getFullYear()}${pad(
      date.getMonth() + 1,
    )}${pad(date.getDate())}T${pad(
      date.getHours(),
    )}${pad(date.getMinutes())}${pad(date.getSeconds())}`;

  const escapeICS = (value: string) =>
    value
      .replace(/\\/g, "\\\\")
      .replace(/\r?\n/g, "\\n")
      .replace(/,/g, "\\,")
      .replace(/;/g, "\\;");

  const location =
    `${weddingDetails.venue.name}, ` + weddingDetails.venue.address;

  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Loyed & Aneena//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@loyedandaneena`,
    `DTSTAMP:${formatDate(new Date())}`,
    `DTSTART;TZID=Asia/Kolkata:${formatDate(start)}`,
    `DTEND;TZID=Asia/Kolkata:${formatDate(end)}`,
    `SUMMARY:${escapeICS(`${weddingDetails.event.couple} - The Wedding`)}`,
    `DESCRIPTION:${escapeICS(
      "Join us as we celebrate the beginning of our forever.",
    )}`,
    `LOCATION:${escapeICS(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([calendar], {
    type: "text/calendar;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = weddingDetails.calendar.fileName;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

/* =========================================================
   SECTION MARKER
========================================================= */

function SectionMarker({
  number,
  label,
  light = false,
}: {
  number: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={[
          "font-[family-name:var(--font-cormorant)] text-[17px] leading-none",
          light ? "text-[#F8F4EA]" : "text-[#59674D]",
        ].join(" ")}
      >
        {number}
      </span>

      <span
        className={[
          "h-px w-6",
          light ? "bg-[#F8F4EA]/50" : "bg-[#59674D]/35",
        ].join(" ")}
      />

      <span
        className={[
          "font-sans text-[7px] font-medium uppercase tracking-[0.28em]",
          light ? "text-[#F8F4EA]/85" : "text-[#59674D]",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   VENUE DETAILS
========================================================= */

function VenueDetails() {
  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <div className="mb-2.5 flex items-end justify-between sm:mb-3">
        <SectionMarker number="07" label="Where we meet" light />

        <span className="hidden font-mono text-[7px] tracking-[0.22em] text-[#F8F4EA]/55 sm:block">
          LOYED & ANEENA
        </span>
      </div>

      <div
        className="
          relative
          overflow-hidden
          rounded-[18px]
          border
          border-[#F8F4EA]/45
          bg-[#F8F4EA]/78
          shadow-[0_18px_50px_rgba(48,53,43,0.14)]
          backdrop-blur-[7px]
        "
      >
        {/* corner details */}
        <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-[#59674D]/45" />
        <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-[#59674D]/45" />
        <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-[#59674D]/45" />
        <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#59674D]/45" />

        <div className="grid grid-cols-3">
          {/* DATE */}
          <div
            className="
              relative
              min-h-[106px]
              border-r
              border-[#30352B]/12
              px-3
              py-3.5
              sm:min-h-[124px]
              sm:px-5
              sm:py-5
            "
          >
            <div className="flex items-start justify-between">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-[12px]
                  border
                  border-[#59674D]/22
                  bg-[#59674D]/[0.05]
                  text-[#59674D]
                  sm:h-9
                  sm:w-9
                "
              >
                <CalendarIcon size={17} />
              </div>

              <span className="hidden font-mono text-[6px] tracking-[0.18em] text-[#59674D]/45 sm:block">
                01
              </span>
            </div>

            <div className="mt-4 sm:mt-5">
              <p className="font-sans text-[6px] font-medium uppercase tracking-[0.22em] text-[#59674D] sm:text-[7px]">
                Date
              </p>

              <p className="mt-1 font-[family-name:var(--font-cormorant)] text-[1.08rem] font-light leading-[0.95] tracking-[-0.03em] sm:text-[1.65rem]">
                22 November
              </p>

              <p className="mt-1 font-mono text-[5.5px] uppercase tracking-[0.15em] text-[#59674D]/60 sm:text-[6px]">
                2026 · Sunday
              </p>
            </div>
          </div>

          {/* TIME */}
          <div
            className="
              relative
              min-h-[106px]
              border-r
              border-[#30352B]/12
              px-3
              py-3.5
              sm:min-h-[124px]
              sm:px-5
              sm:py-5
            "
          >
            <div className="flex items-start justify-between">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-[12px]
                  border
                  border-[#A87E8E]/22
                  bg-[#A87E8E]/[0.05]
                  text-[#A87E8E]
                  sm:h-9
                  sm:w-9
                "
              >
                <ClockIcon size={17} />
              </div>

              <span className="hidden font-mono text-[6px] tracking-[0.18em] text-[#A87E8E]/45 sm:block">
                02
              </span>
            </div>

            <div className="mt-4 sm:mt-5">
              <p className="font-sans text-[6px] font-medium uppercase tracking-[0.22em] text-[#59674D] sm:text-[7px]">
                Time
              </p>

              <p className="mt-1 font-[family-name:var(--font-cormorant)] text-[1.2rem] font-light leading-[0.95] tracking-[-0.03em] sm:text-[1.75rem]">
                6:00 PM
              </p>

              <p className="mt-1 font-mono text-[5.5px] uppercase tracking-[0.15em] text-[#59674D]/60 sm:text-[6px]">
                Evening
              </p>
            </div>
          </div>

          {/* EVENT */}
          <div
            className="
              relative
              min-h-[106px]
              px-3
              py-3.5
              sm:min-h-[124px]
              sm:px-5
              sm:py-5
            "
          >
            <div className="flex items-start justify-between">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-[12px]
                  border
                  border-[#C8B58A]/35
                  bg-[#C8B58A]/[0.08]
                  text-[#59674D]
                  sm:h-9
                  sm:w-9
                "
              >
                <WeddingIcon size={17} />
              </div>

              <span className="hidden font-mono text-[6px] tracking-[0.18em] text-[#59674D]/45 sm:block">
                03
              </span>
            </div>

            <div className="mt-4 sm:mt-5">
              <p className="font-sans text-[6px] font-medium uppercase tracking-[0.22em] text-[#59674D] sm:text-[7px]">
                Event
              </p>

              <p className="mt-1 font-[family-name:var(--font-cormorant)] text-[1.08rem] font-light leading-[0.95] tracking-[-0.03em] sm:text-[1.65rem]">
                The Wedding
              </p>

              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="h-px w-3.5 bg-[#A87E8E]" />

                <span className="font-[family-name:var(--font-allura)] text-[14px] leading-none text-[#59674D] sm:text-[17px]">
                  Loyed & Aneena
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            border-t
            border-[#30352B]/12
            px-3
            py-3
            sm:px-5
            sm:py-3.5
          "
        >
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#59674D]/18 text-[#59674D]">
              <PinIcon size={14} />
            </div>

            <div className="min-w-0">
              <p className="font-sans text-[6px] font-medium uppercase tracking-[0.2em] text-[#59674D]">
                Venue
              </p>

              <p className="mt-0.5 truncate font-[family-name:var(--font-cormorant)] text-[1rem] leading-none text-[#30352B] sm:text-[1.1rem]">
                {weddingDetails.venue.name}
              </p>

              <p className="mt-0.5 truncate font-sans text-[6.5px] text-[#30352B]/50 sm:text-[7px]">
                {weddingDetails.venue.address}
              </p>
            </div>
          </div>

          <a
            href={weddingDetails.venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-1.5
              font-sans
              text-[6px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#59674D]
              transition-all
              hover:text-[#A87E8E]
              sm:text-[7px]
            "
          >
            Directions
            <ArrowIcon size={10} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COLOR SWATCHES
========================================================= */

function ColorSwatches({
  colors,
}: {
  colors: { name: string; hex: string }[];
}) {
  return (
    <div className="mt-3.5">
      <p className="font-sans text-[5.5px] font-medium uppercase tracking-[0.18em] text-[#30352B]/45">
        Suggested tones
      </p>

      <div className="mt-2 flex items-center gap-1.5">
        {colors.map((color) => (
          <div key={color.hex} className="group relative">
            <span
              className="
                block
                h-6
                w-6
                rounded-full
                border
                border-[#30352B]/10
                shadow-[0_2px_7px_rgba(48,53,43,0.08)]
                transition-transform
                duration-200
                group-hover:scale-110
                sm:h-7
                sm:w-7
              "
              style={{
                backgroundColor: color.hex,
              }}
            />

            <span
              className="
                pointer-events-none
                absolute
                left-1/2
                top-full
                z-30
                mt-1.5
                -translate-x-1/2
                whitespace-nowrap
                rounded-md
                bg-[#30352B]
                px-1.5
                py-1
                font-mono
                text-[5px]
                uppercase
                tracking-[0.1em]
                text-[#F8F4EA]
                opacity-0
                transition-opacity
                group-hover:opacity-100
              "
            >
              {color.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   DRESS VISUALS
========================================================= */

function ShirtOutline() {
  return (
    <div className="relative h-[76px] w-[66px] sm:h-[86px] sm:w-[74px]">
      <svg
        viewBox="0 0 100 120"
        className="h-full w-full"
        fill="none"
        stroke="#59674D"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M35 18L16 31L7 52L24 60L31 45V101H69V45L76 60L93 52L84 31L65 18" />
        <path d="M35 18C39 28 61 28 65 18" />
        <path d="M48 31L43 101" />
        <path d="M52 31L57 101" />
        <path d="M43 34H57" />
      </svg>
    </div>
  );
}

function GownOutline() {
  return (
    <div className="relative h-[78px] w-[66px] sm:h-[88px] sm:w-[74px]">
      <svg
        viewBox="0 0 100 120"
        className="h-full w-full"
        fill="none"
        stroke="#A87E8E"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M39 18L31 34L16 48L29 53L36 43" />
        <path d="M61 18L69 34L84 48L71 53L64 43" />
        <path d="M39 18C42 25 58 25 61 18" />
        <path d="M36 43L32 102H68L64 43" />
        <path d="M32 102L21 108H79L68 102" />
        <path d="M42 58C48 61 52 61 58 58" />
      </svg>
    </div>
  );
}

/* =========================================================
   DRESS CODE
========================================================= */

function DressCode() {
  return (
    <div id="dress-code" className="mx-auto mt-5 w-full max-w-[1080px] sm:mt-6">
      <div
        className="
          overflow-hidden
          rounded-[18px]
          border
          border-[#F8F4EA]/38
          bg-[#F8F4EA]/82
          shadow-[0_18px_45px_rgba(48,53,43,0.12)]
          backdrop-blur-[7px]
        "
      >
        {/* HEADER */}
        <div className="relative px-4 py-5 sm:px-6 sm:py-6">
          <span className="absolute right-5 top-5 text-[#A87E8E]/70">
            <SparkleIcon size={12} />
          </span>

          <SectionMarker number="08" label="Dress code" />

          <div className="mt-2.5 flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                text-[2.25rem]
                font-light
                leading-[0.85]
                tracking-[-0.045em]
                sm:text-[3.2rem]
              "
            >
              {weddingDetails.dressCode.title}
            </h2>

            <p
              className="
                max-w-[510px]
                font-[family-name:var(--font-cormorant)]
                text-[0.92rem]
                leading-[1.35]
                text-[#30352B]/62
                sm:text-[1rem]
              "
            >
              {weddingDetails.dressCode.intro}
            </p>
          </div>
        </div>

        {/* DIRECTIONS */}
        <div className="grid border-t border-[#30352B]/10 md:grid-cols-2">
          {/* FOR HIM */}
          <div
            className="
              relative
              border-b
              border-[#30352B]/10
              px-4
              py-5
              md:border-b-0
              md:border-r
              sm:px-6
              sm:py-6
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-[6px] tracking-[0.18em] text-[#59674D]/60">
                  01
                </span>

                <p className="mt-0.5 font-sans text-[7px] font-medium uppercase tracking-[0.24em] text-[#59674D]">
                  {weddingDetails.dressCode.male.label}
                </p>
              </div>

              <span className="font-mono text-[5.5px] uppercase tracking-[0.14em] text-[#59674D]/45">
                Garden formal
              </span>
            </div>

            <div className="mt-4 grid grid-cols-[74px_1fr] items-center gap-4 sm:grid-cols-[84px_1fr] sm:gap-5">
              <div
                className="
                  flex
                  h-[78px]
                  w-[74px]
                  items-center
                  justify-center
                  rounded-[16px]
                  border
                  border-[#59674D]/16
                  bg-[#59674D]/[0.045]
                  sm:h-[88px]
                  sm:w-[84px]
                "
              >
                <ShirtOutline />
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[1.45rem] leading-[0.9] sm:text-[1.8rem]">
                  {weddingDetails.dressCode.male.title}
                </h3>

                <p className="mt-1.5 max-w-[330px] font-sans text-[6.5px] leading-[1.45] text-[#30352B]/52 sm:text-[7.5px]">
                  {weddingDetails.dressCode.male.description}
                </p>

                <ColorSwatches colors={weddingDetails.dressCode.male.colors} />
              </div>
            </div>
          </div>

          {/* FOR HER */}
          <div
            className="
              relative
              px-4
              py-5
              sm:px-6
              sm:py-6
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-[6px] tracking-[0.18em] text-[#A87E8E]/65">
                  02
                </span>

                <p className="mt-0.5 font-sans text-[7px] font-medium uppercase tracking-[0.24em] text-[#A87E8E]">
                  {weddingDetails.dressCode.female.label}
                </p>
              </div>

              <span className="font-mono text-[5.5px] uppercase tracking-[0.14em] text-[#A87E8E]/50">
                Garden elegance
              </span>
            </div>

            <div className="mt-4 grid grid-cols-[74px_1fr] items-center gap-4 sm:grid-cols-[84px_1fr] sm:gap-5">
              <div
                className="
                  flex
                  h-[78px]
                  w-[74px]
                  items-center
                  justify-center
                  rounded-[16px]
                  border
                  border-[#A87E8E]/16
                  bg-[#A87E8E]/[0.035]
                  sm:h-[88px]
                  sm:w-[84px]
                "
              >
                <GownOutline />
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[1.45rem] leading-[0.9] sm:text-[1.8rem]">
                  {weddingDetails.dressCode.female.title}
                </h3>

                <p className="mt-1.5 max-w-[330px] font-sans text-[6.5px] leading-[1.45] text-[#30352B]/52 sm:text-[7.5px]">
                  {weddingDetails.dressCode.female.description}
                </p>

                <ColorSwatches
                  colors={weddingDetails.dressCode.female.colors}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ACTION ITEM
========================================================= */

function ActionItem({
  index,
  label,
  description,
  href,
  onClick,
  icon,
  accent,
  isButton = false,
}: {
  index: string;
  label: string;
  description: string;
  href?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  accent: "sage" | "mauve" | "gold" | "olive";
  isButton?: boolean;
}) {
  const accentClasses = {
    sage: {
      icon: "text-[#59674D]",
      iconBg: "bg-[#59674D]/[0.07]",
      border: "border-[#59674D]/18",
      dot: "bg-[#59674D]",
    },
    mauve: {
      icon: "text-[#A87E8E]",
      iconBg: "bg-[#A87E8E]/[0.07]",
      border: "border-[#A87E8E]/20",
      dot: "bg-[#A87E8E]",
    },
    gold: {
      icon: "text-[#59674D]",
      iconBg: "bg-[#C8B58A]/[0.11]",
      border: "border-[#C8B58A]/28",
      dot: "bg-[#C8B58A]",
    },
    olive: {
      icon: "text-[#59674D]",
      iconBg: "bg-[#59674D]/[0.055]",
      border: "border-[#59674D]/18",
      dot: "bg-[#59674D]",
    },
  };

  const styles = accentClasses[accent];

  const content = (
    <>
      {/* top tiny ornament */}
      <span
        className="
          absolute
          right-2.5
          top-2
          h-1
          w-1
          rounded-full
          bg-[#59674D]/35
        "
      />

      {/* icon */}
      <div
        className={`
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-[12px]
          border
          ${styles.border}
          ${styles.iconBg}
          ${styles.icon}
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
          sm:h-10
          sm:w-10
        `}
      >
        {icon}
      </div>

      {/* text */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-center gap-1 sm:justify-start">
          <span className="font-mono text-[5px] tracking-[0.14em] text-[#30352B]/35">
            {index}
          </span>

          <span className={`h-px w-2.5 ${styles.dot} opacity-60`} />
        </div>

        <p className="mt-1 truncate text-center font-sans text-[6.5px] font-medium uppercase tracking-[0.13em] text-[#30352B] sm:text-left sm:text-[7px]">
          {label}
        </p>

        <p className="mt-0.5 hidden truncate font-[family-name:var(--font-cormorant)] text-[11px] leading-none text-[#30352B]/55 sm:block">
          {description}
        </p>
      </div>

      {/* arrow */}
      <span className="hidden text-[#59674D]/55 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block">
        <ArrowIcon size={11} />
      </span>
    </>
  );

  const commonClassName = `
    group
    relative
    flex
    min-w-0
    min-h-[72px]
    items-center
    justify-center
    gap-2
    overflow-hidden
    border-r
    border-[#30352B]/10
    px-2
    py-2.5
    text-left
    transition-all
    duration-300
    last:border-r-0
    hover:bg-[#F8F4EA]/60
    sm:min-h-[82px]
    sm:justify-start
    sm:gap-2.5
    sm:px-3.5
    sm:py-3
  `;

  if (isButton) {
    return (
      <button type="button" onClick={onClick} className={commonClassName}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={commonClassName}>
      {content}
    </a>
  );
}

/* =========================================================
   ACTION BAR
========================================================= */

function ActionBar() {
  return (
    <div className="mx-auto mt-4 w-full max-w-[1080px] sm:mt-5">
      <div
        className="
          overflow-hidden
          rounded-[17px]
          border
          border-[#F8F4EA]/42
          bg-[#F8F4EA]/84
          shadow-[0_12px_35px_rgba(48,53,43,0.12)]
          backdrop-blur-[7px]
        "
      >
        {/* heading */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#30352B]/10
            px-3
            py-2
            sm:px-4
          "
        >
          <div className="flex items-center gap-2">
            <span className="font-sans text-[5.5px] font-medium uppercase tracking-[0.2em] text-[#59674D]/70 sm:text-[6px]">
              For your pocket
            </span>

            <span className="h-px w-4 bg-[#59674D]/25" />
          </div>

          <span className="text-[#A87E8E]/65">
            <SparkleIcon size={8} />
          </span>
        </div>

        {/* FOUR ITEMS — ALWAYS ONE ROW */}
        <div className="grid grid-cols-4">
          <ActionItem
            index="01"
            label="RSVP"
            description="Confirm your presence"
            href="#rsvp"
            icon={<HeartIcon size={17} />}
            accent="mauve"
          />

          <ActionItem
            index="02"
            label="Calendar"
            description="Save the date"
            isButton
            onClick={createCalendarFile}
            icon={<CalendarIcon size={17} />}
            accent="sage"
          />

          <ActionItem
            index="03"
            label="Invitation"
            description="See the invitation"
            href="#home"
            icon={<BookIcon size={17} />}
            accent="gold"
          />

          <ActionItem
            index="04"
            label="Snap images"
            description="Share your moments"
            href="#gallery"
            icon={<CameraIcon size={17} />}
            accent="olive"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN VENUE SECTION
========================================================= */

export default function Venue() {
  return (
    <section
      id="venue"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#30352B]
        text-[#30352B]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          sm:bg-[center_42%]
          lg:bg-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1769812344259-73877d0c7bc4?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=2200')",
        }}
      />

      {/* =====================================================
          LIGHT IVORY WASH
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(233,232,220,0.28) 0%,
              rgba(233,232,220,0.14) 25%,
              rgba(233,232,220,0.08) 52%,
              rgba(233,232,220,0.14) 76%,
              rgba(233,232,220,0.26) 100%
            )
          `,
        }}
      />

      {/* =====================================================
          SOFT OLIVE GRADE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(
              118deg,
              rgba(48,53,43,0.20) 0%,
              rgba(48,53,43,0.07) 24%,
              rgba(89,103,77,0.07) 52%,
              rgba(48,53,43,0.12) 78%,
              rgba(48,53,43,0.24) 100%
            )
          `,
        }}
      />

      {/* =====================================================
          LOWER DEPTH
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-[25%]
        "
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(48,53,43,0) 0%,
              rgba(48,53,43,0.10) 35%,
              rgba(48,53,43,0.27) 78%,
              rgba(48,53,43,0.42) 100%
            )
          `,
        }}
      />

      {/* =====================================================
          EDGE VIGNETTE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 92% 100% at 50% 45%,
              rgba(48,53,43,0) 55%,
              rgba(48,53,43,0.07) 76%,
              rgba(48,53,43,0.18) 100%
            )
          `,
        }}
      />

      {/* =====================================================
          GRAIN
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #30352B 0.5px, transparent 0.5px)",
          backgroundSize: "15px 15px",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          px-3
          pb-6
          pt-6
          sm:px-6
          sm:pb-8
          sm:pt-8
          lg:px-10
          lg:pb-10
          lg:pt-9
        "
      >
        <VenueDetails />

        <DressCode />

        <ActionBar />

        {/* closing note */}
        <div
          className="
            mx-auto
            mt-3
            flex
            w-full
            max-w-[1080px]
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-2">
            <span className="text-[#F8F4EA]/65">
              <HeartIcon size={12} />
            </span>

            <p className="font-[family-name:var(--font-cormorant)] text-[13px] italic text-[#F8F4EA]/75 sm:text-[15px]">
              Come comfortable. Come as you are.
            </p>
          </div>

          <span className="hidden font-mono text-[6px] uppercase tracking-[0.16em] text-[#F8F4EA]/45 sm:block">
            LOYED & ANEENA · 2026
          </span>
        </div>
      </div>
    </section>
  );
}
