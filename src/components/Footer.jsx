import { NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const links = {
  Product: [
    { label: "Features", to: "/features" },
    { label: "Pricing", to: "/pricing" },
    { label: "FAQ", to: "/faq" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
  ],
};

function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full bg-[#779551] px-6 md:px-20 lg:px-40 pt-16">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">

          <div className="flex flex-col gap-4 w-full lg:max-w-[280px]">
            <h3 className="text-white text-2xl font-bold">JOSCM</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              The simplest way to manage church tithes, offerings, and financial
              records — built for every congregation.
            </p>
            <div className="flex gap-4 mt-2">
              {[FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="text-white/60 hover:text-white transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:max-w-[280px]">
            <h4 className="text-white font-semibold">Stay Updated</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Get tips on managing church finances and product updates — straight to your inbox.
            </p>
            <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white text-sm placeholder:text-white/40 outline-none flex-1 min-w-0"
              />
              <button className="bg-white text-[#779551] text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 lg:gap-16">
            {Object.entries(links).map(([group, items]) => (
              <div key={group} className="flex flex-col gap-3">
                <h4 className="text-white font-semibold mb-1">{group}</h4>
                {items.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center items-center text-white/30 text-xs p-6 pt-10">
          <p>
            Copyright &copy; 2021 - {new Date().getFullYear()} Church Tithes
            App. All Rights Reserved. Design and Built by ianDev
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
