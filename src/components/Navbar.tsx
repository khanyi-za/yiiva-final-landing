"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" style={{backgroundColor: '#030f02'}}>
      <div className="flex items-center">
        <Image
          src="/logos/ICON_WHITE.png"
          alt="Yiiva Logo"
          width={128}
          height={37}
          style={{ width: 'auto', height: 'auto', maxHeight: '40px' }}
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="text-white font-medium hover:text-gray-300 transition-colors">
          Contact
        </button>
        <button className="px-6 py-2 text-white rounded-full font-medium transition-colors border-2 border-white" style={{backgroundColor: '#030f02'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#051103'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#030f02'}>
          SignUp
        </button>
      </div>
    </nav>
  );
} 