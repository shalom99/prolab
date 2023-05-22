'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight, BiX, BiDialpad } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

 
  return (
    <header className="">
      {/* mobile menu */}

      <div className="lg:hidden flex justify-between p-2 text-primarytext bg-primarybg ">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo_only.webp" width={60} height={60} alt="Logo" />
            <h1 className="text-2xl text-primarytext font-bold">Pro-Lab</h1>
          </Link>
        </div>
        <div>
          <BiMenuAltRight size={50} onClick={() => setNavbarOpen((prev) => !prev)} className="text-primarytext" />
        </div>
      </div>

      {/* mobile menu nav */}


      {navbarOpen == true ?  <div className="fixed bg-primarybg top-0 h-screen w-full z-10" >
        <div className="flex justify-end p-5">
          <BiX size={50}  onClick={() => setNavbarOpen(false)} />
        </div>
        <nav className="flex flex-col pl-10 pr-5 pt-10 gap-10">
          <Link href="/services" onClick={() => setNavbarOpen(false)} className="border-b pb-5 font-semibold">
            Services
          </Link>
          <Link href="/plas" className="border-b pb-5 font-semibold" onClick={() => setNavbarOpen(false)}>
            Online Results
          </Link>

          <Link href="/" className="border-b pb-5 font-semibold" onClick={() => setNavbarOpen(false)}>
            About Us
          </Link>
          <Link href="/" className="border-b pb-5 font-semibold" onClick={() => setNavbarOpen(false)}>
            Contact
          </Link>
        </nav>
      </div> : "" }
    

      {/* desktop menu */}
      <div className="hidden lg:flex lg:w-[100%] py-3 px-5 items-center justify-between shadow-md mx-auto z-10 bg-primarybg">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo_only.webp" width={60} height={60} alt="Logo"/>
            <h1 className="text-4xl text-primarytext font-bold">Pro-Lab</h1>
          </Link>
        </div>
        <nav className="flex gap-5 text-xl text-primarytext">
          <Link href="/development" className="hover:text-accent duration-500">Services</Link>
 
          <Link href="/plas" className="hover:text-accent duration-500">Online Results</Link>

          <Link href="/about" className="hover:text-accent duration-500">About Us</Link>
          <Link href="/contact" className="hover:text-accent duration-500">Contact</Link>
        </nav>

        <div className="flex items-center gap-5 text-primarytext bg-white rounded-lg p-3">
          <a
            href="https://www.facebook.com/prolab.meddiagnostic"
            target="_blank"
            className="hover:bg-primarytext hover:text-primarybg p-2 rounded-lg duration-200"
          >
            <FaFacebookF size={30} />
          </a>

          <a
            href="https://instagram.com/prolab.meddiagnostic?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
            className="hover:bg-primarytext hover:text-primarybg p-2 rounded-lg duration-200"
          >
            <FaInstagram size={30} />
          </a>

          <div className="m-1 flex items-center gap-2 bg-primarytext p-2 rounded-xl text-primarybg">
            <BiDialpad size={30} />
            <h3> HELPDESK: (0969) 393 3494</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
