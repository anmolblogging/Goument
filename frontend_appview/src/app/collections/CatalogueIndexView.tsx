import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { CATALOGUE_CATEGORIES, HAMPERS_CATALOG } from '@/data/hampersData';

/** Catalogue landing page: one card per category, styled like the hampers page. */
export function CatalogueIndexView() {
  const counts = new Map<string, number>();
  for (const item of HAMPERS_CATALOG) counts.set(item.category, (counts.get(item.category) ?? 0) + 1);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A18] pt-18 sm:pt-24 pb-16">
      {/* ─── BREADCRUMB & CENTERED TITLE (same as hampers page) ─── */}
      <section className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#8C847B] mb-2 sm:mb-3">
          <Link href="/" className="hover:text-[#1A1A18] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#B5AFA6]" />
          <span className="text-[#1A1A18] font-medium">Catalogue</span>
        </nav>

        <div className="text-center max-w-2xl mx-auto py-1">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A18] tracking-[-0.02em] leading-[1.08] sm:leading-[1.04]"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300 }}
          >
            Corporate Gift Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-[#78746D] font-light mt-1 max-w-lg mx-auto leading-relaxed">
            Gourmet food, beverages, lifestyle, desk essentials and keepsakes, curated for every audience.
          </p>
        </div>
      </section>

      {/* ─── CATEGORY GRID ─── */}
      <main className="max-w-[1580px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-3 mb-4 sm:mb-6 border-b border-[#ECE7DE]">
          <span className="text-xs sm:text-sm font-semibold text-[#1A1A18]">
            {CATALOGUE_CATEGORIES.length} Categories
          </span>
          <span className="text-xs sm:text-sm text-[#78746D]">{HAMPERS_CATALOG.length} products</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {CATALOGUE_CATEGORIES.map((cat, idx) => {
            const count = counts.get(cat.id) ?? 0;
            return (
              <Link
                key={cat.id}
                href={`/collections/${cat.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D8] hover:border-[#DDD8CE] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="w-full aspect-square bg-[#FAF6F0] relative overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    priority={idx < 4}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-base sm:text-[17px] font-medium text-[#1A1A18] group-hover:text-[#8C7449] transition-colors leading-snug tracking-tight">
                      {cat.label}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#78746D] mt-1.5 line-clamp-2">{cat.subtitle}</p>
                  </div>
                  <div className="mt-3.5 sm:mt-4 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#8C7449] font-semibold">
                      {count} {count === 1 ? 'item' : 'items'}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#1A1A18] group-hover:text-[#3c0b1e]">
                      Explore <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
