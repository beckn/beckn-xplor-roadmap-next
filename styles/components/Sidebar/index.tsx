import styled from 'styled-components'
import { theme } from 'styles/theme'

export const Container = styled.div`
  background: ${theme.BOXCOLOR};
  border-right: 2px solid #e5e7eb;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 264px;
  min-height: calc(100vh - 82px);
`
export const SearchWrapper = styled.div`
  padding: 16px;
  .ant-input-affix-wrapper {
    height: 40px;
    opacity: 0px;
    background: #f5f6f8;
    padding-bottom: 10px;
    gap: 6px;
    width: 100%;
    max-width: 232px;
  }
  input {
    padding-bottom: 14px !important;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-input-prefix {
    padding-top: 6px;
  }
  .ant-menu-item:not(.ant-menu-item-selected):active {
    background-color: transparent;
  }
`

export const BasicLinksContainer = styled.div`
  padding-top: 12px;
  .ant-menu-light {
    background: transparent;
    padding-left: 0 !important;
  }
  .ant-menu-item {
    min-height: 46px;
    padding-left: 12px !important;
    div {
      flex: auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .ant-menu-light {
    background: transparent;
  }

  .ant-menu-light.ant-menu-root.ant-menu-inline {
    border-inline-end: 0;
  }
  .ant-menu-inline .ant-menu-submenu-title {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding-left: 14px !important;
  }

  .ant-menu-light .ant-menu-item-selected {
    background: transparent;
  }

  .ant-menu-inline.ant-menu-root .ant-menu-submenu-title > .ant-menu-title-content {
    font-size: 16px !important;
    color: #000 !important;
    padding-left: 6px !important;
  }
  .ant-menu-inline .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    padding-left: 54px !important;
  }

  .ant-menu .ant-menu-sub .ant-menu-inline {
    padding-left: 10px !important;
  }
`

export const NavItems = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`
export const SubMenuNavItems = styled.div`
  color: #000;
  font-size: 14px !important;
  padding-left: 38px;
`
export const InnerSubMenuNavItems = styled.div`
  color: #000;
  font-size: 16px !important;
  padding-left: 42px;
`
export const DataWrapper = styled.div`
  padding: 0 6px;
  a div {
    font-size: 13.67px;
    font-weight: 400;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
  }

  a.active > div {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }

  a {
    font-size: 13.67px;
    font-weight: 400;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
  }

  a.active {
    background: ${theme.PRIMARYBLUECOLOR};

    .ant-menu-item-selected {
      background: ${theme.PRIMARYBLUECOLOR};

      div {
        color: white;
      }
      svg {
        path {
          fill: #ffffff;
        }
      }
    }
  }

  svg {
    width: 26px;
  }
`
