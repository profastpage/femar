"use client";

import { useState, useEffect, useMemo } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>("");
  
  // Stringify to avoid reference equality issues on every render
  const stringifiedIds = JSON.stringify(sectionIds);

  useEffect(() => {
    const ids = JSON.parse(stringifiedIds);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentId = "";
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          // Check if scroll position is within the element's top and bottom
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentId = id;
          }
        }
      }

      if (currentId && currentId !== activeId) {
        setActiveId(currentId);
        // Update URL hash without jumping or refreshing
        window.history.replaceState(null, "", `#${currentId}`);
      } else if (scrollPosition < 100 && activeId !== "") {
        // Clear hash if at the very top
        setActiveId("");
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stringifiedIds, offset, activeId]);

  return activeId;
}
