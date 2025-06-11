import axios, { AxiosResponse } from 'axios'
import APIS from 'constants/api'

export async function fetchDashboardData(id: string): Promise<any> {
  try {
    if (id === 'sw.js') return

    const response: AxiosResponse<any> = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}${APIS.PROJECT_SLUG}/${id.toLowerCase()}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
        },
      },
    )

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function fetchMilestoneBoardData(id: number) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}${APIS.MILESTONE_LIST}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
        },
      },
    )

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function fetchSubMenuData(id: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}${APIS.MENU_DOCS_LIST}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
        },
      },
    )

    return response
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function fetchRichTextData(id: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}${APIS.DOCS_DATA}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
        },
      },
    )

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function fetchData(link: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/${link}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
      },
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}
