import React from 'react';
import Flag from 'react-world-flags';
import { Star } from 'lucide-react';

const FalconIcon = ({ className, size = 24 }) => (
    /*  <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width={size}
         height={size}
         className={className}
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
     >
         <path
             d="M15.38 5.44a3.63 3.63 0 0 1 .82 5.68l-7.54 7.54a1 1 0 0 1-1.42 0l-5.66-5.66a1 1 0 0 1 0-1.42l7.54-7.54a3.63 3.63 0 0 1 5.68.82Z"
             fill="#FCD34D"
             fillOpacity="0.3"
         />
         <path
             d="m15.38 5.44 2.54-2.54a1 1 0 0 1 1.41 0l2.83 2.83a1 1 0 0 1 0 1.41L19.56 9.62"
             stroke="#3B82F6"
             strokeOpacity="0.6"
         />
         <path
             d="M10.41 10.41 17.5 3.36"
             stroke="#2563EB"
             strokeOpacity="0.5"
         />
     </svg> */
    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
        <Star
            className="text-tiercel-gold/50 animate-pulse"
            size={20}
            stroke="#0a2342e6"
        />
    </div>
);
const CountryFlags = () => {
    const flags = [
        { src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg", alt: "United Kingdom" },
        { src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", alt: "United States" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg", alt: "Canada" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg", alt: "Australia" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg", alt: "European Union" }
    ];
    const countryCodes = ['US', 'GB', 'CA', 'AU', 'EU'];

    return (
        <div className="relative">
            {/* Curved Lines */}
            <svg
                className="absolute -top-2 left-0 w-full z-0"
                height="50"
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,0 Q600,50 1200,0"
                    fill="none"
                    stroke="#3B82F6"
                    strokeOpacity="0.3"
                    strokeWidth="2"
                />
            </svg>

            {/* Falcon on Left */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <FalconIcon
                    className="text-tiercel-blue/50 animate-pulse"
                    size={36}
                />
            </div>

            {/* Falcon on Right */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <FalconIcon
                    className="text-tiercel-blue/50 animate-pulse"
                    size={36}
                />
            </div>

            {/* Flags Container */}
            <div className="relative z-10 flex justify-center items-center space-x-4 my-6">
                {flags.map((flag) => (
                    <img src={flag.src} width="70" height="70"
                        className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-lg overflow-hidden"
                    />
                ))}
            </div>

            {/* Bottom Curved Line */}
            <svg
                className="absolute -bottom-2 left-0 w-full z-0"
                height="50"
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,120 Q600,70 1200,120"
                    fill="none"
                    stroke="#3B82F6"
                    strokeOpacity="0.3"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
};

export default CountryFlags;