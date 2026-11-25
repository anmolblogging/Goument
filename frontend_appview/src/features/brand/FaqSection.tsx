'use client';

import React, { useState } from 'react';
import { ArrowDown, ArrowUp, ChevronDown } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { JsonLd } from '@/components/JsonLd';

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const CORPORATE_GIFTING_FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Why choose The Gourmet Gifts for corporate gifting in Mumbai and across India?',
    answer:
      'The Gourmet Gifts is a Mumbai-based corporate gifting company creating thoughtful gifts for employees, clients and business partners across India. We curate around your recipients, occasion and budget, bringing together carefully chosen products, personalised packaging and end-to-end execution. Every gift is designed to feel relevant, useful and worth remembering.',
  },
  {
    id: 2,
    question: 'Can you curate corporate gift hampers within our budget?',
    answer:
      'Yes. Share your budget per recipient, quantity and occasion, and we will suggest three curated gifting concepts. From compact employee gifts to premium client hampers, we balance product quality, usefulness and presentation. Packaging, customisation, taxes and delivery inclusions are clarified in your quotation.',
  },
  {
    id: 3,
    question: 'What products do you offer for corporate gifts and branded merchandise?',
    answer:
      'Our corporate gifting range includes gourmet food, tea and coffee, bags, T-shirts, electronics, drinkware, notebooks, planners, pens, wellness products, decor, spiritual gifts, trophies and personalised keepsakes. Order individual products in bulk or combine categories into customised gift hampers suited to your audience and occasion.',
  },
  {
    id: 4,
    question: 'Can you customise corporate gifts and packaging with our company logo?',
    answer:
      'Yes. We offer company logo branding and personalisation on suitable products and gift packaging. Options include printing, engraving, recipient names, personalised cards, branded sleeves and ribbons. Whether you need employee welcome kits or client gift hampers, we help create a consistent presentation that reflects your brand.',
  },
  {
    id: 5,
    question: 'What is the minimum order quantity for corporate gift hampers?',
    answer:
      'Selected gift hampers start from 10 units, making them suitable for smaller teams and focused client gifting. Customised merchandise, specially sourced products and bespoke packaging may require higher quantities. We confirm the minimum order quantity for your chosen products and branding before you proceed.',
  },
  {
    id: 6,
    question: 'Do you offer employee welcome kits, client gifts and festive hampers?',
    answer:
      'Yes. We curate employee onboarding kits, work anniversary gifts, recognition gifts, client appreciation hampers, dealer and partner gifts, and event kits. Our festive gifting includes Diwali hampers and other celebration-specific selections. Each combination is tailored to the recipient, with options for different budgets within the same organisation.',
  },
  {
    id: 7,
    question: 'Can we see gift mock-ups or samples before bulk production?',
    answer:
      'Yes. You can review curated concepts and, where required, digital mock-ups or physical samples before bulk production. This helps you assess the product selection, logo placement and packaging. Sampling availability, charges and timelines depend on your chosen items and level of customisation.',
  },
  {
    id: 8,
    question: 'How early should we order customised corporate gifts or Diwali hampers?',
    answer:
      'Contact us as soon as you have an estimated quantity, budget and delivery date. Bulk corporate gifts and customised Diwali hampers need time for sourcing, artwork approval, production and packing. We confirm an order-specific timeline and assess urgent requests based on availability and delivery feasibility.',
  },
  {
    id: 9,
    question: 'Do you deliver corporate gifts to multiple addresses across India?',
    answer:
      'Yes. We coordinate corporate gift delivery to offices, event venues and individual recipient addresses across India, subject to location serviceability. From one office delivery to gifts for remote teams and clients in different cities, we plan packing and dispatch around your address list and required delivery window.',
  },
  {
    id: 10,
    question: 'How can we request a customised corporate gifting proposal?',
    answer:
      'Share your occasion, recipient profile, quantity, budget per gift, delivery locations and required date. The Gourmet Gifts will suggest three curated concepts shaped around your brief. Email hello@thegourmetgifts.co or WhatsApp +91 70214 63609 to start planning gifts that make your people feel valued and your brand remembered.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CORPORATE_GIFTING_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export const FaqSection: React.FC = () => {
  // All questions start closed
  const [openId, setOpenId] = useState<number | null>(null);
  // Phones show the first few questions; the rest appear after "View all questions"
  const MOBILE_VISIBLE = 5;
  const [showAllMobile, setShowAllMobile] = useState(false);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#FAF8F5] pt-[var(--section-gap)] px-5 sm:px-8 lg:px-12 relative">
      {/* Schema.org FAQPage rich snippet for SEO without modifying existing site metadata */}
      <JsonLd data={faqSchema} />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 sm:gap-10 lg:gap-16 xl:gap-24 items-start">
        {/* Left: intro, stays in view while the questions scroll */}
        <div className="lg:sticky lg:top-28">
        <ScrollReveal animation="fadeUp">
          <div className="text-center lg:text-left space-y-3 max-w-2xl mx-auto lg:mx-0">
            <span className="text-[11px] font-mono tracking-[0.24em] text-[#8C6228] uppercase font-bold block">
              Frequently Asked Questions
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A18] tracking-[-0.02em] leading-[1.12]"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 300,
              }}
            >
              Everything you need to know about corporate gifting.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#78746D] font-light leading-relaxed">
              Got questions? We have answers. If you don&apos;t find what you&apos;re looking for, our gifting concierge is always happy to assist.
            </p>
          </div>
        </ScrollReveal>
        </div>

        {/* Right: Accordion List */}
        <div className="border-t border-[#E5E0D8]">
          {CORPORATE_GIFTING_FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const hiddenOnPhone = !showAllMobile && idx >= MOBILE_VISIBLE;

            return (
              <div
                key={faq.id}
                className={`border-b border-[#E5E0D8] transition-colors ${hiddenOnPhone ? 'hidden lg:block' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-5 sm:py-6 flex items-center justify-between gap-4 sm:gap-6 group cursor-pointer"
                >
                  <span
                    className={`text-base sm:text-lg md:text-[19px] font-medium leading-snug transition-colors ${
                      isOpen
                        ? 'text-[#3c0b1e]'
                        : 'text-[#1A1A18] group-hover:text-[#3c0b1e]'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Circular Arrow Button */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#3c0b1e] text-white shadow-md'
                        : 'border border-[#D1CCC2] text-[#6E6960] group-hover:border-[#3c0b1e] group-hover:text-[#3c0b1e] group-hover:bg-white'
                    }`}
                  >
                    {isOpen ? (
                      <ArrowUp className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    ) : (
                      <ArrowDown className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="pb-6 pr-6 sm:pr-14 text-sm sm:text-base text-[#5C574F] font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!showAllMobile && CORPORATE_GIFTING_FAQS.length > MOBILE_VISIBLE && (
          <div className="lg:hidden flex justify-center pt-6">
            <button
              type="button"
              onClick={() => setShowAllMobile(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1A1A18]/20 text-[#1A1A18] text-[13px] font-semibold hover:border-[#3c0b1e] hover:text-[#3c0b1e] transition-colors cursor-pointer"
            >
              View all {CORPORATE_GIFTING_FAQS.length} questions
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
