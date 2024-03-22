
import QuestionBoxImage from "@/public/QuestionBoxImage.jpeg"
import Image from "next/image";


const Features = () => {
  return (
    <section id="features" className="min-h-[50vh] px-4 py-12 text-center">
      <h2 className="my-8 text-5xl font-semibold text-[rgb(185,168,223)]">Key Features</h2>
      <div>
        <div>
          {/* <Image src={QuestionBoxImage} width={300} height={300} alt="error"/> */}
          GenAI Question Box: Instantly translate user queries into SQL or
          backend database queries
        </div>
        <li>
          Seamless Integration: Easily integrate GenAIConnect within hours
        </li>
        <li>
          Accurate Results: Get instant and accurate results for user queries
        </li>
        <li>
          Time-Saving: Save time by automating complex data retrieval processes
        </li>
        <li>
          Scalable Solution: Scale your software with our powerful Generative AI
          capabilities
        </li>
      </div>
    </section>
  );
};

export default Features;
