import { MenuItem } from "@/types/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const hasVariants = Boolean(item.priceVariants);

  return (
    <div
      id={`item-${item.id}`}
      className="scroll-mt-36 sm:scroll-mt-44 bg-white rounded-lg border border-[#79543A]/15 hover:border-[#79543A]/30 transition-all duration-150 px-3 py-2.5 sm:px-3.5 sm:py-2.5 flex flex-col justify-center w-full min-w-0 box-border"
    >
      <div className="flex items-center justify-between gap-2 min-w-0 w-full">
        {/* Left side: Item name + serving badge + popular badge */}
        <div className="flex items-center gap-1.5 min-w-0 flex-1 flex-wrap">
          <h4 className="text-[13px] sm:text-[15px] font-semibold text-[#38271F] leading-tight tracking-tight break-words">
            {item.name}
          </h4>
          {item.serving && (
            <span className="inline-flex items-center text-[9px] sm:text-[11px] font-medium text-[#79543A] bg-[#E5D2B8]/40 border border-[#79543A]/20 px-1 py-0.2 rounded whitespace-nowrap shrink-0">
              {item.serving}
            </span>
          )}
          {item.popular && (
            <span className="inline-flex items-center text-[8px] sm:text-[9px] font-bold text-white bg-[#79543A] px-1 py-0.2 rounded uppercase tracking-wider shrink-0">
              Popular
            </span>
          )}
        </div>

        {/* Right side: Single Standard Price */}
        {!hasVariants && item.price !== undefined && (
          <div className="shrink-0 text-right">
            <span className="text-[13px] sm:text-[15px] font-bold text-[#38271F] tracking-tight">
              ₹{item.price}
            </span>
          </div>
        )}
      </div>

      {/* Description if present */}
      {item.description && (
        <p className="text-[11px] sm:text-[13px] text-[#6B5D55] mt-1 leading-normal break-words">
          {item.description}
        </p>
      )}

      {/* Provisional Price Note */}
      {item.provisionalPricing && (
        <div className="mt-1 flex items-center gap-1.5 flex-wrap text-[10px] min-w-0">
          <span className="font-semibold text-[#79543A] bg-[#E5D2B8]/60 px-1.5 py-0.2 rounded border border-[#79543A]/20 shrink-0">
            Provisional Price
          </span>
          {item.internalNote && (
            <span className="text-[#6B5D55] italic break-words">
              ({item.internalNote})
            </span>
          )}
        </div>
      )}

      {/* Multiple Price Variants */}
      {hasVariants && item.priceVariants && (
        <div className="mt-1.5 pt-1.5 border-t border-[#79543A]/10 flex flex-wrap items-center justify-start sm:justify-end gap-1.5 text-[10px] sm:text-xs min-w-0 w-full">
          {item.priceVariants.nonGrilled !== undefined && (
            <div className="flex items-center gap-1 bg-[#F8F3EB] px-1.5 py-0.5 rounded border border-[#79543A]/15 shrink-0">
              <span className="text-[#6B5D55]">Non-Grilled:</span>
              <span className="font-bold text-[#38271F]">₹{item.priceVariants.nonGrilled}</span>
            </div>
          )}
          {item.priceVariants.grilled !== undefined && (
            <div className="flex items-center gap-1 bg-[#F8F3EB] px-1.5 py-0.5 rounded border border-[#79543A]/15 shrink-0">
              <span className="text-[#79543A] font-medium">Grilled:</span>
              <span className="font-bold text-[#38271F]">₹{item.priceVariants.grilled}</span>
            </div>
          )}
          {item.priceVariants["8inch"] !== undefined && (
            <div className="flex items-center gap-1 bg-[#F8F3EB] px-1.5 py-0.5 rounded border border-[#79543A]/15 shrink-0">
              <span className="text-[#6B5D55]">8-inch:</span>
              <span className="font-bold text-[#38271F]">₹{item.priceVariants["8inch"]}</span>
            </div>
          )}
          {item.priceVariants["12inch"] !== undefined && (
            <div className="flex items-center gap-1 bg-[#F8F3EB] px-1.5 py-0.5 rounded border border-[#79543A]/15 shrink-0">
              <span className="text-[#79543A] font-medium">12-inch:</span>
              <span className="font-bold text-[#38271F]">₹{item.priceVariants["12inch"]}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
