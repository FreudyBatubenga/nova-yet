import Image from "next/image";
import AboutUS from "../../public/assets/image/about-us.png"
export function About() {
    return (
     <div className="w-full max-w-6xl mx-auto flex flex-co h-[800]l md:flex-row items-center justify-between mt-20 px-4 flex-col" id="#section"> 
  {/* Imagem */}
  <div className="w-full md:w-1/2 flex justify-center mb-10">
    <Image src={AboutUS} width={500} height={300} alt="about" className="max-w-full h-auto"/>
  </div>

  {/* Texto */}
  <div className="w-full md:w-1/2 flex flex-col gap-20 mt-10 md:mb-20">
    {/* Descrição */}
    <div className="text-center md:text-left">
      <h2 className="text-xl font-bold text-black">Saiba mais sobre nós</h2>
      <p className="text-gray-600 mt-4">
        Somos uma plataforma inovadora e interativa, dedicada a facilitar a sua vida na hora de tratar documentos essenciais como Cédula Pessoal, Assento de Nascimento, Registo Criminal e muito mais.
      </p>
      <p className="text-gray-600 mt-2">
        Nosso objetivo é fornecer a você os requisitos necessários para tratar qualquer documento pessoal e indicar onde mais próximo de você pode realizar o processo.
      </p>
    </div>

    {/* Frase destaque */}
    <div className="text-center md:text-left">
      <h1 className="text-2xl font-extralight font-serif text-black">
        Yetu Services: Simplificando sua vida, um documento de cada vez.
      </h1>
    </div>
  </div>
</div>

    );
}