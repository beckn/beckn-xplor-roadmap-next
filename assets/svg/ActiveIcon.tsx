import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <circle cx={10} cy={10} r={10} fill="#FACA15" />
  </svg>
)
export default SvgComponent
