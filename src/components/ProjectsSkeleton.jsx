import AnimatedShinyText from "./AnimatedShinyText"


export default function ProjectSkeleton() {

    return (
        <>
            <AnimatedShinyText className=" flex  items-center justify-center  py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <h1 className="md:text-4xl md:my-8 my-4 text-2xl  font-bold">My Projects</h1>
            </AnimatedShinyText>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 ld:gap-0  gap-4  place-items-center ">

                {
                    [1, 2, 3].map(project => {
                        return <div key={project.id} className="card lg:w-[30vw] w-96  h-64  border-2 dark:border-neutral   skeleton "> </div>
                    })
                }
            </div>
        </>
    )
}

