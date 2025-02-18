'use client'
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Faq() {
   // Controle de perguntas abertas
  const [isRespostaOpen, setIsRespostaOpen] = useState<{ [key: number]: boolean }>({});
  // Armazenar as FAQs
  const [faqData, setFaqData] = useState<any[]>([]); 
   // Controle de carregamento
  const [loading, setLoading] = useState(true);
   // Armazenar erros, se houver
  const [error, setError] = useState<string | null>(null);

  // Função para buscar as FAQs da API
  const fetchFaqData = async () => {
    try {
      const response = await fetch("http://localhost:9000/faqs");

      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro ao buscar FAQs: ${response.status}`);
      }

      const data = await response.json();
      // Atualiza o estado com as FAQs recebidas
      setFaqData(data); 
    } catch (err: any) {
      console.error("Erro ao buscar dados da FAQ:", err);
      // Define o erro caso ocorra
      setError(err.message); 
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Carregar as FAQs quando o componente for montado
  useEffect(() => {
    fetchFaqData();
  }, []);

  // Se está carregando, exibe uma mensagem
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Se houve um erro, exibe o erro
  if (error) {
    return <div>Erro: {error}</div>;
  }

  // Função para alternar o estado de visibilidade das respostas
  const toggleResposta = (id: number) => {
    setIsRespostaOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="w-[90%] max-w-[890px] h-[450] mt-20 flex flex-col items-center gap-7 px-4 sm:px-6 ">
      <h1 className="font-bold text-3xl text-center text-black">Perguntas Frequentes</h1>

      <div className="w-full h-auto text-center">
        <p className="text-xl sm:text-2xl text-colorBustitleFaq">
          Para facilitar sua experiência e esclarecer suas dúvidas, reunimos as perguntas mais comuns sobre nossos serviços e produtos.
        </p>
      </div>

      <div className="flex w-full h-auto flex-col items-center gap-5">
        {faqData.length > 0 ? (
          faqData.map((faq: any) => (
            <div key={faq.id} className="space-y-4 w-full max-w-[715px]">
              <div
                className="w-full flex items-center gap-3 cursor-pointer"
                onClick={() => toggleResposta(faq.id)}
              >
                {isRespostaOpen[faq.id] ? (
                  <ChevronDown size={20} fill="#000" />
                ) : (
                  <ChevronRight size={20} fill="#000" />
                )}
                <p className="font-bold text-black">{faq.pergunta}</p>
              </div>
              {isRespostaOpen[faq.id] && (
                <div className="w-full max-w-[600px]">
                  <p className="text-black">{faq.resposta}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-black">Não há perguntas frequentes disponíveis no momento.</p>
        )}
      </div>
    </div>
  );
}
