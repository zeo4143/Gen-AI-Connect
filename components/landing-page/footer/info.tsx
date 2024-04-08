import Paragraph from "@/components/global/paragraph";
import { cn } from "@/lib/utils";
import React from "react";

interface InforSection {
  heading: string;
  description?: string[];
  detailedInformation?: {
    subHeading: string;
    description?: string[];
    info?: string[];
  }[];
}

interface InfoProps {
  infoData: InforSection[],
  className?: string
}

const Info = ({ infoData, className }: InfoProps) => {
  return (
    <div className={className}>
      {infoData?.map(({ heading, description, detailedInformation }, index) => (
        <div key={index}>
          <h1 className="mt-10 text-2xl text-[#999999]">{heading}</h1>

          {description?.map((data, index) => (
            <div key={index} className="mt-5">
              <Paragraph data={data} />
              <br />
            </div>
          ))}
          
          {detailedInformation?.map(({ subHeading, description, info }, index) => (
            <div key={index}>
                <h2 className="mt-10">{subHeading}</h2>
                {description?.map((data, index) => (
                    <div className="w-full pt-5" key={index}>
                        <Paragraph data={data}/>
                        <br />
                    </div>
                ))}

                <ul className="w-full">
                    {
                        info?.map((data, index) => (
                            <li key={index}>
                                <Paragraph data={data}/>
                            </li>
                        ))
                    }
                </ul>

            </div>
          ))}

        </div>
      ))}
      
    </div>
  );
};

export default Info;
