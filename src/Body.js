import "./index.css"

export default function Body() {
    return(
        <div className="flex flex-col">
            <div className="flex flex-row">
                <img className="flex w-1/4 m-8 rounded" src={process.env.PUBLIC_URL + "/headshot.jpg"}></img>
                <div className="flex flex-col m-8">
                    <div className="flex flex-row w-full">
                        <h1 className="flex px-4 py-1 align-bottom font-bold text-2xl bg-custom-beige2 rounded-t-lg">About Me</h1>
                    </div>
                    <p className="flex bg-custom-beige2 text-lg font-medium rounded-tr rounded-bl rounded-br p-5 h-full">
                        Hello world! My name is Elliot Phillips and I am a 22-year-old Computer Science Major at Clemson University.
                        I am from Inman SC, and hope to use my knowledge to pursue a career in Embedded Software Development. Currently, 
                        I am working on my undergraduate Bachelor's of Science degree until May 2024, when I will graduate and start my
                        graduate degree of Master's of Science in Computer Science.
                    </p>
                </div>
            </div>
        </div>
    );
}