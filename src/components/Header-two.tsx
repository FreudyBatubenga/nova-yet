import {Bell,StickyNote,MapPin,Star,Calendar,X,LogOut} from "lucide-react"
import LogoMarca from "../../public/assets/icon/banner-logo.svg"
import Usser from "../../public/assets/image/Ellipse 2.png"
import Image from "next/image";
import Formulario from "./Formulario";
import { useState } from "react";
import Link from "next/link";
export function HeaderTwo(){

    const [Isopen , setIsopne] = useState(false)

    function closeModal(){
        setIsopne(false) 
    }
    function OpenModal(){
        setIsopne(true)
    }





















    
    return(
        <main className="w-full flex items-center flex-col h-[500] bg-bgbutton  bg-cover bg-[url('../../public/assets/image/two.png')] bg-center bg-no-repeat "> 
        
        <div className="w-full  flex-col h-[500] bg-secbutton items-center ">
            <nav className="w-full h-[110]  flex justify-between items-center px-20">
                    <div className="flex list-none gap-4 text-white font-bold">
                    <li>inicio</li>
                    <li>Quem somos</li>
                    <li>centro de identificação</li>
                    </div>
                <div className="flex gap-12 items-center">
                    <Bell fill="#fff"/>
                    <span className="bg-white w-12 h-12 rounded-full items-center justify-center flex">
                    < Image src={Usser} alt="logo" width={48} height={48} priority className="cursor-pointer" onClick={OpenModal}/>
                    </span>
                </div>
                </nav>
                <div className="flex items-center flex-col justify-center gap-4">
                    < Image src={LogoMarca} alt="logo" width={194} height={47} priority  />
                    <h1 className="text-3xl font-bold text-white">Agende logo sua ida as identificações</h1>
                    <p className="text-white">PESQUISE ONDE TRATAR SEU DOCUMENTO</p>
                </div> 
                
                <div className="w-full h-[185] justify-center flex items-center ">
              

<Formulario/>
























                </div>
                {Isopen ?   ( <div className="w-[380] h-[450] bg-white    rounded-xl items-center flex flex-col  absolute top-0  translate-x-3/4  left-1/2 translate-y-24" >
                    <div className="w-[360] h-20 flex items-center justify-around ">
                        < Image src={Usser} alt="logo" width={60} height={60} priority className="cursor-pointer"/>
                        <span className="font-bold">emaildousuario@acme.com</span>
                        <X fill="#foo" onClick={closeModal} className="cursor-pointer text-red-600"/>
                    </div>
                    <div className="w-[380] h-20 justify-center items-center flex">
                     <Link href='/Perfil'>   <button type="submit" className="w-[332] h-[48] bg-bgbutton ">ver perfil </button></Link>
                    </div>
                    <span className="w-[360] h-1 rounded-sm bg-slate-400"></span>
                    <div className="w-[360] h-40 flex flex-col px-5 gap-2 justify-center">
                        <span className="flex gap-2"> <Star/>Favoritos</span>
                        <span className="flex gap-2"> <Bell/>Notificações</span>
                        <span className="flex gap-2"> <Calendar/>Meus Agendamentos</span>
                    </div>
                    <div className="w-[380] h-20  justify-center items-center flex">
                    <button type="submit" className="w-[332] h-[48] bg-logoutbtn  flex gap-2 items-center justify-center text-white"> <LogOut/>Terminar sessão</button>
                    </div>
                </div>):null}
            </div>
        </main>
    )
}