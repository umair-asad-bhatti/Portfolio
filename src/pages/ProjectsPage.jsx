import { useGetData } from "../hooks/useGetData"
import Card from '../components/Card'
import AnimatedShinyText from "../components/AnimatedShinyText";
import ProjectSkeleton from "../components/ProjectsSkeleton";

export default function ProjectsPage() {
    const [projects, isLoading] = useGetData('Projects')
    if (isLoading) {
        return <ProjectSkeleton />
    }

    return (
        <div className=' bg-neutral-50 dark:bg-transparent p-4'>
            <AnimatedShinyText className=" flex  items-center justify-center  py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <h1 className="md:text-4xl md:my-4 my-2 text-2xl  font-bold">My Projects</h1>
            </AnimatedShinyText>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 ld:gap-0  gap-4  place-items-center ">
                {
                    projects?.data?.map(project => {
                        return <div key={project.id} className="mt-4"> <Card title={project.title} desctiption={project.description} technologies={project.technologies} buttonText={'View Project'} imageLink={project.coverImage} projectLink={project.link} /></div>
                    })
                }
            </div>
        </div>
    )
}
