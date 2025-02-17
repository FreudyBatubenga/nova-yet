import Image from "next/image";
import Fotouser from "../../../public/assets/image/cliente-feminino-alegre-feliz-posando-para-a-camera_74855-2837.jpg"
export default function Perfil() {
    return (
      <main className="w-full h-[832]">
        <div
          className="w-full h-56 bg-cover bg-center px-10"
          style={{ backgroundImage: 'url("/assets/image/foto de capa.png")' }}
        >
          <div className="w-52 h-52 flex z-auto translate-y-28 px-10 bg-slate-400 rounded-full overflow-hidden">
          {/* A imagem será cortada para se ajustar ao formato redondo */}
          <Image 
            src={Fotouser} 
            alt="Imagem de Perfil" 
            width={300} 
            height={310} 
            className="object-cover w-full h-full"  // Garante que a imagem se ajuste dentro da div
          />
        </div>
        </div>
        <div className="flex items-center justify-evenly w-full h-full bg-white">
          <form className="w-[417] h-[550] gap-4 items-center justify-center flex flex-col py-4 translate-x-64">
            <div className="flex-col flex">
              <label
                htmlFor=""
                className="px-4 bg-labelBack w-[70] h-[27] rounded-md text-white translate-y-4 translate-x-4"
              >
                Nome
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-[317] h-[54] border-2 rounded-lg p-4"
                placeholder="Nome "
              />
            </div>
            <div className="flex-col flex">
              <label
                htmlFor=""
                className="px-4 bg-labelBack w-[70] h-[27] rounded-md text-white flex items-center justify-center translate-y-4 translate-x-4"
              >
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                className="w-[317] h-[54] border-2 rounded-lg p-4"
                placeholder="Nome "
              />
            </div>
            <div className="flex-col flex">
              <label
                htmlFor=""
                className="px-4 bg-labelBack w-[80] h-[27] rounded-md text-white flex item-center justify-center translate-y-4 translate-x-4"
              >
                Telefone
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-[317] h-[54] border-2 rounded-lg p-4"
                placeholder="Nome "
              />
            </div>
            <div className="flex-col flex">
              <label
                htmlFor=""
                className="px-4 bg-labelBack w-[90] h-[27] rounded-md text-white flex item-center justify-center translate-y-4 translate-x-4"
              >
                Localidade
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-[317] h-[54] border-2 rounded-lg p-4"
                placeholder="Nome "
              />
            </div>
            <button type="submit" className="w-[317] h-[54] border-2 text-white border-labelBack bg-editarperfilbtn rounded-lg">
              Editar perfil
            </button>
          </form>
          <div>
            <form className="w-[417] h-[550] items-center justify-center flex flex-col gap-4">
              <p>Atualizar foto de perfil</p>
              <div className="w-[330] h-64 p-10 border-2 border-gray-400-100 rounded-2xl items-center justify-center flex border-dashed">
                <input type="file" name="" id="" />
              </div>
              <div className="items-start flex justify-start w-full h-[51] px-10">
                <p className="w-[192] h-[51] text-xs">
                  Formato: jpg, png, jpeg e gif
                  Tamanho: máximo 2mb
                  Ratio: 1:1
                </p>
              </div>
              <button type="submit" className="w-[317] h-[54] border-2 text-white border-red-500 bg-eliminarconta rounded-lg">
                Eliminar conta
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
  