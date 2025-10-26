import React, { useState, useCallback, useEffect } from "react";
import { Selector } from "./screens/Selector";
import { Interact } from "./screens/Interact";
import { CATS, CatConfig } from "./config/cats";

type Screen = "selector" | "interact";

export default function App() {
  const [screen, setScreen] = useState<Screen>("selector");
  const [cats, setCats] = useState(CATS);
  const [currency, setCurrency] = useState(1339);
  const [selectedCat, setSelectedCat] = useState<CatConfig | null>(null);

  // Decrease health for all unlocked cats over time
  useEffect(() => {
    const interval = setInterval(() => {
      setCats((prevCats) =>
        prevCats.map((cat) => {
          if (cat.unlocked && cat.health > 0) {
            return { ...cat, health: Math.max(0, cat.health - 0.5) };
          }
          return cat;
        })
      );
    }, 500); // Decrease every 500ms (less frequent updates)

    return () => clearInterval(interval);
  }, []);

  const handleCatClick = useCallback((cat: CatConfig) => {
    if (cat.unlocked) {
      setSelectedCat(cat);
      setScreen("interact");
    }
  }, []);

  const handleBack = useCallback(() => {
    setScreen("selector");
  }, []);

  const handleHealthChange = useCallback((catId: number, health: number) => {
    setCats((prevCats) =>
      prevCats.map((c) => (c.id === catId ? { ...c, health } : c))
    );
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {screen === "selector" && (
        <Selector
          cats={cats}
          currency={currency}
          setCats={setCats}
          setCurrency={setCurrency}
          onCatClick={handleCatClick}
        />
      )}
      {screen === "interact" && selectedCat && (
        <Interact
          cat={cats.find(c => c.id === selectedCat.id) || selectedCat}
          currency={currency}
          setCurrency={setCurrency}
          onBack={handleBack}
          onHealthChange={handleHealthChange}
        />
      )}
    </div>
  );
}

