import IllustrationHerosection from "../../assets/svg/illustration-herosection.svg";

export default function HeroSection() {
  return (
    <section className="py-52 bg-gradient-to-tr from-product-blue-500 to-product-blue-800">
      <div className="flex flex-row items-center justify-center mx-10 gap-10 mbl:flex-col">
        <div className="w-full flex flex-col items-start justify-center gap-4 text-white">
          <span className="text-sm">Cyber Attack Protection Service</span>
          <h1 className="font-playfair font-black text-7xl">
            We Protect the World from{" "}
            <span className="text-product-green">Fraud</span> &{" "}
            <span className="text-product-green">Abuse</span>
          </h1>
          <p className="mt-6 text-md">
            Shiled is driven by a mission - to build a better advertising
            industry. We help brands improve the effectiveness.
          </p>
          <button className="px-8 py-4 font-medium text-lg bg-product-green text-product-blue rounded-xl transition-all hover:brightness-90">
            Request Demo
          </button>
        </div>
        <div className="w-[60%] flex items-end justify-end">
          <img src={IllustrationHerosection} alt="" />
        </div>
      </div>
    </section>
  );
}
