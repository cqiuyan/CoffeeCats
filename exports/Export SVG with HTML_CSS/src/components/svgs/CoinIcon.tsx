// Coin Icon SVG - Used for currency display
import svgPaths from "../../imports/svg-3sda4a3juu";

export function CoinIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
      <g clipPath="url(#clip0_coin)" id="Icon">
        <path d={svgPaths.p13cb8c00} fill="var(--fill-0, #F6B82A)" id="Vector" />
        <path d={svgPaths.p1d32c400} id="Vector_2" stroke="var(--stroke-0, #594A42)" strokeMiterlimit="10" strokeWidth="2.07338" />
        <path d={svgPaths.p2b79eda2} fill="var(--fill-0, #594A42)" id="Vector_3" stroke="var(--stroke-0, #594A42)" strokeMiterlimit="10" strokeWidth="0.691127" />
        <path d={svgPaths.p3f332a00} id="Vector_4" stroke="var(--stroke-0, #594A42)" strokeMiterlimit="10" strokeWidth="2.07338" />
      </g>
      <defs>
        <clipPath id="clip0_coin">
          <rect fill="white" height="34" width="34" />
        </clipPath>
      </defs>
    </svg>
  );
}
