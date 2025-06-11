import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" {...props}>
    <path
      fill="#9CA3AF"
      d="M7.2 14.4a7.2 7.2 0 1 1 7.2-7.2 7.208 7.208 0 0 1-7.2 7.2Zm0-12.6a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8ZM17.1 18a.9.9 0 0 1-.636-.264l-3.6-3.6a.9.9 0 0 1 1.272-1.272l3.6 3.6A.9.9 0 0 1 17.1 18Z"
    />
  </svg>
)
export default SvgComponent
