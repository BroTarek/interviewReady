"use client"

import * as React from "react"
import Header from "@/components/modules/Header/Header"
import Section1 from "@/components/modules/Main/Section1/Section1"
import About from "@/components/modules/Main/About/About"
import WhatWeDo from "@/components/modules/Main/WhatWeDo/WhatWeDo"
import Section2 from "@/components/modules/Main/Section2/Section2"
import Solutions from "@/components/modules/Main/Solutions/Solutions"
import SuccessProject from "@/components/modules/Main/SuccessProject/SuccessProject"
import HowWeWork from "@/components/modules/Main/HowWeWork/HowWeWork"
import LatestNews from "@/components/modules/Main/LatestNews/LatestNews"
import Footer from "@/components/modules/Footer/Footer"

export default function Home() {


  return (
    <>
      <Header />
      <main>
        <Section1 />
        <About />
        <WhatWeDo />
        <SuccessProject />
        <Section2 />
        <HowWeWork />
        <LatestNews />
        <Solutions />
        <Footer />
      </main>
    </>
  )
}
