import AnimatedShinyText from "../components/AnimatedShinyText";
import { ServiceCard } from "../components/ServiceCard";
import { useGetData } from '../hooks/useGetData'
export default function ServicesPage() {
    const [services, isLoading] = useGetData("services")
    console.log(services);
    return (
        <div className="bg-neutral-50 dark:bg-transparent p-4">
            <AnimatedShinyText className=" flex  items-center justify-center  py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <h1 className="md:text-4xl md:my-4 my-2 text-2xl  font-bold">My Services</h1>
            </AnimatedShinyText>
            <div className="md:px-28">
                <div className=" flex lg:flex-col flex-row flex-wrap items-center gap-16 justify-center">
                    {
                        services?.data?.map((service, index) => {

                            return <ServiceCard key={index} service={service} alignImage={(index + 1) % 2 == 0 ? 'left' : 'right'} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
