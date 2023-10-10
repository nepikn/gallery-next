"use client";

import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>("header li a").forEach((a) => {
      const id = a.getAttribute("href")!.slice(1);

      a.href = (document.querySelector("#" + id) ? "#" : "/") + id;
    });
  }, []);

  return children;
}
