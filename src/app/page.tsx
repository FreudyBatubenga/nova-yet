"use client"
import { About } from "@/components/About";
import {Header } from "@/components/Header";
import { Separate } from "@/components/separate-logo";
import Image from "next/image";
import LogoMarca from "../../public/assets/icon/Logo Marca.png"
import { Faq } from "@/components/Faq";
import { CardInformation} from "@/components/Card-information"
import {Footer} from "@/components/Footer";
export default function Home() {
  return (
   
    <main className=" h-max w-full bg-white flex items-center flex-col" >
      <Header />
      <div className="w-[90%] min-h-[600px] bg-primary rounded-3xl  bg-[url('../../public/assets/image/pattern.png')] bg-cover bg-center bg-no-repeat flex  items-center  flex-col bg-fixed  gap-4    ">
      <div className='max-w-[800px] text-center  py-20 px-4'>
              <h1  className="text-4xl md:text-5xl lg:text-6xl text-white leading-normal font-extrabold">Uma plataforma  potencialmente ilimitada</h1>
            </div>  

                <div className="w-11/12 md:w-2/3 text-center text-lg md:text-xl px-4">
                  <p className=' text-white font-extralight'>Do conforto de sua casa agende uma data para tratar seus documentos pessoais, a Yetu Services certificará que seu pedido seja entregue aos centros de tratamento de documentos.</p>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
                  <button className=' w-52 h-12 bg-bgbutton2 rounded-3xl  font-bold'>Agendar Agora </button>
                  <button  className=' w-52 h-12 bg-secbutton text-white font-bold rounded-3xl '>Não tenho conta  </button>
                </div>
      </div>
       <About />
       <Separate/>
       <div className="w-[90%] min-h-[400px] rounded-3xl  mt-20  bg-[url('../../public/assets/image/familia.png')] bg-cover bg-center bg-no-repeat flex  items-center  flex-col ">
          <div className=" w-[100%]  h-[400]   rounded-3xl bg-transparent">
           <div className=" flex justify-between h-[200]  mt-40 px-8  items-end">
              <div className="w-[587]">
              <h1 className="text-4xl text-white font-extrabold ">Agende suas idas as concervatorias do conforto de sua casa e da sua família</h1>
            </div>
            <div className="">
              <Image src={LogoMarca} width={34} alt="" height={34}/>
            </div>

           </div>
       </div>
       </div>
      <CardInformation/>
      <Faq />
      <Footer/>
      
      
    </main>
  );
}
