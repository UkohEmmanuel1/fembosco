"use client";

import { useEffect, useRef, useState } from "react";

type FancyTextProps = {
  strings: string[];
  prefix?: string;
  suffix?: string;
  typingSpeed?: number;
  delay?: number;
  className?: string;
  prefixClassName?: string;
  suffixClassName?: string;
  stringClassName?: string;
  cursorClassName?: string;
};

export function FancyText({
  strings,
  prefix = "",
  suffix = "",
  typingSpeed = 50,
  delay = 2500,
  className = "",
  prefixClassName = "",
  suffixClassName = "",
  stringClassName = "",
  cursorClassName = "",
}: FancyTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = strings[stringIndex % strings.length];

    const tick = () => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          timeoutRef.current = setTimeout(() => setDeleting(true), delay);
          return;
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setStringIndex((i) => i + 1);
          return;
        }
      }
      timeoutRef.current = setTimeout(tick, typingSpeed);
    };

    timeoutRef.current = setTimeout(tick, deleting ? typingSpeed : typingSpeed + 50);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, deleting, stringIndex, strings, typingSpeed, delay]);

  return (
    <span className={className}>
      {prefix && <span className={prefixClassName}>{prefix}</span>}
      <span className={stringClassName}>{displayed}</span>
      <span className={cursorClassName} aria-hidden="true">
        |
      </span>
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
}