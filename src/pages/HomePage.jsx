import { useGetData } from "../hooks/useGetData"
import DotPattern from "../components/DotPattern"
import { cn } from "../lib/utils";
import Slider from "../components/Slider";
import AnimatedShinyText from "../components/AnimatedShinyText";

export default function HomePage() {
    const [subtitle, isLoading] = useGetData('Paragraphs', 'subtitle')
    const [heroImage] = useGetData('Images', 'heroimage')
    return (
        <div className="relative  h-full w-full    bg-background ">
            <>
                <div className="hero  md:h-[550px] h-auto  bg-neutral-50 dark:bg-transparent">
                    <div className="flex justify-around md:flex-row md:gap-0 gap-4 flex-col items-center w-full">
                        <div className="hero-content text-center ">
                            <div className={`max-w-md `}>
                                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                    <h1 className="text-5xl font-bold">Passionate Software Engineer</h1>
                                </AnimatedShinyText>
                                <p className={`py-6 ${isLoading && 'skeleton h-40 my-4'} `}>{subtitle.text}</p>
                                <a href="/resume.pdf" download={true}>
                                    <button className="btn btn-primary">Download Resume</button>
                                </a>
                            </div>
                        </div>
                        <div className="md:w-[350px] md:h-[350px] w-[250px] h-[250px]">
                            <img className={`rounded-full  border-netural border-[5px] w-full h-full ${isLoading ? 'skeleton' : ''} `} src={heroImage.image} />
                        </div>
                    </div>
                </div >
                <div className=" dark:bg-transparent bg-neutral-50 p-1 my-2">
                    <div className="flex items-center justify-center mb-4">
                        <h1 className="text-center md:text-4xl text-2xl font-bold underline">Tech Stack</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="my-4 p-4 md:w-[80%] w-full">
                            <Slider />
                        </div>
                    </div>
                </div>
            </>
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            />
        </div >
    );

}
