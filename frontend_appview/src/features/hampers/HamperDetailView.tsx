'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { EcomHamper } from '@/data/hampersEcomData';
import { useCartStore } from '@/hooks/useCart';
import { HamperCard } from './HamperCard';

interface HamperDetailViewProps {
  hamper: EcomHamper;
  related: EcomHamper[];
}

export default function HamperDetailView({ hamper, related }: HamperDetailViewProps) {
  const { addItem, items } = useCartStore();
  const gallery = hamper.gallery?.length ? hamper.gallery : [hamper.image];
  const [selectedImage, setSelectedImage] = useState<string>(gallery[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const cartItem = items.find((i) => i.productId === hamper.id);
  const inCartQty = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await addItem({
        productId: hamper.id,
        name: hamper.name,
        price: hamper.price * 100, // in paise
        quantity,
        image: hamper.image,
        giftBoxingType: hamper.vesselType,
      });
      toast.success(
        <div className="flex flex-col">
          <span className="font-semibold text-[#1A1A18]">{quantity}x {hamper.name}</span>
          <span className="text-[11px] text-[#8C7449]">Added to curation tray</span>
        </div>,
        {
          duration: 2500,
          style: {
            background: '#FAF8F5',
            color: '#1A1A18',
            border: '1px solid #E0DDD6',
            borderRadius: '12px',
            fontSize: '13px',
          },
        }
      );
    } catch {
      toast.error('Could not add to tray.');
    } finally {
      setIsAdding(false);
    }
  };

  const whatsappHref = `https://wa.me/917021463609?text=${encodeURIComponent(
    `Hi! I'd like to enquire about bulk orders for "${hamper.name}".`
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A18] pt-20 sm:pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Breadcrumb ─── */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#8C847B] mb-5 sm:mb-8">
          <Link href="/" className="hover:text-[#1A1A18] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#B5AFA6]" />
          <Link href="/hampers" className="hover:text-[#1A1A18] transition-colors">Curated Hampers</Link>
          <ChevronRight className="w-3 h-3 text-[#B5AFA6]" />
          <span className="text-[#1A1A18] font-medium">{hamper.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* ─── LEFT: GALLERY (stays in view on desktop) ─── */}
          <div className="lg:sticky lg:top-24">
            <div className="w-full aspect-[4/3.6] rounded-2xl overflow-hidden relative border border-[#E0DDD6] bg-white">
              <img
                src={selectedImage}
                alt={hamper.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#3C0B1E] text-[#DFC299] text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded">
                {hamper.tierLabel}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[#F6F4EF] text-[10px] font-mono px-2 py-1 rounded">
                {hamper.vesselType}
              </div>
            </div>

            {gallery.length > 1 && (
              <div className="flex gap-2.5 mt-3">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    aria-label={`Show picture ${idx + 1} of ${hamper.name}`}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer ${
                      selectedImage === img
                        ? 'border-[#1A1A18] ring-1 ring-[#1A1A18]'
                        : 'border-[#E0DDD6] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ─── RIGHT: DETAILS ─── */}
          <div className="space-y-6">
            <div>
              <p className="text-[10.5px] sm:text-[11px] font-semibold text-[#8C7449] uppercase tracking-[0.14em]">
                {hamper.occasionLabel} • {hamper.tierDescription}
              </p>
              <h1
                className="mt-2 text-[32px] sm:text-5xl font-normal text-[#1A1A18] leading-[1.08] tracking-[-0.02em]"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {hamper.name}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#5C574F] leading-relaxed">
                {hamper.description}
              </p>
            </div>

            {/* Price */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E0DDD6]">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-[#1A1A18] tracking-tight">
                  ₹{hamper.price.toLocaleString('en-IN')}
                </span>
                {hamper.originalPrice && (
                  <span className="text-sm text-[#A19A8F] line-through">
                    ₹{hamper.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-[#8C7449]">Taxes and keepsake packaging included</p>

              {/* Quantity + Add to tray */}
              <div className="mt-4 flex items-stretch gap-2.5">
                <div className="flex items-center border border-[#DDD8CE] rounded-xl bg-[#FAF8F5] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="px-3.5 py-3 text-sm font-bold text-[#6B655D] hover:bg-[#EFEAE2] transition-colors cursor-pointer"
                  >
                    −
                  </button>
                  <span className="px-2 text-sm font-bold text-[#1A1A18] min-w-[2ch] text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="px-3.5 py-3 text-sm font-bold text-[#6B655D] hover:bg-[#EFEAE2] transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#3C0B1E] hover:bg-[#4f1028] text-white text-[13px] sm:text-sm font-semibold transition-colors cursor-pointer disabled:opacity-60"
                >
                  {inCartQty > 0
                    ? `Add more (${inCartQty} in tray)`
                    : `Add to tray • ₹${(hamper.price * quantity).toLocaleString('en-IN')}`}
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-[#78746D]">
                <span>Bulk orders or custom monogramming?</span>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8C7449] font-semibold hover:text-[#3C0B1E] underline underline-offset-2"
                >
                  WhatsApp enquiry
                </a>
              </div>
            </div>

            {/* Highlights */}
            {hamper.highlights?.length > 0 && (
              <ul className="space-y-2">
                {hamper.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#423E39]">
                    <Check className="w-4 h-4 mt-0.5 text-[#8C7449] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Contents */}
            <div className="space-y-2.5">
              <h2 className="text-[11px] uppercase tracking-[0.18em] text-[#8C847B] font-bold">
                What&apos;s inside ({hamper.contents.length} items)
              </h2>
              <div className="space-y-2">
                {hamper.contents.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#EBE6DC] flex items-start justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A18] leading-snug">{item.name}</p>
                      {item.description && (
                        <p className="text-xs text-[#78746D] mt-0.5 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                    {item.weight && (
                      <span className="shrink-0 text-[11px] font-mono px-2 py-0.5 rounded bg-[#FAF8F5] text-[#8C7449] border border-[#E0DDD6]">
                        {item.weight}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Box details */}
            <div className="space-y-2.5">
              <h2 className="text-[11px] uppercase tracking-[0.18em] text-[#8C847B] font-bold">
                The box
              </h2>
              <dl className="rounded-xl bg-white border border-[#E0DDD6] p-3.5 space-y-1.5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#8A8680]">Box type</dt>
                  <dd className="font-semibold text-[#1A1A18] text-right">{hamper.vesselType}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#8A8680]">Finish</dt>
                  <dd className="font-semibold text-[#1A1A18] text-right">{hamper.vesselColor}</dd>
                </div>
                {hamper.dimensions && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#8A8680]">Dimensions</dt>
                    <dd className="font-mono text-[#1A1A18] text-right">{hamper.dimensions}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>

        {/* ─── RELATED HAMPERS ─── */}
        {related.length > 0 && (
          <section className="mt-16 sm:mt-20">
            <h2
              className="text-2xl sm:text-4xl font-light text-[#1A1A18] tracking-[-0.02em] mb-6 sm:mb-8"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              You may also like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {related.map((h) => (
                <HamperCard key={h.id} hamper={h} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
