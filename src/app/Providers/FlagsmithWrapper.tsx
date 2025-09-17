"use client";

import { useEffect, useState, ReactNode } from "react";
import { FlagsmithProvider } from "flagsmith/react";
import flagsmith from "flagsmith";

export default function FlagsmithWrapper({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    flagsmith
      .init({
        environmentID: "WknmJc3UDCCUy4TvLE83xz",
      })
      .then(() => setReady(true))
      .catch((err) => {
        console.error("Flagsmith initialization failed:", err);
        setReady(true); // Still allow the app to render
      });
  }, []);

  if (!ready) return null;

  return (
    <FlagsmithProvider flagsmith={flagsmith}>
      {children}
    </FlagsmithProvider>
  );
}
