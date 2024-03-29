import IllustrationAboutHome from "../../assets/svg/illustration-about-home.svg";

export default function AboutSection() {
  return (
    <section className="my-24 mbl:p-6">
      <div className="grid grid-cols-2 items-center justify-center mbl:flex mbl:flex-col-reverse">
        <div className="flex items-center justify-center mbl:mt-12">
          <img
            className="w-4/5 mbl:hidden"
            src={IllustrationAboutHome}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-8 text-left">
          <div className="flex flex-row items-center justify-center gap-2 font-medium text-blue-500">
            <span>About Us</span> <hr className="border border-blue-500 w-5" />
          </div>
          <h2 className="font-playfair font-black text-6xl text-product-blue-800 mbl:text-4xl">
            The Mobile-First Risk Intelligence Platform
          </h2>
          <div className="flex items-center justify-center mbl:mt-12">
            <img
              className="hidden mbl:block mbl:w-4/5"
              src={IllustrationAboutHome}
              alt=""
            />
          </div>
          <p className="w-4/5 mbl:w-full">
            From superapps to social apps, we help mobile businesses build
            customer trust and create a safer user environment. Behind the hard
            worf of intelligence, our team are always near to you for the
            serves.
          </p>
          <button className="px-8 py-4 font-medium text-lg bg-product-green text-product-blue rounded-xl transition-all hover:brightness-90">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
