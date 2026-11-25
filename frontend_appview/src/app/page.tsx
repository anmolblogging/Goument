'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TextReveal } from '@/components/motion/TextReveal';
import Image from 'next/image';
import ImageTypography from '@/components/ImageTypography';
import OccasionGiftingCarousel from '@/components/OccasionGiftingCarousel';
import { WhyChooseSection } from '@/features/brand/WhyChooseSection';
import { IndustriesSection } from '@/features/brand/IndustriesSection';
import { PackagingExperienceSection } from '@/features/brand/PackagingExperienceSection';
import { GiftingProcessSection } from '@/features/brand/GiftingProcessSection';
import { FaqSection } from '@/features/brand/FaqSection';
import KeepsakeEcommerceSection from '@/features/ecommerce/KeepsakeEcommerceSection';
import CustomGiftBoxesSection from '@/features/ecommerce/CustomGiftBoxesSection';
import CuratedInquirySection from '@/features/inquiry/CuratedInquirySection';
import { useInquiryModal } from '@/hooks/useInquiryModal';


export default function HomePage() {
  const { openInquiryModal } = useInquiryModal();

  /* ─── Scroll Reset ─── */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative bg-[#FAF8F5]">

      {/* ═══════════════════════════════════════════════
          SECTION 1 — STATIC HERO BACKGROUND (Sticky / Fixed)
          ═══════════════════════════════════════════════ */}
      <div id="hero" className="relative sm:sticky sm:top-0 left-0 w-full sm:h-[100svh] z-0 bg-[#FAF8F5] pt-[72px] lg:pt-[80px] px-2.5 sm:px-4 lg:px-6 pb-0 sm:pb-4 lg:pb-6">
        <div className="relative w-full max-w-[1600px] mx-auto sm:h-full">

          {/* Image card — short and wide on phones, full-height on larger screens */}
          <div className="relative w-full aspect-[3/2] sm:aspect-auto sm:absolute sm:inset-0 overflow-hidden rounded-[22px] sm:rounded-[28px]">
            <Image
              src="/images/brand/hero.webp"
              alt="The Gourmet Gifts — Luxury Gifting"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.95] sm:brightness-[0.88]"
            />
            {/* Legibility overlay (only where text sits on the image) */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Hero Content — below the image on phones, over the image on larger screens */}
          <div className="relative z-10 sm:h-full flex flex-col justify-center px-0 pt-7 pb-0 sm:px-12 lg:px-20 sm:py-0">
            <div className="max-w-4xl space-y-4 sm:space-y-5 flex flex-col items-center sm:items-start text-center sm:text-left">

              {/* Brand capsule */}
              <span className="hero-rise inline-flex items-center gap-2 rounded-full border border-[#3c0b1e]/15 bg-white sm:border-white/35 sm:bg-white/10 sm:backdrop-blur-md pl-1.5 pr-4 py-1.5 text-[#3c0b1e] sm:text-white">
                <span className="relative w-6 h-6 rounded-full bg-[#FAF8F5] shrink-0">
                  <Image src="/images/brand/LOGOs.svg" alt="" fill className="object-contain p-[3px]" />
                </span>
                <span className="text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.24em] font-semibold">
                  The Gourmet Gifts
                </span>
              </span>

              {/* Title */}
              <h1
                className="text-[#1A1A18] sm:text-white leading-[1.1] sm:leading-[1.02] tracking-[-0.025em] sm:tracking-[-0.02em] hero-rise hero-rise-2 text-[31px] max-[349px]:text-[27px] sm:text-5xl md:text-6xl lg:text-[72px] text-center sm:text-left"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontWeight: 400,
                }}
              >
                {/* One sentence, so triple-click selects all of it. Non-breaking
                    spaces leave "around ⎵ your" as the only place it can wrap. */}
                {'B2B\u00A0Gifting,\u00A0curated\u00A0around your\u00A0brand\u00A0and\u00A0requirements.'}
              </h1>

              {/* Subtitle */}
              <p
                className="text-[#5C574F] sm:text-white/90 hero-rise hero-rise-3 text-[15px] sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl text-center sm:text-left"
                style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
              >
                We don’t start with a catalogue. We start with who you&apos;re gifting to.
              </p>

              {/* Buttons */}
              <div className="hero-rise hero-rise-4 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => openInquiryModal({ source: 'Hero Section (Get 3 Concepts)' })}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#3c0b1e] text-white hover:bg-[#4f1028] sm:bg-white sm:text-[#3c0b1e] sm:hover:bg-[#FAF8F5] font-sans text-[13px] sm:text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:shadow-[0_10px_24px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Get 3 gifting concepts
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>

                <a
                  href="#catalogue"
                  className="inline-flex items-center px-6 sm:px-7 py-3.5 sm:py-4 border border-[#1A1A18]/20 text-[#1A1A18] hover:border-[#1A1A18]/40 sm:border-white/55 sm:text-white sm:hover:border-white sm:hover:bg-white/10 font-sans text-[13px] sm:text-sm font-semibold rounded-xl transition-all duration-300 sm:backdrop-blur-sm cursor-pointer"
                >
                  See what we can curate
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          SECTION 2 & REST — SCROLLS OVER THE HERO
          ═══════════════════════════════════════════════ */}
      <div className="home-sections relative z-10 bg-[#FAF8F5]">

        {/* ─── 8-CARD OCCASIONS CAROUSEL ─── */}
        <OccasionGiftingCarousel />

        {/* ─── INDUSTRIES WE UNDERSTAND SECTION ─── */}
        <IndustriesSection />

        {/* ─── ATELIER LUXURY E-COMMERCE SECTION (WHAT WE CAN CURATE) ─── */}
        <KeepsakeEcommerceSection />

        {/* ─── HOW OUR GIFTING PROCESS WORKS ─── */}
        <GiftingProcessSection />

        {/* ─── FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION & SEO SCHEMA) ─── */}
        <FaqSection />

        {/* ─── PACKAGING GALLERY (images only, no heading) ─── */}
        <PackagingExperienceSection showHeader={false} />

        {/* ─── PRIVATE CONCIERGE & BESPOKE GIFTING (LUXURY DEEP WINE THEME) ─── */}
        <section className="mt-[var(--section-gap)] py-[var(--section-gap)] px-5 sm:px-8 lg:px-12 text-center relative overflow-hidden bg-[#3c0b1e] text-[#FAF8F5]">

          <div className="max-w-[760px] mx-auto space-y-5 relative z-10">
            <ScrollReveal animation="fadeUp">
              <span className="type-meta text-[#DFC299] text-[10.5px] sm:text-[11.5px] tracking-[0.32em] uppercase font-bold block mb-2.5">
                Private concierge
              </span>
              <h2
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[-0.02em] leading-[1.08] sm:leading-[1.04]"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontWeight: 300,
                }}
              >
                For those who give at scale.
              </h2>
              <p className="font-serif text-sm sm:text-base md:text-lg text-[#EDE6DC]/90 max-w-lg mx-auto leading-relaxed">
                <span className="inline sm:hidden">
                  Bespoke corporate gifting at scale.
                </span>
                <span className="hidden sm:inline">
                  Bespoke corporate curations, custom crest monograms, and institutional gifting.
                </span>
              </p>
              <div className="flex items-center justify-center pt-6">
                <a
                  href="https://wa.me/917021463609?text=Hi%21%20I%E2%80%99d%20like%20to%20enquire%20about%20bespoke%20corporate%20gifting%20at%20scale."
                  className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#FAF8F5] hover:bg-white text-[#3c0b1e] font-sans text-[13px] sm:text-sm font-semibold shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Contact
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </div>
  );
}
