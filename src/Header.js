import "./index.css"

//Header that displays navbar and other information at top of screen, like a header do
export default function Header() {
    return(
        <header className="bg-custom-grey text-white">
            <nav className="inline-flex w-full justify-end">
                <a className="flex p-4 mr-auto font-bold text-2xl items-center">Charles E. Phillips</a>
                <div className="flex font-semibold">
                    <a className="flex rounded py-4 px-8 hover:bg-custom-hover-nav items-center" href="https://github.com/Spacenin" target="_blank">Github</a>
                    <a className="flex rounded py-4 px-8 hover:bg-custom-hover-nav items-center" href="https://clemson-csm.symplicity.com/profiles/elliot.phillips" target="_blank">Clemson Jobs</a>
                    <a className="flex rounded py-4 px-8 hover:bg-custom-hover-nav items-center" href="https://www.linkedin.com/in/elliophill/" target="_blank">LinkedIn</a>
                    <a className="flex rounded py-4 px-8 hover:bg-custom-hover-nav items-center" href="#" target="_blank">Resume</a>
                </div>
            </nav>
        </header>
    );
}