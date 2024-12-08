 "use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-[#636270] h-16 text-sm font-light">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Left Section - Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 items-center mt-1 ml-14`}
        >
          <li>
            <Link href="home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-gray-300">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>

        {/* Right Section - Contact Number */}
        <div className="text-sm mr-20">Contact: (808) 555-0111</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#007580] text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
