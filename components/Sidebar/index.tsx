import { useEffect, useId, useState } from 'react'
import { useRouter } from 'next/router'
import { Menu, Tooltip } from 'antd'
import Link from 'next/link'
import { fetchSubMenuData } from 'utils/getServerSideData'
import { MENU } from './data'
import {
  BasicLinksContainer,
  Container,
  Wrapper,
  NavItems,
  DataWrapper,
  InnerSubMenuNavItems,
} from 'styles/components/Sidebar'

const Sidebar = () => {
  const [slugState, setslugState] = useState('')
  const [subMenuData, setSubMenuData] = useState<any>(null)
  // const { control } = useForm()
  const router = useRouter()
  const uid = useId()
  const { SubMenu } = Menu
  const [openKeys, setOpenKeys] = useState([])
  const withEllipsisTooltip = (text: string, element: JSX.Element) => {
    return text.length > 18 ? <Tooltip title={text}>{element}</Tooltip> : element
  }

  const handleButtonClick = () => {
    setOpenKeys([])
  }

  const handleMenuOpenChange = (keys: any) => {
    setOpenKeys(keys)
  }

  useEffect(() => {
    setslugState(localStorage.getItem('slug') || 'beckn-xplor')
  }, [router?.pathname])

  const fetchData = async () => {
    const response = await fetchSubMenuData(slugState)
    if (response?.status === 200) {
      const transformedData =
        response?.data?.data &&
        Object.entries(response?.data?.data).map(([title, submenu]: any) => {
          const standaloneItems: any = []
          const groupedItems: any = {}

          Object.entries(submenu).forEach(([subtitle, items]: any) => {
            if (typeof items == 'object' && !Array.isArray(items)) {
              standaloneItems.push({
                title: subtitle,
                link: `/documentation/digital-profile/${items.id}`,
              })
            } else if (Array.isArray(items) && items.length) {
              groupedItems[subtitle] = items
            }
          })

          const processedSubmenu = Object.entries(groupedItems).map(([subtitle, items]: any) => {
            const groupedByCategory = items.reduce((acc: any, item: any) => {
              if (!item.category) {
                return [
                  ...acc,
                  {
                    link: `/documentation/digital-profile/${item.id}`,
                    title: item.title,
                    id: item.id,
                  },
                ]
              }

              if (!acc[item.category]) {
                acc[item.category] = []
              }

              acc[item.category].push({
                link: `/documentation/digital-profile/${item.id}`,
                title: item.title,
                id: item.id,
              })

              return acc
            }, [])

            const transformedCategories = Object.entries(groupedByCategory).map(([category, items]: any) =>
              Array.isArray(items)
                ? { title: category, submenu: items }
                : {
                    ...items,
                  },
            )

            return {
              title: subtitle,
              link: `/documentation/digital-profile/${items.id}`,
              submenu: transformedCategories,
              id: items.id,
            }
          })

          const combinedSubmenu = [...processedSubmenu, ...standaloneItems]

          return {
            title,
            link: `/documentation/digital-profile/${submenu.id}`,
            submenu: combinedSubmenu,
          }
        })

      setSubMenuData(transformedData)
    } else {
      setSubMenuData(null)
    }
  }

  useEffect(() => {
    if (slugState) {
      fetchData()
    }
  }, [slugState])

  const renderSubMenu = (submenuItems: any[] | undefined) => {
    return submenuItems?.map((submenuItem, index) => {
      if (submenuItem?.submenu?.length) {
        return (
          <SubMenu
            key={`${submenuItem?.submenu[index]?.title}${
              submenuItem?.submenu[index]?.id ? submenuItem?.submenu[index].id : uid
            }`}
            title={withEllipsisTooltip(submenuItem?.title, <span>{submenuItem?.title}</span>)}
          >
            {renderSubMenu(submenuItem?.submenu)}
          </SubMenu>
        )
      } else {
        return (
          <DataWrapper key={`${index}${uid}`}>
            {withEllipsisTooltip(
              submenuItem?.title,
              <Link
                href={`${submenuItem?.link}`}
                className={
                  router?.pathname?.replace('[id]', `${router?.query?.id}`) === submenuItem?.link ? 'active' : ''
                }
                passHref
              >
                <Menu.Item>
                  <InnerSubMenuNavItems>{submenuItem?.title}</InnerSubMenuNavItems>
                </Menu.Item>
              </Link>,
            )}
          </DataWrapper>
        )
      }
    })
  }

  const renderMenu = (menuItems: any[] | undefined) => {
    return menuItems?.map((item, index) => {
      if (item?.submenu?.length) {
        return (
          <SubMenu key={`${index}${uid}`} title={item?.title} icon={item?.icon}>
            {renderSubMenu(item?.submenu)}
          </SubMenu>
        )
      } else {
        return (
          <DataWrapper key={`${index}${uid}`} onClick={handleButtonClick}>
            <Link href={item?.link} className={router?.pathname === item?.id ? 'active' : ''} passHref>
              <Menu.Item icon={item?.icon} disabled={item?.disabled}>
                <NavItems>{item?.title}</NavItems>
              </Menu.Item>
            </Link>
          </DataWrapper>
        )
      }
    })
  }

  const modifiedMENU = MENU.map((item) => {
    if (item.title === 'Dashboard') {
      return {
        ...item,
        link: `/${slugState}`,
      }
    }

    if (item.title === 'Milestones') {
      return {
        ...item,
        link: `/milestones?slug=${slugState}`,
      }
    }

    if (item.title === 'Demos') {
      return {
        ...item,
        link: `/demos?slug=${slugState}`,
      }
    }

    if (item.title === 'Documentation') {
      if (subMenuData && subMenuData?.length > 0) {
        return {
          ...item,
          submenu: subMenuData,
        }
      } else {
        return null
      }
    }

    return item
  }).filter(Boolean)

  return (
    <Container>
      <Wrapper>
        <BasicLinksContainer>
          <Menu mode="inline" theme="light" openKeys={openKeys} onOpenChange={handleMenuOpenChange}>
            {renderMenu(modifiedMENU)}
          </Menu>
        </BasicLinksContainer>
      </Wrapper>
    </Container>
  )
}

export default Sidebar
