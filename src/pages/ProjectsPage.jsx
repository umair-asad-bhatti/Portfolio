import { useGetData } from "../hooks/useGetData"
import Card from '../components/Card'
import AnimatedShinyText from "../components/AnimatedShinyText";

export default function ProjectsPage() {
    const [projects, isLoading] = useGetData('Projects')
    if (isLoading) {
        return <>loading</>
    }
    console.log(projects);
    return (
        <div className=' bg-neutral-50 dark:bg-transparent'>
            <AnimatedShinyText className="md:my-8 flex my-4  items-center justify-center  py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <h1 className="md:text-4xl text-2xl  font-bold">My Projects</h1>
            </AnimatedShinyText>
            <div className="flex flex-wrap  justify-center  gap-4 my-4">

                {
                    projects?.data?.map(project => {
                        return <Card key={project.id} title={project.title} desctiption={project.description} technologies={project.technologies} buttonText={'View Project'} imageLink={project.coverImage} projectLink={project.link} />
                    })
                }
            </div>
        </div>
    )
}
