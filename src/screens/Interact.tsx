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
  setCurrency: React.Dispatch<React.SetStateAction<number>>;
  onBack: () => void;
  onHealthChange: (catId: number, health: number) => void;
}

type ToolType = "yarn" | "toy" | "water" | "food" | "catnip" | "poop";

interface ToolConfig {
  type: ToolType;
  name: string;
  component: React.ComponentType<any>;
  bgColor: string;
  cost: number;
}

const TOOLS: ToolConfig[] = [
  { type: "yarn", name: "Yarn", component: Yarn, bgColor: "#fffbd1", cost: 1 },
  { type: "toy", name: "Toy", component: Toy, bgColor: "#f5e9bc", cost: 2 },
  { type: "water", name: "Water", component: Water, bgColor: "#fffbd1", cost: 3 },
  { type: "food", name: "Food", component: Food, bgColor: "#f5e9bc", cost: 4 },
  { type: "catnip", name: "Catnip", component: Catnip, bgColor: "#fffbd1", cost: 5 },
  { type: "poop", name: "Poop", component: Poop, bgColor: "#f5e9bc", cost: 6 },
];

function Group() {
  return (
    <div style={{ position: 'absolute', top: '0.84%', right: '4.42%', bottom: '13.78%', left: '2.6%' }} data-name="Group">
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 106 106">
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
    <div style={{ position: 'absolute', bottom: '-0.02%', left: 0, right: 0, top: 0 }} data-name="Group">
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 113 125">
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

function ActiveItem({ tool }: { tool: ToolType }) {
  const ToolComponent = TOOLS.find((t) => t.type === tool)?.component || Yarn;
  
  return (
    <div 
      style={{ position: 'absolute', overflow: 'clip', height: '124px', left: '29.72px', top: '89.69px', width: '113px' }}
      data-name="Active Item"
    >
      <ToolComponent />
    </div>
  );
}

export function Interact({ cat, currency, setCurrency, onBack, onHealthChange }: InteractProps) {
  const [currentTool, setCurrentTool] = useState<ToolType>("yarn");
  const [isDragging, setIsDragging] = useState(false);
  const [draggedTool, setDraggedTool] = useState<ToolType | null>(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [health, setHealth] = useState(cat.health);
  const catRef = useRef<HTMLDivElement>(null);

  // Sync health from prop (parent controls health decrease globally)
  useEffect(() => {
    setHealth(cat.health);
  }, [cat.health]);

  // Select random tool when component mounts
  useEffect(() => {
    const randomTool = TOOLS[Math.floor(Math.random() * TOOLS.length)];
    setCurrentTool(randomTool.type);
  }, []);

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
          const toolConfig = TOOLS.find(t => t.type === draggedTool);
          if (toolConfig && currency >= toolConfig.cost) {
            // Deduct cost
            setCurrency(prev => prev - toolConfig.cost);
            
            // Increase health - parent will update the state
            const newHealth = Math.min(100, health + 10);
            onHealthChange(cat.id, newHealth);
            
            // Change to a new random tool after successful use
            const availableTools = TOOLS.filter(t => t.type !== currentTool);
            const randomTool = availableTools[Math.floor(Math.random() * availableTools.length)];
            setCurrentTool(randomTool.type);
          } else if (toolConfig && currency < toolConfig.cost) {
            alert(`Not enough coins! You need ${toolConfig.cost} coins to use ${toolConfig.name}.`);
          }
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

  const getThoughtBubbleColor = (health: number) => {
    // Interpolate from vibrant red (0) to vibrant green (100)
    const red = Math.round(255 - (health / 100) * 180);
    const green = Math.round(50 + (health / 100) * 205);
    const blue = Math.round(30 - (health / 100) * 30);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const getThoughtBubbleEmoji = (health: number) => {
    if (health >= 80) return "😸"; // Very happy
    if (health >= 60) return "😊"; // Happy
    if (health >= 40) return "😐"; // Neutral
    if (health >= 20) return "😿"; // Sad
    return "😢"; // Very sad
  };

  const CatComponent = cat.component;

  return (
    <div 
      style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden', width: '1280px', height: '832px' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Background */}
      <div style={{ position: 'absolute', backgroundColor: '#fffbd1', left: 0, overflow: 'clip', top: 0, width: '1280px', height: '832px' }}>
        <div style={{ position: 'absolute', backgroundColor: '#fff8ea', top: 0, right: 0, bottom: 0, left: 0 }} />
      </div>

      {/* Active Tool Indicator - Top Left */}
      <ActiveItem tool={currentTool} />

      {/* Currency Display */}
      <div 
        style={{ position: 'absolute', backgroundColor: '#f9e39f', boxSizing: 'border-box', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'flex-end', overflow: 'clip', padding: '13px', borderRadius: '30px', height: '44px', left: '26px', top: '25px', width: '122px' }}
        data-name="Coins"
      >
        <p style={{ fontWeight: 'bold', position: 'relative', flexShrink: 0, color: 'black', whiteSpace: 'pre', fontSize: '25px' }}>{currency}</p>
      </div>

      {/* Coin Icon */}
      <div style={{ position: 'absolute', top: '30px', left: '37px', width: '34px', height: '34px' }} data-name="Layer_1">
        <CoinIcon />
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        style={{ position: 'absolute', backgroundColor: '#f9e39f', borderRadius: '30px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', fontWeight: 'bold', right: '26px', top: '25px', fontSize: '20px', border: 'none', cursor: 'pointer' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f6d87c'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f9e39f'; }}
      >
        ← Back
      </button>

      {/* Cat */}
      <div
        ref={catRef}
        style={{ position: 'absolute', top: '42.83px', height: '490px', left: '50%', transform: 'translateX(-50%)', width: '355px' }}
        data-name="spot cat"
      >
        <div style={{ width: '100%', height: '100%' }}>
          <CatComponent />
        </div>
        
        {/* Thought Bubble */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '50px', 
            left: 'calc(100% + 30px)', 
            transform: 'translateY(-50%)',
            backgroundColor: getThoughtBubbleColor(health),
            borderRadius: '20px',
            padding: '15px 20px',
            fontSize: '40px',
            transition: 'background-color 0.5s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 10
          }}
        >
          {getThoughtBubbleEmoji(health)}
          
          {/* Speech bubble tail pointing left */}
          <div 
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '15px solid transparent',
              borderBottom: '15px solid transparent',
              borderRight: `20px solid ${getThoughtBubbleColor(health)}`,
              transition: 'border-right-color 0.5s ease'
            }}
          />
          
          {/* Small bubble tail accent */}
          <div 
            style={{
              position: 'absolute',
              left: '-35px',
              top: '60%',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: getThoughtBubbleColor(health),
              transition: 'background-color 0.5s ease'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              left: '-48px',
              top: '70%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: getThoughtBubbleColor(health),
              transition: 'background-color 0.5s ease'
            }}
          />
        </div>
      </div>

      {/* Health Bar Background */}
      <div 
        style={{ position: 'absolute', backgroundColor: '#d9d9d9', borderRadius: '15.443px', height: '20.075px', left: '463.09px', top: '561.88px', width: '376.799px' }}
        data-name="Health Gray" 
      />
      
      {/* Health Bar Fill */}
      <div
        style={{
          position: 'absolute',
          borderRadius: '15.443px',
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
        style={{ position: 'absolute', backgroundColor: '#f9e39f', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'flex-end', overflow: 'clip', padding: '13px', borderRadius: '30px', gap: '14px', height: '187px', left: '26px', top: '611px', width: '1228px' }}
      >
        {TOOLS.map((tool, index) => {
          const ToolComponent = tool.component;
          const canAfford = currency >= tool.cost;
          return (
            <div
              key={tool.type}
              style={{ flexBasis: 0, flexGrow: 1, position: 'relative', borderRadius: '26px', flexShrink: 0, cursor: canAfford ? 'grab' : 'not-allowed', backgroundColor: tool.bgColor, height: '161px', minHeight: '1px', minWidth: '85px', opacity: canAfford ? 1 : 0.5 }}
              onMouseDown={(e) => canAfford && handleMouseDown(tool.type, e)}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'clip', borderRadius: 'inherit', width: '100%', height: '100%' }}>
                <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px', position: 'relative', width: '100%', gap: '10px', height: '161px' }}>
                  <ToolComponent />
                </div>
              </div>
              {/* Cost Label */}
              <div style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%)', backgroundColor: canAfford ? '#f9e39f' : '#ffcccc', borderRadius: '10px', padding: '2px 8px', fontSize: '12px', fontWeight: 'bold', color: 'black' }}>
                {tool.cost}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dragged Tool */}
      {isDragging && draggedTool && (
        <div
          style={{
            pointerEvents: 'none',
            position: 'fixed',
            zIndex: 50,
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

