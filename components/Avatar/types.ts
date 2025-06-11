import { StaticImageData } from 'next/image'

export interface IAvatarCard {
  icon: string | StaticImageData
  height: number
  width: number
}
