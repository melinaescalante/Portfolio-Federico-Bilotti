import { CardVertical } from "../components/CardVertical";
import AnimatedContent from '../Animations/AnimatedContent/AnimatedContent'
import { ButtonCustom } from "../components/ButtonCustom";
const projects = [{
    name: 'Boids - DOTS',
    description: 'Simulation of birds in Unity with DOTS (Data-Oriented Technology Stack), to improve performance and data processing efficiency.',
    link: 'https://github.com/FedericoBilotti/Boids-DOTS',
    img: 'projects/dots.gif',
    techs: [{ name: 'C#' }, {
        name: 'Unity'
    }, { name: 'DOTS' }]
}, {
    name: 'Denos',
    description: 'First-person body horror game in which you subject yourself to unimaginable tortures by infecting yourself with alien larvae, causing mutations in your body that you can use to solve puzzles in an organic world controlled by an omnipresent entity.',
    link: 'https://bflgames.itch.io/denos',
    img: 'projects/denos.png',

    techs: [{
        name: 'Unity'
    }, { name: 'C#' }]
},
{
    name: ' AStar-JobBurst',
    description: 'An optimized implementation of the A* algorithm for Unity, using the Job System and Burst Compiler.',
    img: 'projects/jobBurst.gif',
    link: 'https://github.com/FedericoBilotti/AStarJobBurst.git',
    techs: [{ name: 'Unity' }, { name: 'C#' }, { name: 'Job System' }, { name: 'Burst Compiler' }]
},{
    name:'ChatBot Google Calendar',
    description:'Simple interaction with Google Calendar, leeting you add, delete or see the events that the user has programmed.',
    img:'projects/chatbot.png',
    link:'https://github.com/FedericoBilotti/ChatBotGoogleCalendar',
    techs:[{ name: 'Python' }, { name: 'Langchain' }, { name: 'FastAPI' }, { name: 'Chroma' }]
}]
export function ProjectSection() {
    return (
        <AnimatedContent>

            <section id="projects" className="mx-auto max-w-screen-lg py-30 pb-40  px-3.5 flex flex-col gap-8">
                <div className="flex flex-wrap gap-5 items-center justify-between ">

                    <h1 className="lg:text-5xl text-4xl font-bold">My projects</h1>
                    <ButtonCustom
                        containerStyles='animate-shimmer border-1 border-stone-600 bg-[linear-gradient(110deg,#1a1a1a,45%,#262626,55%,#1a1a1a)] hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-[length:200%_100%] '
                        text='All my projects'
                        url='https://github.com/FedericoBilotti' 
                        t='_blank'/>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                    {projects.map((project) => (

                        <CardVertical
                            key={project.name}
                            title={project.name}
                            description={project.description}
                            img={project.img}
                            link={project.link}
                            techs={project.techs}
                        ></CardVertical>
                    ))}
                </div>
            </section>
        </AnimatedContent>

    )
}