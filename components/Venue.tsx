"use client";

import React from "react";
import { motion } from "framer-motion";

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
      { name: "Sand", hex: "#C9BEA7" },
      { name: "Stone", hex: "#D8D4C8" },
      { name: "Sage", hex: "#A3B18A" },
      { name: "Olive", hex: "#59674D" },
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

function CalendarIcon({ size = 16 }: { size?: number }) {
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
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M7.5 3.5V7" />
      <path d="M16.5 3.5V7" />
      <path d="M3.5 9H20.5" />
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
      strokeWidth="1.1"
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
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 7.5H8L9.4 5H14.6L16 7.5H19C20.1 7.5 21 8.4 21 9.5V17.5C21 18.6 20.1 19.5 19 19.5H5C3.9 19.5 3 18.6 3 17.5V9.5C3 8.4 3.9 7.5 5 7.5Z" />
      <circle cx="12" cy="13.5" r="3.25" />
    </svg>
  );
}

function ArrowIcon({ size = 9 }: { size?: number }) {
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

function createCalendarFile() {
  const { year, month, day, hour, minute, durationHours } =
    weddingDetails.calendar;

  const start = new Date(year, month - 1, day, hour, minute, 0);
  const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);

  const pad = (value: number) => String(value).padStart(2, "0");

  const formatDate = (date: Date) =>
    `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(
      date.getDate(),
    )}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(
      date.getSeconds(),
    )}`;

  const escapeICS = (value: string) =>
    value
      .replace(/\\/g, "\\\\")
      .replace(/\r?\n/g, "\\n")
      .replace(/,/g, "\\,")
      .replace(/;/g, "\\;");

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
    `DTSTART;TZID=Asia/Kolkata:${formatDate(start)}`,
    `DTEND;TZID=Asia/Kolkata:${formatDate(end)}`,
    `SUMMARY:${escapeICS(`${weddingDetails.couple} - The Wedding`)}`,
    `DESCRIPTION:${escapeICS(
      "Join us as we celebrate the beginning of our forever.",
    )}`,
    `LOCATION:${escapeICS(
      `${weddingDetails.venue.name}, ${weddingDetails.venue.address}`,
    )}`,
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
          <span className="font-mono text-[7px]" style={{ color: accentColor }}>
            {number}
          </span>

          <span className="h-px w-3 bg-[#30352B]/18" />

          <span
            className="font-sans text-[7px] font-medium uppercase tracking-[0.18em]"
            style={{ color: accentColor }}
          >
            {label}
          </span>
        </div>

        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      <h3 className="mt-3.5 font-display text-[1.55rem] font-medium leading-[0.9] tracking-[-0.025em] text-[#30352B] sm:text-[1.8rem]">
        {title}
      </h3>

      <div className="mt-2.5 flex items-baseline gap-2.5">
        <span className="font-display text-[1.3rem] leading-none text-[#30352B] sm:text-[1.5rem]">
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

          <span className="truncate font-sans text-[7px] font-medium uppercase tracking-[0.1em] text-[#30352B]/70">
            {venue}
          </span>
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 border-b pb-0.5 font-sans text-[6px] font-medium uppercase tracking-[0.13em] transition-opacity hover:opacity-60"
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
  );
}

