import axios from 'axios'

let baseUrl = 'http://localhost:3000/data/'

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://blue-moon-v2.uxsequence.dev/data/'
}

const apiClient = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getMenus() {
    // return axios.get(baseUrl + 'menus.json')
    return apiClient.get('cohort/v1/menus')
  },
  getSiteOpitons() {
    // return axios.get(baseUrl + 'siteoptions.json')
    return apiClient.get('cohort/v1/options')
  },
  getModules(slug) {
    return apiClient.get(slug + '.json')
    // return apiClient.get('cohort/v1/post?post=' + slug)
  }
}
