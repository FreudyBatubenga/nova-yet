import { Search,Bell } from "lucide-react"
import Logonarca from "../../../public/assets/icon/Logo Marca.png"
import User from "../../../public/assets/image/Ellipse 2.png"
import Image from "next/image"
import {Centros} from "../../components/Centros"
export default function Resultado(){
    return(
        <section className="w-full  items-center justify-center flex flex-col ">
            <nav className=" w-3/5 h-24 rounded-3xl flex items-center justify-between px-10 bg-bgbutton">
                <div className="flex w-[710] h-20 items-center justify-around">
                    <Image src={Logonarca} alt="" width={49} height={47}/>
                    <div className="w-[580] h-[60]  bg-searchback rounded-3xl items-center justify-between flex px-2 ">
                       <input type="search"  id="pesquisa" className="w-[500] h-[60] rounded-3xl outline-none px-6  bg-searchback" placeholder="resultado das pesquisas"/>
                       <label htmlFor="pesquisa" className="bg-labelBack w-[60] h-[50] items-center flex justify-center rounded-full px-4"><Search /></label>
                    </div>
                </div>
                <div className="flex gap-4 items-center justify-around">
                    <Bell/>
                    < Image src={User} alt="logo" width={48} height={48} priority className="cursor-pointer" />
                </div>
            </nav>
            <main className="h-full w-full items-center justify-center flex flex-col px-52">
                <div className="w-full h-20 items-center justify-center flex flex-col">
                    <p className="text-secbutton">Resultados para</p>
                    <h1 className="text-3xl font-bold">Bilhete de identidade, Luanda, Cazenga</h1>
                </div>
                <Centros/>
            </main>
        </section>
    )
}