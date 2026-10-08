"use client";

import React from "react";

/* =========================================================
   VENUE DATA
========================================================= */

const weddingDetails = {
  couple: "Loyed & Aneena",

  date: {
    day: "22",
    month: "November",
    year: "2026",
    weekday: "Sunday",
  },

  events: {
    church: {
      label: "Church ceremony",
      title: "The Wedding",
      time: "3:30 PM",
      note: "Ceremony",
      venue: "Church",
      mapUrl: "PASTE_CHURCH_GOOGLE_MAPS_LINK_HERE",
    },

    reception: {
      label: "Reception",
      title: "The Reception",
      time: "6:00 PM",
      note: "Evening",
      venue: "Wedding Venue",
      mapUrl: "PASTE_RECEPTION_GOOGLE_MAPS_LINK_HERE",
    },
  },

  venue: {
    name: "Wedding Venue",
    address: "Complete Venue Address, Kerala, India",
    mapUrl: "https://maps.google.com/",
  },

  palette: {
    title: "Colors of the wedding",

    colors: [
      {
        name: "Sand",
        hex: "#C9BEA7",
      },

      {
        name: "Stone",
        hex: "#D8D4C8",
      },

      {
        name: "Sage",
        hex: "#A3B18A",
      },

      {
        name: "Olive",
        hex: "#59674D",
      },
    ],
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

function CalendarIcon({ size = 16 }: { size?: number }) {
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

function ClockIcon({ size = 16 }: { size?: number }) {
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

function PinIcon({ size = 14 }: { size?: number }) {
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
      <path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function HeartIcon({ size = 16 }: { size?: number }) {
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

function BookIcon({ size = 16 }: { size?: number }) {
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

function CameraIcon({ size = 16 }: { size?: number }) {
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

function ArrowIcon({ size = 10 }: { size?: number }) {
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
      <path d="M5 19L19 5" />
      <path d="M8 5H19V16" />
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

  const formatLocalDate = (date: Date) =>
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

  const location = `${weddingDetails.venue.name}, ${weddingDetails.venue.address}`;

  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Loyed & Aneena//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@loyedandaneena`,
    `DTSTAMP:${new Date()
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z")}`,
    `DTSTART;TZID=Asia/Kolkata:${formatLocalDate(start)}`,
    `DTEND;TZID=Asia/Kolkata:${formatLocalDate(end)}`,
    `SUMMARY:${escapeICS(`${weddingDetails.couple} - The Wedding`)}`,
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
    <div className="flex items-center gap-2">
      <span
        className={[
          "font-[family-name:var(--font-cormorant)] text-[15px] leading-none",
          light ? "text-[#F8F4EA]" : "text-[#59674D]",
        ].join(" ")}
      >
        {number}
      </span>

      <span
        className={[
          "h-px w-5",
          light ? "bg-[#F8F4EA]/55" : "bg-[#59674D]/35",
        ].join(" ")}
      />

      <span
        className={[
          "font-sans text-[7px] font-medium uppercase tracking-[0.23em]",
          light ? "text-[#F8F4EA]/90" : "text-[#59674D]",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   EVENT ITEM
========================================================= */

function EventItem({
  number,
  label,
  title,
  time,
  note,
  venue,
  mapUrl,
  accent,
}: {
  number: string;
  label: string;
  title: string;
  time: string;
  note: string;
  venue: string;
  mapUrl: string;
  accent: "sage" | "mauve";
}) {
  const accentColor = accent === "mauve" ? "#A87E8E" : "#59674D";

  return (
    <div className="px-4 py-4 sm:px-5 sm:py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[6px] tracking-[0.14em]"
            style={{ color: accentColor }}
          >
            {number}
          </span>

          <span className="h-px w-3 bg-[#30352B]/18" />

          <p
            className="font-sans text-[7px] font-medium uppercase tracking-[0.18em]"
            style={{ color: accentColor }}
          >
            {label}
          </p>
        </div>

        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accentColor,
            opacity: 0.7,
          }}
        />
      </div>

      <div className="mt-3.5">
        <h3
          className="
            font-[family-name:var(--font-cormorant)]
            text-[1.5rem]
            font-medium
            leading-[0.9]
            tracking-[-0.025em]
            text-[#30352B]
            sm:text-[1.8rem]
          "
        >
          {title}
        </h3>

        <div className="mt-2.5 flex items-baseline gap-2.5">
          <span
            className="
              font-[family-name:var(--font-cormorant)]
              text-[1.3rem]
              font-medium
              leading-none
              text-[#30352B]
              sm:text-[1.5rem]
            "
          >
            {time}
          </span>

          <span className="font-mono text-[6px] font-medium uppercase tracking-[0.11em] text-[#30352B]/58">
            {note}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-1.5">
            <span style={{ color: accentColor }}>
              <PinIcon size={11} />
            </span>

            <p className="truncate font-sans text-[7px] font-medium uppercase tracking-[0.1em] text-[#30352B]/70">
              {venue}
            </p>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              shrink-0
              items-center
              gap-1
              border-b
              pb-0.5
              font-sans
              text-[6px]
              font-medium
              uppercase
              tracking-[0.13em]
              transition-opacity
              hover:opacity-65
            "
            style={{
              color: accentColor,
              borderColor: `${accentColor}80`,
            }}
          >
            View map
            <ArrowIcon size={7} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   VENUE DETAILS
========================================================= */

function VenueDetails() {
  return (
    <div className="mx-auto w-full max-w-[900px]">
      {/* SECTION LABEL */}

      <div className="mb-2.5 flex items-center justify-between">
        <SectionMarker number="07" label="Where we meet" light />

        <span className="hidden font-mono text-[6px] font-medium uppercase tracking-[0.16em] text-[#F8F4EA]/65 sm:block">
          LOYED & ANEENA
        </span>
      </div>

      {/* MAIN EVENT CARD */}

      <div
        className="
          overflow-hidden
          rounded-[16px]
          border
          border-[#F8F4EA]/42
          bg-[#F8F4EA]/92
          shadow-[0_14px_35px_rgba(48,53,43,0.14)]
          backdrop-blur-[7px]
        "
      >
        {/* DATE */}

        <div
          className="
            border-b
            border-[#30352B]/12
            px-4
            py-4
            sm:px-5
            sm:py-5
          "
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-sans text-[7px] font-semibold uppercase tracking-[0.2em] text-[#59674D]">
                The day
              </p>

              <h2
                className="
                  mt-1.5
                  font-[family-name:var(--font-cormorant)]
                  text-[2.55rem]
                  font-medium
                  leading-[0.82]
                  tracking-[-0.045em]
                  text-[#30352B]
                  sm:text-[3.4rem]
                "
              >
                {weddingDetails.date.day}{" "}
                <span className="italic">{weddingDetails.date.month}</span>
              </h2>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-px w-5 bg-[#A87E8E]/65" />

                <span className="font-mono text-[6px] font-medium uppercase tracking-[0.13em] text-[#30352B]/58">
                  {weddingDetails.date.weekday} · {weddingDetails.date.year}
                </span>
              </div>
            </div>

            <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#A87E8E]/70" />
          </div>
        </div>

        {/* EVENTS */}

        <div className="grid md:grid-cols-2">
          <div className="border-b border-[#30352B]/12 md:border-b-0 md:border-r">
            <EventItem
              number="01"
              label={weddingDetails.events.church.label}
              title={weddingDetails.events.church.title}
              time={weddingDetails.events.church.time}
              note={weddingDetails.events.church.note}
              venue={weddingDetails.events.church.venue}
              mapUrl={weddingDetails.events.church.mapUrl}
              accent="sage"
            />
          </div>

          <EventItem
            number="02"
            label={weddingDetails.events.reception.label}
            title={weddingDetails.events.reception.title}
            time={weddingDetails.events.reception.time}
            note={weddingDetails.events.reception.note}
            venue={weddingDetails.events.reception.venue}
            mapUrl={weddingDetails.events.reception.mapUrl}
            accent="mauve"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COLOUR PALETTE
========================================================= */

function ColorPalette() {
  return (
    <div className="mx-auto mt-4 w-full max-w-[620px]">
      <div
        className="
          rounded-[14px]
          border
          border-[#F8F4EA]/40
          bg-[#F8F4EA]/88
          px-4
          py-3.5
          shadow-[0_8px_24px_rgba(48,53,43,0.09)]
          backdrop-blur-[6px]
          sm:px-5
          sm:py-4
        "
      >
        <div className="flex items-center justify-between">
          <SectionMarker number="08" label="Colour palette" />

          <span className="hidden font-mono text-[6px] font-medium uppercase tracking-[0.14em] text-[#30352B]/42 sm:block">
            Refined tones
          </span>
        </div>

        <h2
          className="
            mt-2
            font-[family-name:var(--font-cormorant)]
            text-[1.3rem]
            font-medium
            leading-none
            tracking-[-0.03em]
            text-[#30352B]
            sm:text-[1.55rem]
          "
        >
          {weddingDetails.palette.title}
        </h2>

        {/* SIMPLE ROUND SWATCHES */}

        <div
          className="
            mt-3.5
            flex
            items-start
            justify-center
            gap-5
            sm:justify-start
            sm:gap-7
          "
        >
          {weddingDetails.palette.colors.map((color) => (
            <div key={color.hex} className="flex flex-col items-center">
              <span
                className="
                    block
                    h-7
                    w-7
                    rounded-full
                    border
                    border-[#30352B]/12
                    sm:h-8
                    sm:w-8
                  "
                style={{
                  backgroundColor: color.hex,
                }}
              />

              <span
                className="
                    mt-1
                    font-sans
                    text-[6px]
                    font-semibold
                    uppercase
                    tracking-[0.11em]
                    text-[#30352B]/70
                    sm:text-[6.5px]
                  "
              >
                {color.name}
              </span>

              <span
                className="
                    mt-0.5
                    font-mono
                    text-[5.5px]
                    font-medium
                    tracking-[0.03em]
                    text-[#30352B]/48
                  "
              >
                {color.hex}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   REFINED ACTION ITEM
========================================================= */

function ActionItem({
  index,
  label,
  href,
  onClick,
  icon,
  accent,
  isButton = false,
}: {
  index: string;
  label: string;
  href?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  accent: "sage" | "mauve" | "gold" | "olive";
  isButton?: boolean;
}) {
  const accentClasses = {
    sage: {
      icon: "text-[#59674D]",
      line: "bg-[#59674D]",
    },

    mauve: {
      icon: "text-[#A87E8E]",
      line: "bg-[#A87E8E]",
    },

    gold: {
      icon: "text-[#C8B58A]",
      line: "bg-[#C8B58A]",
    },

    olive: {
      icon: "text-[#59674D]",
      line: "bg-[#59674D]",
    },
  };

  const styles = accentClasses[accent];

  const content = (
    <>
      {/* NUMBER */}

      <span
        className="
          absolute
          left-3
          top-2.5
          font-mono
          text-[5px]
          font-medium
          tracking-[0.11em]
          text-[#30352B]/40
          sm:left-4
          sm:top-3
        "
      >
        {index}
      </span>

      {/* ICON */}

      <span
        className={`
          ${styles.icon}
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
        `}
      >
        {icon}
      </span>

      {/* LABEL */}

      <span
        className="
          mt-1.5
          font-sans
          text-[6.5px]
          font-semibold
          uppercase
          tracking-[0.12em]
          text-[#30352B]/85
          sm:text-[7px]
        "
      >
        {label}
      </span>

      {/* HOVER LINE */}

      <span
        className={`
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          ${styles.line}
          opacity-70
          transition-all
          duration-300
          group-hover:w-8
          sm:group-hover:w-10
        `}
      />
    </>
  );

  const className = `
    group
    relative
    flex
    min-h-[68px]
    min-w-0
    flex-col
    items-center
    justify-center
    border-r
    border-[#30352B]/10
    px-2
    py-3
    text-center
    transition-colors
    duration-300
    last:border-r-0
    hover:bg-[#F8F4EA]/42
    sm:min-h-[74px]
  `;

  if (isButton) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

/* =========================================================
   ACTION BAR
========================================================= */

function ActionBar() {
  return (
    <div className="mx-auto mt-4 w-full max-w-[900px] sm:mt-5">
      <div
        className="
          overflow-hidden
          rounded-[16px]
          border
          border-[#F8F4EA]/40
          bg-[#F8F4EA]/88
          shadow-[0_10px_30px_rgba(48,53,43,0.10)]
          backdrop-blur-[8px]
        "
      >
        {/* QUIET TOP LABEL */}

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
            <span className="font-sans text-[6px] font-semibold uppercase tracking-[0.2em] text-[#59674D]/78">
              Details
            </span>

            <span className="h-px w-5 bg-[#59674D]/30" />
          </div>

          <span className="font-mono text-[6px] font-medium uppercase tracking-[0.11em] text-[#30352B]/40">
            LOYED & ANEENA
          </span>
        </div>

        {/* ACTIONS */}

        <div className="grid grid-cols-4">
          <ActionItem
            index="01"
            label="RSVP"
            href="#rsvp"
            icon={<HeartIcon size={15} />}
            accent="mauve"
          />

          <ActionItem
            index="02"
            label="Calendar"
            isButton
            onClick={createCalendarFile}
            icon={<CalendarIcon size={15} />}
            accent="sage"
          />

          <ActionItem
            index="03"
            label="Invitation"
            href="#home"
            icon={<BookIcon size={15} />}
            accent="gold"
          />

          <ActionItem
            index="04"
            label="Photos"
            href="#gallery"
            icon={<CameraIcon size={15} />}
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
      {/* ===================================================
          BACKGROUND IMAGE
      =================================================== */}

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

      {/* ===================================================
          IVORY OVERLAY
      =================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(233,232,220,0.34) 0%,
              rgba(233,232,220,0.18) 28%,
              rgba(233,232,220,0.10) 58%,
              rgba(233,232,220,0.22) 100%
            )
          `,
        }}
      />

      {/* ===================================================
          GREEN OVERLAY
      =================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(
              120deg,
              rgba(48,53,43,0.24) 0%,
              rgba(48,53,43,0.08) 35%,
              rgba(89,103,77,0.07) 58%,
              rgba(48,53,43,0.22) 100%
            )
          `,
        }}
      />

      {/* ===================================================
          LOWER DEPTH
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-[22%]
        "
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(48,53,43,0) 0%,
              rgba(48,53,43,0.12) 45%,
              rgba(48,53,43,0.36) 100%
            )
          `,
        }}
      />

      {/* ===================================================
          EDGE VIGNETTE
      =================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 95% 100% at 50% 45%,
              rgba(48,53,43,0) 58%,
              rgba(48,53,43,0.08) 78%,
              rgba(48,53,43,0.16) 100%
            )
          `,
        }}
      />

      {/* ===================================================
          GRAIN
      =================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #30352B 0.5px, transparent 0.5px)",
          backgroundSize: "15px 15px",
        }}
      />

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className="
          relative
          z-10
          px-3
          pb-5
          pt-5
          sm:px-5
          sm:pb-7
          sm:pt-7
          lg:px-8
          lg:pb-8
          lg:pt-8
        "
      >
        <VenueDetails />

        <ColorPalette />

        <ActionBar />

        {/* =================================================
            CLOSING NOTE
        ================================================= */}

        <div
          className="
            mx-auto
            mt-3
            flex
            w-full
            max-w-[900px]
            items-center
            justify-between
            gap-3
          "
        >
          <p className="font-[family-name:var(--font-cormorant)] text-[11px] font-medium italic text-[#F8F4EA]/78 sm:text-[12px]">
            Come comfortable. Come as you are.
          </p>

          <span className="hidden font-mono text-[6px] font-medium uppercase tracking-[0.13em] text-[#F8F4EA]/50 sm:block">
            LOYED & ANEENA · 2026
          </span>
        </div>
      </div>
    </section>
  );
}
