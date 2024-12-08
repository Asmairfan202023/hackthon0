import Image from "next/image";
import React from "react"
import Hero from "@/app/components/Hero/page";
import Products from "@/app/components/Product/page";
import Slides from "@/app/components/Slide/page";
import SubHero from "@/app/components/Subhero/page";
export default function Home(){
  return (
    <>
  
    <Hero/>
    <SubHero/>
    <Products/>
    <Slides/>
  
    </>
  )
}
