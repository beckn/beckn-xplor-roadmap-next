import { Avatar } from 'antd'
import Image from 'next/image'
import { IAvatarCard } from './types'

const AvatarCard = ({ icon, width, height }: IAvatarCard) => (
  <Avatar>
    <Image src={icon} alt="avatar" width={width} height={height} />
  </Avatar>
)

export default AvatarCard
