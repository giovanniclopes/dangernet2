import dotIcon from "../../assets/svg/dot.svg";
import IllustrationUserJourney from "../../assets/svg/illustration-user-journey.svg";

export default function UserJourney() {
  return (
    <section className="my-24">
      <div className="flex flex-col items-center justify-center px-12 mbl:px-6">
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
          <div className="flex flex-row items-center justify-center gap-2 font-medium text-blue-500">
            <span>User Journey</span>{" "}
            <hr className="border border-blue-500 w-5" />
          </div>
          <h2 className="w-4/6 font-playfair font-black text-6xl text-product-blue-800 text-center mbl:w-full mbl:text-4xl">
            Fraud Prevention at Every Step of the User Journey
          </h2>
        </div>
        <div className="grid grid-cols-2 items-center justify-center mbl:flex mbl:flex-col-reverse">
          <div className="flex flex-col gap-6 mbl:mt-6">
            <h3 className="font-playfair font-bold text-5xl text-product-blue-800">
              Transactions
            </h3>
            <p className="w-4/5 mbl:w-full">
              Transaction Fraud occurs when a stollen payment card or data is
              udes to generate an unauthorized transaction. Quicker transaction
              times increase the chances of fraudulent transactions going
              undetected.
            </p>
            <div className="flex flex-row gap-12 items-center justify-start font-medium">
              <div>
                <div className="flex flex-row items-center">
                  <img src={dotIcon} alt="" />
                  <span>Payment Fraud</span>
                </div>
                <div className="flex flex-row items-center">
                  <img src={dotIcon} alt="" />
                  <span>Money Laudering</span>
                </div>
              </div>
              <div>
                <div className="flex flex-row items-center">
                  <img src={dotIcon} alt="" />
                  <span>Cyber Extortion</span>
                </div>
                <div className="flex flex-row items-center">
                  <img src={dotIcon} alt="" />
                  <span>Insider Trading</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-4/5" src={IllustrationUserJourney} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
