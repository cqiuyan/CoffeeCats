/**
 * LABELED CAT GAME UI COMPONENTS
 * 
 * This file contains all the game UI components with descriptive labels.
 * All SVG paths are referenced from: /imports/svg-gkcpqnz0x5.ts
 * 
 * Component Structure:
 * - CoinIcon: Score indicator icon (Layer4)
 * - ScoreDisplay: Shows "1339" score (Frame3)
 * - SpotCat: Main cat character with spots
 * - ProgressBarBackground: Gray progress bar container
 * - ProgressBarFill: Green fill showing 83% progress
 * - YarnBallDecoration: Pink yarn ball (Layer5)
 * - CroissantIcon: Rotated croissant item (Layer6)
 * - InventorySlots: Bottom row of item slots (Frame1)
 */

import svgPaths from "../imports/svg-gkcpqnz0x5";

// ========================================
// CROISSANT ITEMS (Collected Food Items)
// Uses SVG paths for croissant illustrations
// ========================================

function CroissantSlot1() {
  return (
    <div className="basis-0 bg-[#fffbd1] grow h-[161px] min-h-px min-w-[85px] relative rounded-[26px] shrink-0">
      <div className="min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[161px] items-start min-w-inherit p-[10px] relative w-full">
          {/* Croissant Icon - SVG paths: p32f64b00, p2ef70, p32f56700, etc. */}
          <div className="absolute h-[70.801px] left-[calc(50%+3.652px)] top-[calc(50%+0.9px)] translate-x-[-50%] translate-y-[-50%] w-[107.971px]" data-name="Croissant_Icon_1">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 71">
              <g clipPath="url(#clip0_1_284)" id="Layer_1">
                <path d={svgPaths.p32f64b00} fill="var(--fill-0, #DA7F29)" id="Vector" />
                <path d={svgPaths.p2ef70} fill="var(--fill-0, #F09D3A)" id="Vector_2" />
                <path d={svgPaths.p32f56700} fill="var(--fill-0, #C26529)" id="Vector_3" />
                <path d={svgPaths.p367d97f0} fill="var(--fill-0, #F09D3A)" id="Vector_4" />
                <path d={svgPaths.p2df9e700} fill="var(--fill-0, #DA7F29)" id="Vector_5" />
                <path d={svgPaths.p19e7c600} fill="var(--fill-0, #F09D3A)" id="Vector_6" />
                <path d={svgPaths.p1b965e80} fill="var(--fill-0, #C26529)" id="Vector_7" />
                <path d={svgPaths.p5941e80} fill="var(--fill-0, #F09D3A)" id="Vector_8" />
                <path d={svgPaths.p21869c00} fill="var(--fill-0, #F09D3A)" id="Vector_9" />
                <path d={svgPaths.p22596b80} fill="var(--fill-0, #DA7F29)" id="Vector_10" />
                <path d={svgPaths.p1991a200} fill="var(--fill-0, #DA7F29)" id="Vector_11" />
                <path d={svgPaths.p3bb14900} fill="var(--fill-0, #C26529)" id="Vector_12" />
                <path d={svgPaths.pf378b80} fill="var(--fill-0, #C26529)" id="Vector_13" />
                <path d={svgPaths.p22f42500} fill="var(--fill-0, #F09D3A)" id="Vector_14" />
                <g id="Vector_15"></g>
                <path d={svgPaths.p19a58080} fill="var(--fill-0, #C26529)" id="Vector_16" />
                <path d={svgPaths.p519fd00} fill="var(--fill-0, #DA7F29)" id="Vector_17" />
                <path d={svgPaths.p3f05e100} fill="var(--fill-0, #F2B35B)" id="Vector_18" />
                <path d={svgPaths.pcf3eb40} fill="var(--fill-0, #F2B35B)" id="Vector_19" />
                <path d={svgPaths.p26522830} fill="var(--fill-0, #F2B35B)" id="Vector_20" />
                <path d={svgPaths.pf760a00} fill="var(--fill-0, #F2B35B)" id="Vector_21" />
                <path d={svgPaths.pc91c3e0} fill="var(--fill-0, #F2B35B)" id="Vector_22" />
              </g>
              <defs>
                <clipPath id="clip0_1_284">
                  <rect fill="white" height="70.8009" width="107.971" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CroissantSlot2() {
  return (
    <div className="basis-0 bg-[#f5e9bc] grow h-[161px] min-h-px min-w-[85px] relative rounded-[26px] shrink-0">
      <div className="min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[161px] items-start min-w-inherit p-[10px] relative w-full">
          {/* Croissant Icon Variant 2 */}
          <div className="absolute h-[70.801px] left-[calc(50%+3.652px)] top-[calc(50%+0.9px)] translate-x-[-50%] translate-y-[-50%] w-[107.971px]" data-name="Croissant_Icon_2">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 71">
              <g clipPath="url(#clip0_1_284)" id="Layer_1">
                <path d={svgPaths.p32f64b00} fill="var(--fill-0, #DA7F29)" id="Vector" />
                <path d={svgPaths.p2ef70} fill="var(--fill-0, #F09D3A)" id="Vector_2" />
                <path d={svgPaths.p32f56700} fill="var(--fill-0, #C26529)" id="Vector_3" />
                <path d={svgPaths.p367d97f0} fill="var(--fill-0, #F09D3A)" id="Vector_4" />
                <path d={svgPaths.p2df9e700} fill="var(--fill-0, #DA7F29)" id="Vector_5" />
                <path d={svgPaths.p19e7c600} fill="var(--fill-0, #F09D3A)" id="Vector_6" />
                <path d={svgPaths.p1b965e80} fill="var(--fill-0, #C26529)" id="Vector_7" />
                <path d={svgPaths.p5941e80} fill="var(--fill-0, #F09D3A)" id="Vector_8" />
                <path d={svgPaths.p21869c00} fill="var(--fill-0, #F09D3A)" id="Vector_9" />
                <path d={svgPaths.p22596b80} fill="var(--fill-0, #DA7F29)" id="Vector_10" />
                <path d={svgPaths.p1991a200} fill="var(--fill-0, #DA7F29)" id="Vector_11" />
                <path d={svgPaths.p3bb14900} fill="var(--fill-0, #C26529)" id="Vector_12" />
                <path d={svgPaths.pf378b80} fill="var(--fill-0, #C26529)" id="Vector_13" />
                <path d={svgPaths.p22f42500} fill="var(--fill-0, #F09D3A)" id="Vector_14" />
                <g id="Vector_15"></g>
                <path d={svgPaths.p19a58080} fill="var(--fill-0, #C26529)" id="Vector_16" />
                <path d={svgPaths.p519fd00} fill="var(--fill-0, #DA7F29)" id="Vector_17" />
                <path d={svgPaths.p3f05e100} fill="var(--fill-0, #F2B35B)" id="Vector_18" />
                <path d={svgPaths.pcf3eb40} fill="var(--fill-0, #F2B35B)" id="Vector_19" />
                <path d={svgPaths.p26522830} fill="var(--fill-0, #F2B35B)" id="Vector_20" />
                <path d={svgPaths.pf760a00} fill="var(--fill-0, #F2B35B)" id="Vector_21" />
                <path d={svgPaths.pc91c3e0} fill="var(--fill-0, #F2B35B)" id="Vector_22" />
              </g>
              <defs>
                <clipPath id="clip0_1_284">
                  <rect fill="white" height="70.8009" width="107.971" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CroissantSlot3() {
  return (
    <div className="basis-0 bg-[#fffbd1] grow h-[161px] min-h-px min-w-[85px] relative rounded-[26px] shrink-0">
      <div className="min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[161px] items-start min-w-inherit p-[10px] relative w-full">
          {/* Croissant Icon Variant 3 - Different SVG paths: p35bd8000, p367bd040, etc. */}
          <div className="absolute h-[70.801px] left-[calc(50%+3.652px)] top-[calc(50%+0.9px)] translate-x-[-50%] translate-y-[-50%] w-[107.971px]" data-name="Croissant_Icon_3">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 71">
              <g clipPath="url(#clip0_1_341)" id="Layer_1">
                <path d={svgPaths.p32f64b00} fill="var(--fill-0, #DA7F29)" id="Vector" />
                <path d={svgPaths.p2ef70} fill="var(--fill-0, #F09D3A)" id="Vector_2" />
                <path d={svgPaths.p35bd8000} fill="var(--fill-0, #C26529)" id="Vector_3" />
                <path d={svgPaths.p367bd040} fill="var(--fill-0, #F09D3A)" id="Vector_4" />
                <path d={svgPaths.p14461f80} fill="var(--fill-0, #DA7F29)" id="Vector_5" />
                <path d={svgPaths.p23e3a0f0} fill="var(--fill-0, #F09D3A)" id="Vector_6" />
                <path d={svgPaths.p1b965e80} fill="var(--fill-0, #C26529)" id="Vector_7" />
                <path d={svgPaths.p5941e80} fill="var(--fill-0, #F09D3A)" id="Vector_8" />
                <path d={svgPaths.pd85da80} fill="var(--fill-0, #F09D3A)" id="Vector_9" />
                <path d={svgPaths.p2370c80} fill="var(--fill-0, #DA7F29)" id="Vector_10" />
                <path d={svgPaths.p1991a200} fill="var(--fill-0, #DA7F29)" id="Vector_11" />
                <path d={svgPaths.p3bb14900} fill="var(--fill-0, #C26529)" id="Vector_12" />
                <path d={svgPaths.pf378b80} fill="var(--fill-0, #C26529)" id="Vector_13" />
                <path d={svgPaths.p22f42500} fill="var(--fill-0, #F09D3A)" id="Vector_14" />
                <g id="Vector_15"></g>
                <path d={svgPaths.p2ef63900} fill="var(--fill-0, #C26529)" id="Vector_16" />
                <path d={svgPaths.p519fd00} fill="var(--fill-0, #DA7F29)" id="Vector_17" />
                <path d={svgPaths.p3f05e100} fill="var(--fill-0, #F2B35B)" id="Vector_18" />
                <path d={svgPaths.p1d7c0a00} fill="var(--fill-0, #F2B35B)" id="Vector_19" />
                <path d={svgPaths.p2b2b0480} fill="var(--fill-0, #F2B35B)" id="Vector_20" />
                <path d={svgPaths.pf760a00} fill="var(--fill-0, #F2B35B)" id="Vector_21" />
                <path d={svgPaths.p7131580} fill="var(--fill-0, #F2B35B)" id="Vector_22" />
              </g>
              <defs>
                <clipPath id="clip0_1_341">
                  <rect fill="white" height="70.8009" width="107.971" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CroissantSlot4() {
  return (
    <div className="basis-0 bg-[#f5e9bc] grow h-[161px] min-h-px min-w-[85px] relative rounded-[26px] shrink-0">
      <div className="min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[161px] items-start min-w-inherit p-[10px] relative w-full">
          {/* Croissant Icon Variant 4 */}
          <div className="absolute h-[70.801px] left-[calc(50%+3.652px)] top-[calc(50%+0.9px)] translate-x-[-50%] translate-y-[-50%] w-[107.971px]" data-name="Croissant_Icon_4">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 71">
              <g clipPath="url(#clip0_1_341)" id="Layer_1">
                <path d={svgPaths.p32f64b00} fill="var(--fill-0, #DA7F29)" id="Vector" />
                <path d={svgPaths.p2ef70} fill="var(--fill-0, #F09D3A)" id="Vector_2" />
                <path d={svgPaths.p35bd8000} fill="var(--fill-0, #C26529)" id="Vector_3" />
                <path d={svgPaths.p367bd040} fill="var(--fill-0, #F09D3A)" id="Vector_4" />
                <path d={svgPaths.p14461f80} fill="var(--fill-0, #DA7F29)" id="Vector_5" />
                <path d={svgPaths.p23e3a0f0} fill="var(--fill-0, #F09D3A)" id="Vector_6" />
                <path d={svgPaths.p1b965e80} fill="var(--fill-0, #C26529)" id="Vector_7" />
                <path d={svgPaths.p5941e80} fill="var(--fill-0, #F09D3A)" id="Vector_8" />
                <path d={svgPaths.pd85da80} fill="var(--fill-0, #F09D3A)" id="Vector_9" />
                <path d={svgPaths.p2370c80} fill="var(--fill-0, #DA7F29)" id="Vector_10" />
                <path d={svgPaths.p1991a200} fill="var(--fill-0, #DA7F29)" id="Vector_11" />
                <path d={svgPaths.p3bb14900} fill="var(--fill-0, #C26529)" id="Vector_12" />
                <path d={svgPaths.pf378b80} fill="var(--fill-0, #C26529)" id="Vector_13" />
                <path d={svgPaths.p22f42500} fill="var(--fill-0, #F09D3A)" id="Vector_14" />
                <g id="Vector_15"></g>
                <path d={svgPaths.p2ef63900} fill="var(--fill-0, #C26529)" id="Vector_16" />
                <path d={svgPaths.p519fd00} fill="var(--fill-0, #DA7F29)" id="Vector_17" />
                <path d={svgPaths.p3f05e100} fill="var(--fill-0, #F2B35B)" id="Vector_18" />
                <path d={svgPaths.p1d7c0a00} fill="var(--fill-0, #F2B35B)" id="Vector_19" />
                <path d={svgPaths.p2b2b0480} fill="var(--fill-0, #F2B35B)" id="Vector_20" />
                <path d={svgPaths.pf760a00} fill="var(--fill-0, #F2B35B)" id="Vector_21" />
                <path d={svgPaths.p7131580} fill="var(--fill-0, #F2B35B)" id="Vector_22" />
              </g>
              <defs>
                <clipPath id="clip0_1_341">
                  <rect fill="white" height="70.8009" width="107.971" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// EMPTY INVENTORY SLOTS
// Placeholder slots for future items
// ========================================

function EmptySlot1() {
  return (
    <div className="basis-0 bg-[#fffbd1] grow h-[161px] min-h-px min-w-[85px] relative rounded-[26px] shrink-0">
      <div className="min-w-inherit size-full">
        <div className="h-[161px] min-w-inherit w-full" />
      </div>
    </div>
  );
}

function EmptySlot2() {
  return (
    <div className="basis-0 bg-[#f5e9bc] grow h-[161px] min-h-px min-w-[85px] relative rounded-[26px] shrink-0">
      <div className="min-w-inherit size-full">
        <div className="h-[161px] min-w-inherit w-full" />
      </div>
    </div>
  );
}

// ========================================
// BOTTOM INVENTORY BAR
// Contains 6 slots: 2 empty + 4 croissants
// SVG References in croissant components
// ========================================

function InventoryBar() {
  return (
    <div className="absolute bg-[#f9e39f] box-border content-end flex flex-wrap gap-[14px] h-[187px] items-end justify-end left-[26px] overflow-clip p-[13px] rounded-[30px] top-[611px] w-[1228px]">
      <EmptySlot1 />
      <EmptySlot2 />
      <CroissantSlot1 />
      <CroissantSlot2 />
      <CroissantSlot3 />
      <CroissantSlot4 />
    </div>
  );
}

// ========================================
// SCORE DISPLAY
// Shows current score: 1339
// ========================================

function ScoreDisplay() {
  return (
    <div className="absolute bg-[#f9e39f] box-border content-stretch flex gap-[10px] h-[44px] items-center justify-end left-[26px] overflow-clip p-[13px] rounded-[30px] top-[25px] w-[122px]">
      <p className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[25px] text-black text-nowrap whitespace-pre">1339</p>
    </div>
  );
}

// ========================================
// COIN ICON
// Yellow coin icon next to score
// SVG Paths: p13cb8c00, p1d32c400, p2b79eda2, p3f332a00
// ========================================

function CoinIcon() {
  return (
    <div className="absolute left-[37px] size-[34px] top-[30px]" data-name="Coin_Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_1_365)" id="Layer_1">
          {/* Main coin circle */}
          <path d={svgPaths.p13cb8c00} fill="var(--fill-0, #F6B82A)" id="Coin_Circle" />
          {/* Coin details */}
          <path d={svgPaths.p1d32c400} id="Coin_Detail_1" stroke="var(--stroke-0, #594A42)" strokeMiterlimit="10" strokeWidth="2.07338" />
          <path d={svgPaths.p2b79eda2} fill="var(--fill-0, #594A42)" id="Coin_Detail_2" stroke="var(--stroke-0, #594A42)" strokeMiterlimit="10" strokeWidth="0.691127" />
          <path d={svgPaths.p3f332a00} id="Coin_Detail_3" stroke="var(--stroke-0, #594A42)" strokeMiterlimit="10" strokeWidth="2.07338" />
        </g>
        <defs>
          <clipPath id="clip0_1_365">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ========================================
// MAIN CAT CHARACTER
// Spotted cat sitting in center
// SVG Paths: p25b82900 (outline), p1534cd00 (body), etc.
// Complex multi-layer illustration with spots and features
// ========================================

function SpotCat() {
  return (
    <div className="absolute h-[490px] left-1/2 top-[42.83px] translate-x-[-50%] w-[355px]" data-name="Main_Cat_Character">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 355 490">
        <g clipPath="url(#clip0_1_308)" id="spot_cat">
          {/* Cat body and outline - Primary paths */}
          <g id="Cat_Body">
            <path d={svgPaths.p25b82900} fill="var(--fill-0, #60594C)" />
            <path d={svgPaths.p1534cd00} fill="#F9EED9" />
            <path d={svgPaths.p3f59700} fill="#F9EED9" />
            <path d={svgPaths.p7b5aa60} stroke="var(--stroke-0, #60594C)" strokeMiterlimit="10" strokeWidth="0.5" />
          </g>
          {/* Cat spots - Multiple spot layers */}
          <path d={svgPaths.p3e90d100} fill="var(--fill-0, #60594C)" id="Spot_1" />
          <path d={svgPaths.p2da83100} fill="var(--fill-0, #60594C)" id="Spot_2" />
          <path d={svgPaths.p1432fb00} fill="var(--fill-0, #60594C)" id="Spot_3" />
          <path d={svgPaths.p19cb7c00} fill="var(--fill-0, #60594C)" id="Spot_4" />
          <path d={svgPaths.p20dee380} fill="var(--fill-0, #60594C)" id="Spot_5" />
          <path d={svgPaths.p3f3de240} fill="var(--fill-0, #60594C)" id="Spot_6" />
          <path d={svgPaths.p1f598200} fill="var(--fill-0, #60594C)" id="Spot_7" />
          <path d={svgPaths.p3e09fc00} fill="var(--fill-0, #60594C)" id="Spot_8" />
          {/* Whiskers group 1 */}
          <g id="Whiskers_Group_1">
            <path d={svgPaths.pe897800} fill="var(--fill-0, #726658)" id="Whisker_1" />
            <path d={svgPaths.p1b424800} fill="var(--fill-0, #726658)" id="Whisker_2" />
          </g>
          {/* Whiskers group 2 */}
          <g id="Whiskers_Group_2">
            <path d={svgPaths.p39450000} fill="var(--fill-0, #726658)" id="Whisker_3" />
            <path d={svgPaths.p13d4cc00} fill="var(--fill-0, #726658)" id="Whisker_4" />
          </g>
          {/* Whiskers group 3 */}
          <g id="Whiskers_Group_3">
            <path d={svgPaths.p38001f60} fill="var(--fill-0, #726658)" id="Whisker_5" />
            <path d={svgPaths.p2a085cf0} fill="var(--fill-0, #726658)" id="Whisker_6" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_308">
            <rect fill="white" height="490" width="355" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ========================================
// PROGRESS BAR COMPONENTS
// Gray background bar with green fill (83% full)
// ========================================

function ProgressBarBackground() {
  return (
    <div className="absolute bg-[#d9d9d9] h-[20.075px] left-[463.09px] rounded-[15.443px] top-[561.88px] w-[376.799px]" />
  );
}

function ProgressBarFill() {
  return (
    <div className="absolute bg-[#8bff3d] h-[20.075px] left-[464.7px] rounded-[15.443px] top-[561.88px] w-[311.94px]" />
  );
}

// ========================================
// YARN BALL DECORATION
// Pink decorative yarn ball (left side)
// SVG Paths: Multiple layers forming yarn ball
// ========================================

function YarnBallDecoration() {
  return (
    <div className="absolute h-[124px] left-[76px] overflow-clip top-[645px] w-[113px]" data-name="Yarn_Ball_Decoration">
      {/* Inner yarn details - SVG paths p38514280, p2baade00, etc. */}
      <div className="absolute inset-[0.84%_4.42%_13.78%_2.6%]" data-name="Yarn_Inner_Details">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 106">
          <g id="Group">
            <path d={svgPaths.p38514280} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_1" />
            <path d={svgPaths.p2baade00} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_2" />
            <path d={svgPaths.p24ee0000} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_3" />
            <g id="Yarn_Strand_Group">
              <path d={svgPaths.p275d380} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_4" />
              <path d={svgPaths.p25eedf00} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_5" />
              <path d={svgPaths.p7395f80} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_6" />
            </g>
            <path d={svgPaths.p123a0280} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_7" />
            <path d={svgPaths.p36577a00} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_8" />
            <path d={svgPaths.p2e2a2800} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_9" />
            <path d={svgPaths.pdec9580} fill="var(--fill-0, #E4509C)" id="Yarn_Strand_10" />
          </g>
        </svg>
      </div>
      {/* Outer yarn structure */}
      <div className="absolute bottom-[-0.02%] left-0 right-0 top-0" data-name="Yarn_Outer_Structure">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 125">
          <g id="Group">
            <path d={svgPaths.p180b8300} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_1" />
            <path d={svgPaths.p9b72200} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_2" />
            <path d={svgPaths.p369fcf00} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_3" />
            <path d={svgPaths.p20e0c280} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_4" />
            <path d={svgPaths.p21dc0200} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_5" />
            <path d={svgPaths.p32eafa80} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_6" />
            <path d={svgPaths.pba67800} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_7" />
            <path d={svgPaths.p300cecc0} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_8" />
            <path d={svgPaths.p3e004a00} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_9" />
            <path d={svgPaths.p2d7a7ef0} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_10" />
            <path d={svgPaths.pc14f800} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_11" />
            <path d={svgPaths.p2c767c80} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_12" />
            <path d={svgPaths.p37392c80} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_13" />
            <path d={svgPaths.p3aa5a700} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_14" />
            <path d={svgPaths.p313c4c00} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_15" />
            <path d={svgPaths.p29218d40} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_16" />
            <path d={svgPaths.p3dac9880} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_17" />
            <path d={svgPaths.p10f75180} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_18" />
            <path d={svgPaths.p8328280} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_19" />
            <path d={svgPaths.p3749ab80} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_20" />
            <path d={svgPaths.p33436e80} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_21" />
            <path d={svgPaths.p1d76eb80} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_22" />
            <path d={svgPaths.p2d325880} fill="var(--fill-0, #F391BC)" id="Yarn_Outer_23" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// ========================================
// ROTATED CROISSANT (Decorative)
// Left side croissant rotated 30.418 degrees
// SVG Paths: Complex croissant illustration
// ========================================

function RotatedCroissant() {
  return (
    <div className="h-[140.003px] relative w-[107.8px]" data-name="Rotated_Croissant">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 140">
        <g clipPath="url(#clip0_1_219)" id="Layer_1">
          {/* Croissant layers - different colors for depth */}
          <path d={svgPaths.pf266d00} fill="var(--fill-0, #996A6E)" id="Croissant_Shadow" />
          <path d={svgPaths.p7e19340} fill="var(--fill-0, #F7BA7A)" id="Croissant_Layer_1" />
          <path d={svgPaths.p254efc80} fill="var(--fill-0, #EA8B90)" id="Croissant_Layer_2" />
          <path d={svgPaths.p1ccae7f0} fill="var(--fill-0, #EA8B90)" id="Croissant_Layer_3" />
          <path d={svgPaths.p209eb800} fill="var(--fill-0, #F7BA7A)" id="Croissant_Layer_4" />
          <path d={svgPaths.p2fabde80} fill="var(--fill-0, #EA8B90)" id="Croissant_Layer_5" />
          <path d={svgPaths.pa8a0800} fill="var(--fill-0, #996A6E)" id="Croissant_Layer_6" />
          <path d={svgPaths.p2dad1f00} fill="var(--fill-0, #FDE6E0)" id="Croissant_Highlight_1" />
          <path d={svgPaths.p2fe43740} fill="var(--fill-0, #FDE6E0)" id="Croissant_Highlight_2" />
          <path d={svgPaths.p16387900} fill="var(--fill-0, #F7BA7A)" id="Croissant_Layer_7" />
          <path d={svgPaths.p29849900} fill="var(--fill-0, #F7BA7A)" id="Croissant_Layer_8" />
          <path d={svgPaths.p257250f0} fill="var(--fill-0, #EA8B90)" id="Croissant_Layer_9" />
          <path d={svgPaths.p1b348772} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_1" />
          <path d={svgPaths.p256b9200} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_2" />
          <path d={svgPaths.p1ae7c400} fill="var(--fill-0, #EA8B90)" id="Croissant_Detail_3" />
          <path d={svgPaths.pd47b780} fill="var(--fill-0, #FDE6E0)" id="Croissant_Highlight_3" />
          <path d={svgPaths.p293a6b00} fill="var(--fill-0, #EA8B90)" id="Croissant_Detail_4" />
          <path d={svgPaths.p1c2f5d00} fill="var(--fill-0, #FDE6E0)" id="Croissant_Highlight_4" />
          <path d={svgPaths.p22f3b400} fill="var(--fill-0, #EA8B90)" id="Croissant_Detail_5" />
          <path d={svgPaths.p161ed200} fill="var(--fill-0, #EA8B90)" id="Croissant_Detail_6" />
          <path d={svgPaths.p2173bf00} fill="var(--fill-0, #EA8B90)" id="Croissant_Detail_7" />
          <path d={svgPaths.p17f58900} fill="var(--fill-0, #EA8B90)" id="Croissant_Detail_8" />
          <path d={svgPaths.p1dc7d500} fill="var(--fill-0, #F7BA7A)" id="Croissant_Layer_10" />
          {/* Additional detailed paths for realistic croissant texture */}
          <path d={svgPaths.p3d008b00} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_9" />
          <path d={svgPaths.p38f90b00} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_10" />
          <path d={svgPaths.p5209e80} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_11" />
          <path d={svgPaths.p1a9ae270} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_12" />
          <path d={svgPaths.p4867b00} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_13" />
          <path d={svgPaths.p368401f0} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_14" />
          <path d={svgPaths.p3f440280} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_15" />
          <path d={svgPaths.p1e6dc100} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_16" />
          <path d={svgPaths.p13a7f1b0} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_17" />
          <g id="Empty_Layer"></g>
          <path d={svgPaths.pf09b900} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_18" />
          <path d={svgPaths.p2baa3500} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_19" />
          <path d={svgPaths.p173ac280} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_20" />
          <path d={svgPaths.pd060500} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_21" />
          <path d={svgPaths.p336cd180} fill="var(--fill-0, #996A6E)" id="Croissant_Detail_22" />
        </g>
        <defs>
          <clipPath id="clip0_1_219">
            <rect fill="white" height="140.003" width="107.8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ========================================
// MAIN FRAME COMPONENT
// Assembles all UI elements
// ========================================

export default function CatGameUI() {
  return (
    <div className="bg-white relative size-full">
      {/* Background layers */}
      <div className="absolute bg-[#fffbd1] h-[832px] left-0 overflow-clip top-0 w-[1280px]">
        <div className="absolute bg-[#fff8ea] inset-0" />
      </div>
      
      {/* Bottom inventory bar with slots */}
      <InventoryBar />
      
      {/* Top left score display */}
      <ScoreDisplay />
      
      {/* Coin icon next to score */}
      <CoinIcon />
      
      {/* Main cat character */}
      <SpotCat />
      
      {/* Progress bar (background) */}
      <ProgressBarBackground />
      
      {/* Progress bar (green fill) */}
      <ProgressBarFill />
      
      {/* Left side yarn ball decoration */}
      <YarnBallDecoration />
      
      {/* Rotated croissant decoration (30.418deg rotation) */}
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5063044428825378)+(var(--transform-inner-height)*0.8623548150062561)))] items-center justify-center left-[265px] top-[613px] w-[calc(1px*((var(--transform-inner-height)*0.5063044428825378)+(var(--transform-inner-width)*0.8623548150062561)))]" style={{ "--transform-inner-width": "107.78125", "--transform-inner-height": "140" } as React.CSSProperties}>
        <div className="flex-none rotate-[30.418deg]">
          <RotatedCroissant />
        </div>
      </div>
    </div>
  );
}
