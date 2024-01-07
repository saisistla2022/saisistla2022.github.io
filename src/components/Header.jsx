
export default function Header(props){

    function navigateGithub(){
        window.location = "https://github.com/saisistla2022"
    }

    return(<>
        <header className="flex items-center justify-end h-14 md:p-6 bg-transparent">
            <div className="flex flex-row items-center justify-end gap-4 hover:bg-slate-800 p-1 px-4 rounded-lg" onClick={navigateGithub}>
                <img src={process.env.PUBLIC_URL + "/github.svg"} className="w-6 h-6"/>
                <p className="hidden md:visible text-white font-bold">→</p>
            </div>
        </header>
    </>)
}