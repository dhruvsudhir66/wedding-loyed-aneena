"use client";

/* =========================================================
   GALLERY CONTENT
========================================================= */

const galleryDetails = {
  sectionNumber: "06",

  eyebrow: "A PRIVATE COLLECTION",

  title: "Little moments.",

  subtitle: "The memories we keep close.",

  strips: [
    {
      images: [
        {
          src: "/images/couple-gallery-3.webp",
          alt: "Aneena and Loyed at the beach",
        },
        {
          src: "/images/couple-gallery-2.webp",
          alt: "Aneena and Loyed walking together",
        },
        {
          src: "/images/couple-gallery-1.webp",
          alt: "Aneena and Loyed in the car",
        },
      ],
    },

    {
      images: [
        {
          src: "/images/couple-gallery-4.webp",
          alt: "Aneena and Loyed together",
        },
        {
          src: "/images/couple-gallery-5.webp",
          alt: "Aneena and Loyed with their dog",
        },
        {
          src: "/images/couple-gallery-6.webp",
          alt: "Aneena and Loyed walking on the beach",
        },
      ],
    },
  ],
};

/* =========================================================
   DECORATIVE MARK
========================================================= */

function SmallMark() {
  return (
    <span aria-hidden="true" className="relative block h-4 w-4 shrink-0">
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#59674D]/25" />

      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#59674D]/25" />

      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#C8B58A] bg-[#F8F4EA]" />
    </span>
  );
}

/* =========================================================
   PHOTO STRIP

   Images keep their natural aspect ratio.
   Nothing is cropped.
========================================================= */

