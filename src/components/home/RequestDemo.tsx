import { Envelope } from "phosphor-react";

export default function RequestDemo() {
  return (
    <section className="my-24 mt-32">
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="w-2/3 font-playfair font-black text-5xl text-product-blue text-center">
          Learn how our intelligence can help your business build trust and
          safety.
        </h2>
        <div className="flex flex-row gap-0 justify-center items-center">
          <div className="p-5 py-7 bg-gray-200 rounded-tl-lg rounded-bl-lg">
            <Envelope size={24} color="#9ca9c4" />
          </div>
          <input
            className="w-96 h-max p-3 py-7 bg-gray-200 outline-none border-none"
            type="text"
            placeholder="Enter your email"
          />
          <div className="h-max p-3 bg-gray-200 rounded-tr-lg rounded-br-lg">
            <button className="p-4 font-medium text-md bg-product-green text-product-blue rounded-lg transition-all hover:brightness-90">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}