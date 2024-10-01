import { useState, useEffect, useRef } from "react";

const excludedElements = ["auto-play-button"];

export default function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);
  const handlerRef = useRef<HTMLDivElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event: Event | PointerEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      handlerRef.current &&
      !handlerRef.current.contains(event.target as Node)
    ) {
      if (excludedElements.includes(String((event.target as HTMLElement).id))) {
        return;
      }

      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, handlerRef, isComponentVisible, setIsComponentVisible };
}
