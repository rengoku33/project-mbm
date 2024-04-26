export const CircleWithImageAndTextLeft = ({ imageSrc, title, description }) => {
    return (
      <div className="flex items-center mb-8">
  
        <div className="flex-grow">
          <h2 className="text-4xl font-bold text-orange-500">{title}</h2>
          <p className="text-gray-600 text-3xl w-[90%]">{description}</p>
        </div>
        <div className={`flex-shrink-0 w-96 h-96 rounded-full bg-orange-300 shadow-orange-300 overflow-hidden ring ring-orange-400 shadow-2xl bg-gradient-to-b from-orange-500 via-orange-200 to-transparent`}>
          <img src={imageSrc} alt="Circle" className="w-full h-full object-cover" />
        </div>
      </div>
    );
  };
  
  export const CircleWithImageAndTextRight = ({ imageSrc, title, description }) => {
    return (
      <div className="flex items-center mb-8">
        <div className={`flex-shrink-0 w-96 h-96 rounded-full bg-orange-300 shadow-orange-300 overflow-hidden ring ring-orange-400 shadow-2xl bg-gradient-to-b from-orange-500 via-orange-200 to-transparent`}>
          <img src={imageSrc} alt="Circle" className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow pl-24">
          <h2 className="text-4xl font-bold text-orange-500">{title}</h2>
          <p className="text-gray-600 text-3xl">{description}</p>
        </div>
      </div>
    );
  };
  
  export const CircleWithImageAndTextRightUnder = ({ imageSrc, title, description }) => {
    return (
      <div className="flex items-center mb-28 mt-32 ml-24">
        <div className={`flex-shrink-0 w-96 h-96 rounded-full bg-orange-300 shadow-orange-300 overflow-hidden `}>
          <img src={imageSrc} alt="Circle" className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow pl-24">
          <h2 className="text-4xl font-semibold text-white">{title}</h2>
          <p className="text-white text-xl w-[70%] pt-8">{description}</p>
        </div>
      </div>
    );
  };

  export const CircleWithImageAndTextRightDownUnder = ({ imageSrc, title, description }) => {
    return (
      <div className="flex items-center mb-8">
        <div className={`flex-shrink-0 w-56 h-56 rounded-full bg-orange-300 overflow-hidden ring ring-orange-400 shadow-2xl bg-gradient-to-b from-orange-500 via-orange-200 to-transparent`}>
          <img src={imageSrc} alt="Circle" className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow pl-9">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    );
  };