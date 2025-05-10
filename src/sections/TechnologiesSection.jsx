import { CardHorizontal } from "../components/CardHorizontal";
import FadeContent from '../Animations/FadeContent/FadeContent'
const technologies = [{
    name: 'Unity',
    description: 'Motor Graphic',
    img: 'techs/unity.png',
    background:'bg-[#ffffff1a]'

},
{
    name: 'Unreal Engine',
    description: 'Motor Graphic',
    img: 'techs/unreal.png',
    background:'bg-[#ffffff4a]'
},
{
    name:'My SQL',
    description:'Relational database',
    img:'techs/mysql.png',
    background:'bg-[#75a2ef21]'
},
{
    name:'GIT',
    description:'Control version',
    img:'techs/git.png',
    background:'bg-[#dda94e42]'
},
{
    name:'C#',
    description:'Programming Language',
    img:'techs/c-sharp.png',
    background:'bg-[#bf4edd42]'
},
{
    name:'C++',
    description:'Programming Language',
    img:'techs/c++.png',
    background:'bg-[#75a2ef21]'
},
{
    name:'Python',
    description:'Programming Language',
    img:'techs/python.png',
    background:'bg-[#ddaf4e42]'
},
,
{
    name:'Trello',
    description:'Agile method',
    img:'techs/trello.webp',
    background:'bg-[#75a2ef21]'
},
]
export function TechnologiesSection() {
    return (
        <FadeContent>

        <section id="technologies" className="mx-auto max-w-screen-lg  py-30 px-3.5 pb-10 flex flex-col gap-8">
            <h1 className="lg:text-5xl text-4xl font-bold">Current technologies</h1>
            <p >Leveraging cutting-edge technologies to create immersive and dynamic gaming experiences, I specialize in tools and frameworks that bring ideas to life. Here are some of the key technologies I use to shape my projects.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {technologies.map((tech)=>(
                    
                    <CardHorizontal key={tech.name}
                    title={tech.name}
                    description={tech.description}
                    img={tech.img}
                    color={tech.background}
                ></CardHorizontal>
            ))}
            </div>
        </section>
            </FadeContent>
    )
}