
import React from "react";
import { navLinks } from "../../constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full bg-black text-white py-5 px-5 flex flex-col md:flex-row md:justify-between items-center gap-5 container mx-auto">
        <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="logo" width={48} height={48} />
            <p className="font-modern-negra text-3xl">Velvet Pour</p>
        </div>
        <ul className="flex flex-center lg:gap-12 gap-7">
            {navLinks.map(link => (
                <li key={link.id}>
                    <a
                        href={`#${link.id}`}
                        className="cursor-pointer text-nowrap md:text-base text-sm"
                    >
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default Navbar;
