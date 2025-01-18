import "./index.css"

//Header that displays navbar and other information at top of screen, like a header do
export default function Header() {
    return(
        <header className="bg-custom-grey text-white">
            <nav className="inline-flex w-full justify-end">
                <a className="flex p-4 mr-auto font-bold text-lg sm:text-2xl items-center">Charles E. Phillips</a>
                <div className="flex font-semibold">
                    <a className="flex rounded py-1 px-1 sm:py-4 sm:px-8 hover:bg-custom-hover-nav items-center" href="https://github.com/Spacenin" target="_blank">
                        Github
                        <img className="h-7 mx-2" src={process.env.PUBLIC_URL + "/github.png"}></img>
                    </a>
                    <a className="flex rounded py-1 px-1 sm:py-4 sm:px-8 hover:bg-custom-hover-nav items-center" href="https://clemson-csm.symplicity.com/profiles/elliot.phillips" target="_blank">
                        Clemson Jobs
                        <img className="h-7 mx-2" src={process.env.PUBLIC_URL + "/paw.png"}></img>
                    </a>
                    <a className="flex rounded py-1 px-1 sm:py-4 sm:px-8 hover:bg-custom-hover-nav items-center" href="https://www.linkedin.com/in/elliophill/" target="_blank">
                        LinkedIn
                        <img className="h-7 mx-2" src={process.env.PUBLIC_URL + "/linkedin.png"}></img> 
                    </a>
                    <a className="flex rounded py-1 px-1 sm:py-4 sm:px-8 hover:bg-custom-hover-nav items-center" href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank">
                        Resume
                        <img className="h-7 mx-2" src={process.env.PUBLIC_URL + "/document.png"}></img>
                    </a>
                </div>
            </nav>
        </header>
    );
}