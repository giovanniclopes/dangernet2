import { InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";
import logo from "../assets/svg/logo-dangernet.svg";

export default function Footer() {
  return (
    <footer className="p-6 bg-gradient-to-tr from-gray-200 to-white pb-12">
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="mb-6">
            <img
              src={logo}
              className="w-16 mr-2"
              alt="Logo"
              draggable="false"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Subscribe</h3>
              <div className="flex flex-row gap-0 justify-center items-center">
                <input
                  className="h-max rounded-tl-lg rounded-bl-lg p-3 py-4 outline-none border-none"
                  type="text"
                  placeholder="Enter your email"
                />
                <div className="h-max p-2 bg-white rounded-tr-lg rounded-br-lg">
                  <button className="px-4 py-2 font-medium text-md bg-product-green text-product-blue rounded-full transition-all hover:brightness-90">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Social Media</h3>
              <div className="flex flex-row gap-3">
                <div className="p-2 border border-product-blue text-product-blue rounded-full cursor-pointer transition-all hover:rotate-12">
                  <InstagramLogo size={24} />
                </div>
                <div className="p-2 border bg-product-blue border-product-blue text-product-green rounded-full cursor-pointer transition-all hover:rotate-12">
                  <TwitterLogo size={24} />
                </div>
                <div className="p-2 border border-product-blue text-product-blue rounded-full cursor-pointer transition-all hover:rotate-12">
                  <YoutubeLogo size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 items-center justify-center gap-12">
            <div>
              <h4 className="font-semibold text-lg mb-3">Solutions</h4>
              <ul className="flex flex-col gap-2 list-none cursor-pointer">
                <li>Fake Accounts</li>
                <li>Ad Fraud</li>
                <li>Payment Fraud</li>
                <li>Account Takeovers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Industries</h4>
              <ul className="flex flex-col gap-2 list-none cursor-pointer">
                <li>Media & Streaming</li>
                <li>Digital & Marketing</li>
                <li>Social Media & Network</li>
                <li>Online Delivery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Resources</h4>
              <ul className="flex flex-col gap-2 list-none cursor-pointer">
                <li>Blog</li>
                <li>Videos</li>
                <li>Fraud Wiki</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
