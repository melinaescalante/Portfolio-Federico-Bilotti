import { ButtonCustom } from "../components/ButtonCustom";
import '../index.css'
import BlurText from "../TextAnimations/BlurText/BlurText";
import Squares from '../Backgrounds/Squares/Squares'
export function HomeSection() {
    return (<>

        <div className="relative h-full w-full">
            <div className="absolute inset-0 pointer-events-none ">
                <Squares
                    speed={0}
                    squareSize={40}
                    direction="down"
                    borderColor="#afafaf1c"
                
                    hoverFillColor="transparent"
                />
            </div>
            <section
                id="home"
                className="h-screen max-w-screen-lg mx-auto px-3 flex flex-col gap-8 justify-center items-center "
            >

                <span className="font-semibold text-sm text-[#e5e7eb] z-10">BASED IN ARGENTINA</span>
                <div className="flex flex-col gap-3 items-center justify-center flex-wrap">

                    <BlurText
                        text="Video Game Programmer"
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className="lg:text-7xl text-5xl font-bold text-center break-words text-[#2b7fff] justify-center"

                    ></BlurText>
                    <BlurText
                        text="Federico Bilotti"
                        delay={300}
                        animateBy="words"
                        direction="top"
                        className="break-words text-5xl lg:text-7xl mt-0 font-bold text-center justify-center"

                    ></BlurText>
                </div>
             
                <h2 className="text-stone-100 text-center px-8 z-10"><strong>Passionate game programmer</strong> experienced in <strong>Unity and C#</strong>. Skilled to <strong>develop data-oriented, high-performance solutions</strong>. <strong>Ambitious and constantly learning.</strong></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ButtonCustom
                        containerStyles='animate-shimmer bg-[linear-gradient(110deg,#1a1a1a,45%,#262626,55%,#1a1a1a)] hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-[length:200%_100%] transition-colors border-1 border-stone-600'
                        text='See my work'
                        textStyles='font-medium text-white'

                        icon='<svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>'
                        url='#projects'
                    ></ButtonCustom>
                    <ButtonCustom
                        textStyles='font-medium hover:text-stone-400 transition-colors'
                        containerStyles='bg-transparent '
                        icon='<svg class="w-6 h-6 text-[#2b7fff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                    </svg>'
                        text='Download resume'
                        url='/files/CV-Federico-Bilotti.pdf'
                    ></ButtonCustom>
                </div>
              
            </section>
        </div>





    </>)

}
