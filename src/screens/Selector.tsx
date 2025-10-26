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
        style={{ 
          position: 'absolute',
          width: '321px',
          height: '321px',
          cursor: 'pointer',
          left: `${position.left}px`,
          top: `${position.top}px`
        }}
        onClick={() => handleCatClick(cat)}
      >
        {/* Card Background */}
        <div style={{ position: 'absolute', backgroundColor: '#fffbd1', borderRadius: '20px', width: '100%', height: '100%', overflow: 'hidden' }}>
          <div
            style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: getCardBackgroundColor(cat) }}
          />

          {/* Shadow SVG */}
          <div
            style={{
              position: 'absolute',
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
            style={{
              position: 'absolute',
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
            <div style={{ position: 'absolute', height: '40px', left: '18.97px', top: '18.68px', width: '61px' }}>
              <FoodComponent />
            </div>
          )}

          {/* Lock Icon (if locked) */}
          {!cat.unlocked && (
            <div style={{ position: 'absolute', height: '72px', left: '17px', top: '16px', width: '52px' }}>
              <Lock />
            </div>
          )}

          {/* Cost display (if locked) */}
          {!cat.unlocked && (
            <div style={{ position: 'absolute', backgroundColor: '#f9e39f', borderRadius: '30px', paddingLeft: '13px', paddingRight: '13px', paddingTop: '13px', paddingBottom: '13px', display: 'flex', alignItems: 'center', gap: '10px', height: '44px', left: '18px', top: '98px' }}>
              <div style={{ position: 'relative', flexShrink: 0, width: '34px', height: '34px' }}>
                <CoinIcon />
              </div>
              <p style={{ fontWeight: 'bold', fontSize: '25px', color: 'black', whiteSpace: 'nowrap' }}>{cat.price}</p>
            </div>
          )}

          {/* Gray overlay (if locked) */}
          {!cat.unlocked && (
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'black', opacity: 0.4, borderRadius: '20px' }} />
          )}
        </div>

        {/* Progress Bar Background */}
        <div style={{ position: 'absolute', backgroundColor: '#d9d9d9', height: '13px', left: '27.96px', borderRadius: '10px', top: '293px', width: '244px' }} />
        {/* Progress Bar Fill */}
        <div
          style={{
            position: 'absolute',
            height: '13px',
            left: '29px',
            borderRadius: '10px',
            top: '293px',
            width: `${getHealthBarWidth(cat.health)}px`,
            backgroundColor: getHealthBarColor(cat.health),
          }}
        />
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#fbebbb', position: 'relative', width: '100%', minHeight: '100vh', padding: '32px' }}>
      {/* CURRENCY DISPLAY - Top Left Corner */}
      <div style={{ position: 'absolute', left: '9px', top: '11px', backgroundColor: '#f9e39f', borderRadius: '30px', paddingLeft: '13px', paddingRight: '13px', paddingTop: '13px', paddingBottom: '13px', display: 'flex', alignItems: 'center', gap: '10px', height: '44px' }}>
        <div style={{ position: 'relative', flexShrink: 0, width: '34px', height: '34px' }}>
          <CoinIcon />
        </div>
        <p style={{ fontWeight: 'bold', fontSize: '25px', color: 'black', whiteSpace: 'nowrap' }}>{currency}</p>
      </div>

      {/* CAT CARDS GRID - 3x2 Layout */}
      <div style={{ position: 'absolute', left: '75px', top: '61px', width: '1129px' }}>
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

