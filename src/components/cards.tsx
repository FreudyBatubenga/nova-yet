import React from "react";
import { useState } from "react";

// Componente Filho
interface MyComponentProps {
  text: string;
  subtitle: string;
  Icon: React.ComponentType<{ className?: string }>;
}

 export const MyComponent: React.FC<MyComponentProps> = ({ text, Icon ,subtitle}) => {
   const [Isopen , setIsopne] = useState(false)
  
      function closeModal(){
          setIsopne(false) 
      }
      function OpenModal(){
          setIsopne(true)
      }
  return (
    <div className="   gap-4 py-5 px-5 bg-infoLinearCards  rounded-3xl w-[380] h-[380] flex flex-col shadow-custom-dark">
        <div className="w-[70] h-[70] bg-white rounded-full flex items-center justify-center ">
        <Icon className="w-[30] h-[30] fill-black " />
     </div>
        <div className="w-[200] h-[60] ">
            <span className="text-gray-800 text-2xl font-bold" >{text}</span>
         </div>

         <div className="w-[352] h-[147]  top-[2300]">
            <span className="text-colorBustitleFaq " > {subtitle}</span>
         </div>

         
    </div>
  );
};




