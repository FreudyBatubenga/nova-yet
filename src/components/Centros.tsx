import {ArrowRight,X} from "lucide-react"
import { useState } from "react"
export function Centros() {
     const [Isopen , setIsopne] = useState(false)
      
          function closeModal(){
              setIsopne(false) 
          }
          function OpenModal(){
              setIsopne(true)
          }
    return (
        <main className="w-[65%] min-h-screen items-center justify-center py-5 grid-cols-3 grid">
            <div className="w-80 h-80 rounded-2xl "  style={{ backgroundImage: `url('/assets/image/Mask group.png')` }}>
            <div className="w-full h-80 rounded-2xl bg-secbutton flex items-center flex-col justify-center gap-10">

                <div className="w-72">
                    <h1 className="text-2xl text-white font-bold">Centro de identificação civil e criminal </h1>
                </div>
                <div>
                    <p className="text-bgbutton">Luanda, Sao Paulo</p>
                    <span className="text-bgbutton">Seg - Sex / 08h - 15h</span>
                </div>
                <div className=" flex justify-between items-baseline w-full p-5">
                    <span className="font-bold text-white" >476 <span className="font-extralight text-black">vagas disponiveis</span></span>
                    <div className="w-11 h-11 bg-white rounded-xl items-center flex justify-center">
                    <ArrowRight onClick={OpenModal} className="cursor-pointer"/>
                    </div>
                </div>
            </div>
            </div>

            <div className="w-80 h-80 rounded-2xl "  style={{ backgroundImage: `url('/assets/image/Mask group.png')` }}>
            <div className="w-full h-80 rounded-2xl bg-secbutton  flex items-center flex-col justify-center gap-10">
            <div className="w-72">
                    <h1 className="text-2xl text-white font-bold">Centro de identificação civil e criminal </h1>
                </div>
                <div>
                    <p className="text-bgbutton">Luanda, Sao Paulo</p>
                    <span className="text-bgbutton">Seg - Sex / 08h - 15h</span>
                </div>
                <div className=" flex justify-between items-baseline w-full p-5">
                    <span className="font-bold text-white" >476 <span className="font-extralight text-black">vagas disponiveis</span></span>
                    <div className="w-11 h-11 bg-white rounded-xl items-center flex justify-center">
                        <ArrowRight/>
                    </div>
                </div>
            </div>
            </div>

  

            <div className="w-80 h-80 rounded-2xl"     style={{ backgroundImage: `url('/assets/image/Mask group.png')` }}  >
            <div className="w-full h-80 rounded-2xl bg-secbutton  flex items-center flex-col justify-center gap-10">
            <div className="w-72">
                    <h1 className="text-2xl text-white font-bold">Centro de identificação civil e criminal </h1>
                </div>
                <div>
                    <p className="text-bgbutton">Luanda, Sao Paulo</p>
                    <span className="text-bgbutton">Seg - Sex / 08h - 15h</span>
                </div>
                <div className=" flex justify-between items-baseline w-full p-5">
                    <span className="font-bold text-white" >476 <span className="font-extralight text-black">vagas disponiveis</span></span>
                    <div className="w-11 h-11 bg-white rounded-xl items-center flex justify-center">
                    <ArrowRight/>
                    </div>
                </div>
            </div>
            </div>

            <div className="w-80 h-80 rounded-2xl"   style={{ backgroundImage: `url('/assets/image/Mask group.png')` }} >
            <div className="w-full h-80 rounded-2xl bg-secbutton flex items-center flex-col justify-center gap-10">
            <div className="w-72">
                    <h1 className="text-2xl text-white font-bold">Centro de identificação civil e criminal </h1>
                </div>
                <div>
                    <p className="text-bgbutton">Luanda, Sao Paulo</p>
                    <span className="text-bgbutton">Seg - Sex / 08h - 15h</span>
                </div>
                <div className=" flex justify-between items-baseline w-full p-5">
                    <span className="font-bold text-white" >476 <span className="font-extralight text-black">vagas disponiveis</span></span>
                    <div className="w-11 h-11 bg-white rounded-xl items-center flex justify-center">
                    <ArrowRight/>
                    </div>
                </div>
            </div>
            </div>

            <div className="w-80 h-80 rounded-2xl"   style={{ backgroundImage: `url('/assets/image/Mask group.png')` }}>
            <div className="w-full h-80 rounded-2xl bg-secbutton flex items-center flex-col justify-center gap-10">
            <div className="w-72">
                    <h1 className="text-2xl text-white font-bold">Centro de identificação civil e criminal </h1>
                </div>
                <div>
                    <p className="text-bgbutton">Luanda, Sao Paulo</p>
                    <span className="text-bgbutton">Seg - Sex / 08h - 15h</span>
                </div>
                <div className=" flex justify-between items-baseline w-full p-5">
                    <span className="font-bold text-white" >476 <span className="font-extralight text-black">vagas disponiveis</span></span>
                    <div className="w-11 h-11 bg-white rounded-xl items-center flex justify-center">
                    <ArrowRight/>
                    </div>
                </div>
            </div>
            </div>

            <div className="w-80 h-80 rounded-2xl"  style={{ backgroundImage: `url('/assets/image/Mask group.png')` }}>
            <div className="w-full h-80 rounded-2xl bg-secbutton flex items-center flex-col justify-center gap-10">
            <div className="w-72">
                    <h1 className="text-2xl text-white font-bold">Centro de identificação civil e criminal </h1>
                </div>
                <div>
                    <p className="text-bgbutton">Luanda, Sao Paulo</p>
                    <span className="text-bgbutton">Seg - Sex / 08h - 15h</span>
                </div>
                <div className=" flex justify-between items-baseline w-full p-5">
                    <span className="font-bold text-white" >476 <span className="font-extralight text-black">vagas disponiveis</span></span>
                    <div className="w-11 h-11 bg-white rounded-xl items-center flex justify-center">
                    <ArrowRight/>
                    </div>
                </div>
            </div>
            </div>
        {Isopen ? (
            <div  className="fixed inset-0 bg-black bg-opacity-50 z-[100]  items-center flex justify-center">
                <div className=" w-[600]  h-[477] bg-white rounded-3xl flex flex-col justify-center items-center gap-10 " >
                    <div className=" w-full h-[100] px-5 py-5 flex justify-between ">
                        <div>
                            <h1 className="text-2xl">Faça sua marcação </h1>
                            <p className="w-[472] text-xs">Você pode agendar idas aos centros de identificação para sí e para outras pessoas, basta adicionar o nome do utente</p>
                        </div>
                       <div>
                       <X onClick={closeModal} className="cursor-pointer"/>
                       </div>
                        
                    </div>
                    <form action="" className="flex flex-col gap-2 justify-center items-center mb-5">
                    <input type="email" name="email" id="email"  placeholder=" insira seu email" className=" h-[70] w-[540] rounded-xl p-2 outline-none  bg-inputbackground"/>
                    <input type="email" name="email" id="email"  placeholder=" insira seu email" className=" h-[70] w-[540] rounded-xl p-2 outline-none  bg-inputbackground"/>
                    <input type="email" name="email" id="email"  placeholder=" insira seu email" className=" h-[70] w-[540] rounded-xl p-2 outline-none  bg-inputbackground"/>
                    <button  className="w-[540] h-[70]   bg-inputbtncolorAgendar rounded-xl text-white transition-colors font-bold"   >
                        Enviar
                    </button>
                    </form>
                </div>
            </div>
        ):null}

        </main>
    );
}
