import { MyComponent } from '@/components/cards';
import { Info,Map,Bell,MessageSquareDashed,Handshake,Search} from 'lucide-react';
export function CardInformation(){

    return(
        <main className="w-[90%] min-h-screen flex items-center justify-center flex-col py-10">
        {/* Título Responsivo */}
        <div className="max-w-[450px] w-full text-center py-5">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Saiba como podemos ajudá-lo
          </h1>
        </div>
      
        {/* Grid Responsivo */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <MyComponent 
            text="Agendamento de Documentos" 
            Icon={Info} 
            subtitle="Evite filas e perda de tempo. Agende suas visitas aos centros de identificação de forma rápida e prática através da nossa plataforma." 
          />
      
          <MyComponent 
            text="Atendimento Rápido" 
            Icon={Map} 
            subtitle="Com a Yetu Services, você garante um atendimento eficiente e sem complicações, tornando o processo de obtenção de documentos muito mais rápido." 
          />
      
          <MyComponent 
            text="Notificações e Alertas" 
            Icon={Bell} 
            subtitle="Receba atualizações sobre mudanças em procedimentos, novos requisitos ou qualquer informação relevante ao serviço de interesse." 
          />
      
          <MyComponent 
            text="Fórum de Discussão e FAQ" 
            Icon={MessageSquareDashed} 
            subtitle="Espaço para os usuários ativos compartilharem experiências, dicas e resolverem dúvidas comuns, promovendo uma comunidade de ajuda mútua." 
          />
      
          <MyComponent 
            text="Assistência Técnica" 
            Icon={Handshake} 
            subtitle="Conectamos você a orientações específicas para resolver problemas técnicos, oferecendo suporte claro e eficiente para suas necessidades." 
          />
      
          <MyComponent 
            text="Busca Inteligente" 
            Icon={Search} 
            subtitle="Encontre rapidamente o que precisa com nossa ferramenta de busca otimizada para facilitar o acesso às informações." 
          />
        </div>
      </main>
      
    )
}