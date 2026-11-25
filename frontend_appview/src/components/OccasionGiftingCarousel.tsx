'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export interface OccasionCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export const OCCASION_CARDS: OccasionCard[] = [
  {
    id: 'employee-gifting',
    title: 'EMPLOYEE GIFTING',
    subtitle: 'Make people feel valued from Day One.',
    image: '/cards/employeecard.webp',
    href: '/employee-gifting',
  },
  {
    id: 'client-gifting',
    title: 'CLIENT GIFTING',
    subtitle: 'Stay remembered after the meeting.',
    image: '/cards/clientcard.webp',
    href: '/occasions/client-gifting',
  },
  {
    id: 'festive-gifting',
    title: 'FESTIVE GIFTING',
    subtitle: 'Celebrate without sending the predictable.',
    image: '/cards/festivecard.webp',
    href: '/occasions/festive-gifting',
  },
  {
    id: 'events-conferences',
    title: 'EVENTS & CONFERENCES',
    subtitle: 'Give them something worth taking home.',
    image: '/cards/events.webp',
    href: '/occasions/events-conferences',
  },
  {
    id: 'milestones-recognition',
    title: 'MILESTONES & RECOGNITION',
    subtitle: 'Mark the moment properly.',
    image: '/cards/milestones.webp',
    href: '/milestones-recognition',
  },
  {
    id: 'cx-gifting',
    title: 'CX GIFTING',
    subtitle: 'Create lasting customer delight at every touchpoint.',
    image: '/cards/cx.webp',
    href: '/occasions/cx-gifting',
  },
  {
    id: 'dealer-partner-gifting',
    title: 'DEALER & PARTNER GIFTING',
    subtitle: 'For relationships that drive the business.',
    image: '/cards/dealer.webp',
    href: '/occasions/dealer-partner-gifting',
  },
  {
    id: 'weddings-celebrations',
    title: 'CELEBRATIONS',
    subtitle: 'Heirloom favours & celebratory hampers.',
    image: '/cards/wedding.webp',
    href: '/occasions/weddings-celebrations',
  },
];

