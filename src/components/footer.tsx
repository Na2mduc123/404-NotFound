import fb from "@/assets/icons/facebook.svg";
import ig from "@/assets/icons/instagram.svg";
import tw from "@/assets/icons/twitter.svg";
import lk from "@/assets/icons/linkedin.svg";
import ch from "@/assets/chplay.png";
import as from "@/assets/Appstore.png";
import arrow from "@/assets/icons/arrow.svg";

const sections = [
  {
    title: "Need Help",
    links: [
      "Contact Us",
      "Track Order",
      "Returns & Refunds",
      "FAQ's",
      "Career",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Euphoria Blog",
      "Euphoriastan",
      "Collaboration",
      "Media",
    ],
  },
  {
    title: "More Info",
    links: [
      "Term and Conditions",
      "Privacy Policy",
      "Shipping Policy",
      "Sitemap",
    ],
  },
];

const socialIcons = [fb, ig, tw, lk];

export default function Footer() {
  return (
    <footer className="bg-montana text-white py-10 px-6 md:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-flow-row gap-10 text-left max-w-[1059px] ml-[76px] justify-between">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-4 text-[28.58px]">{section.title}</h3>
            <ul className="space-y-2 text-lg text-cascading-white">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href=""
                    className="border-b-2 border-transparent hover:border-white transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-bold mb-4 text-[28.58px]">Location</h3>
          <p className="text-lg text-cascading-white">
            support@euphoria.in <br />
            Eklingpura Chouraha, Ahmedabad Main Road <br />
            (NH 8 - Near Mahadev Hotel) Udaipur, India - 313002
          </p>
        </div>

        <div className="col-span-full md:col-span-4">
          <p className="font-bold text-[28.58px] text-right w-full pr-6 md:pr-0">
            Download The App
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 px-[76px]">
        <div className="flex items-center gap-[10px]">
          {socialIcons.map((icon, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-800 w-[37px] h-[37px] flex items-center justify-center rounded-lg"
            >
              <img src={icon} alt={`icon-${idx}`} />
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-[69px] ml-[636px] md:mt-0">
          <a href="" target="_blank">
            <img src={ch} alt="Google Play" className="h-[51.24px]" />
          </a>
          <a href="" target="_blank">
            <img src={as} alt="App Store" className="h-[51.24px]" />
          </a>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      <div className="flex justify-between items-center mr-[50px]">
        <div className="font-bold text-[28.58px] text-left ml-[76px]">
          Popular Categories
        </div>
        <img src={arrow} alt="arrow-icon" className="cursor-pointer" />
      </div>

      <hr className="my-6 border-gray-600" />

      <p className="text-center text-lg font-bold text-white">
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
    </footer>
  );
}
