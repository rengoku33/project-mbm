import React, { Fragment, useEffect, useState } from "react";
import backgroundImage from '../Assets/images/Background.jpeg';

import { GiMeditation } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import { useInView } from 'react-intersection-observer';

import { CircleWithImageAndTextLeft, CircleWithImageAndTextRightUnder, CircleWithImageAndTextRight, CircleWithImageAndTextRightDownUnder } from "./circleWithText";
import FormBox from "./formbox";
// import ReviewComponent from "./review,jsx";
import Footer from "./footer";

const Column = ({ icon, title, targetNumber }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust as needed
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // Start counting animation
      const interval = setInterval(() => {
        if (count < targetNumber) {
          setCount(prevCount => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust speed of counting animation
      return () => clearInterval(interval);
    }
  }, [inView, count, targetNumber]);

  return (
    <div className="flex flex-col items-center justify-center px-44 py-7">
      <div className="mb-2 text-8xl text-orange-500 w-44 flex justify-center">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-xl font-bold">{count}+</div>
      <div ref={ref} className="mt-2">
        {/* Observer for triggering animation */}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Fragment>
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
      <div className="mt-5 container mx-auto py-8">
        <CircleWithImageAndTextLeft
          imageSrc="https://ca-times.brightspotcdn.com/dims4/default/ac3a9ba/2147483647/strip/true/crop/4410x2080+0+0/resize/1200x566!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F03%2F84%2F4788b80f4bf88294e91df874de96%2Frev-1-bar-tt3-0104-high-res-jpeg.jpeg"
          title="I couldnt fetch the photos for this module"
          description="So, I implemented a twist of my own, since I am not provided with the exact assests to implement here"
        />
        <CircleWithImageAndTextRight
          imageSrc="https://www.indiewire.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-10-at-12.33.18-PM.png?w=600&h=337&crop=1"
          title="It does'nt seem to matter what I do"
          description="I'm always number two, No one knows how hard I tried"
        />
        <CircleWithImageAndTextLeft
          imageSrc="https://ew.com/thmb/dxdP5mz6KlWhL5yQYHo1K6Fh8q4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ryan-Gosling-Barbie-022624-eb224a94063e46e8951d4f74bc7dbb58.jpg"
          title="Ohh I, I have feelings that I cant explain, Driving me insane"
          description="All my life been so polite but I'll sleep alone tonight... cause I am just Ken, anywhere else I'd be a ten,
                    is it my destiny to live and die a life of blond fragility?"
        />
      </div>
      <div className=" bg-orange-500 py-10 px-7">
        <CircleWithImageAndTextRightUnder
          imageSrc="https://variety.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-31-at-8.38.43-AM.png"
          title="I could'nt get the resources for this module as well..."
          description="I'm just Ken
          Where I see love, she sees a friend
          What will it take for her to see the man behind the tan and fight for me?
          I wanna know what's like to love, to be the real thing
          Is it a crime? Am I not hot when I'm in my feelings?
          And is my moment finally here, or am I dreaming?
          I'm no dreamer
          Can you feel the Kenergy?
          Feels so real, my Kenergy"
        />
      </div>
      <div className="flex items-center justify-center">
        <Column
          icon={<GiMeditation />}
          title="Qualified Instructors"
          targetNumber={5}
        />
        <div className="border-l border-orange-500 h-44"></div> {/* Vertical line */}
        <Column
          icon={<IoIosPeople />}
          title="Enrolled Members"
          targetNumber={100}
        />
        <div className="border-l border-orange-500 h-44"></div> {/* Vertical line */}
        <Column
          icon={<AiOutlineFundProjectionScreen />}
          title="Session"
          targetNumber={45}
        />
        <div className="border-l border-orange-500 h-44"></div> {/* Vertical line */}
        <Column
          icon={<VscSmiley />}
          title="Happy Customers"
          targetNumber={100}
        />
      </div>
      <div>
        <h1 className="text-4xl text-orange-500 flex justify-center font-bold mt-16">Our Instructors</h1>
        <span className="flex justify-center pt-5 text-xl">Experienced professionals in the field who can change your life</span>
        <div className="flex w-[50%] ml-[30%] mt-16">
          <CircleWithImageAndTextRightDownUnder
            imageSrc="https://www.narcity.com/media-library/ryan-gosling-as-ken-in-barbie.png?id=35064801&width=1245&height=700&coordinates=83%2C0%2C213%2C0"
            title="KEN"
            description="Cause I'm just Ken, anywhere else I'd be a ten
          Is it my destiny to live and die a life of blonde fragility?
          I'm just Ken
          Where I see love, she sees a friend
          What will it take for her to see the man behind the tan and fight for me?"
          />
        </div>
      </div>
      {/* <h1 className="text-4xl text-orange-500 flex justify-center font-bold mt-16">Our Instructors</h1>
      <span className="flex justify-center pt-5 text-xl">Experienced professionals in the field who can change your life</span>
      <ReviewComponent /> */}

      <FormBox />

      <Footer />
      <div className="flex justify-center">
        <h3 className="text-sm mb-10 mt-9">© Copyright 2023 • MindBlowing Mornings • All rights reserved</h3>
      </div>
    </Fragment>
  )
}

export default Home;