import "./index.css"

export default function Header() {
    return(
        <header>
            <nav className="inline-flex">
                <a className="block p-4">Elliot Phillips</a>
                <div className="flex flex-row">
                    <a className="block p-4" href="#">Hello</a>
                    <a className="block p-4" href="#">World!</a>
                </div>
            </nav>
        </header>
    );
}