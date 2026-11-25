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

      {/* ─── SECTION 2: OCCASION CARDS — product-card style (image top, details below) ─── */}
      <main className="max-w-[1580px] mx-auto px-3 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {OCCASION_CARDS.map((card, idx) => {
            const data = getOccasionData(card.id);
            return (
              <article key={card.id} className="group relative h-full bg-white rounded-2xl overflow-hidden border border-[#E5E0D8] hover:border-[#DDD8CE] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-[#FAF6F0]">
                    <Image
                      src={card.image}
                      alt={data.title}
                      fill
                      priority={idx < 4}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2
                        className="text-base sm:text-[17px] font-medium text-[#1A1A18] group-hover:text-[#8C7449] transition-colors leading-snug tracking-tight"
                        style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
                      >
                        {/* The link covers the whole card (::after), so a tap anywhere opens the occasion */}
                        <Link href={card.href} className="after:absolute after:inset-0 after:content-['']">
                          {data.title}
                        </Link>
                      </h2>
                      <p className="text-xs sm:text-sm text-[#78746D] mt-1.5 leading-relaxed line-clamp-2">
                        {data.tagline}
                      </p>
                    </div>

                    <span className="mt-3.5 sm:mt-4 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#1A1A18] group-hover:text-[#3c0b1e]">
                      Explore <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
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
