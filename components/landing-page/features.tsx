//TODO - Implemnet Grid & adjust FeatureCard widths and heights

import { features } from "@/lib/data";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import defaultImage from "@/public/QuestionBoxImage.jpeg";

const Features = () => {
  return (
    <section id="features" className="py-[20dvh] text-center">
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div  key={index}>
            {/* className={`${[1,4,5].includes(index-1) ? ' grir' : 'text-clip'}`} */}
            <FeatureCard
              title={feature.title}
              description={feature.description}
              imageUrl={defaultImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

interface FeatureWrapperProps {
  title: string;
  description: string;
  imageUrl: string | StaticImport;
}

const FeatureCard = ({ title, description, imageUrl }: FeatureWrapperProps) => {
  return (
    <CardContainer>
      <CardBody className="bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
        {/* Title of the Feature */}

        <CardItem
          translateZ={100}
          className=" text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        {/* Description of the feature */}

        <CardItem
          as="p"
          translateZ={50}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        {/* Image of the feature */}

        <CardItem
          // translateZ={70}
          className="w-full mt-8"
        >
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            alt="Feature Image"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