function PhotoStrip({
  images,
  side,
}: {
  images: {
    src: string;
    alt: string;
  }[];

  side: "left" | "right";
}) {
  return (
    <div
      className={`
        group
        relative
        w-[44vw]
        max-w-[228px]
        min-w-0
        shrink-0

        ${side === "left" ? "rotate-[-1deg]" : "rotate-[1deg]"}
      `}
    >
      {/* ===================================================
          BACKING PAPER
      =================================================== */}

      <div
        aria-hidden="true"
        className={`
          absolute
          inset-0
          bg-[#DCD5C6]
          shadow-[0_22px_45px_-28px_rgba(48,53,43,0.5)]

          ${
            side === "left"
              ? "translate-x-[5px] translate-y-[7px] rotate-[1.2deg]"
              : "-translate-x-[5px] translate-y-[7px] rotate-[-1.2deg]"
          }
        `}
      />

      {/* ===================================================
          MAIN POLAROID
      =================================================== */}

      <div
        className="
          relative
          z-10
          overflow-hidden
          bg-[#FFFDF9]

          px-[8px]
          pt-[8px]
          pb-[48px]

          shadow-[0_22px_48px_-27px_rgba(48,53,43,0.5)]

          transition-transform
          duration-500
          ease-out

          group-hover:-translate-y-1
        "
      >
        {/* subtle paper edge */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            border
            border-[#59674D]/10
          "
        />

        {/* =================================================
            THREE FULL PHOTOGRAPHS
        ================================================= */}

        <div className="relative space-y-[8px] sm:space-y-[9px]">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="
                relative
                overflow-hidden
                bg-[#E7E2D8]
              "
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="
                  block
                  h-auto
                  w-full
                  select-none

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-[1.012]
                "
              />

              {/* extremely subtle image edge */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  border
                  border-black/[0.06]
                "
              />
            </div>
          ))}
        </div>

        {/* =================================================
            LONG BLANK POLAROID BASE
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            relative
            h-[62px]

            sm:h-[72px]
          "
        >
          {/* tiny understated center mark */}
          <span
            className="
              absolute
              bottom-[13px]
              left-1/2
              h-[3px]
              w-[3px]
              -translate-x-1/2
              rounded-full
              bg-[#A87E8E]/45
            "
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN GALLERY
========================================================= */

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F8F4EA]

        px-4
        py-12

        sm:px-8
        sm:py-16

        lg:px-12
        lg:py-20
      "
    >
      {/* ===================================================
          SOFT BACKGROUND ATMOSPHERE
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[32%]
          h-[330px]
          w-[330px]
          rounded-full
          bg-[#A87E8E]/[0.025]
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-140px]
          bottom-[16%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#59674D]/[0.035]
          blur-[120px]
        "
      />

      {/* ===================================================
          BACKGROUND NUMBER
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-30px]
          top-[100px]
          select-none
          font-serif
          text-[170px]
          font-light
          leading-none
          tracking-[-0.12em]
          text-[#59674D]/[0.035]

          sm:text-[220px]

          lg:text-[290px]
        "
      >
        06
      </div>

      {/* ===================================================
          SIDE LINES
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-[48%]
          h-px
          w-[7vw]
          bg-[#59674D]/14
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-[48%]
          h-px
          w-[7vw]
          bg-[#59674D]/14
        "
      />

      {/* ===================================================
          HEADER
      =================================================== */}

      <header className="relative z-10 mx-auto max-w-[820px]">
        {/* top metadata */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#59674D]/16
            pb-3
          "
        >
          <div className="flex items-center gap-2.5">
            <span
              className="
                font-serif
                text-[7px]
                font-medium
                tracking-[0.3em]
                text-[#59674D]
              "
            >
              {galleryDetails.sectionNumber}
            </span>

            <span className="h-px w-6 bg-[#59674D]/25" />

            <span
              className="
                font-serif
                text-[7px]
                tracking-[0.28em]
                text-[#59674D]/55
              "
            >
              GALLERY
            </span>
          </div>

          <span
            className="
              font-serif
              text-[7px]
              tracking-[0.23em]
              text-[#59674D]/35
            "
          >
            A + L / 2026
          </span>
        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <div className="py-8 sm:py-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p
                className="
                  mb-2
                  font-serif
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-[#59674D]/58
                "
              >
                A collection of us
              </p>

              <h2
                className="
                  font-serif
                  text-[43px]
                  font-light
                  leading-[0.8]
                  tracking-[-0.06em]
                  text-[#30352B]

                  sm:text-[58px]

                  lg:text-[68px]
                "
              >
                Little
                <br />
                <span className="italic text-[#59674D]">moments.</span>
              </h2>
            </div>

            {/* handwritten note */}
            <div className="hidden pb-1 sm:block">
              <p
                className="
                  font-[family-name:var(--font-allura)]
                  text-[23px]
                  leading-[0.92]
                  text-[#59674D]/65

                  lg:text-[27px]
                "
              >
                the memories
                <br />
                we keep close
              </p>
            </div>
          </div>

          {/* divider */}
          <div className="mt-6 flex items-center gap-3">
            <SmallMark />

            <span className="h-px w-8 bg-[#59674D]/18 sm:w-12" />

            <span
              className="
                font-serif
                text-[6px]
                tracking-[0.28em]
                text-[#59674D]/40
              "
            >
              A PRIVATE COLLECTION
            </span>

            <span className="h-px flex-1 bg-[#59674D]/18" />
          </div>
        </div>
      </header>

      {/* ===================================================
          TWO LONG POLAROID STRIPS
      =================================================== */}

      <div className="relative z-10 mx-auto max-w-[620px]">
        <div
          className="
            flex
            items-start
            justify-center
            gap-3

            sm:gap-6

            md:gap-9
          "
        >
          {/* LEFT STRIP */}
          <PhotoStrip images={galleryDetails.strips[0].images} side="left" />

          {/* RIGHT STRIP */}
          <PhotoStrip images={galleryDetails.strips[1].images} side="right" />
        </div>

        {/* =================================================
            CENTER DETAIL
        ================================================= */}

        <div
          className="
            mx-auto
            mt-7
            flex
            max-w-[190px]
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px flex-1 bg-[#59674D]/15" />

          <SmallMark />

          <span className="h-px flex-1 bg-[#59674D]/15" />
        </div>
      </div>

      {/* ===================================================
          SECTION CLOSING
      =================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-7
          max-w-[820px]
          border-t
          border-[#59674D]/16
          pt-5
        "
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A87E8E]/65
              "
            />

            <span
              className="
                font-serif
                text-[7px]
                tracking-[0.27em]
                text-[#59674D]/45
              "
            >
              ANEENA & LOYED
            </span>
          </div>

          <span
            className="
              font-serif
              text-[7px]
              tracking-[0.22em]
              text-[#59674D]/30
            "
          >
            22 · 11 · 2026
          </span>
        </div>

        <p
          className="
            mt-4
            text-center
            font-[family-name:var(--font-allura)]
            text-[25px]
            leading-none
            text-[#59674D]/62

            sm:text-[29px]
          "
        >
          collected along the way
        </p>
      </div>
    </section>
  );
}
