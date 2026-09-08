'use client';

import React from 'react';
import Image from 'next/image';
import { useInquiryModal } from '@/hooks/useInquiryModal';

export const FloatingStickyInquireButton: React.FC = () => {
  const { openInquiryModal } = useInquiryModal();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => openInquiryModal({ source: 'Sticky Floating Inquire Button' })}
        aria-label="Open Curation Enquiry"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#3c0b1e] border-2 border-[#C5A265]/80 shadow-[0_8px_24px_rgba(60,11,30,0.35)] hover:shadow-[0_12px_32px_rgba(60,11,30,0.55)] hover:border-[#DFC299] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden p-1.5"
      >
        <div className="relative w-full h-full shrink-0 transition-transform duration-300 group-hover:scale-110">
          <Image
            src="/images/brand/redlogo.png"
            alt="The Gourmet Gifts"
            fill
            sizes="64px"
            className="object-contain"
          />
        </div>
      </button>
    </div>
  );
};
