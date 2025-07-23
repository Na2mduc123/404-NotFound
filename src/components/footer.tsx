import fb from "@/assets/icons/facebook.svg";
import ig from "@/assets/icons/instagram.svg";
import tw from "@/assets/icons/twitter.svg";
import lk from "@/assets/icons/linkedin.svg";
import ch from "@/assets/chplay.png";
import as from "@/assets/Appstore.png";
import arrow from "@/assets/icons/arrow.svg";

export default function Footer() {
  return (
    <footer className="bg-montana text-white py-10 px-6 md:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-flow-row gap-10 text-left max-w-[1059px] ml-[76px] justify-between">
        <div>
          <h3 className="font-bold mb-4 text-[28.58px]">Need Help</h3>
          <ul className="space-y-2 text-lg text-cascading-white ">
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Track Order
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Returns & Refunds
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                FAQ's
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Career
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-[28.58px]">Company</h3>
          <ul className="space-y-2 text-lg text-cascading-white">
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Euphoria Blog
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Euphoriastan
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Collaboration
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Media
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-[28.58px]">More Info</h3>
          <ul className="space-y-2 text-lg text-cascading-white">
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Term and Conditions
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Shipping Policy
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-[28.58px]">Location</h3>
          <p className="text-lg text-cascading-white">
            support@euphoria.in <br />
            Eklingpura Chouraha, Ahmedabad Main Road <br />
            (NH 8 - Near Mahadev Hotel) Udaipur, India - 313002
          </p>
        </div>

        {/* Download The App (một hàng riêng) */}
        <div className="col-span-full md:col-span-4">
          <p className="font-bold text-[28.58px] text-right w-full pr-6 md:pr-0 ">
            Download The App
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 px-[76px]">
        <div className="flex items-center gap-[10px]">
          {[fb, ig, tw, lk].map((icon, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-800 w-[37px] h-[37px] flex items-center justify-center rounded-lg"
            >
              <img src={icon} alt={`icon-${idx}`} />
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-[69px] ml-[636px] md:mt-0">
          <img
            src={ch}
            alt="Google Play"
            className="h-[51.24px] cursor-pointer"
          />
          <img
            src={as}
            alt="App Store"
            className="h-[51.24px] cursor-pointer"
          />
        </div>
      </div>

      <hr className="my-6 border-gray-600" />
      <div className="flex justify-between items-center mr-[50px]">
        <h3 className="font-bold text-[28.58px] text-left ml-[76px]">
          Popular Categories
        </h3>
        <img src={arrow} alt="" className="text-right cursor-pointer" />
      </div>
      <hr className="my-6 border-gray-600" />

      <p className="text-center text-lg font-bold text-white">
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
    </footer>
  );
}
