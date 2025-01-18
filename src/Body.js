import "./index.css"

//Body with the core website stuff, like about me and experience and education and stuffs
export default function Body() {
    return(
        <div className="flex flex-col">
            <div className="flex flex-row">
                <img className="flex w-1/4 m-8 rounded" src={process.env.PUBLIC_URL + "/headshot.jpg"}></img>
                <div className="flex flex-col m-8">
                    <div className="flex flex-row w-full">
                        <h1 className="flex px-4 py-1 align-bottom font-bold text-md sm:text-2xl bg-custom-beige2 rounded-t-lg">About Me</h1>
                    </div>
                    <p className="flex bg-custom-beige2 text-sm sm:text-lg font-medium rounded-tr rounded-bl rounded-br p-5 h-full">
                        Hello world! My name is Charles Elliot Phillips and I am a 23-year-old Computer Science Master's student at Clemson University.
                        I am from Inman SC, and hope to use my knowledge to pursue a career in Embedded Software Development. I graduated from 
                        Clemson in 2024 with my Bachelor's of Science in Computer Science, and intend to graduate with my Master's of Science in 
                        Computer Science in May 2025.
                    </p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col m-8 w-1/2">
                    <div className="flex flex-row w-full">
                        <h1 className="flex px-4 py-1 align-bottom font-bold text-md sm:text-2xl bg-custom-beige2 rounded-t-lg">Education</h1>
                    </div>
                    <p className="flex bg-custom-beige2 text-sm sm:text-lg font-medium rounded-tr rounded-bl rounded-br p-5 h-full">
                        
                    </p>
                </div>
                <div className="flex flex-col m-8 w-1/2">
                    <div className="flex flex-row w-full">
                        <h1 className="flex px-4 py-1 align-bottom font-bold text-md sm:text-2xl bg-custom-beige2 rounded-t-lg">Experience</h1>
                    </div>
                    <p className="flex bg-custom-beige2 text-sm sm:text-lg font-medium rounded-tr rounded-bl rounded-br p-5 h-full">
                        
                    </p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col m-8 w-2/3">
                    <div className="flex flex-row w-full">
                        <h1 className="flex px-4 py-1 align-bottom font-bold text-md sm:text-2xl bg-custom-beige2 rounded-t-lg">Personal Projects</h1>
                    </div>
                    <p className="flex bg-custom-beige2 text-sm sm:text-lg font-medium rounded-tr rounded-bl rounded-br p-5 h-full">
                        
                    </p>
                </div>
                <img className="flex w-1/3 m-8 rounded" src={process.env.PUBLIC_URL + "/radio.jpg"}></img>
            </div>
        </div>
    );
}