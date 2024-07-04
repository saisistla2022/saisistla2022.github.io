import { useRef } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import ContactCard from '../components/ContactCard'

export default function Home(props) {
    const contactRef = useRef(null)
    const mobileProjectsRef = useRef(null)
    const desktopProjectsRef = useRef(null)

    function handleScrollRef(ref) {
        if (ref == "contact") {
            contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
        else {
            if (window.matchMedia("(max-width: 768px)").matches) {
                mobileProjectsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                desktopProjectsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })

            }

        }
    }

    return (<>
        <div className="overflow-y-auto overflow-x-hidden">
            <div className="bg-gradient-to-tr from-blue-950 from-[8%] via-black via-[60%] to-black h-screen text-white">
                <Header />
                <div className="pt-4 md:pt-32 flex items-center justify-center">
                    <div id="" className="flex flex-col items-center justify-center">
                        <p className="text-center text-gray-300 font-semibold text-xl md:text-3xl">Hello, I'm</p>
                        <p className="text-center font-semibold text-5xl md:text-8xl pt-3 md:pt-4">Sai Sistla</p>
                        <div className="bg-white bg-opacity-5 rounded-lg p-6 w-[90%] md:w-[50%] mt-12">
                            <p className="md:text-xl font-medium text-center">Detail-oriented professional seeking an entry-level position in data analysis, specifically in security policy analysis. Experienced in Power BI, Tableau, Python, and SQL. Eager to contribute analytical skills in a federal government setting. </p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-6 mt-16">
                            <button className="rounded-md bg-violet-500 hover:bg-violet-400 hover:font-bold p-4 px-5 text-xl font-semibold" onClick={() => handleScrollRef("contact")}>Contact</button>
                            <button className="rounded-md bg-violet-500 hover:bg-violet-400 hover:font-bold p-4 px-5 text-xl font-semibold" onClick={() => handleScrollRef("projects")}>Projects</button>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={desktopProjectsRef} className="bg-gradient-to-br from-blue-950 from-[8%] via-black via-[60%] to-blue-950 h-screen text-white md:p-6">
                <div id="desktop-cert-heading" className="invisible md:pt-10 grid grid-cols-2 md:visible">
                    <p className="text-4xl font-bold pl-10">Certifications</p>
                    <p className="text-4xl font-bold">Projects</p>
                </div>
                <p className="text-4xl font-bold text-center md:hidden">Certifications</p>
                <div id="mobile-certs" className="flex flex-col items-center justify-center md:hidden">
                    <div className="pt-10">
                        <div className="flex items-center justify-center p-8 rounded-full bg-slate-900">
                            <img src={process.env.PUBLIC_URL + "aws.png"} className="w-44 h-44" />
                        </div>
                        <p className="text-center pt-3 font-medium text-lg text-gray-200">AWS Cloud Practitioner (2023)</p>
                    </div>
                    <div className="pt-10">
                        <div className="flex items-center justify-center p-8 rounded-full bg-slate-900">
                            <img src={process.env.PUBLIC_URL + "oracle.png"} className="w-44 h-44" />
                        </div>
                        <p className="text-center pt-3 font-medium text-lg text-gray-200">Oracle SQL Associate (2023)</p>
                    </div>
                </div>
                <div id="desktop-certs" className="invisible grid grid-cols-2 h-full md:visible">
                    <div className="flex flex-col items-center justify-begin mt-14 gap-10">
                        <div >
                            <div className="flex items-center justify-center p-8 rounded-full bg-slate-900">
                                <img src={process.env.PUBLIC_URL + "aws.png"} className="w-44 h-44" />
                            </div>
                            <p className="text-center pt-3 font-medium text-lg text-gray-200">AWS Cloud Practitioner (2023)</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center p-8 rounded-full bg-slate-900">
                                <img src={process.env.PUBLIC_URL + "oracle.png"} className="w-44 h-44" />
                            </div>
                            <p className="text-center pt-3 font-medium text-lg text-gray-200">Oracle SQL Associate (2023)</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-begin gap-6 mt-14 p-6 overflow-hidden">
                        <ProjectCard title="Southern Water Corp." description="Financial analysis with increased water demand from agricultural and residential usage, southern water corp had to maximize availability of desalination plants to meet continual demand which has generated increases in revenues" link={"https://github.com/saisistla2022/SouthernWaterCorp"} />
                        <ProjectCard title="AirBnB" description="Analysis of neighborhoods across the New York boroughs and the top revenue generating neighborhoods " link={"https://github.com/saisistla2022/AirBnBproject"} />
                    </div>
                </div>
            </div>
            <div ref={mobileProjectsRef} className="md:hidden bg-gradient-to-l from-blue-950 via-black via-[80%] to-black text-white">
                <p className="text-4xl font-bold text-center pt-24">Projects</p>
                <div id="mobile-projects" className="flex flex-col items-center justify-center pt-8">
                    <div className="flex flex-col items-center justify-center gap-5 w-full">
                        <ProjectCard title="Southern Water Corp." description="Financial analysis with increased water demand from agricultural and residential usage, southern water corp had to maximize availability of desalination plants to meet continual demand which has generated increases in revenues" link={"https://github.com/saisistla2022/SouthernWaterCorp"} />
                        <ProjectCard title="AirBnB" description="Analysis of neighborhoods across the New York boroughs and the top revenue generating neighborhoods " link={"https://github.com/saisistla2022/AirBnBproject"} />
                    </div>
                </div>
            </div>

            <div ref={contactRef} className="bg-gradient-to-tr from-black from-[30%] via-black via-[60%] to-blue-950 h-screen text-white">
                <div className="pt-36 flex items-center justify-center">
                    <div id="" className="flex flex-col items-center justify-center">
                        <p className="text-center font-semibold text-4xl md:text-8xl">Get in touch.</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 md:mt-20">
                            <ContactCard type="email" title="Email" subtext="saisistla2022@outlook.com" link="mailto:saisistla2022@outlook.com" />
                            <ContactCard type="resume" title="Resume" subtext="Latest Version" link="https://drive.google.com/file/d/1o9HUtmdP2FsyoB_0jgpqSz96NoYEa_rX/view?usp=sharing" />
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:mt-10 mt-6">
                            <ContactCard type="github" title="GitHub" subtext="github.com/saisistla2022" link="https://github.com/saisistla2022" />
                            <ContactCard type="linkedin" title="LinkedIn" subtext="linkedin.com/in/sai-sistla" link="https://www.linkedin.com/in/sai-sistla/" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
