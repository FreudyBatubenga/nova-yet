"use client"
import Link from "next/link"
import {ArrowLeft} from  "lucide-react"
import { FormEvent ,startTransition } from "react"
import { api } from "../service/api"

  //dados que espero 
  interface CadastroType{
    nome : string
    telefone: string
    email: string
    provincia : string
    cidade : string
    senha: string

}
export default function Cadastrar() {

    function ValidarCadastro(event:FormEvent<HTMLFormElement>){
            event.preventDefault()
            const data = new FormData(event.currentTarget)
            const nome = String(data.get("primeiroNome"))
            const sobrenome = String(data.get("sobrenome"))
            const telefone = String(data.get("telefone"))
            const email = String(data.get("email"))
            const provincia = String(data.get("provincia"))
            const cidade = String(data.get("cidade"))
            const senha = String(data.get("senha"))

           
            
            const regex = /^[A-Za-zÀ-ÿ\s]+$/;
            if(!nome || !sobrenome || !telefone || !email || !provincia || !cidade || !senha ) return alert("preencha todos os campos ")
                if(!regex.test(nome)) return alert("insira um nome valido")
                    if(!regex.test(sobrenome)) return("insira um nome valido")
            const userData: CadastroType = {
                cidade,email,nome,provincia,senha,telefone
            }
            startTransition(()=>cretaeNewUser(userData))
            event.currentTarget.reset()
    }
   async function cretaeNewUser (data:CadastroType){
        try {
            console.log(data)
            const response = await api.post("/usuarios",data)
            if(response.data.message === "sucesso") {
                window.location.href = "/Agendar"
            }
            if(response.data.message === "EMAIL OU TELEFONE JA EXISTENTES") return alert("Usuário ja existente")
        } catch (error) {
            alert("Impossivel criar usuário, tente mais tarde")
        }
    }
    
  return (
    <main className="w-full h-screen flex items-center justify-center bg-slate-200">
      <div className="w-[640px] h-[832px] bg-white bg-cover bg-[url('/assets/image/Rectangle%20105.png')]">
        <div className= "w-[640px] h-[832px] bg-secbutton  flex items-center justify-center flex-col gap-3 ">
                <div className="w-[330] h-[108]">
                    <h1 className=" text-4xl font-bold text-white">Evite enchentes em filas</h1>
                </div>
                <div className=" w-[430] h-[208]">
                    <p className="text-2xl text-white"> Cadastre-se na yetu service e encontre toda a informação que precisa para tratar seus documentos pessoais de forma rápida e prática.   </p>
                </div>
        </div>
      </div>
      <div className="w-[640px] h-[832px] gap-3 bg-white">
      <Link href="/" className="flex gap-2 items-center py-4 px-5"  >
                    < ArrowLeft/> 
                   <p className="text-xl">volar para o site</p> 
                   </Link>
            <form className="flex  flex-col items-center" onSubmit={ValidarCadastro}>
                 <div className="w-full h-24 flex justify-center items-center gap-10">        
                 <h1 className="text-2xl mt-20 px-10">Crie sua conta agora</h1>
                </div>
                <div className="w-full h-32 flex justify-center items-center gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="">Nome</label>
                        <input type="text" name="primeiroNome" id="" placeholder="nome " className=" w-[270] h-[70] rounded-xl p-7 border-2 outline-none "/>
                    </div>
                    <div  className="flex flex-col">
                        <label htmlFor="">sobrenome</label>
                        <input type="text" name="sobrenome" id="" placeholder="sobre-nome "  className=" w-[270] h-[70] rounded-xl p-7 border-2 outline-none"/>
                    </div>
                </div>
                <div>
                </div>
                <div  className="flex flex-col">
                        <label htmlFor="">Numero de telefone</label>
                        <input type="text" name="telefone" id="" placeholder="ex 999 999 999 "  className=" w-[560] h-[70] rounded-xl p-7 border-2 outline-none"/>
                 </div>
                 <div  className="flex flex-col">
                        <label htmlFor="">Enderenco de email</label>
                        <input type="email" name="email" id="" placeholder="exemplo@gmaol.com "  className=" w-[560] h-[70] rounded-xl p-7 border-2 outline-none"/>
                 </div>
                 <div className="w-full h-32 flex justify-center items-center gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="">Provincia</label>
                        <input type="text" name="provincia" id="" placeholder="sua Morada " className=" w-[270] h-[70] rounded-xl p-7 border-2 outline-none"/>
                    </div>
                    <div  className="flex flex-col">
                        <label htmlFor="">cidade</label>
                        <input type="text" name="cidade" id="" placeholder="sua cidade "  className=" w-[270] h-[70] rounded-xl p-7 border-2 outline-none"/>
                    </div>
                </div>
                <div className="w-full h-32 flex justify-center items-center gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="">senha</label>
                        <input type="password" name="senha" id="" placeholder="sua senha " className=" w-[270] h-[70] rounded-xl p-7 border-2 outline-none "/>
                    </div>
                    <div  className="flex flex-col">
                        <label htmlFor="">confirmar senha</label>
                        <input type="password" name="confirmar" id="" placeholder="sua senha "  className=" w-[270] h-[70] rounded-xl p-7 border-2 outline-none"/>
                    </div>
                </div>
               <button className="  w-[560] h-[70] rounded-xl p-7 bg-bgbutton text-white">
                    Enviar
               </button>
            </form>
      </div>
    </main>
  )
}
