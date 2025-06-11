import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="#000"
      d="M15.469 7.031c-.905 0-1.64-.736-1.64-1.64V0H5.436A2.581 2.581 0 0 0 2.86 2.578v18.844A2.581 2.581 0 0 0 5.438 24h13.125a2.581 2.581 0 0 0 2.578-2.578V7.032h-5.672Zm-8.766 9.844h3.409a.703.703 0 0 1 0 1.406H6.703a.703.703 0 0 1 0-1.406ZM6 13.828c0-.388.315-.703.703-.703h10.313a.703.703 0 1 1 0 1.406H6.703A.703.703 0 0 1 6 13.828Zm11.016-4.453a.703.703 0 0 1 0 1.406H6.703a.703.703 0 0 1 0-1.406h10.313Z"
    />
    <path
      fill="#000"
      d="M15.234 5.391c0 .13.105.234.235.234h5.358a2.57 2.57 0 0 0-.493-.643L15.814.706a2.582 2.582 0 0 0-.58-.414v5.099Z"
    />
  </svg>
)
export default SvgComponent