export default function OccasionGiftingCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [snapOff, setSnapOff] = useState(false);
  const hasDraggedRef = useRef(false);

  const [pageCount, setPageCount] = useState(1);

  // One dot per screenful of cards (about 2 on desktop, more on phones)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setPageCount(maxScroll > 4 ? Math.ceil(maxScroll / el.clientWidth - 0.05) + 1 : 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0 && scrollLeft >= maxScroll - 15) {
      setActiveIndex(pageCount - 1);
    } else {
      setActiveIndex(Math.min(pageCount - 1, Math.max(0, Math.round(scrollLeft / clientWidth))));
    }
  };

  const scrollToPage = (page: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({
      left: page >= pageCount - 1 ? maxScroll : Math.min(maxScroll, page * el.clientWidth),
      behavior: 'smooth',
    });
  };

  /* ─── Mouse Drag to Scroll (touch uses the browser's own swipe) ─── */
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const snapToNearestCard = (el: HTMLDivElement) => {
    const maxScroll = el.scrollWidth - el.clientWidth;
    let target = el.scrollLeft;
    let best = Infinity;
    for (const child of Array.from(el.children) as HTMLElement[]) {
      const left = Math.min(maxScroll, child.offsetLeft - el.offsetLeft);
      const distance = Math.abs(left - el.scrollLeft);
      if (distance < best) {
        best = distance;
        target = left;
      }
    }
    el.scrollTo({ left: target, behavior: 'smooth' });
    // Turn card snapping back on once the settle animation has finished
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    settleTimerRef.current = setTimeout(() => setSnapOff(false), 450);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el || e.button !== 0) return;
    if (el.scrollWidth <= el.clientWidth) return; // grid layout (desktop): nothing to drag
    e.preventDefault(); // stop the browser from picking up the link/image
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);

    const startX = e.clientX;
    const startScroll = el.scrollLeft;
    hasDraggedRef.current = false;
    setIsDragging(true);
    setSnapOff(true);

    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startX;
      if (Math.abs(dx) > 5) hasDraggedRef.current = true;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      setIsDragging(false);
      if (hasDraggedRef.current) {
        snapToNearestCard(el);
      } else {
        setSnapOff(false);
      }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  useEffect(() => () => {
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
  }, []);

  return (
    <section id="occasions" className="pt-[var(--section-gap)] sm:pt-[calc(var(--section-gap)-16px)] lg:pt-[calc(var(--section-gap)-24px)] bg-[#FAF8F5] text-[#1A1A18] relative overflow-hidden scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-2.5 sm:px-4 lg:px-6">
        
        {/* ─── SECTION HEADER ─── */}
        <ScrollReveal animation="fadeUp">
          <div className="text-center max-w-4xl mx-auto px-2 space-y-2.5 sm:space-y-3.5 mb-8 sm:mb-10 md:mb-12">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-light text-[#1A1A18] tracking-[-0.02em] leading-[1.08] sm:leading-[1.04] whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 300,
              }}
            >
              <span>For every occasion</span>{' '}
              <span>that matters</span>
            </h2>
            <p className="text-xs md:text-sm text-[#78746D] font-light max-w-3xl mx-auto leading-normal pb-[3px]">
              Thoughtful gifting for milestones, celebrations, and relationships that matter.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── CAROUSEL WRAPPER (drag with mouse, swipe on touch) ─── */}
        <div className="relative group/carousel">
          
          {/* ─── 8-CARD OCCASIONS CAROUSEL ─── */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onDragStart={(e) => e.preventDefault()}
            className={`flex gap-3.5 sm:gap-4 overflow-x-auto px-4 sm:px-0 select-none lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:cursor-auto ${
              snapOff ? 'snap-none' : 'snap-x snap-mandatory'
            } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
          >
            {OCCASION_CARDS.map((card, idx) => (
              <Link
                key={card.id}
                href={card.href}
                draggable={false}
                onClick={(e) => {
                  if (hasDraggedRef.current) {
                    e.preventDefault();
                    hasDraggedRef.current = false;
                  }
                }}
                className="relative w-[240px] sm:w-[270px] md:w-[280px] lg:w-auto aspect-[3/4.2] lg:aspect-[4/4.6] shrink-0 snap-start rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between p-5 sm:p-6 group"
              >
                {/* Full-Bleed Image Background */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#1A1A18] pointer-events-none">
                  <Image
                    src={card.image}
                    alt={card.title}
                    draggable={false}
                    fill
                    priority={idx < 5}
                    loading={idx < 5 ? 'eager' : 'lazy'}
                    quality={80}
                    sizes="(max-width: 768px) 240px, (max-width: 1200px) 280px, 320px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-108 filter brightness-[0.98]"
                  />
                  {/* Bottom Vignette Gradient (Expands on Hover for High-Contrast Text Legibility) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent group-hover:from-black/92 group-hover:via-black/50 group-hover:to-transparent transition-all duration-500" />
                </div>

                {/* Bottom Center Content */}
                <div className="relative z-10 w-full mt-auto pointer-events-none flex flex-col items-center justify-end text-center">
                  
                  {/* Default State (Desktop Only): White Title that fades on hover */}
                  <div className="hidden sm:block transform transition-all duration-400 ease-out group-hover:opacity-0 group-hover:-translate-y-2 pb-1">
                    <span className="text-[11px] sm:text-[12px] font-sans uppercase tracking-[0.22em] text-white/95 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                      {card.title}
                    </span>
                  </div>

                  {/* Hover State: Full Detailed Block (Title + Subtitle + Explore) Animating from Bottom to Top */}
                  <div className="space-y-1.5 transform transition-all duration-500 ease-out opacity-100 translate-y-0 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 pb-1">
                    <h3 className="font-sans text-base sm:text-lg md:text-[19px] font-bold text-[#DFC299] uppercase tracking-wider leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[12.5px] text-[#EDE6DC] font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-[215px] mx-auto">
                      {card.subtitle}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-white/90 group-hover:text-[#DFC299] transition-colors">
                        <span>EXPLORE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* ─── PAGE DOTS (one per screenful of cards) ─── */}
        {pageCount > 1 && (
          <div className="flex items-center justify-center gap-2 pt-5">
            {Array.from({ length: pageCount }, (_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToPage(idx)}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? 'w-7 bg-[#3c0b1e]'
                    : 'w-2 bg-[#D5CFBF] hover:bg-[#A39E93]'
                }`}
                aria-label={`Go to page ${idx + 1} of ${pageCount}`}
                aria-current={activeIndex === idx}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
