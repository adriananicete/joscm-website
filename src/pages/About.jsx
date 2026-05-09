import { IoIosArrowRoundForward } from "react-icons/io";
import { FiHeart, FiShield, FiZap, FiUsers } from "react-icons/fi";

const values = [
  {
    icon: FiHeart,
    title: "Built with Purpose",
    desc: "We built JOSCM because we saw churches struggling with pen-and-paper records. Every feature exists to solve a real problem.",
  },
  {
    icon: FiShield,
    title: "Trustworthy & Secure",
    desc: "Church finances are sacred. We treat every peso recorded with the same care and security your congregation deserves.",
  },
  {
    icon: FiZap,
    title: "Simple by Design",
    desc: "No training required. If a church secretary can use a phone, they can use JOSCM — on day one.",
  },
  {
    icon: FiUsers,
    title: "For Every Church",
    desc: "Whether you have 30 members or 3,000, JOSCM scales with your congregation without adding complexity.",
  },
];

const stats = [
  { value: "500+", label: "Churches" },
  { value: "50k+", label: "Members Tracked" },
  { value: "₱10M+", label: "Tithes Recorded" },
];

function About() {
  return (
    <section className="w-full flex flex-col items-center py-8 md:py-12 lg:py-16 gap-6 md:gap-10 lg:gap-16">

      {/* Hero */}
      <div className="w-full px-6 md:px-20 lg:px-40 flex flex-col gap-4 md:gap-6">
        <p className="text-[#779551] text-xs md:text-sm font-semibold uppercase tracking-widest">
          About Us
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-20">
          <h2 className="text-2xl md:text-5xl lg:text-6xl w-full lg:w-[55%] leading-tight">
            Built for churches, <br className="hidden md:block" />
            by people who care
          </h2>
          <div className="w-full lg:w-[45%] flex flex-col gap-5 justify-end">
            <p className="text-sm md:text-base lg:text-lg text-black/60 leading-relaxed">
              JOSCM started as a simple tool for one local church. Today it helps
              hundreds of congregations across the Philippines manage their tithes,
              offerings, and financial records — digitally, transparently, and
              without the headache.
            </p>
            <div className="flex gap-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <p className="text-xl md:text-3xl font-bold text-[#353333]">{s.value}</p>
                  <p className="text-xs text-black/40">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story Card */}
      <div className="w-full px-6 md:px-20 lg:px-40">
        <div className="w-full bg-[#353333] rounded-[20px] p-6 md:p-10 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="w-full lg:w-[45%] flex flex-col gap-4">
            <p className="text-[#779551] text-xs font-semibold uppercase tracking-widest">
              Our Story
            </p>
            <h3 className="text-white text-xl md:text-3xl lg:text-4xl leading-snug">
              It started with a notebook and a problem
            </h3>
          </div>
          <div className="w-full lg:w-[55%] flex flex-col gap-4 text-white/60 text-sm md:text-base leading-relaxed">
            <p>
              Every Sunday, our church treasurer would fill out paper forms,
              tally giving by hand, and spend hours reconciling records. Mistakes
              were common. Transparency was hard to maintain.
            </p>
            <p>
              We built JOSCM to change that — a digital system that makes tithe
              tracking accurate, instant, and accessible to everyone in leadership.
              What started as an internal tool quickly became something other
              churches wanted too.
            </p>
            <p>
              Today, we're on a mission to bring modern financial management to
              every Filipino church, regardless of size or budget.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="w-full px-6 md:px-20 lg:px-40 flex flex-col gap-6 md:gap-8">
        <div>
          <p className="text-[#779551] text-xs font-semibold uppercase tracking-widest">
            What We Stand For
          </p>
          <h3 className="text-xl md:text-4xl lg:text-5xl mt-2">Our values</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="border border-black/10 rounded-[20px] p-6 md:p-8 flex flex-col gap-4"
              >
                <div className="bg-[#779551]/15 rounded-full p-3 w-fit">
                  <Icon size={22} color="#779551" />
                </div>
                <h4 className="text-base md:text-xl font-semibold">{v.title}</h4>
                <p className="text-sm text-black/60 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="hidden w-[92%] bg-[#353333] rounded-[20px] py-8 px-6 md:py-12 md:px-16 lg:py-16 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
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
      </div>

    </section>
  );
}

export default About;
