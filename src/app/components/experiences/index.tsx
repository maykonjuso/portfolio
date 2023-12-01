import Image from "next/image";
import { CalendarClock, MapPin } from "lucide-react";
import Tools from "../../projects/components/tools";
import dados from '../../util/dados/experiencia.json';


export default async function Experiences() {
    const data = dados.data
    return (
        <div className="flex min-h-screen flex-col gap-10 px-48 py-24 max-lg:gap-16 max-lg:px-6 lg:px-32 2xl:px-80">
            {data.map((item) => (
                <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent duration-200 max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
                    <div className="flex h-44 w-2/4 max-lg:w-full xl:w-96">

                        <Image
                            priority
                            src={`${item.Image}.png`}
                            width={100}
                            height={200}
                            alt={item.Titulo}
                            className="h-full w-full rounded-xl object-cover"
                        />
                    </div>
                    <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
                        <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
                            {item.Titulo}
                        </h2>

                        <p className="text-justify">
                            {item.Descricao}
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <CalendarClock />
                                <p>{item.DataInicio} - {item.DataFim}</p>
                            </div>
                            <div className="flex gap-2">
                                <MapPin />
                                <span>Brasília, Distrito Federal, Brasil.</span>
                            </div>
                        </div>
                        <Tools
                            tools={item.Skills}
                        />
                    </div>
                </div>
            )
            )}

        </div>
    )
}