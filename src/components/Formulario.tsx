import { useState } from "react";
import { FileText, MapPin } from "lucide-react"; // Importando os ícones da biblioteca lucide-react

const Formulario = () => {
    const [documento, setDocumento] = useState("");
    const [provincia, setProvincia] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [error, setError] = useState("");
    const [Isopen , setIsopne] = useState(false)

    function closeModal(){
        setIsopne(false) 
    }
    function OpenModal(){
        setIsopne(true)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Remover espaços extras e validar os campos
        const docTrimmed = documento.trim();
        const provinciaTrimmed = provincia.trim();
        const municipioTrimmed = municipio.trim();

        if (!docTrimmed || !provinciaTrimmed || !municipioTrimmed) {
            setError("preencha os campos.");
            return;
        }

        // Caso tudo esteja ok, você pode realizar a busca ou outra ação
        setError(""); // Limpar erro anterior
        console.log("Buscando...", { documento: docTrimmed, provincia: provinciaTrimmed, municipio: municipioTrimmed });
    };

    const handleChangeDocumento = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDocumento(e.target.value);
    };

    const handleChangeProvincia = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProvincia(e.target.value);
    };

    const handleChangeMunicipio = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMunicipio(e.target.value);
    };

    return (
        
        <form
            className="w-[1032px] h-[185px] bg-primary top-28 z-auto translate-y-32 rounded-xl flex items-center justify-center gap-5"
            onSubmit={handleSubmit}
        >
            
            <div className="flex flex-col gap-4">
                <p className="text-xs font-bold text-white">Tipo de documento</p>
                <div className="flex gap-4 bg-white w-[261px] h-[60px] items-center px-1 rounded-xl">
                    <FileText size={20} className="text-gray-500" /> {/* Ícone FileText */}
                    <select
                        value={documento}
                        onChange={handleChangeDocumento}
                        className="outline-none w-full "
                        name="documento"
                    >
                        <option value="" disabled selected>
                            Selecione o tipo de documento
                        </option>
                        <option value="bilhete">Bilhete de identidade</option>
                        <option value="passaporte">Passaporte</option>
                        <option value="cartao">Cartão de cidadão</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-xs font-bold text-white">Província</p>
                <div className="flex gap-4 bg-white w-[261px] h-[60px] items-center px-1 rounded-xl">
                    <MapPin size={20} className="text-gray-500" /> {/* Ícone MapPin */}
                    <select
                        value={provincia}
                        onChange={handleChangeProvincia}
                        className="outline-none w-full "
                    >
                        <option value="" disabled selected>
                            Selecione a província
                        </option>
                        <option value="Luanda">Luanda</option>
                        <option value="Bengo">Bengo</option>
                        <option value="Huambo">Huambo</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-xs font-bold text-white">Município</p>
                <div className="flex gap-4 bg-white w-[261px] h-[60px] items-center px-1 rounded-xl">
                    <MapPin size={20} className="text-gray-500" /> {/* Ícone MapPin */}
                    <select
                        value={municipio}
                        onChange={handleChangeMunicipio}
                        className="outline-none w-full "
                    >
                        <option value="" disabled selected>
                            Selecione o município
                        </option>
                        <option value="Cazenga">Cazenga</option>
                        <option value="Sambizanga">Sambizanga</option>
                        <option value="Ingombota">Ingombota</option>
                    </select>
                </div>
            </div>

            
            <button
                type="submit"
                className="w-[152px] h-[60px] bg-bgbutton rounded-md mt-6 text-white"
            >
                Buscar
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
    );
};

export default Formulario;
