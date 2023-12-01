import { CalendarClock, MapPin } from "lucide-react";
import Image from "next/image";
import dados from '../../util/dados/education.json'
import Tools from "../../projects/components/tools";

export default function AcademicEducation() {
    const data = dados.data
    return (

        data.map((item) => (
            <div className="group/item flex justify-between gap-16 rounded-xl border border-transparent duration-200 max-lg:w-full max-lg:flex-col max-lg:gap-8 lg:px-6 lg:py-8 lg:hover:border-white-10 lg:hover:bg-slate-400/5">
                <div className="flex h-44 w-2/4 max-lg:w-full xl:w-96">

                    <Image
                        priority
                        src={`${item.Image}.png`}
                        width={100}
                        height={200}
                        alt={item.School}
                        className="h-full w-full rounded-xl object-cover"
                    />
                </div>
                <div className="flex w-2/3 flex-col gap-5 max-lg:w-full">
                    <div className="flex flex-col gap-2">
                        <h2 className="bg-gradient-to-r from-cyan-500 to-white-100 bg-clip-text text-4xl font-bold text-transparent max-lg:w-full">
                            {item.School}
                        </h2>
                        <h3 className="text-2xl font-medium">
                            {item.Curso}
                        </h3>
                    </div>

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
                </div>
            </div>
        )
        )

    )
}