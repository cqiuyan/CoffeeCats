import React, { useState, useEffect, useRef } from "react";
import { CatConfig } from "../config/cats";
import { CoinIcon } from "../components/svgs/CoinIcon";
import { Yarn } from "../components/tools/Yarn";
import { Toy } from "../components/tools/Toy";
import { Water } from "../components/tools/Water";
import { Food } from "../components/tools/Food";
import { Catnip } from "../components/tools/Catnip";
import { Poop } from "../components/tools/Poop";
import svgPaths from "../imports/svg-xfnbgzbzvt";

interface InteractProps {
  cat: CatConfig;
  currency: number;
  onBack: () => void;
  onHealthChange: (catId: number, health: number) => void;
}

type ToolType = "yarn" | "toy" | "water" | "food" | "catnip" | "poop";

interface ToolConfig {
  type: ToolType;
  name: string;
  component: React.ComponentType<any>;
  bgColor: string;
}

const TOOLS: ToolConfig[] = [
  { type: "yarn", name: "Yarn", component: Yarn, bgColor: "#fffbd1" },
  { type: "toy", name: "Toy", component: Toy, bgColor: "#f5e9bc" },
  { type: "water", name: "Water", component: Water, bgColor: "#fffbd1" },
  { type: "food", name: "Food", component: Food, bgColor: "#f5e9bc" },
  { type: "catnip", name: "Catnip", component: Catnip, bgColor: "#fffbd1" },
  { type: "poop", name: "Poop", component: Poop, bgColor: "#f5e9bc" },
];

