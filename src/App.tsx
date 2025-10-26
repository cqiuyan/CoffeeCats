import React, { useState, useCallback } from "react";
import { Selector } from "./screens/Selector";
import { Interact } from "./screens/Interact";
import { CATS, CatConfig } from "./config/cats";

type Screen = "selector" | "interact";

export default function App() {
  const [screen, setScreen] = useState<Screen>("selector");
  const [cats, setCats] = useState(CATS);
  const [currency, setCurrency] = useState(1339);
  const [selectedCat, setSelectedCat] = useState<CatConfig | null>(null);

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
          cat={selectedCat}
          currency={currency}
          onBack={handleBack}
          onHealthChange={handleHealthChange}
        />
      )}
    </div>
  );
}

