export function Navbar() {

    return (
        <nav className="shadow-2xl z-50 shadow-stone-900 fixed top-10 inset-x-0 mx-auto bg-[#1a1a1a] py-4 max-w-fit px-8 rounded-lg border-stone-500 border">
            <ul className="  flex font-medium justify-around items-center gap-5 ">
                <li>
                    <a href="#home" className=" font-medium hover:text-[#74acff] transition-colors" title="Home">
                        <span className="md:block hidden">
                            Home
                        </span>

                        <span className="md:hidden block"><svg className="w-6 h-6 text-[#74acff] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
                        </svg>

                        </span>
                            <span className="sr-only">Home</span>
                    </a>
                </li>
                <li>

                    <a href="#technologies" className=" font-medium hover:text-[#74acff] transition-colors" title="Technologies">
                        <span className="md:block hidden">About</span>

                        <span className="md:hidden block"><svg className="w-7 h-7 text-[#74acff] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                        </svg>

                        </span>
                        <span className="sr-only">About</span>

                    </a>

                </li>
                <li>
                    <a href="#projects" className="font-medium hover:text-[#74acff]  transition-colors" title="Projects">
                        <span className="md:block hidden">
                            Projects
                        </span>

                        <span className="block md:hidden"><svg className="w-6 h-6 text-[#74acff] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
                        </svg>
                        </span>
                        <span className="sr-only">Projects</span>

                    </a>
                </li>
                <li>
                    <a href="#contact" className=" font-medium hover:font-medium hover:text-[#74acff]  transition-colors" title="Contact">
                        
                        <span className="md:block hidden">
                            Contact
                        </span>

                        <span className="md:hidden block"><svg className="w-6.5 h-6.5 text-[#74acff] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        </svg>
                        </span>
                        <span className="sr-only">Contact</span>

                    </a>
                </li>
            </ul>
        </nav>
    )
}