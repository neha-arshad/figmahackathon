;




import React from "react";
import Image from "next/image";

const CompanyLogo = () => {
  // Array of logos
  const logos = [
    { id: 0, src: "/logo.png", alt: "Logo" },
    { id: 1, src: "/logo1.png", alt: "Logo 1" },
    { id: 2, src: "/logo3.png", alt: "Logo 3" },
    { id: 3, src: "/logo4.png", alt: "Logo 4" },
    { id: 4, src: "/logo5.png", alt: "Logo 5" },
    { id: 5, src: "/logo6.png", alt: "Logo 6" },
    { id: 6, src: "/logo7.png", alt: "Logo 7" },
  ];

  return (
    <div className=" mt-14">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {logos.map((logo) => (
          <div key={logo.id} className="w-32 h-20 relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
