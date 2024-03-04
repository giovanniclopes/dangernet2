import Icon, { CreditCard, Flag, Globe } from "phosphor-react";

interface OurExpertiseBlockProps {
  icon: Icon.IconProps;
  title: string;
  description: string;
}

function OurExpertiseBlock(props: OurExpertiseBlockProps) {
  return (
    <div className="group h-full flex flex-col items-center justify-center gap-5 text-center py-6 border border-white bg-glassmorphismBG backdrop-blur-md shadow-lg rounded-lg text-white transition-colors hover:border-product-green active:border-product-green-600">
      <div className="p-2 border border-white rounded-lg text-product-green group-hover:text-product-green-600">
        <>{props.icon}</>
      </div>
      <div>
        <h3 className="font-playfair font-black text-3xl text-product-green">{props.title}</h3>
      </div>
      <div className="px-7">
        <p className="text-md">{props.description}</p>
      </div>
    </div>
  );
}

export default function OurExpertise() {
  return (
    <section className="bg-ourExpertiseBG py-12">
      <div>
        <div className="flex flex-col items-center justify-center gap-4 mb-16 mbl:px-6">
          <div className="flex flex-row items-center justify-center gap-2 font-medium text-blue-500">
            <span>Our Expertises</span>{" "}
            <hr className="border border-blue-500 w-5" />
          </div>
          <h2 className="w-4/5 font-playfair font-black text-6xl text-white text-center mbl:w-full mbl:text-3xl">
            We are Big Team Organization Serving the Worldclass Technology
          </h2>
        </div>
        <div className="grid grid-cols-3 items-center justify-center justify-items-center gap-5 px-10 mbl:grid-cols-1">
          <OurExpertiseBlock
            icon={<Flag size={32} />}
            title={"World Leading"}
            description={
              "Renowned globally, our cybersecurity solutions are at the forefront of innovation, setting industry standards and safeguarding businesses against emerging threats."
            }
          />
          <OurExpertiseBlock
            icon={<Globe size={32} />}
            title={"Largest Network"}
            description={
              "With an expansive network infrastructure, we deliver unparalleled protection, ensuring comprehensive coverage and defense across diverse digital landscapes."
            }
          />
          <OurExpertiseBlock
            icon={<CreditCard size={32} />}
            title={"Credit Intelligence"}
            description={
              "Utilizing advanced analytics and deep industry insight, we provide intelligent credit protection services, empowering businesses to secure online transactions and prevent fraud with confidence."
            }
          />
        </div>
      </div>
    </section>
  );
}
