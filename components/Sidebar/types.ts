export interface MenuItem {
  title: string
  link: string
  submenu?: SubMenuItem[]
  icon: JSX.Element
  disabled: boolean
  id?: string
}

interface SubMenuItem {
  title: string
  link: string
  submenu?: SubMenuItem[]
}
