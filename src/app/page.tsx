"use client";
import Navbar from "@/Components/Navbar/Navbar";
import Homepage from "@/Components/Homepage/Homepage";
import Cards from "@/Components/Cards/Cards";
import Finance from "@/Components/Finance/Finance";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
     {/* <Cards /> */ }
      <Finance />
    </div>
  );
}
