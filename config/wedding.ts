/**
 * Content and asset settings for the wedding invitation currently in this app.
 * Add section specific settings here as those sections are built.
 */
export const weddingConfig = {
  couple: {
    firstName: "Loyed",
    secondName: "Aneena",
  },
  date: {
    display: "22 / 11 / 2026",
    weekday: "Sunday",
    location: "Kerala, India",
  },
  assets: {
    invitation: "/images/couple-holding-hands.webp",
    hero: "/images/hero-collage.webp",
  },
  theme: {
    saveDateBackground: "#e4d5bd",
    heroBackground: "#e4d5bd",
    heroText: "#34342D",
    browser: "#30352b",
  },
  copy: {
    saveDate: {
      ariaLabel: "Save the date",
      eyebrow: "Save the date",
      message:
        "A new chapter is about to begin. We would love for you to be part of it.",
      invitationAlt: "A couple holding hands by the sea",
      header: "Wedding invitation",
      openButton: "Open invitation",
      openButtonAriaLabel: "Open invitation",
      tagline: "A little beginning",
      ringsAriaLabel: "Wedding rings",
    },
    hero: {
      ariaLabel: "The beginning",
      chapter: "Our little story",
      photoAlt: "A childhood photograph of the couple together",
      photoCaption: "look where it all began",
      beginningLabel: "A tiny beginning",
      heading: "It started with us.",
      story:
        "Two hearts, one sweet little beginning, and a lifetime of ordinary moments waiting to become our favorite memories.",
      handwrittenNote: "and somehow, here we are ♡",
      then: "Once upon a time",
      now: "Our forever",
      pageNumber: "01",
      continue: "Continue",
    },
  },
  seo: {
    title: "Save the Date | Wedding Invitation",
    description: "A modern, editorial wedding invitation.",
  },
  venue: "Church",
} as const;
