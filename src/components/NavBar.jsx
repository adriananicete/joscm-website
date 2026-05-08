import { NavLink } from "react-router";
import Buttons from "./Buttons";
import { AiOutlineUser } from "react-icons/ai";

function NavBar() {
    return ( 
        <header className="w-full  flex justify-center items-center p-3 text-xl">
            <nav className="bg-white border-[2px] border-black rounded-[8px] w-[90%] flex justify-between items-center py-3 px-8">
                <div>
                    <p>Adrian</p>
                </div>

                <div className="flex justify-center items-center gap-8">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                </div>

                <div className="flex justify-center items-center gap-3">
                    <Buttons btnName={'Book a Call'} bgColor={'#4f64ff'} textColor={'#fff'}/>
                    <Buttons btnName={'Login'}/>
                </div>
            </nav>
        </header>
     );
}

export default NavBar;