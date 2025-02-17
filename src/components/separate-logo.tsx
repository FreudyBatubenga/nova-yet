import Image from "next/image";
import Bannerlogo from "../../public/assets/icon/banner-logo.svg"

export function Separate(){
    return(
        <div className="w-full h-[130] bg-primary flex  items-center justify-center gap-20">
            <Image src={Bannerlogo} width={134} height={84} alt="baneer-logo" />
            <Image src={Bannerlogo} width={134} height={84} alt="baneer-logo" />
            <Image src={Bannerlogo} width={134} height={84} alt="baneer-logo" />
            <Image src={Bannerlogo} width={134} height={84} alt="baneer-logo" />
            <Image src={Bannerlogo} width={134} height={84} alt="baneer-logo" />
            <Image src={Bannerlogo} width={134} height={84} alt="baneer-logo" />
            <Image src={Bannerlogo} width={134} height={84} alt="baneer-logo" />
            <Image src={Bannerlogo} width={134} height={84} alt="baneer-logo" />
        </div>
    )
}