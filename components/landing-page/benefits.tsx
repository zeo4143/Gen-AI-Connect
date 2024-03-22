import { TargetIcon } from "@radix-ui/react-icons";

const Benefits = () => {
  return (
    <section id="benefits">
      <div className="p-7">
        <div className=" pt-[120px] flex flex-col">
          <div className="">
            <h2 className="my-8 font-bold text-7xl text-[rgb(185,168,223)] text-center">
              Benefits
            </h2>
          </div>

          <div className="">
            <div className="flex items-center gap-10">
              {/* <BenefitsCard
                icon={<TargetIcon />}
                benfit="Improved User Experience"
                description=" Enhance user satisfaction with instant
              and accurate results"
              />

              <BenefitsCard
                icon={<TargetIcon />}
                benfit="Increased Efficiency"
                description=" Enhance user satisfaction with instant and accurate results"
              />

              <BenefitsCard
                icon={<TargetIcon />}
                benfit="Competitive Advantage"
                description=" Enhance user satisfaction with instant and accurate results"
              />

              <BenefitsCard
                icon={<TargetIcon />}
                benfit="Time and Cost Savings"
                description=" Enhance user satisfaction with instant
              and accurate results"
              />

              <BenefitsCard
                icon={<TargetIcon />}
                benfit="Scalabidivty"
                description=" Enhance user satisfaction with instant
              and accurate results"
              /> */}

              <div>
              Improved User Experience: Enhance user satisfaction with instant
              and accurate results
            </div>
            <div>
              Increased Efficiency: Automate complex data retrieval processes
            </div>
            <div>
              Competitive Advantage: Stay ahead of the competition with
              cutting-edge technology
            </div>
            <div>
              Time and Cost Savings: Save development time and resources with
              seamless integration
            </div>
            <div>
              Scalabidivty: Scale your software effortlessly with Generative AI
              capabidivties
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





export default Benefits;
