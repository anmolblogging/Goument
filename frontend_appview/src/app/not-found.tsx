'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A18] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center space-y-5">
        <span className="type-meta text-xs uppercase tracking-[0.28em] font-bold text-[#8C847B] block">
          404 • Page Not Found
        </span>
        <h1
          className="text-4xl sm:text-5xl font-light text-[#1A1A18] tracking-[-0.02em] leading-tight"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300 }}
        >
          This curation is no longer available.
        </h1>
        <p className="text-xs sm:text-sm text-[#78746D] font-light leading-relaxed">
          The page you are looking for has either been moved or is currently closed.
        </p>
        <div className="pt-4 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#273629] hover:bg-[#344837] text-white font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-lg transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#D5CFBF] hover:border-[#1A1A18] text-[#1A1A18] font-sans text-xs uppercase tracking-[0.16em] font-bold rounded-lg transition-all duration-300 cursor-pointer"
          >
            <span>Contact Concierge</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
