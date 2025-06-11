import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      stroke="#4B5563"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M10 9.333 13.333 6 10 2.667"
    />
    <path
      stroke="#4B5563"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M2.667 13.333V8.667A2.667 2.667 0 0 1 5.334 6h8"
    />
  </svg>
)
export default SvgComponent
