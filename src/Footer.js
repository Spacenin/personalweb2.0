import "./index.css"

//Footer just to round everything up all nice
export default function Footer() {
    return(
        <div className="flex bg-custom-header text-custom-white w-full justify-center">
            <p className="flex m-3">
                Feel free to contact me at&nbsp;<a href="mailto:elliophill@gmail.com">elliophill@gmail.com</a>!
            </p>
        </div>
    );
}