function ActionItem({
  index,
  label,
  icon,
  href,
  onClick,
  color,
}: {
  index: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  color: string;
}) {
  const content = (
    <>
      <span className="absolute left-3 top-2.5 font-mono text-[5px] text-[#30352B]/40 sm:left-4">
        {index}
      </span>

      <span
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
        style={{ color }}
      >
        {icon}
      </span>

      <span className="mt-1.5 font-sans text-[6.5px] font-semibold uppercase tracking-[0.12em] text-[#30352B]/85 sm:text-[7px]">
        {label}
      </span>

      <span
        className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 opacity-70 transition-all duration-300 group-hover:w-8"
        style={{ backgroundColor: color }}
      />
    </>
  );

  const className = `
    group
    relative
    flex
    min-h-[68px]
    items-center
    justify-center
    flex-col
    border-r
    border-[#30352B]/10
    px-2
    py-3
    transition-colors
    duration-300
    last:border-r-0
    hover:bg-[#F8F4EA]/45
  `;

  if (onClick) {
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

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative w-full overflow-hidden bg-[#30352B]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1769812344259-73877d0c7bc4?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=2200')",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(233,232,220,0.34)_0%,rgba(233,232,220,0.16)_30%,rgba(233,232,220,0.08)_58%,rgba(48,53,43,0.22)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(48,53,43,0.24)_0%,rgba(48,53,43,0.06)_42%,rgba(48,53,43,0.22)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#30352B]/45 to-transparent"
      />

      <div className="relative z-10 px-3 pb-7 pt-6 sm:px-5 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[900px]"
        >
          <div className="mb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display text-[15px] text-[#F8F4EA]">
                07
              </span>

              <span className="h-px w-5 bg-[#F8F4EA]/55" />

              <span className="font-sans text-[7px] font-medium uppercase tracking-[0.23em] text-[#F8F4EA]/90">
                Where we meet
              </span>
            </div>

            <span className="hidden font-mono text-[6px] text-[#F8F4EA]/65 sm:block">
              LOYED &amp; ANEENA
            </span>
          </div>

          <div className="overflow-hidden rounded-[16px] border border-[#F8F4EA]/42 bg-[#F8F4EA]/92 shadow-[0_14px_35px_rgba(48,53,43,0.14)] backdrop-blur-[7px]">
            <div className="border-b border-[#30352B]/12 px-4 py-4 sm:px-5 sm:py-5">
              <p className="font-sans text-[7px] font-semibold uppercase tracking-[0.2em] text-[#59674D]">
                The day
              </p>

              <div className="mt-1.5 flex items-end justify-between">
                <div>
                  <h2 className="font-display text-[2.55rem] font-medium leading-[0.82] tracking-[-0.045em] text-[#30352B] sm:text-[3.4rem]">
                    {weddingDetails.date.day}{" "}
                    <span className="italic">{weddingDetails.date.month}</span>
                  </h2>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-px w-5 bg-[#A87E8E]/65" />

                    <span className="font-mono text-[6px] text-[#30352B]/58">
                      {weddingDetails.date.weekday} · {weddingDetails.date.year}
                    </span>
                  </div>
                </div>

                <span className="h-1.5 w-1.5 rounded-full bg-[#A87E8E]/70" />
              </div>
            </div>

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.8,
            delay: 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-4 w-full max-w-[620px]"
        >
          <div className="rounded-[14px] border border-[#F8F4EA]/40 bg-[#F8F4EA]/88 px-4 py-3.5 shadow-[0_8px_24px_rgba(48,53,43,0.09)]">
            <div className="flex items-center gap-2">
              <span className="font-display text-[15px] text-[#59674D]">
                08
              </span>

              <span className="h-px w-5 bg-[#59674D]/35" />

              <span className="font-sans text-[7px] font-medium uppercase tracking-[0.23em] text-[#59674D]">
                Colour palette
              </span>
            </div>

            <h2 className="mt-2 font-display text-[1.3rem] leading-none text-[#30352B] sm:text-[1.55rem]">
              {weddingDetails.palette.title}
            </h2>

            <div className="mt-3.5 flex justify-center gap-5 sm:justify-start sm:gap-7">
              {weddingDetails.palette.colors.map((color) => (
                <div key={color.hex} className="flex flex-col items-center">
                  <span
                    className="h-7 w-7 rounded-full border border-[#30352B]/12 sm:h-8 sm:w-8"
                    style={{ backgroundColor: color.hex }}
                  />

                  <span className="mt-1 font-sans text-[6px] font-semibold uppercase tracking-[0.11em] text-[#30352B]/70">
                    {color.name}
                  </span>

                  <span className="mt-0.5 font-mono text-[5.5px] text-[#30352B]/48">
                    {color.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-4 w-full max-w-[900px]"
        >
          <div className="overflow-hidden rounded-[16px] border border-[#F8F4EA]/40 bg-[#F8F4EA]/88">
            <div className="flex items-center justify-between border-b border-[#30352B]/10 px-4 py-2.5">
              <span className="font-sans text-[7px] font-semibold uppercase tracking-[0.18em] text-[#59674D]/80">
                Details
              </span>

              <span className="font-mono text-[6px] text-[#30352B]/42">
                LOYED &amp; ANEENA
              </span>
            </div>

            <div className="grid grid-cols-4">
              <ActionItem
                index="01"
                label="RSVP"
                href="#rsvp"
                icon={<HeartIcon />}
                color="#A87E8E"
              />

              <ActionItem
                index="02"
                label="Calendar"
                onClick={createCalendarFile}
                icon={<CalendarIcon />}
                color="#59674D"
              />

              <ActionItem
                index="03"
                label="Invitation"
                href="#hero"
                icon={<BookIcon />}
                color="#C8B58A"
              />

              <ActionItem
                index="04"
                label="Photos"
                href="#gallery"
                icon={<CameraIcon />}
                color="#59674D"
              />
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-4 flex w-full max-w-[900px] items-center justify-between">
          <p className="font-display text-[13px] italic text-[#F8F4EA]/80">
            Come comfortable. Come as you are.
          </p>

          <span className="hidden font-sans text-[7px] uppercase tracking-[0.14em] text-[#F8F4EA]/50 sm:block">
            LOYED &amp; ANEENA · 2026
          </span>
        </div>
      </div>
    </section>
  );
}
