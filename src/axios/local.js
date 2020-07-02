import localforage from 'localforage'

localforage.config({
  driver: [
    localforage.INDEXEDDB,
    localforage.WEBSQL,
    localforage.LOCALSTORAGE
  ],
  name: 'local-api',
  storeName: 'apiData'
})

export const getLocalStorage = (key) => {
  return localforage.getItem(key).catch((err) => { console.warn('getError', err) })
}

export const setLocalStorage = (key, value) => {
  localforage.setItem(key, value, (err) => {
    err && console.warn('setError', err)
  })
}

export const localforageIterate = (obj = {}) => {
  localforage.iterate((value, key) => {
    obj[key] = value
  }).then(() => {
    console.log('iterate completed')
    console.log(JSON.stringify(obj))
  }).catch((err) => {
    console.log(err)
  })
}
