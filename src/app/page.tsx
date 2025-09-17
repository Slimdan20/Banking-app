"use client";
import Navbar from "@/Components/Navbar/Navbar";
import Homepage from "@/Components/Homepage/Homepage";
import Cards from "@/Components/Cards/Cards";
import Finance from "@/Components/Finance/Finance";
import { useFlagsmith } from "flagsmith/react";

export default function Home() {
    const flagsmith = useFlagsmith();


  const showCard: boolean = flagsmith.hasFeature("card-page-feature");
  return (
    <div>
      <Navbar />
      <Homepage />
      {showCard &&<Cards />}
      <Finance />
    </div>
  );
}
