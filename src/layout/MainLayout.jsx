import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MainLayout() {
    return ( 
        <div className="w-full flex flex-col justify-center items-center bg-[#f8f3ec]">
            <NavBar />

            <main className="w-full min-h-dvh">
                <Outlet />
            </main>

            <Footer />
        </div>
     );
}

export default MainLayout;