function Group() {
  return (
    <div className="absolute inset-[0.84%_4.42%_13.78%_2.6%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 106">
        <g id="Group">
          <path d={svgPaths.p38514280} fill="var(--fill-0, #E4509C)" id="Vector" />
          <path d={svgPaths.p2baade00} fill="var(--fill-0, #E4509C)" id="Vector_2" />
          <path d={svgPaths.p24ee0000} fill="var(--fill-0, #E4509C)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p275d380} fill="var(--fill-0, #E4509C)" id="Vector_4" />
            <path d={svgPaths.p25eedf00} fill="var(--fill-0, #E4509C)" id="Vector_5" />
            <path d={svgPaths.p7395f80} fill="var(--fill-0, #E4509C)" id="Vector_6" />
          </g>
          <path d={svgPaths.p123a0280} fill="var(--fill-0, #E4509C)" id="Vector_7" />
          <path d={svgPaths.p36577a00} fill="var(--fill-0, #E4509C)" id="Vector_8" />
          <path d={svgPaths.p2e2a2800} fill="var(--fill-0, #E4509C)" id="Vector_9" />
          <path d={svgPaths.pdec9580} fill="var(--fill-0, #E4509C)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[-0.02%] left-0 right-0 top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 125">
        <g id="Group">
          <path d={svgPaths.p180b8300} fill="var(--fill-0, #F391BC)" id="Vector" />
          <path d={svgPaths.p9b72200} fill="var(--fill-0, #F391BC)" id="Vector_2" />
          <path d={svgPaths.p369fcf00} fill="var(--fill-0, #F391BC)" id="Vector_3" />
          <path d={svgPaths.p20e0c280} fill="var(--fill-0, #F391BC)" id="Vector_4" />
          <path d={svgPaths.p21dc0200} fill="var(--fill-0, #F391BC)" id="Vector_5" />
          <path d={svgPaths.p32eafa80} fill="var(--fill-0, #F391BC)" id="Vector_6" />
          <path d={svgPaths.pba67800} fill="var(--fill-0, #F391BC)" id="Vector_7" />
          <path d={svgPaths.p300cecc0} fill="var(--fill-0, #F391BC)" id="Vector_8" />
          <path d={svgPaths.p3e004a00} fill="var(--fill-0, #F391BC)" id="Vector_9" />
          <path d={svgPaths.p2d7a7ef0} fill="var(--fill-0, #F391BC)" id="Vector_10" />
          <path d={svgPaths.pc14f800} fill="var(--fill-0, #F391BC)" id="Vector_11" />
          <path d={svgPaths.p2c767c80} fill="var(--fill-0, #F391BC)" id="Vector_12" />
          <path d={svgPaths.p37392c80} fill="var(--fill-0, #F391BC)" id="Vector_13" />
          <path d={svgPaths.p3aa5a700} fill="var(--fill-0, #F391BC)" id="Vector_14" />
          <path d={svgPaths.p313c4c00} fill="var(--fill-0, #F391BC)" id="Vector_15" />
          <path d={svgPaths.p29218d40} fill="var(--fill-0, #F391BC)" id="Vector_16" />
          <path d={svgPaths.p3dac9880} fill="var(--fill-0, #F391BC)" id="Vector_17" />
          <path d={svgPaths.p10f75180} fill="var(--fill-0, #F391BC)" id="Vector_18" />
          <path d={svgPaths.p8328280} fill="var(--fill-0, #F391BC)" id="Vector_19" />
          <path d={svgPaths.p3749ab80} fill="var(--fill-0, #F391BC)" id="Vector_20" />
          <path d={svgPaths.p33436e80} fill="var(--fill-0, #F391BC)" id="Vector_21" />
          <path d={svgPaths.p1d76eb80} fill="var(--fill-0, #F391BC)" id="Vector_22" />
          <path d={svgPaths.p2d325880} fill="var(--fill-0, #F391BC)" id="Vector_23" />
        </g>
      </svg>
    </div>
  );
}

function ActiveItem() {
  return (
    <div 
      className="absolute overflow-clip" 
      style={{ height: '124px', left: '29.72px', top: '89.69px', width: '113px' }}
      data-name="Active Item"
    >
      <Group />
      <Group1 />
    </div>
  );
}

export function Interact({ cat, currency, onBack, onHealthChange }: InteractProps) {
  const [currentTool, setCurrentTool] = useState<ToolType>("yarn");
  const [isDragging, setIsDragging] = useState(false);
  const [draggedTool, setDraggedTool] = useState<ToolType | null>(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [health, setHealth] = useState(cat.health);
  const catRef = useRef<HTMLDivElement>(null);

  // Select random tool when component mounts or health changes
  useEffect(() => {
    const randomTool = TOOLS[Math.floor(Math.random() * TOOLS.length)];
    setCurrentTool(randomTool.type);
  }, [health]);

  // Decrease health over time
  useEffect(() => {
    const interval = setInterval(() => {
      setHealth((prev) => {
        const newHealth = Math.max(0, prev - 0.1);
        // Sync to parent but avoid render-phase warnings
        requestAnimationFrame(() => {
          onHealthChange(cat.id, newHealth);
        });
        return newHealth;
      });
    }, 100); // Decrease every 100ms

    return () => clearInterval(interval);
  }, [cat.id, onHealthChange]);

  const handleMouseDown = (toolType: ToolType, e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDraggedTool(toolType);
    setDragPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && draggedTool) {
      setDragPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging && draggedTool && catRef.current) {
      const rect = catRef.current.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;

      // Check if dropped on cat
      if (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      ) {
        // Check if correct tool
        if (draggedTool === currentTool) {
          const newHealth = Math.min(100, health + 10);
          setHealth(newHealth);
          onHealthChange(cat.id, newHealth);
        }
      }
    }
    setIsDragging(false);
    setDraggedTool(null);
  };

  const getHealthBarColor = (health: number) => {
    if (health < 50) return "#e7581f";
    return "#8bff3d";
  };

  const getHealthBarWidth = (health: number) => {
    return (health / 100) * 376.799;
  };

  const CatComponent = cat.component;

  return (
    <div 
      className="bg-white relative overflow-hidden"
      style={{ width: '1280px', height: '832px' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Background */}
      <div className="absolute bg-[#fffbd1] left-0 overflow-clip top-0" style={{ width: '1280px', height: '832px' }}>
        <div className="absolute bg-[#fff8ea] inset-0" />
      </div>

      {/* Active Tool Indicator - Top Left */}
      <ActiveItem />

      {/* Currency Display */}
      <div 
        className="absolute bg-[#f9e39f] box-border content-stretch flex gap-[10px] items-center justify-end overflow-clip p-[13px] rounded-[30px]" 
        style={{ height: '44px', left: '26px', top: '25px', width: '122px' }}
        data-name="Coins"
      >
        <p className="font-bold relative shrink-0 text-black text-nowrap whitespace-pre" style={{ fontSize: '25px' }}>{currency}</p>
      </div>

      {/* Coin Icon */}
      <div className="absolute top-[30px]" style={{ left: '37px', width: '34px', height: '34px' }} data-name="Layer_1">
        <CoinIcon />
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute bg-[#f9e39f] rounded-[30px] px-[20px] py-[10px] font-bold hover:bg-[#f6d87c] transition-colors"
        style={{ left: '26px', top: '160px', fontSize: '20px' }}
      >
        ← Back
      </button>

      {/* Cat */}
      <div
        ref={catRef}
        className="absolute top-[42.83px]"
        style={{ height: '490px', left: '50%', transform: 'translateX(-50%)', width: '355px' }}
        data-name="spot cat"
      >
        <div style={{ width: '100%', height: '100%' }}>
          <CatComponent />
        </div>
      </div>

      {/* Health Bar Background */}
      <div 
        className="absolute bg-[#d9d9d9] rounded-[15.443px]" 
        style={{ height: '20.075px', left: '463.09px', top: '561.88px', width: '376.799px' }}
        data-name="Health Gray" 
      />
      
      {/* Health Bar Fill */}
      <div
        className="absolute rounded-[15.443px]"
        style={{
          height: '20.075px',
          left: '464.7px',
          top: '561.88px',
          width: `${getHealthBarWidth(health)}px`,
          backgroundColor: getHealthBarColor(health),
        }}
        data-name="Health Green"
      />

      {/* Tools Bar */}
      <div 
        className="absolute bg-[#f9e39f] box-border content-end flex flex-wrap items-end justify-end overflow-clip p-[13px] rounded-[30px]" 
        style={{ gap: '14px', height: '187px', left: '26px', top: '611px', width: '1228px' }}
      >
        {TOOLS.map((tool, index) => {
          const ToolComponent = tool.component;
          return (
            <div
              key={tool.type}
              className="basis-0 grow relative rounded-[26px] shrink-0 cursor-grab active:cursor-grabbing"
              style={{ backgroundColor: tool.bgColor, height: '161px', minHeight: '1px', minWidth: '85px' }}
              onMouseDown={(e) => handleMouseDown(tool.type, e)}
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit]" style={{ width: '100%', height: '100%' }}>
                <div className="box-border content-stretch flex flex-col items-center justify-center p-[10px] relative w-full" style={{ gap: '10px', height: '161px' }}>
                  <ToolComponent />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dragged Tool */}
      {isDragging && draggedTool && (
        <div
          className="pointer-events-none fixed z-50"
          style={{
            left: `${dragPosition.x - 50}px`,
            top: `${dragPosition.y - 50}px`,
            opacity: 0.7,
          }}
        >
          {React.createElement(TOOLS.find((t) => t.type === draggedTool)?.component || Yarn)}
        </div>
      )}
    </div>
  );
}
