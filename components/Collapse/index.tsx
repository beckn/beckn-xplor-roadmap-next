import { Collapse } from 'antd'
import { ICollapes } from './types'

const Collapes = ({ items, bordered }: ICollapes) => <Collapse items={items} bordered={bordered} />

export default Collapes
