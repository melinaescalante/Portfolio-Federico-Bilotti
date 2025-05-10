import Squares from "../Backgrounds/Squares/Squares"

const socialMedia = [{
    'image': `<svg class="w-6 h-6 text-[#74acff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>`, 'url': 'https://www.linkedin.com/in/federico-bilotti-62b206256/', 'name': 'LinkedIn'
}, {
    'image': `<svg class="w-6 h-6 text-[#74acff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                </svg>`, 'url': 'https://github.com/FedericoBilotti', 'name': 'Github'
}, { 'image': `<svg class="w-6 h-6 fill-[#74acff] " viewBox="0 0 50 50" ><path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"/></svg>`, 'name': 'Gmail' }]
export function ContactSection({ children }) {
    return (
        <>
            <div className="border md:mx-auto  max-w-screen-lg mx-3 rounded-md  ">
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

                    <section id="contact" className="relative px-6 m-0.5 py-8 rounded-2xl z-20">
                        <h2 className="lg:text-5xl text-4xl font-bold">Enjoyed my <span className="">work</span>? </h2>
                        <p className="text-xl font-[400] mt-4">
                            Let's connect, send me an email or message me on social!
                        </p>
                        <div className='flex gap-4 mt-4'>
                            {socialMedia.map((social) => (

                                <a key={social.name} title={social.name} target='_blank' href={social.name === 'Gmail' ? 'mailto:fedebilotti2001@gmail.com' : social.url}
                                    className='border border-stone-600 p-4 rounded-md shadow-icon hover:translate-y-[-3px] duration-[0.5s] animate-shimmer bg-[linear-gradient(110deg,#1a1a1a,45%,#262626,55%,#1a1a1a)] hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-[length:200%_100%] ' >
                                    <span dangerouslySetInnerHTML={{ __html: social.image }} />
                                    <span className='sr-only'>{social.name}</span>
                                </a>
                            ))}

                        </div>
                    </section>
                    {children}
                </div>
            </div>
        </>
    )
}