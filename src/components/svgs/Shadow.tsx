// Shadow SVG - Used under cats
import svgPaths from "../../imports/svg-3sda4a3juu";

export function Shadow() {
  return (
    <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 139 18">
      <g clipPath="url(#clip0_shadow)" id="shadow">
        <path d={svgPaths.paf7700} fill="var(--fill-0, #A59D90)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_shadow">
          <rect fill="white" height="18" width="139" />
        </clipPath>
      </defs>
    </svg>
  );
}
