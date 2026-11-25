'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { OCCASION_CARDS } from '@/components/OccasionGiftingCarousel';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { getOccasionData } from '@/data/occasionsData';

export function OccasionsIndexView() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A18] pt-18 sm:pt-24 pb-16">
      
      {/* ─── SECTION 1: BREADCRUMBS & HERO HEADER ─── */}
      <section className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
        
        {/* Working Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#8C847B] mb-2 sm:mb-3">
          <Link href="/" className="hover:text-[#1A1A18] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#B5AFA6]" />
          <span className="text-[#1A1A18] font-medium">
            Occasions
          </span>
        </nav>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto py-1">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.02em] leading-[1.08] sm:leading-[1.04]"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 300,
            }}
          >
            For every occasion that matters
          </h1>
          <p className="text-xs sm:text-sm text-[#78746D] font-light mt-1 max-w-lg mx-auto leading-relaxed">
            Thoughtfully curated keepsakes designed for corporate milestones, celebrations, and lasting relationships.
          </p>
        </div>

      </section>

      {/* ─── SECTION 2: OCCASION CARDS — picture left, details right, 2 per row on desktop ─── */}
      <main className="max-w-[1580px] mx-auto px-3 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {OCCASION_CARDS.map((card, idx) => {
            const data = getOccasionData(card.id);
            const moments = (data.moments ?? []).slice(0, 4);
            return (
              <ScrollReveal key={card.id} animation="fadeUp" delay={0.03 * (idx % 2)}>
                <article className="group relative h-full flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-[#E5E0D8] hover:border-[#D5CBB8] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.09)] transition-all duration-300">
                  {/* Picture */}
                  <div className="relative w-full sm:w-[44%] aspect-[16/10] sm:aspect-auto sm:min-h-[300px] shrink-0 overflow-hidden bg-[#1A1A18]">
                    <Image
                      src={card.image}
                      alt={data.title}
                      fill
                      priority={idx < 2}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 44vw, 22vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between gap-5 p-5 sm:p-6 lg:p-7">
                    <div>
                      <span className="text-[10.5px] font-mono font-semibold tracking-[0.2em] text-[#8C7449]">
                        {String(idx + 1).padStart(2, '0')} / {String(OCCASION_CARDS.length).padStart(2, '0')}
                      </span>
                      <h2
                        className="mt-2 text-[26px] sm:text-[30px] font-normal text-[#1A1A18] leading-[1.1] tracking-[-0.01em]"
                        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                      >
                        {data.title}
                      </h2>
                      <p className="mt-2 text-sm text-[#5C574F] leading-relaxed">
                        {data.tagline}
                      </p>
                      {moments.length > 0 && (
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {moments.map((m) => (
                            <li
                              key={m.title}
                              className="px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#ECE7DE] text-[11px] text-[#5C574F]"
                            >
                              {m.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* The link covers the whole card (::after), so a click anywhere opens the occasion */}
                    <Link
                      href={card.href}
                      className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3c0b1e] group-hover:bg-[#4f1028] text-white text-[13px] font-semibold transition-colors after:absolute after:inset-0 after:content-['']"
                    >
                      Explore {data.title}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </main>

      {/* ─── SECTION 3: BESPOKE CONCIERGE CALLOUT BLOCK ─── */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3c0b1e] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center space-y-4 shadow-xl relative overflow-hidden">
          <ScrollReveal animation="fadeUp">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-bold text-[#DFC299] block mb-1">
              Bespoke curation service
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-[-0.02em] leading-[1.08] sm:leading-[1.04]"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 300,
              }}
            >
              Need a custom gifting concept?
            </h2>
            <p className="text-xs sm:text-sm text-white/85 font-light max-w-lg mx-auto leading-relaxed pt-1">
              From company offsites to executive partner hampers, we curate custom keepsake gifts tailored to your exact milestone, brand identity, and budget.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/917021463609?text=Hi%21%20I%E2%80%99d%20like%20to%20enquire%20about%20bespoke%20corporate%20gifting."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#DFC299] hover:bg-white text-[#1A1A18] font-sans text-xs uppercase tracking-[0.18em] font-bold rounded-xl transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-sans text-xs uppercase tracking-[0.18em] font-semibold rounded-xl transition-all duration-300 border border-white/20 text-center"
              >
                Contact Concierge
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
