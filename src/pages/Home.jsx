import bgImg from "../assets/img/bg3.jpg";
import girl from "../assets/img/woman-in-phone.png";
import mobile from "../assets/img/fsadf-portrait.png";

import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiUploadCloud, FiUsers, FiBarChart2, FiEdit3, FiMail, FiTrendingUp, FiCheck } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const churches = [
  "Victory Church",
  "Jesus is Lord Church",
  "Christ the King Parish",
  "New Life Fellowship",
  "Grace Community Church",
  "Living Word Church",
  "Word of Hope Church",
  "Bread of Life Ministries",
  "Faith Christian Church",
  "El Shaddai DWXI",
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for small churches just getting started.",
    features: [
      "Up to 50 members",
      "Basic tithe tracking",
      "Monthly reports",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₱499",
    period: "/month",
    desc: "For growing churches that need more power.",
    features: [
      "Up to 500 members",
      "Full tithe & offering tracking",
      "Weekly & monthly reports",
      "Digital receipts",
      "Member giving history",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large churches and diocese-level organizations.",
    features: [
      "Unlimited members",
      "All Pro features",
      "Custom reports",
      "Dedicated account manager",
      "On-site training",
      "SLA guarantee",
    ],
    highlighted: false,
  },
];

const steps = [
  {
    icon: FiUploadCloud,
    step: "01",
    title: "Set Up Your Church",
    desc: "Create your church profile in minutes. No technical knowledge required.",
  },
  {
    icon: FiUsers,
    step: "02",
    title: "Add Your Members",
    desc: "Import or manually add your congregation. Each member gets their own giving profile.",
  },
  {
    icon: FiEdit3,
    step: "03",
    title: "Record Tithes",
    desc: "Log individual tithes and offerings per member for every service.",
  },
  {
    icon: FiBarChart2,
    step: "04",
    title: "Generate Reports",
    desc: "Get weekly, monthly, or annual financial reports in just one click.",
  },
  {
    icon: FiMail,
    step: "05",
    title: "Send Receipts",
    desc: "Automatically send digital acknowledgment receipts to your members.",
  },
  {
    icon: FiTrendingUp,
    step: "06",
    title: "Grow Your Ministry",
    desc: "Use giving insights to plan ahead and strengthen your church's finances.",
  },
];

function Home() {
  return (
    <section className="w-full min-h-dvh flex flex-col justify-start items-center py-8 md:py-12 lg:py-16 gap-6 md:gap-10 lg:gap-18">

      {/* Hero */}
      <motion.div
        className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-end px-6 md:px-20 lg:px-40 gap-4 lg:gap-0"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="w-full lg:w-[60%] flex flex-col justify-center items-start gap-3 md:gap-5">
          <h1 className="text-[#779551] text-xs md:text-sm tracking-widest uppercase">Church Tithes Management</h1>
          <h2 className="text-2xl md:text-5xl lg:text-7xl">
            Simplify giving, <br />
            strengthen your ministry
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="w-full lg:w-[40%] text-sm md:text-base lg:text-xl flex flex-col justify-center items-start gap-4 lg:gap-6">
          <p>
            Manage tithes, offerings, and financial records — all in one
            easy-to-use platform built for churches of every size.
          </p>
          <div className="w-full max-w-[310px] bg-[#353333] text-white flex justify-between items-center p-1 rounded-[50px]">
            <p className="pl-4 text-sm md:text-base lg:text-lg">Get Demo Account</p>
            <button className="bg-[white] rounded-[40px] py-1 px-4">
              <IoIosArrowRoundForward size={32} color="#353333" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Showcase */}
      <motion.div
        className="w-full flex flex-col lg:flex-row justify-center px-6 md:px-20 lg:px-40 items-stretch gap-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="relative bg-cover bg-center bg-no-repeat w-full lg:flex-[2] h-[420px] md:h-[460px] lg:h-[550px] flex justify-between items-center rounded-[20px]"
        >
          <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
          <div className="relative z-10 w-full lg:w-[60%] h-full py-5 px-5 lg:py-8 lg:pl-8 flex flex-col justify-end items-start gap-4 lg:gap-15">
            <div className="text-white w-full flex flex-col justify-center items-start gap-2">
              <p className="text-base md:text-xl lg:text-3xl font-semibold">For Your Church</p>
              <p className="leading-tight text-sm md:text-sm lg:text-base text-white/80">
                Track tithes and offerings digitally. Generate reports, manage
                members, and keep your church finances transparent and organized.
              </p>
            </div>
            <div className="w-full h-[230px] md:h-[260px] lg:h-[300px] bg-white rounded-[15px] shadow-md overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://res.cloudinary.com/dks2psaem/image/upload/v1778241956/Screenshot_2026-05-02_203221_ft1z3w.png"
                alt="Dashboard preview"
              />
            </div>
          </div>
          <div className="hidden lg:block relative z-10 w-[40%] h-full overflow-hidden pr-10">
            <img className="w-full h-full object-cover scale-135" src={girl} alt="" />
          </div>
        </div>

        <div className="hidden lg:block relative overflow-hidden flex-[0.7] bg-[url('https://images.unsplash.com/photo-1645811791051-6031cd3e2ef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlYWNoJTIweWVsbG93JTIwZ3JhZGllbnQlMjBjbG90aCUyMGJhY2tncm91bmQlMjB2ZXJ0aWNhbHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center bg-no-repeat h-[550px] rounded-[20px]">
          <div className="absolute inset-0 bg-black/20 rounded-[20px]"></div>
          <div className="relative z-10">
            <img className="w-full h-full" src={mobile} alt="" />
          </div>
        </div>

        <div className="hidden lg:flex relative flex-[0.6] bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20231031/pngtree-vibrant-green-fabric-a-beautifully-textured-background-with-flowing-waves-image_13752011.png')] bg-cover bg-center bg-no-repeat h-[550px] rounded-[20px] justify-center items-center flex-col">
          <div className="absolute inset-0 bg-black/50 rounded-[20px]"></div>
          <div className="relative z-10 h-full p-5 flex flex-col justify-end gap-4">
            {[
              { title: "Tithe Tracking", desc: "Record every giving per member automatically." },
              { title: "Financial Reports", desc: "Generate weekly, monthly, or annual reports instantly." },
              { title: "Member Management", desc: "Manage your congregation and their giving history." },
              { title: "Digital Receipts", desc: "Send acknowledgment receipts directly to your members." },
            ].map((feature) => (
              <div key={feature.title} className="flex-[1] bg-white/10 backdrop-blur-md border border-white/50 rounded-[12px] px-5 py-3">
                <p className="text-white font-semibold">{feature.title}</p>
                <p className="text-white/80 text-sm leading-snug">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Trusted By Marquee */}
      <motion.div
        className="w-full flex flex-col items-center gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-black/40 uppercase tracking-widest text-xs font-medium">
          Trusted by churches across the Philippines
        </p>
        <div className="w-full overflow-hidden">
          <style>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .marquee-track { animation: marquee 25s linear infinite; }
            .marquee-track:hover { animation-play-state: paused; }
          `}</style>
          <div className="marquee-track flex gap-4 w-max">
            {[...churches, ...churches].map((name, i) => (
              <div
                key={i}
                className="bg-[#353333]/5 border border-black/8 rounded-full px-4 py-2 whitespace-nowrap text-[#353333] font-medium text-xs md:text-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* How It Works */}
      <div className="w-full flex flex-col justify-center items-center gap-8 py-10 lg:py-30 bg-black">
        <motion.div
          className="text-center px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-[#779551] font-semibold uppercase tracking-widest text-xs">
            Simple Process
          </p>
          <h2 className="text-white text-xl md:text-4xl lg:text-5xl mt-2">How it works</h2>
        </motion.div>

        <motion.div
          className="w-[90%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                variants={fadeUp}
                className="border text-white border-white/50 rounded-[20px] p-5 md:p-8 flex flex-col gap-3 md:gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="bg-[#779551]/15 rounded-full p-2 md:p-3">
                    <Icon size={20} color="#779551" />
                  </div>
                  <span className="text-3xl md:text-5xl font-bold text-white/20">{s.step}</span>
                </div>
                <h3 className="text-base md:text-xl font-semibold">{s.title}</h3>
                <p className="text-white/60 text-sm leading-snug">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Pricing */}
      <div className="w-full px-6 md:px-20 lg:px-40 flex flex-col items-center gap-8">
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-[#779551] font-semibold uppercase tracking-widest text-xs">
            Pricing
          </p>
          <h2 className="text-xl md:text-4xl lg:text-5xl mt-2">Simple, transparent pricing</h2>
          <p className="text-black/50 mt-2 text-sm md:text-base">No hidden fees. Cancel anytime.</p>
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-stretch"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative flex flex-col gap-5 rounded-[24px] p-6 md:p-8 ${
                plan.highlighted ? "bg-[#353333] text-white" : "border border-black/10"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-5 right-5 bg-[#779551] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#779551]">
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className={`text-sm mb-1 ${plan.highlighted ? "text-white/50" : "text-black/40"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${plan.highlighted ? "text-white/60" : "text-black/50"}`}>
                    {plan.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-2 md:gap-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <FiCheck size={14} color="#779551" />
                      <span className={`text-sm ${plan.highlighted ? "text-white/80" : "text-black/70"}`}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  className={`w-full py-3 rounded-[50px] font-medium text-sm transition-colors ${
                    plan.highlighted
                      ? "bg-[#779551] text-white hover:bg-[#6a8447]"
                      : "border border-black/20 hover:bg-black/5"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div
        className="w-[92%] bg-[#353333] rounded-[20px] py-8 px-6 md:py-12 md:px-16 lg:py-16 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col gap-2 md:gap-3">
          <h2 className="text-white text-xl md:text-4xl lg:text-5xl leading-tight">
            Ready to modernize <br /> your church finances?
          </h2>
          <p className="text-white/60 text-sm md:text-lg">
            Get started today — free demo, no credit card required.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start shrink-0">
          <div className="bg-[#779551] text-white flex justify-between items-center p-1 rounded-[50px] w-full max-w-[280px]">
            <p className="pl-4 text-sm md:text-base lg:text-lg">Get Demo Account</p>
            <button className="bg-white rounded-[40px] py-1 px-4">
              <IoIosArrowRoundForward size={32} color="#353333" />
            </button>
          </div>
          <p className="text-white/40 text-xs pl-2">No setup fee. Cancel anytime.</p>
        </div>
      </motion.div>

    </section>
  );
}

export default Home;
