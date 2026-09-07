'use client';

import React from 'react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconImage: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'TELL US THE BRIEF',
    description: 'Occasion, recipient, quantity, budget and deadline.',
    iconImage: '/images/process/step1_brief.png',
  },
  {
    number: '02',
    title: 'WE CURATE THREE DIRECTIONS',
    description: 'Smart, Signature, Statement.',
    iconImage: '/images/process/step2_directions.png',
  },
  {
    number: '03',
    title: 'SEE IT BEFORE WE MAKE IT',
    description: 'Mock-ups and sampling where required.',
    iconImage: '/images/process/step3_preview.png',
  },
  {
    number: '04',
    title: 'WE PRODUCE & PERSONALISE',
    description: 'Products, packaging, branding and QC.',
    iconImage: '/images/process/step4_produce.png',
  },
  {
    number: '05',
    title: 'WE DELIVER',
    description: 'Single location or coordinated delivery across India.',
    iconImage: '/images/process/step5_deliver.png',
  },
];

export const GiftingProcessSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#273629] text-white overflow-hidden py-12 sm:py-16 md:py-20">

      <div className="relative z-10 max-w-[1580px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ─── SECTION HEADER (INSIDE GREEN) ─── */}
        <div className="text-center max-w-4xl mx-auto px-2 mb-8 sm:mb-10 md:mb-12">
          <ScrollReveal animation="fadeUp">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-[-0.02em] leading-[1.08] sm:leading-[1.04]"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 300,
              }}
            >
              How it comes together
            </h2>
          </ScrollReveal>
        </div>

        {/* ─────────────────────────────────────────
            DESKTOP VIEW — FULL-WIDTH EXPANDED STEPS
        ───────────────────────────────────────── */}
        <div className="hidden md:block">
          <ScrollReveal animation="fadeUp" delay={0.08}>
            <div className="w-full mx-auto grid grid-cols-5 divide-x divide-white/15 border-y border-white/15 py-6 lg:py-7 items-center">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center justify-start px-4 lg:px-6 min-w-0"
                >
                  {/* Circled Gold Number */}
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-[#DFC299]/75 flex items-center justify-center shrink-0 font-sans text-sm lg:text-base text-[#DFC299]">
                    {step.number.replace(/^0/, '')}
                  </div>

                  {/* Title + Full Paragraph Description */}
                  <div className="flex-1 min-w-0 pl-3.5 lg:pl-4 text-left">
                    <h3 className="text-xs lg:text-[13px] font-sans font-bold uppercase tracking-wider text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[10px] lg:text-[11.5px] text-[#A6B2A3] font-light leading-snug mt-1 whitespace-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>


        {/* ─────────────────────────────────────────
            MOBILE VIEW — ORIGINAL UNCHANGED
        ───────────────────────────────────────── */}
        <div className="flex flex-col md:hidden divide-y divide-white/10">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal
              key={step.number}
              animation="fadeUp"
              delay={0.04 * (idx + 1)}
              className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5"
            >
              {/* Left: Step Number */}
              <span className="text-sm xs:text-base font-mono font-bold text-[#DFC299] tracking-wider shrink-0 pt-0.5 w-6 text-left">
                {step.number}
              </span>

              {/* Right: Title & Context */}
              <div className="flex-1 space-y-0.5 text-left">
                <h3 className="text-xs xs:text-[12.5px] font-bold text-white uppercase tracking-wider leading-snug">
                  {step.title}
                </h3>

                <p className="text-[11px] xs:text-xs text-white/80 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};