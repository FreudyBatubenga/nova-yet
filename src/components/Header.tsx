/*'use-client'
import Image from "next/image"
import Logo from "../../public/assets/icon/Logo 3.svg"
export function Header(){
    return(
        <header className='h-28 w-full  '>
            <div className="w-[90%] h-full flex justify-between items-center mx-auto">
                <div>
                    <Image src={Logo} alt='logo' width={150} height={150} priority />
                </div>

                <div className="flex items-center space-x-10">
                    <ul className='flex space-x-10'>
                        <li className=' font-extralight hover:text-primary '>inicio</li>
                        <li className=' font-extralight  hover:text-primary '>Quem somos</li>
                        <li className=' font-extralight  hover:text-primary '>serviços</li>
                    </ul>
                </div>
                <div className="w-[200]  justify-between flex items-center ">
                    <button className='font-bold  text-primary px-3'>Entrar</button>
                    <button className='bg-bgbutton w-32 h-10 rounded-3xl '>cadastrar</button>
                </div>
            </div>
        </header>
    )

}
    */
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/assets/icon/Logo 3.svg"; // Substitua pelo caminho real do seu logo
import Link from "next/link";

export  function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-20 w-full bg-white  top-0 left-0 z-50">
      <div className="w-[90%] h-full flex justify-between items-center mx-auto">
        {/* Logo */}
        <div>

          <Image src={Logo} alt="logo" width={120} height={120} priority />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-10">
            <li className="font-extralight hover:text-primary cursor-pointer text-black">Início</li>
            <li className="font-extralight hover:text-primary cursor-pointer  text-black">Quem somos</li>
            <li className="font-extralight hover:text-primary cursor-pointer  text-black">Serviços</li>
          </ul>
        </nav>

        {/* Botões Desktop */}
        <div className="hidden md:flex items-center space-x-4">
        <Link href='/Logar'>
        <button className="font-bold text-primary px-3">Entrar</button>
        </Link>
        <Link href='/Cadastrar'>
          <button className="bg-bgbutton w-32 h-10 rounded-3xl">Cadastrar</button>
        </Link>
        </div>

        {/* Botão do Menu Mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li className="font-extralight hover:text-primary cursor-pointer">Início</li>
            <li className="font-extralight hover:text-primary cursor-pointer">Quem somos</li>
            <li className="font-extralight hover:text-primary cursor-pointer">Serviços</li>
            <div className="flex flex-col items-center space-y-3">
            
             <Link href='/Logar' className="font-bold text-primary px-3">Entrar</Link>
           
              <button className="bg-bgbutton w-32 h-10 rounded-3xl">Cadastrar</button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
