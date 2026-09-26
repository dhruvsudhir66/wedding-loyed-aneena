"use client";

import { useEffect, useState } from "react";
import { Hero } from "./Hero";

export function WeddingMainContent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenInvitation = () => {
      setIsOpen(true);
    };

    window.addEventListener("wedding:open-invitation", handleOpenInvitation);

    return () => {
      window.removeEventListener(
        "wedding:open-invitation",
        handleOpenInvitation,
      );
    };
  }, []);

  return (
    <main
      id="wedding-content"
      className={`
        relative
        w-full
        overflow-hidden
        bg-[#F3EFE5]
        transition-all
        duration-1000
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none h-0 translate-y-8 opacity-0"
        }
      `}
    >
      <Hero />

      {/* Future sections go here */}
    </main>
  );
}
