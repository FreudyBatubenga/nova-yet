"use client"
import {About} from "@/components/About"
import { Separate} from "@/components/separate-logo"
import {Faq} from "@/components/Faq"
import {Footer} from "@/components/Footer"
import { HeaderTwo } from "@/components/Header-two"
import { Centros}from "@/components/Centros"
import foto from "../../../public/assets/image/Rectangle 102.png"


export default function Agendar(){
    return(
        <main className="h-max w-[100%]  flex items-center flex-col  justify-center ">
            <HeaderTwo/>
            <Centros/>
            <About/>
            <Separate/>
            <Faq/>

            
            <Footer/>


        </main>
    )
}