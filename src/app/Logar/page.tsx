"use client"
import Link from "next/link"
import { FormEvent, useTransition } from "react"
import { EyeOff, ArrowLeft, Lock, AtSign } from "lucide-react";
import Image from "next/image";
import hero from "../../../public/assets/image/Rectangle 102.png";
import logo from "../../../public/assets/icon/Logo 3.svg"
import { api } from "../service/api";

interface LoginClientType {
    email: string
    senha: string
}

export default function Logando() {
    const [isPending, startTransition] = useTransition()

    function ValidarFormLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const email = String(data.get("email"))
        const senha = String(data.get("senha"))

        if (!email || !senha) return alert("preencha todos os campos")
        startTransition(() => authUser({ email, senha }))
    }

    async function authUser(data: LoginClientType) {
        try {
            const response = await api.get(`/usuarios/login/${data.email}/${data.senha}`)
            window.location.href = "/Agendar"
        } catch (error) {
            alert("Impossivel logar, tente mais tarde")
        }
    }

    return (
        <div className="w-full bg-slate-50 h-screen flex items-center justify-center">
            <div className="w-full sm:w-[640px] h-[832px] overflow-hidden">
                {/* A imagem será escondida em telas pequenas */}
                <div className="hidden sm:block">
                    <Image src={hero} alt="hero" />
                </div>
            </div>
            <form className="w-full sm:w-[640px] h-[832px] bg-white" onSubmit={ValidarFormLogin}>
                <div className="w-full h-48 items-center flex flex-col justify-center gap-10">
                    {/* Link para voltar à home */}
                    <Link href="/" className="flex gap-4 px-10 py-4 w-full items-center">
                        <ArrowLeft />
                        <p className="text-xl">Voltar para o site</p>
                    </Link>
                    <Image src={logo} alt="logo" className="w-[90px] h-[90px]" />
                    <div>
                        <h1 className="text-xl font-extralight">Bem-Vindo de Volta</h1>
                    </div>
                </div>
                <div className="h-[640px] w-full flex flex-col items-center justify-center gap-8">
                    <div className="w-full sm:w-[500px] h-28 flex flex-col gap-2 px-4"> {/* Diminuindo a largura para os inputs */}
                        <label htmlFor="email" className="text-xs font-extralight"> Endereço de E-mail ou Telefone *:*</label>
                        <div className="flex bg-white w-full h-[70px] rounded-xl p-2 outline-none border-2 items-center justify-center">
                            <AtSign />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder=" insira seu email"
                                className="h-[50px] w-full sm:w-[480px] rounded-xl p-2 outline-none"
                            />
                        </div>
                    </div>

                    <div className="w-full sm:w-[500px] h-28 flex flex-col px-4"> {/* Diminuindo a largura para os inputs */}
                        <label htmlFor="senha" className="text-xs font-extralight"> Endereço de E-mail ou Telefone *:*</label>
                        <div className="w-full h-[70px] rounded-xl p-2 outline-none border-2 justify-between items-center flex bg-white gap-1">
                            <Lock />
                            <input
                                type="password"
                                name="senha"
                                id="senha"
                                placeholder=" insira sua senha"
                                className="w-full sm:w-[480px] outline-none h-full"
                            />
                            <EyeOff />
                        </div>
                        <p className="text-right text-btn text-xs">Esqueci a minha senha</p>
                    </div>

                    <div className="w-full sm:w-[500px] h-20 flex flex-col px-4"> {/* Diminuindo a largura para o botão */}
                        <button
                            className={`w-full sm:w-[480px] h-[70px] bg-bgbutton rounded-xl text-white transition-colors font-bold ${isPending ? "bg-btn2/50" : "bg-btn2"}`}
                            disabled={isPending}
                        >
                            {isPending ? "Carregando" : "Entrar"}
                        </button>
                    </div>
                    <div className="w-[500px] h-20 flex flex-col text-center"></div>
                </div>
            </form>
        </div>
    )
}
