import bgImg from "../assets/img/bg3.jpg";
import girl from "../assets/img/woman-in-phone.png";
import mobile from "../assets/img/fsadf-portrait.png";

import { IoIosArrowRoundForward } from "react-icons/io";
function Home() {
  return (
    <section className="bg-[] w-full min-h-dvh  flex flex-col justify-start items-center py-10 px-40 gap-18">
      <div className=" w-full  flex justify-start items-end">
        <div className=" w-[60%] flex flex-col justify-center items-start gap-5">
          <h1 className="text-[#779551]">CHURCH TITHES MANAGEMENT</h1>
          <h2 className="text-7xl">
            Simplify giving, <br />
            strengthen your ministry
          </h2>
        </div>

        <div className=" w-[40%] text-xl flex flex-col justify-center items-start gap-6">
          <p>
            Manage tithes, offerings, and financial records — all in one
            easy-to-use platform built for churches of every size.
          </p>
          <div className="w-[310px] bg-[#353333] text-white flex justify-between items-center p-1 rounded-[50px]">
            <p className="pl-5 text-lg">Get Demo Account</p>
            <button className="bg-[white] rounded-[40px] py-1 px-5">
              <IoIosArrowRoundForward size={40} color="#353333" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[550px] bg-[] flex justify-center items-center gap-5">
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="relative bg-cover bg-center bg-no-repeat flex-[2] h-full flex justify-between items-center rounded-[20px]"
        >
          <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
          <div className="relative z-10 bg-[] w-[60%] h-full py-8 pl-8 flex flex-col justify-end items-start gap-15">
            <div className="text-white text-lg w-[100%] flex flex-col justify-center items-start gap-3">
              <p className="text-3xl">For Your Church</p>
              <p className="leading-tight">
                Track tithes and offerings digitally. Generate reports, manage
                members, and keep your church finances transparent and
                organized.
              </p>
            </div>

            <div className="w-[95%] h-[300px] bg-white rounded-[25px] shadow-md rounded-[5px]">
              <img
                className="w-full h-full rounded-[5px]"
                src="https://res.cloudinary.com/dks2psaem/image/upload/v1778241956/Screenshot_2026-05-02_203221_ft1z3w.png"
                alt=""
              />
            </div>
          </div>

          <div className="relative z-10 w-[40%] h-full overflow-hidden pr-10">
            <img
              className="w-full h-full object-cover scale-135"
              src={girl}
              alt=""
            />
          </div>
        </div>
        <div className="relative overflow-hidden flex-[0.7] bg-[url('https://images.unsplash.com/photo-1645811791051-6031cd3e2ef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlYWNoJTIweWVsbG93JTIwZ3JhZGllbnQlMjBjbG90aCUyMGJhY2tncm91bmQlMjB2ZXJ0aWNhbHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center bg-no-repeat h-full rounded-[20px]">
          <div className="absolute inset-0 bg-black/20 rounded-[20px]"></div>

          <div className="relative z-10">
            <img className="w-full h-full" src={mobile} alt="" />
          </div>
        </div>
        <div className="relative flex-[0.6] bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20231031/pngtree-vibrant-green-fabric-a-beautifully-textured-background-with-flowing-waves-image_13752011.png')] bg-cover bg-center bg-no-repeat h-full rounded-[20px] flex justify-center items-center flex-col">
          <div className="absolute inset-0 bg-black/20 rounded-[20px]"></div>

          <div className="relative z-10 h-full p-5 flex flex-col justify-end gap-4">
            {[
              { title: "Tithe Tracking", desc: "Record every giving per member automatically." },
              { title: "Financial Reports", desc: "Generate weekly, monthly, or annual reports instantly." },
              { title: "Member Management", desc: "Manage your congregation and their giving history." },
              { title: "Digital Receipts", desc: "Send acknowledgment receipts directly to your members." },
            ].map((feature) => (
              <div key={feature.title} className="flex-[1] bg-black/10 backdrop-blur-md border border-white/50 rounded-[12px] px-5 py-3">
                <p className="text-white font-semibold">{feature.title}</p>
                <p className="text-white/80 text-sm leading-snug">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
