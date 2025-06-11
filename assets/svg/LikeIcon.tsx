import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#4B5563"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M4.667 14.666h-2a1.333 1.333 0 0 1-1.333-1.333V8.666a1.333 1.333 0 0 1 1.333-1.333h2M9.334 6V3.333a2 2 0 0 0-2-2l-2.667 6v7.333h7.52a1.333 1.333 0 0 0 1.334-1.133l.92-6A1.333 1.333 0 0 0 13.107 6H9.334Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
