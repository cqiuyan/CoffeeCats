// Cat Collection Game UI - Figma Export with Labeled Components
// Main application showing collectable cats with progress tracking

import { Croissant } from "./components/svgs/Croissant";
import { CoinIcon } from "./components/svgs/CoinIcon";
import { Shadow } from "./components/svgs/Shadow";
import { StandingCat } from "./components/svgs/StandingCat";
import { SpotCat } from "./components/svgs/SpotCat";
import { GingerCat } from "./components/svgs/GingerCat";
import { BrownCat } from "./components/svgs/BrownCat";
import { Lock } from "./components/svgs/Lock";

export default function App() {
  return (
    <div className="bg-[#fbebbb] relative w-full min-h-screen p-8">
      {/* CURRENCY DISPLAY - Top Left Corner */}
      <div className="absolute left-[9px] top-[11px] bg-[#f9e39f] rounded-[30px] px-[13px] py-[13px] flex items-center gap-[10px] h-[44px]">
        <div className="relative shrink-0 size-[34px]">
          {/* Coin Icon SVG - from /components/svgs/CoinIcon.tsx */}
          <CoinIcon />
        </div>
        <p className="font-bold text-[25px] text-black whitespace-nowrap">1339</p>
      </div>

      {/* CAT CARDS GRID - 3x2 Layout */}
      <div className="absolute left-[75px] top-[61px] w-[1129px]">
        
        {/* ROW 1 - Top Three Cats */}
        
        {/* CAT 1 - White/Spotted Cat (UNLOCKED) */}
        <div className="absolute left-0 top-0 w-[321px] h-[321px]">
          {/* Card Background */}
          <div className="absolute bg-[#fffbd1] rounded-[20px] size-full overflow-hidden">
            <div className="absolute bg-[#fff8ea] inset-0" />
            
            {/* Shadow SVG - from /components/svgs/Shadow.tsx */}
            <div className="absolute h-[18px] left-[91px] top-[267px] w-[139px]">
              <Shadow />
            </div>
            
            {/* Spotted Cat SVG - from /components/svgs/SpotCat.tsx */}
            <div className="absolute h-[251px] left-[70px] top-[40px] w-[182px]">
              <SpotCat />
            </div>
            
            {/* Croissant Icon - from /components/svgs/Croissant.tsx */}
            <div className="absolute h-[40px] left-[18.97px] top-[18.68px] w-[61px]">
              <Croissant />
            </div>
          </div>
          
          {/* Progress Bar Background */}
          <div className="absolute bg-[#d9d9d9] h-[13px] left-[27.96px] rounded-[10px] top-[293px] w-[244px]" />
          {/* Progress Bar Fill (Full - Green) */}
          <div className="absolute bg-[#8bff3d] h-[13px] left-[29px] rounded-[10px] top-[293px] w-[202px]" />
        </div>

        {/* CAT 2 - Gray Standing Cat (UNLOCKED) */}
        <div className="absolute left-[404px] top-0 w-[321px] h-[321px]">
          {/* Card Background */}
          <div className="absolute bg-[#fffbd1] rounded-[20px] size-full overflow-hidden">
            <div className="absolute bg-[#fff8ea] inset-0" />
            
            {/* Shadow SVG - from /components/svgs/Shadow.tsx */}
            <div className="absolute h-[18px] left-[91px] top-[267px] w-[139px]">
              <Shadow />
            </div>
            
            {/* Standing Cat SVG - from /components/svgs/StandingCat.tsx */}
            <div className="absolute h-[239px] left-[68px] top-[41px] w-[186px]">
              <StandingCat />
            </div>
            
            {/* Croissant Icon - from /components/svgs/Croissant.tsx */}
            <div className="absolute h-[40px] left-[18.97px] top-[18.68px] w-[61px]">
              <Croissant />
            </div>
          </div>
          
          {/* Progress Bar Background */}
          <div className="absolute bg-[#d9d9d9] h-[13px] left-[27.96px] rounded-[10px] top-[293px] w-[244px]" />
          {/* Progress Bar Fill (Partial - Red) */}
          <div className="absolute bg-[#e7581f] h-[13px] left-[29px] rounded-[10px] top-[293px] w-[44px]" />
        </div>

        {/* CAT 3 - Brown/Siamese Cat (UNLOCKED) */}
        <div className="absolute left-[808px] top-0 w-[321px] h-[321px]">
          {/* Card Background */}
          <div className="absolute bg-[#fffbd1] rounded-[20px] size-full overflow-hidden">
            <div className="absolute bg-[#d2d2d2] inset-0" />
            
            {/* Shadow SVG - from /components/svgs/Shadow.tsx */}
            <div className="absolute h-[29px] left-[54px] top-[255px] w-[198px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 198 29">
                <g clipPath="url(#clip0_shadow_brown)" id="shadow">
                  <path d="M99 29C153.678 29 198 22.5081 198 14.5C198 6.49187 153.678 0 99 0C44.3218 0 0 6.49187 0 14.5C0 22.5081 44.3218 29 99 29Z" fill="var(--fill-0, #A59D90)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_shadow_brown">
                    <rect fill="white" height="29" width="198" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            {/* Brown Cat SVG - from /components/svgs/BrownCat.tsx */}
            <div className="absolute h-[221px] left-[38px] top-[63px] w-[244px]">
              <BrownCat />
            </div>
            
            {/* Croissant Icon - from /components/svgs/Croissant.tsx */}
            <div className="absolute h-[40px] left-[18.97px] top-[18.68px] w-[61px]">
              <Croissant />
            </div>
          </div>
          
          {/* Progress Bar Background */}
          <div className="absolute bg-[#d9d9d9] h-[13px] left-[27.96px] rounded-[10px] top-[293px] w-[244px]" />
          {/* Progress Bar Fill (Full - Green) */}
          <div className="absolute bg-[#8bff3d] h-[13px] left-[29px] rounded-[10px] top-[293px] w-[202px]" />
        </div>

        {/* ROW 2 - Bottom Three Cats */}

        {/* CAT 4 - Ginger/Orange Cat (LOCKED) */}
        <div className="absolute left-0 top-[377px] w-[321px] h-[321px]">
          {/* Card Background */}
          <div className="absolute bg-[#fffbd1] rounded-[20px] size-full overflow-hidden">
            <div className="absolute bg-[#d2d2d2] inset-0" />
            
            {/* Shadow SVG - from /components/svgs/Shadow.tsx */}
            <div className="absolute h-[18px] left-[91px] top-[267px] w-[139px]">
              <Shadow />
            </div>
            
            {/* Ginger Cat SVG - from /components/svgs/GingerCat.tsx */}
            <div className="absolute h-[246px] left-[63px] top-[36px] w-[195px]">
              <GingerCat />
            </div>
            
            {/* Lock Icon SVG - from /components/svgs/Lock.tsx */}
            <div className="absolute h-[72px] left-[17px] top-[16px] w-[52px]">
              <Lock />
            </div>
          </div>
          
          {/* Progress Bar Background */}
          <div className="absolute bg-[#d9d9d9] h-[13px] left-[27.96px] rounded-[10px] top-[293px] w-[244px]" />
          {/* Progress Bar Fill (None - Locked) */}
          <div className="absolute bg-[#8bff3d] h-[13px] left-[29px] rounded-[10px] top-[293px] w-[0px]" />
        </div>

        {/* CAT 5 - Gray Standing Cat #2 (UNLOCKED) */}
        <div className="absolute left-[404px] top-[377px] w-[321px] h-[321px]">
          {/* Card Background */}
          <div className="absolute bg-[#fffbd1] rounded-[20px] size-full overflow-hidden">
            <div className="absolute bg-[#fff8ea] inset-0" />
            
            {/* Shadow SVG - from /components/svgs/Shadow.tsx */}
            <div className="absolute h-[18px] left-[91px] top-[267px] w-[139px]">
              <Shadow />
            </div>
            
            {/* Standing Cat SVG - from /components/svgs/StandingCat.tsx */}
            <div className="absolute h-[239px] left-[68px] top-[41px] w-[186px]">
              <StandingCat />
            </div>
            
            {/* Croissant Icon - from /components/svgs/Croissant.tsx */}
            <div className="absolute h-[40px] left-[18.97px] top-[18.68px] w-[61px]">
              <Croissant />
            </div>
          </div>
          
          {/* Progress Bar Background */}
          <div className="absolute bg-[#d9d9d9] h-[13px] left-[27.96px] rounded-[10px] top-[293px] w-[244px]" />
          {/* Progress Bar Fill (Partial - Red) */}
          <div className="absolute bg-[#e7581f] h-[13px] left-[29px] rounded-[10px] top-[293px] w-[44px]" />
        </div>

        {/* CAT 6 - Gray Standing Cat #3 (UNLOCKED) */}
        <div className="absolute left-[808px] top-[377px] w-[321px] h-[321px]">
          {/* Card Background */}
          <div className="absolute bg-[#fffbd1] rounded-[20px] size-full overflow-hidden">
            <div className="absolute bg-[#fff8ea] inset-0" />
            
            {/* Shadow SVG - from /components/svgs/Shadow.tsx */}
            <div className="absolute h-[18px] left-[91px] top-[267px] w-[139px]">
              <Shadow />
            </div>
            
            {/* Standing Cat SVG - from /components/svgs/StandingCat.tsx */}
            <div className="absolute h-[239px] left-[68px] top-[41px] w-[186px]">
              <StandingCat />
            </div>
            
            {/* Croissant Icon - from /components/svgs/Croissant.tsx */}
            <div className="absolute h-[40px] left-[18.97px] top-[18.68px] w-[61px]">
              <Croissant />
            </div>
          </div>
          
          {/* Progress Bar Background */}
          <div className="absolute bg-[#d9d9d9] h-[13px] left-[27.96px] rounded-[10px] top-[293px] w-[244px]" />
          {/* Progress Bar Fill (Full - Green) */}
          <div className="absolute bg-[#8bff3d] h-[13px] left-[29px] rounded-[10px] top-[293px] w-[202px]" />
        </div>
      </div>
    </div>
  );
}
