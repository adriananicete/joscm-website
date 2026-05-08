import bgImg from '../assets/img/bg2.jpg'
import girl from '../assets/img/woman-in-phone.png'

import { IoIosArrowRoundForward } from "react-icons/io";
function Home() {
  return (
    <section className="bg-[] w-full min-h-dvh  flex flex-col justify-start items-center py-15 px-40 gap-18">
      <div className="w-full  flex justify-start items-end">
        <div className=" w-[70%]">
          <h1>DIGITAL BANKING</h1>
          <h2 className="text-8xl">
            Discover the freedom <br />
            of banking on your terms
          </h2>
        </div>

        <div className=" w-[25%] text-xl flex flex-col justify-center items-start gap-6">
          <p>
            Get business banking, card, bill pay, travel, and reimbursement --
            all in one scalable solution.
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
        <div className="relative bg-[url('https://img2.wallspic.com/previews/5/1/3/3/6/163315/163315-orange-brown-amber-peach-tan-x750.jpg')] bg-cover bg-center bg-no-repeat flex-[2] h-full flex justify-between items-center rounded-[20px]">
          <div className="absolute inset-0 bg-black/20 rounded-[20px]"></div>
          <div className="relative z-10 bg-[] w-[50%] h-full p-8 flex flex-col justify-end items-start gap-15">
            <div className="text-white text-xl w-[100%] flex flex-col justify-center items-start gap-3">
              <p className="text-4xl">Personal</p>
              <p className='leading-tight'>
                The all-in-one plan for banking, saving, investing, and travel.
                Home or away, local or global -- move freely between countries
                and currencies
              </p>
            </div>

            <div className="w-[80%] h-[250px] bg-white rounded-[25px] shadow-md">

            </div>
          </div>

          <div className="relative z-10 w-[49%] h-full overflow-hidden pr-25">
            <img className='w-full h-full object-cover scale-145' src={girl} alt="" />
          </div>
        </div>
        <div className="flex-[0.8] border h-full rounded-[20px]">asdf</div>
        <div className="flex-[0.8] border h-full rounded-[20px]">asdf</div>
      </div>
    </section>
  );
}

export default Home;
