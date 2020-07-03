/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import qs from 'qs'
import { getLocalStorage, setLocalStorage, localforageIterate } from './local'

const config = {
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 20000,
  withCredentials: !true, // allowed to take cookie
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'ajaxRequested': 'ajaxRequested',
    '':''//头验证
  }
}

const isDev = process.env.NODE_ENV === 'development'
isDev && (window.localforageIterate = localforageIterate)

const axiosIns = axios.create(config)

axiosIns.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => error
)

axiosIns.interceptors.response.use(
  (res) => {
    const { config: { url }, data } = res
    if (data && data.error) {
      return [data.error, data]
    }
    if (isDev) {
      setLocalStorage(url, data)
    }
    // 扁平化处理错误
    return [null, data]
  },
  (error) => {
    if (isDev) return getLocalStorage(error.config.url)
    return [error, undefined]
  }
)

export default {
  get (url, params = {}) {
    return axiosIns({
      method: 'get',
      url,
      params
    })
  },
  post (url, params = {}, headers = config.headers) {
    return axiosIns({
      method: 'post',
      url,
      data: params,//qs.stringify(params),
      headers
    })
  },
  upload (url, params = {}) {
    const { file, ...query } = params
    const formData = new FormData()
    formData.append('file', file)
    return axiosIns({
      method: 'post',
      url,
      params: query,
      data: formData,
      headers: { 'Content-Type': 'multiple/form-data' }
    })
  }
}
