import { NavLink } from "react-router";
import Buttons from "./Buttons";
import { AiOutlineUser } from "react-icons/ai";

function NavBar() {
    return ( 
        <header className="sticky top-0 w-full  flex justify-center items-center p-3 text-xl">
            <nav className="bg-white/50 backdrop-blur-lg border-[2px] border-[#353333] w-[90%] rounded-[8px] flex justify-between items-center py-2 px-8">
                <div>
                    <p>Adrian</p>
                </div>

                <div className="flex justify-center items-center gap-8">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                </div>

                <div className="flex justify-center items-center gap-3">
                    <Buttons btnName={'Book a Call'} bgColor={'#779551'} textColor={'#fff'}/>
                    <Buttons btnName={'Login'}/>
                </div>
            </nav>
        </header>
     );
}

export default NavBar;