"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4" style={{backgroundColor: '#FAF9F6'}}>
      <div className="flex items-center">
        <Image
          src="/logos/ICON_BLACK.png"
          alt="Yiiva Logo"
          width={128}
          height={128}
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="text-gray-700 font-medium hover:text-black transition-colors">
          Contact
        </button>
        <button className="px-6 py-2 text-white rounded-full font-medium transition-colors" style={{backgroundColor: '#030f02'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#051103'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#030f02'}>
          Get Demo
        </button>
      </div>
    </nav>
  );
} 