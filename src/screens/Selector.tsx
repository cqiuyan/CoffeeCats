import React from "react";
import { CatConfig } from "../config/cats";
import { CoinIcon } from "../components/svgs/CoinIcon";
import { Lock } from "../components/svgs/Lock";
import { Shadow } from "../components/svgs/Shadow";

interface SelectorProps {
  cats: CatConfig[];
  currency: number;
  setCats: React.Dispatch<React.SetStateAction<CatConfig[]>>;
  setCurrency: React.Dispatch<React.SetStateAction<number>>;
  onCatClick: (cat: CatConfig) => void;
}

export function Selector({ cats, currency, setCats, setCurrency, onCatClick }: SelectorProps) {
  const handleCatClick = (cat: CatConfig) => {
    if (cat.unlocked) {
      // Already unlocked, show interact screen
      onCatClick(cat);
      return;
    }

    // Try to purchase
    if (currency >= cat.price) {
      setCats((prevCats) =>
        prevCats.map((c) =>
          c.id === cat.id ? { ...c, unlocked: true, health: 100 } : c
        )
      );
      setCurrency((prev) => prev - cat.price);
    } else {
      // Not enough currency
      alert(`Not enough coins! You need ${cat.price} coins to unlock this cat.`);
    }
  };

  const getCardBackgroundColor = (cat: CatConfig) => {
    return cat.unlocked ? "#fff8ea" : "#d2d2d2";
  };

  const getHealthBarColor = (health: number) => {
    if (health === 0) return "#8bff3d"; // Green for empty/locked
    if (health < 50) return "#e7581f"; // Red/orange for low health
    return "#8bff3d"; // Green for good health
  };

  const getHealthBarWidth = (health: number) => {
    if (health === 0) return 0;
    return (health / 100) * 202; // 202px is the full width
  };

  const CatCard = ({ cat, position }: { cat: CatConfig; position: { left: number; top: number } }) => {
    const CatComponent = cat.component;
    const FoodComponent = cat.food;
    const shadowPos = cat.shadowPosition || { left: 91, top: 267, width: 139, height: 18 };

    return (
      <div
        className="absolute w-[321px] h-[321px] cursor-pointer"
        style={{ left: `${position.left}px`, top: `${position.top}px` }}
        onClick={() => handleCatClick(cat)}
      >
        {/* Card Background */}
        <div className="absolute bg-[#fffbd1] rounded-[20px] size-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: getCardBackgroundColor(cat) }}
          />

          {/* Shadow SVG */}
          <div
            className="absolute"
            style={{
              left: `${shadowPos.left}px`,
              top: `${shadowPos.top}px`,
              width: `${shadowPos.width}px`,
              height: `${shadowPos.height}px`,
            }}
          >
            <Shadow />
          </div>

          {/* Cat SVG */}
          <div
            className="absolute"
            style={{
              left: `${cat.catPosition.left}px`,
              top: `${cat.catPosition.top}px`,
              width: `${cat.catPosition.width}px`,
              height: `${cat.catPosition.height}px`,
            }}
          >
            <CatComponent />
          </div>

          {/* Food Icon */}
          {cat.unlocked && (
            <div className="absolute h-[40px] left-[18.97px] top-[18.68px] w-[61px]">
              <FoodComponent />
            </div>
          )}

          {/* Lock Icon (if locked) */}
          {!cat.unlocked && (
            <div className="absolute h-[72px] left-[17px] top-[16px] w-[52px]">
              <Lock />
            </div>
          )}

          {/* Cost display (if locked) */}
          {!cat.unlocked && (
            <div className="absolute bg-[#f9e39f] rounded-[30px] px-[13px] py-[13px] flex items-center gap-[10px] h-[44px]" style={{ left: "18px", top: "98px" }}>
              <div className="relative shrink-0 size-[34px]">
                <CoinIcon />
              </div>
              <p className="font-bold text-[25px] text-black whitespace-nowrap">{cat.price}</p>
            </div>
          )}

          {/* Gray overlay (if locked) */}
          {!cat.unlocked && (
            <div className="absolute inset-0 bg-black opacity-40 rounded-[20px]" />
          )}
        </div>

        {/* Progress Bar Background */}
        <div className="absolute bg-[#d9d9d9] h-[13px] left-[27.96px] rounded-[10px] top-[293px] w-[244px]" />
        {/* Progress Bar Fill */}
        <div
          className="absolute h-[13px] left-[29px] rounded-[10px] top-[293px]"
          style={{
            width: `${getHealthBarWidth(cat.health)}px`,
            backgroundColor: getHealthBarColor(cat.health),
          }}
        />
      </div>
    );
  };

  return (
    <div className="bg-[#fbebbb] relative w-full min-h-screen p-8">
      {/* CURRENCY DISPLAY - Top Left Corner */}
      <div className="absolute left-[9px] top-[11px] bg-[#f9e39f] rounded-[30px] px-[13px] py-[13px] flex items-center gap-[10px] h-[44px]">
        <div className="relative shrink-0 size-[34px]">
          <CoinIcon />
        </div>
        <p className="font-bold text-[25px] text-black whitespace-nowrap">{currency}</p>
      </div>

      {/* CAT CARDS GRID - 3x2 Layout */}
      <div className="absolute left-[75px] top-[61px] w-[1129px]">
        {/* ROW 1 - Top Three Cats */}
        <CatCard cat={cats[0]} position={{ left: 0, top: 0 }} />
        <CatCard cat={cats[1]} position={{ left: 404, top: 0 }} />
        <CatCard cat={cats[2]} position={{ left: 808, top: 0 }} />

        {/* ROW 2 - Bottom Three Cats */}
        <CatCard cat={cats[3]} position={{ left: 0, top: 377 }} />
        <CatCard cat={cats[4]} position={{ left: 404, top: 377 }} />
        <CatCard cat={cats[5]} position={{ left: 808, top: 377 }} />
      </div>
    </div>
  );
}

