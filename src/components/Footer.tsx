import { FormEvent ,useTransition } from "react"
import ft from "../../public/assets/icon/banner-logo.svg"
import Image from "next/image"
import { api } from "@/app/service/api"
interface NewslatterType{
  email: string
}
export  function Footer(){
  const [isPending, startTransition] = useTransition()
// validacao do dados 
  function ValidacaoEmail(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get("email"))
    if(!email) return alert("isira o seu email")
      const EmailData: NewslatterType = {
        email
    }
    startTransition(()=> SendEmail(EmailData))
//limpar o fomulario apos o envio
    event.currentTarget.reset()
  }
   
  

  async  function SendEmail({email}:NewslatterType){
    try {
      const response = await api.post("/newslatter", {email})
      console.log(response.data)
    
    } catch (error) {
      alert("impossivel enviar")
    }
  }

  return(
        <>
        <footer className="w-full flex flex-col items-center bg-gray-900 text-white py-10">
  {/* Newsletter */}
  <div className="w-full max-w-6xl bg-primary rounded-xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
    <div className="text-center md:text-left">
      <h1 className="text-2xl md:text-3xl font-bold">Mantenha-se atualizado</h1>
      <p className="text-gray-200">Subscreva no nosso Newslatter e mantenha-se sempre atualizado.</p>
    </div>
    <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg" method="post"  onSubmit={ValidacaoEmail}>
      <input 
        type="email" 
        placeholder="Insira seu email" 
        className="w-full sm:w-2/3 p-3 rounded-md outline-none text-gray-900"
        name="email"
      />
      <button className="bg-bgbutton text-white w-full sm:w-1/3 p-3 rounded-md"  disabled={isPending}> {isPending ? "enviando..." : "Enviar"}</button>
    </form>
  </div>

  {/* Links do Footer */}
  <div className="w-full max-w-6xl bg-cover bg-center bg-no-repeat rounded-2xl mt-10 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div className="flex flex-col items-center md:items-start">
      <Image src={ft} alt="logo" width={150} height={150} />
    </div>
    <div className="text-center md:text-left">
      <h1 className="font-bold text-lg">Conteúdos</h1>
      <p className="text-gray-400">Início</p>
      <p className="text-gray-400">Sobre nós</p>
      <p className="text-gray-400">Serviços</p>
    </div>
    <div className="text-center md:text-left">
      <h1 className="font-bold text-lg">Ajuda</h1>
      <p className="text-gray-400">FAQ</p>
      <p className="text-gray-400">Contato</p>
    </div>
    <div className="text-center md:text-left">
      <h1 className="font-bold text-lg">Siga-nos</h1>
      <p className="text-gray-400">Facebook</p>
      <p className="text-gray-400">Instagram</p>
      <p className="text-gray-400">LinkedIn</p>
    </div>
  </div>

  {/* Copyright */}
  <div className="w-full text-center text-gray-400 mt-6">
    <p>© 2025 | Yetu Services, Todos os direitos reservados.</p>
  </div>
</footer>

        
        </>
    )
}