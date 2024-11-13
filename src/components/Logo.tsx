import React from 'react';
import { Code2 } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2cd4bd] to-[#4ae7d0] rounded-lg transform rotate-3 transition-transform group-hover:rotate-6"></div>
        <div className="absolute inset-0 bg-black rounded-lg transform -rotate-3 flex items-center justify-center transition-transform group-hover:-rotate-6">
          <Code2 className="w-6 h-6 text-[#2cd4bd]" />
        </div>
      </div>
      
      <div className="ml-3">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold tracking-tight text-white">ZOLI</span>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#2cd4bd] to-[#4ae7d0] text-transparent bg-clip-text ml-1">WEB</span>
        </div>
        <span className="text-[0.65rem] font-medium tracking-[0.2em] text-[#2cd4bd]">
          DIGITAL SOLUTIONS
        </span>
      </div>
    </div>
  );
}