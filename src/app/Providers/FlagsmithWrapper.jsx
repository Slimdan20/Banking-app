

"use client";


import { useEffect, useState } from "react";
import { FlagsmithProvider } from "flagsmith/react";
import flagsmith from "flagsmith";


export default function FlagsmithWrapper({ children }) {
  const [ready, setReady] = useState(false);


  useEffect(() => {
    flagsmith
      .init({
        environmentID: "WknmJc3UDCCUy4TvLE83xz",
      })
      .then(() => setReady(true));
  }, []);


  if (!ready) return null;


  return (
    <FlagsmithProvider flagsmith={flagsmith}>
      {children}
    </FlagsmithProvider>
  );
}
