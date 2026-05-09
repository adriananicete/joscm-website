import { useState } from "react";
import { Link, NavLink } from "react-router";
import Buttons from "./Buttons";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-20 sticky top-0 w-full flex justify-center items-center p-4 text-xl">
      <nav className="backdrop-blur-lg bg-[#f8f3ec] border border-zinc-300 w-[90%] rounded-[8px]">
        <div className="flex justify-between items-center py-2 px-8">
          <Link to={'/'} className="text-[#779551] font-bold">Tithes App</Link>

          <div className="hidden lg:flex justify-center items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>

          <div className="hidden lg:flex justify-center items-center gap-3">
            <Buttons btnName="Book a Call" bgColor="#779551" textColor="#fff" />
            <Buttons btnName="Login" />
          </div>

          <button className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden flex flex-col gap-4 px-8 pb-6 pt-4 border-t border-zinc-200 text-base">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <div className="flex gap-3 pt-2">
              <Buttons btnName="Book a Call" bgColor="#779551" textColor="#fff" />
              <Buttons btnName="Login" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
