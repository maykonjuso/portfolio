import { Calendar, Timer } from "lucide-react";
import Image from "next/image";
import dados from '../../util/dados/certificate.json'

export default function Certificate() {
    const data = dados.data
    return (

        data.map((item) => (
            <a href={item.Link} target="_blank" className="group/item flex flex-row gap-8 rounded-xl border border-transparent lg:px-6 lg:py-6 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
                <Image
                    priority
                    src={`${item.Image}.png`}
                    width={100}
                    height={200}
                    alt="family music school"
                    className="h-32 w-32 rounded-xl object-cover max-lg:h-24 max-lg:w-24"
                />
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold">{item.School}</h2>
                    <h2>{item.Curso}</h2>
                    <div className="flex flex-row gap-2">
                        <Calendar />
                        <p>{item.Data}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Timer />
                        <p>{item.Horas}</p>
                    </div>
                </div>
            </a>
        )))
}