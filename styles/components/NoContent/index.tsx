import styled from 'styled-components'

export const MainContainer = styled.div`
  max-height: 373px;
  min-height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0px 2px 4px -2px #0000000d;
  box-shadow: 0px 4px 6px -1px #0000001a;
  border-radius: 10px;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`
export const SvgWrapper = styled.div``
export const ErrorMessageWrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #282828;
  max-width: 282px;
  text-align: center;
`
export const ErrorWrapper = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #282828;
`
