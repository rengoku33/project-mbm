import React from "react";
import backgroundImage from '../Assets/images/Background.jpeg';

const Home = () => {
    return (
        <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="flex justify-center">
                {/* Content above */}
                <h1 className="text-3xl text-transparent">...</h1>
            </div>
            <div className="flex justify-center mt-44">
                {/* Content below */}
                <div className="w-1/2 text-center"> {/* width of the container */}
                    <h1 className="text-4xl text-white font-semibold">
                        Transform your mind and body with our 21-day wellness program.
                        Join our community and unlock your limitless potential today!
                    </h1>
                </div>
            </div>  
        </div>
    )
}

export default Home;