import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <path
      fill="url(#a)"
      d="M24.52 12.943c-.075.51-.411 1.204-.797 1.806a3.365 3.365 0 0 1-2.146 1.48l-3.897.814a2.998 2.998 0 0 0-1.621.936l-2.556 2.857c-.48.536-.816.408-.816-.312-.006.027-1.268 3.283 2.078 5.213 1.285.742 3.136.475 4.421-.266l6.812-3.93a10.31 10.31 0 0 0 4.944-6.832c.024-.114.042-.228.062-.342l-6.485-1.424Z"
    />
    <path
      fill="url(#b)"
      d="M22.753 9.018c1.285.741 1.81 1.845 1.81 3.329 0 .2-.015.4-.044.596l2.745 1.179 3.74.245c.479-2.772-.46-5.625-2.142-7.892a15.948 15.948 0 0 0-4.854-4.317A16.105 16.105 0 0 0 19.103.303L17.235 2.72l-.59 2.776 6.107 3.522Z"
    />
    <path
      fill="url(#c)"
      d="M.783 11.052a16.87 16.87 0 0 1 .552-1.428c1.178-2.69 3.448-4.483 6.24-5.398a10.34 10.34 0 0 1 8.385.874l.686.396L19.102.303C11.291-1.257 3.307 3.333.793 11.022l-.01.03Z"
    />
    <path
      fill="url(#d)"
      d="M18.92 25.47a4.159 4.159 0 0 1-4.65-.336l-2.261 1.555-1.949 3.149c2.163 1.8 4.972 2.379 7.779 2.057a15.961 15.961 0 0 0 6.169-2.041 16.089 16.089 0 0 0 4.06-3.318l-1.162-2.823-1.88-1.765-6.106 3.523Z"
    />
    <path
      fill="url(#e)"
      d="M14.27 25.134a4.15 4.15 0 0 1-1.583-3.259V11.072c0-.603.178-.706.701-.404-.806-.465-2.668-2.061-4.967-.735-1.286.742-2.344 2.379-2.344 3.862v7.858c0 2.939 1.522 6.004 3.717 7.96.087.078.177.15.266.225l4.21-4.704Z"
    />
    <path
      fill="url(#f)"
      d="M27.91 5.312a16.877 16.877 0 0 1 .962 1.192 10.302 10.302 0 0 1-3.16 15.048l-.686.396 3.042 4.588c5.258-5.978 5.272-15.18-.137-21.2l-.02-.024Z"
    />
    <path
      fill="url(#g)"
      d="M6.344 13.795A4.15 4.15 0 0 1 8.96 9.94l-.217-2.734L7.219 4.08a10.312 10.312 0 0 0-5.904 5.568A15.924 15.924 0 0 0 0 16.006c0 1.835.303 3.568.846 5.171l3.028.406 2.47-.744v-7.044Z"
    />
    <path
      fill="url(#h)"
      d="M8.96 9.94a4.158 4.158 0 0 1 3.616.26l.111.064 8.896 5.13c.624.36.567.714-.138.862l.513-.107a3.363 3.363 0 0 0 1.764-.99 4.09 4.09 0 0 0 1.109-2.812 4.15 4.15 0 0 0-2.078-3.595l-6.812-3.93a10.327 10.327 0 0 0-8.395-.86c-.11.036-.218.077-.327.117l1.741 5.86Z"
    />
    <path
      fill="url(#i)"
      d="M19.322 31.652a16.91 16.91 0 0 1-1.514.236A10.318 10.318 0 0 1 6.343 21.63v-.791l-5.497.338c2.553 7.539 10.523 12.152 18.445 10.482l.031-.007Z"
    />
    <defs>
      <linearGradient id="a" x1={20.06} x2={23.207} y1={23.77} y2={12.807} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1724C9" />
        <stop offset={1} stopColor="#1C64F2" />
      </linearGradient>
      <linearGradient id="b" x1={27.309} x2={19.03} y1={10.4} y2={2.15} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#0092FF" />
      </linearGradient>
      <linearGradient id="c" x1={16.164} x2={3.674} y1={5.021} y2={5.81} gradientUnits="userSpaceOnUse">
        <stop stopColor="#0092FF" />
        <stop offset={1} stopColor="#45B2FF" />
      </linearGradient>
      <linearGradient id="d" x1={15.32} x2={26.536} y1={28.663} y2={25.636} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#0092FF" />
      </linearGradient>
      <linearGradient id="e" x1={7.269} x2={15.232} y1={15.683} y2={23.935} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1724C9" />
        <stop offset={1} stopColor="#1C64F2" />
      </linearGradient>
      <linearGradient id="f" x1={25.45} x2={31.007} y1={21.636} y2={10.434} gradientUnits="userSpaceOnUse">
        <stop stopColor="#0092FF" />
        <stop offset={1} stopColor="#45B2FF" />
      </linearGradient>
      <linearGradient id="g" x1={5.364} x2={2.391} y1={9.131} y2={20.307} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#0092FF" />
      </linearGradient>
      <linearGradient id="h" x1={20.543} x2={9.678} y1={8.599} y2={11.305} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1724C9" />
        <stop offset={1} stopColor="#1C64F2" />
      </linearGradient>
      <linearGradient id="i" x1={6.407} x2={13.333} y1={21.357} y2={31.775} gradientUnits="userSpaceOnUse">
        <stop stopColor="#0092FF" />
        <stop offset={1} stopColor="#45B2FF" />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
