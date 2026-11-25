'use client';

import React from 'react';
import {
  Laptop,
  Landmark,
  Users,
  GraduationCap,
} from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export interface IndustryItem {
  id: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  imageIcon?: string;
  iconColor: string;
  bulletColor: string;
  points: string[];
}

export const INDUSTRIES_ROW_1: IndustryItem[] = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    imageIcon: '/icons/residential.png',
    iconColor: 'text-[#3D5244]',
    bulletColor: 'text-[#3D5244]',
    points: [
      'Possession Gifts',
      'Channel Partner Gifting',
      'Project Launches',
      'VIP Homeowners',
      'Festive Gifting',
    ],
  },
  {
    id: 'industrial-oem',
    title: 'Industrial / OEM',
    imageIcon: '/icons/factory.png',
    iconColor: 'text-[#A67C46]',
    bulletColor: 'text-[#A67C46]',
    points: [
      'Dealer Conferences',
      'Distributor Gifting',
      'Safety Milestones',
      'Plant Anniversaries',
      'Employee Gifting',
    ],
  },
  {
    id: 'tech-saas',
    title: 'Tech / SaaS',
    icon: Laptop,
    iconColor: 'text-[#3B4C5A]',
    bulletColor: 'text-[#3B4C5A]',
    points: [
      'Welcome Kits',
      'Remote Teams',
      'Offsites',
      'Milestones',
      'Merchandise',
    ],
  },
  {
    id: 'finance-professional-services',
    title: 'Finance & Services',
    icon: Landmark,
    iconColor: 'text-[#7A1C29]',
    bulletColor: 'text-[#7A1C29]',
    points: [
      'Client Appreciation',
      'Referral Gifting',
      'Leadership Gifting',
      'Festive Programmes',
      'Executive Gifts',
    ],
  },
];

export const INDUSTRIES_ROW_2: IndustryItem[] = [
  {
    id: 'events-agencies',
    title: 'Events & Agencies',
    icon: Users,
    iconColor: 'text-[#5C455B]',
    bulletColor: 'text-[#5C455B]',
    points: [
      'Conference Kits',
      'Launch Boxes',
      'Delegate Gifts',
      'Speaker Gifts',
      'White-label Service',
    ],
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    imageIcon: '/icons/arch.png',
    iconColor: 'text-[#9B5368]',
    bulletColor: 'text-[#9B5368]',
    points: [
      'Save the Date Favours',
      'Invitation Boxes',
      'Bridesmaids & Groomsmen',
      'Welcome Hampers',
      'Return Gifting',
    ],
  },
  {
    id: 'education-edtech',
    title: 'Education & EdTech',
    icon: GraduationCap,
    iconColor: 'text-[#2C4C5E]',
    bulletColor: 'text-[#2C4C5E]',
    points: [
      'Student Welcome Kits',
      'Faculty & Employee Gifting',
      'Graduation & Achievement Gifts',
      'Events, Workshops & Conferences',
      'Alumni & Partner Gifting',
    ],
  },
];

const IndustryCard: React.FC<{ industry: IndustryItem }> = ({ industry }) => {
  const Icon = industry.icon;

  return (
    <div className="bg-white border border-[#EAE5DC] hover:border-[#8C6228]/50 rounded-2xl p-5 sm:p-5.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-start h-full group w-full relative overflow-hidden text-left">
      
      {/* ─── Large Watermark Icon on Right Side (Darkens & Expands on Hover) ─── */}
      <div className="absolute -bottom-6 -right-6 sm:-bottom-5 sm:-right-5 pointer-events-none z-0 opacity-[0.06] group-hover:opacity-[0.18] group-hover:scale-108 transition-all duration-500 ease-out">
        {industry.imageIcon ? (
          <img
            src={industry.imageIcon}
            alt={industry.title}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : Icon ? (
          <Icon
            className={`w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 stroke-[0.9] ${industry.iconColor}`}
          />
        ) : null}
      </div>

      {/* Header: Bare Icon Beside Title (Left-Aligned) */}
      <div className="flex items-center gap-2.5 sm:gap-3 mb-3 pb-2.5 border-b border-[#F0ECE1] relative z-10 text-left">
        {/* Bare Icon */}
        <div className="shrink-0 flex items-center justify-center">
          {industry.imageIcon ? (
            <img
              src={industry.imageIcon}
              alt={industry.title}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-90 group-hover:opacity-100 transition-transform duration-300 group-hover:scale-110"
            />
          ) : Icon ? (
            <Icon
              className={`w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6] ${industry.iconColor} opacity-90 group-hover:opacity-100 transition-transform duration-300 group-hover:scale-110`}
            />
          ) : null}
        </div>

        {/* Title Beside Icon */}
        <h3 className="text-xs sm:text-[12.5px] md:text-[13px] font-sans font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#1A1A18] leading-[1.3] group-hover:text-[#8C6228] transition-colors">
          {industry.title}
        </h3>
      </div>

      {/* Sub Texts / Bullet List (Left-Aligned) */}
      <ul className="space-y-1.5 text-[11px] sm:text-xs text-[#5C564E] font-light leading-relaxed mt-auto relative z-10 flex flex-col items-start w-full text-left">
        {industry.points.map((point, pIdx) => (
          <li key={pIdx} className="flex items-start gap-2 text-left">
            <span className={`${industry.bulletColor} font-bold text-xs leading-none pt-0.5 select-none opacity-80 shrink-0`}>
              •
            </span>
            <span className="whitespace-normal break-words">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ALL_INDUSTRIES = [...INDUSTRIES_ROW_1, ...INDUSTRIES_ROW_2];

export const IndustriesSection: React.FC = () => {
  return (
    <section className="pt-[var(--section-gap)] bg-[#FAF8F5] text-[#1A1A18] relative overflow-hidden">
      {/* ─── SECTION TITLE ─── */}
      <ScrollReveal animation="fadeUp">
        <div className="text-center max-w-4xl mx-auto px-5 space-y-1.5 sm:space-y-2 mb-8 sm:mb-10 md:mb-12">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-light text-[#1A1A18] tracking-[-0.02em] leading-[1.08] sm:leading-[1.04]"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 300,
            }}
          >
            Gifting, built around your industry
          </h2>

          <p className="text-xs sm:text-sm text-[#78746D] font-light max-w-3xl mx-auto leading-normal">
            Gifting built around the audience, context, and scale of your industry.
          </p>
        </div>
      </ScrollReveal>

      {/* ─── MARQUEE: one continuous row, pauses on hover, fades at the edges ─── */}
      <div className="industry-marquee group/marquee relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="industry-marquee-track flex w-max py-3 -my-3">
          {[...ALL_INDUSTRIES, ...ALL_INDUSTRIES].map((industry, idx) => (
            <div
              key={`${industry.id}-${idx}`}
              aria-hidden={idx >= ALL_INDUSTRIES.length}
              className="w-[260px] sm:w-[290px] shrink-0 pr-4 sm:pr-5 flex"
            >
              <IndustryCard industry={industry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
