import YoutubeLogo from "../../assets/svg/youtube-logo.svg";
import FacebookLogo from "../../assets/svg/facebook-logo.svg";
import UpworkLogo from "../../assets/svg/upwork-logo.svg";
import InstagramLogo from "../../assets/svg/instagram-logo.svg";

export default function Partners() {
  return (
    <section className="my-24">
      <div>
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
          <div className="flex flex-row items-center justify-center gap-2 font-medium text-blue-500">
            <span>Our Partners</span>{" "}
            <hr className="border border-blue-500 w-5" />
          </div>
          <h2 className="w-4/6 font-playfair font-black text-6xl text-product-blue-800 text-center mbl:w-full mbl:text-4xl">
            We Worked with Several Big Companies
          </h2>
        </div>
        <div className="w-full grid grid-cols-4 items-center justify-center justify-items-center mbl:grid-cols-2 mbl:gap-y-5">
          <img className="w-2/4 mbl:w-4/5" src={YoutubeLogo} alt="" />

          <img className="w-2/4 mbl:w-4/5" src={FacebookLogo} alt="" />

          <img className="w-2/4 mbl:w-4/5" src={UpworkLogo} alt="" />

          <img className="w-2/4 mbl:w-4/5" src={InstagramLogo} alt="" />
        </div>
      </div>
    </section>
  );
}
