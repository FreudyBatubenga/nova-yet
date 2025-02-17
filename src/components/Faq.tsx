'use client'
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Faq() {
  const [isRespostaOpen, setIsRespostaOpen] = useState(false);
  const [isRespostaOpen2, setIsRespostaOpen2] = useState(false);
  const [isterceiro, setIsterceiro] = useState(false);
  const [isQuartoipuntshow, setIsQuartoipuntshow] = useState(false);

  return (
    <div className="w-[90%] max-w-[890px] h-[450] mt-20 flex flex-col items-center gap-7 px-4 sm:px-6 ">
      <h1 className="font-bold text-3xl text-center text-black">Perguntas Frequentes</h1>

      <div className="w-full h-auto text-center">
        <p className="text-xl sm:text-2xl text-colorBustitleFaq">
          Para facilitar sua experiência e esclarecer suas dúvidas, reunimos as perguntas mais comuns sobre nossos serviços e produtos.
        </p>
      </div>

      <div className="flex w-full h-auto flex-col items-center gap-5">
        {/* Primeira pergunta */}
        <div className="space-y-4 w-full max-w-[715px]">
          <div className="w-full flex items-center gap-3 cursor-pointer" onClick={() => setIsRespostaOpen(!isRespostaOpen)}>
            {isRespostaOpen ? <ChevronDown size={20}  fill="#000" /> : <ChevronRight size={20}  fill="#000" />}
            <p className="font-bold  text-black">Quem são vocês e o que fazem?</p>
          </div>
          {isRespostaOpen && (
            <div className="w-full max-w-[600px]">
              <p className=" text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          )}
        </div>

        {/* Segunda pergunta */}
        <div className="space-y-4 w-full max-w-[715px]">
          <div className="w-full flex items-center gap-3 cursor-pointer" onClick={() => setIsRespostaOpen2(!isRespostaOpen2)}>
            {isRespostaOpen2 ? <ChevronDown size={20} fill="#000"/> : <ChevronRight size={20} fill="#000" />}
            <p className="font-bold text-black">Quanto tempo demora o processo de tratamento?</p>
          </div>
          {isRespostaOpen2 && (
            <div className="w-full max-w-[600px]">
              <p className=" text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          )}
        </div>

        {/* Terceira pergunta */}
        <div className="space-y-4 w-full max-w-[715px]">
          <div className="w-full flex items-center gap-3 cursor-pointer" onClick={() => setIsterceiro(!isterceiro)}>
            {isterceiro ? <ChevronDown size={20}  fill="#000" /> : <ChevronRight size={20}  fill="#000" />}
            <p className="font-bold  text-black">Como é feito o pagamento dos serviços prestados?</p>
          </div>
          {isterceiro && (
            <div className="w-full max-w-[600px]  text-black">
              <p  className=" text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          )}
        </div>

        {/* Quarta pergunta */}
        <div className="space-y-4 w-full max-w-[715px]">
          <div className="w-full flex items-center gap-3 cursor-pointer" onClick={() => setIsQuartoipuntshow(!isQuartoipuntshow)}>
            {isQuartoipuntshow ? <ChevronDown size={20}  fill="#000" /> : <ChevronRight size={20}  fill="#000" />}
            <p className="font-bold  text-black">Quais são os documentos que essa plataforma me ajuda a tratar?</p>
          </div>
          {isQuartoipuntshow && (
            <div className="w-full max-w-[600px]">
              <p className=" text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
