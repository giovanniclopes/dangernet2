import { Envelope } from "phosphor-react";

export default function RequestDemo() {
  return (
    <section className="my-24 mt-32">
      <div className="flex flex-col items-center justify-center gap-8 mbl:px-6">
        <h2 className="w-2/3 font-playfair font-black text-5xl text-product-blue text-center mbl:w-full mbl:text-4xl">
          Learn how our intelligence can help your business build trust and
          safety.
        </h2>
        <div className="flex flex-row gap-0 justify-center items-center mbl:flex-col">
          <div className="flex flex-row mbl:flex mbl:w-full">
            <div className="p-5 py-7 bg-gray-200 rounded-tl-lg rounded-bl-lg mbl:px-3 mbl:rounded-bl-none">
              <Envelope size={24} color="#9ca9c4" />
            </div>
            <input
              className="w-96 h-max p-3 py-7 bg-gray-200 outline-none border-none mbl:w-72 mbl:py-7 mbl:text-lg mbl:rounded-se-lg"
              type="text"
              name="demo-request"
              id="demo-request"
              placeholder="Enter your email"
            />
          </div>
          <div className="h-max p-3 bg-gray-200 rounded-tr-lg rounded-br-lg mbl:p-0 mbl:w-full mbl:mt-1">
            <button className="p-4 font-medium text-md bg-product-green text-product-blue rounded-lg transition-all hover:brightness-90 mbl:w-full mbl:px-4 mbl:py-3 mbl:text-sm mbl:rounded-se-none">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}