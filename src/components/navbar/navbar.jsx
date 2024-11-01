import React from "react";
import { Button } from "../ui/button";
import { NavbarMenu } from "@/constant/navbar";
import { MdMenu } from "react-icons/md";
import doctorUS from "../../assets/doctorUS.svg"
import ResponsiveMenu from "./responsive";

const Navbar = () =>{
    const [open, setOpen] = React.useState(false);
    return (
        <>
        <nav>
            <div className="container mx-auto flex justify-between items-center py-8 font-manrope pb-10">
                {/* Logo Section */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <img src={doctorUS} width={40} height={40} alt="doctorUS"/>
                    <a className="font-bold font-manrope text-2xl text-blue-700">DoctorUS</a>
                </div>
                {/* Menu Section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-2 text-neutral-900">
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} className="inline-block py-1 px-3 hover:text-blues-700 hover:font-semibold whitespace-nowrap">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button className="text-neutral-50 font-semibold text-lg lg:text-2xl bg-gyaat rounded-xl px-6 lg:px-8 py-3 lg:py-6 hidden lg:flex items-center whitespace-nowrap">
                    Join us
                </Button>
                {/* Mobile Menu Section */}
                <div className="md:hidden" onClick={()=> setOpen(!open)}>
                    <MdMenu className="text-4xl"/>
                </div>
            </div>
        </nav>


        {/* Mobile Hamburger Menu Section */}
        <ResponsiveMenu open={open} onClose={() => setOpen(false)} />

        </>
    );
};

export default Navbar;
