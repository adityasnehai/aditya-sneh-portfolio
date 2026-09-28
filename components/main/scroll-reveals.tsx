"use client";

import { useEffect } from "react";

/** Progressive enhancement: content stays visible without JS or motion support. */
export function ScrollReveals() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const selectors = [
      ".proof-strip > div > div",
      ".selected-work > div:first-child",
      ".selected-work-grid > div:first-child",
      ".selected-work-grid > div:last-child > div",
      ".research-heading", ".research-paper-card", ".research-scientist",
      ".journey-heading", ".journey-stop",
      ".lab-heading", ".lab-note",
      ".stack-heading", ".stack-card",
      ".contact-copy", ".contact-art",
    ];
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
    const played = new WeakSet<Element>();
    const animations = new Map<Element, Animation>();
    let observer: IntersectionObserver | undefined;

    function start() {
      observer?.disconnect();
      if (preference.matches) {
        animations.forEach(animation => animation.cancel());
        animations.clear();
        return;
      }
      observer = new IntersectionObserver(entries => {
        const entering = entries.filter(entry => entry.isIntersecting && !played.has(entry.target));
        entering.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        entering.forEach((entry, index) => {
          played.add(entry.target);
          observer?.unobserve(entry.target);
          const element = entry.target as HTMLElement;
          // A tiny stagger only between elements entering together, capped at 160ms.
          const animation = element.animate([
            { opacity: .25, translate: "0 18px" },
            { opacity: 1, translate: "0 0" },
          ], {
            duration: 560,
            delay: Math.min(index * 45, 160),
            easing: "cubic-bezier(.22, 1, .36, 1)",
            fill: "backwards",
          });
          animations.set(element, animation);
          animation.onfinish = () => animations.delete(element);
        });
      }, { threshold: .08, rootMargin: "0px 0px -28px 0px" });
      elements.forEach(element => {
        const bounds = element.getBoundingClientRect();
        // Leave initial viewport and hash-link destinations fully visible.
        if (bounds.top < window.innerHeight && bounds.bottom > 0) played.add(element);
        if (!played.has(element)) observer?.observe(element);
      });
    }
    const finishFocused = (event: FocusEvent) => {
      animations.forEach((animation, element) => {
        if (event.target instanceof Node && element.contains(event.target)) animation.finish();
      });
    };
    start();
    preference.addEventListener("change", start);
    document.addEventListener("focusin", finishFocused);
    return () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener("change", start);
      document.removeEventListener("focusin", finishFocused);
    };
  }, []);
  return null;
}
