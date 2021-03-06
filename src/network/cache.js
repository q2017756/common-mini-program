import {getStorage, setStorage} from '@/utils/wxapi'

/**
 * @param key：key为请求 url
 * @param fetchFunc：回调函数
 * @param isCache：是否需要缓存
 * @returns {value}
 */
const dataCache = (key, fetchFunc, isCache) => {
  // 不缓存，
  if (!isCache) {
    return fetchFunc()
  }
  // 需要缓存
  return getStorage(key).then(value => {
    if (value) {
      // 如果在缓存中找到数据，则返回缓存中的数据
      return value
    } else {
      // 如果在缓存中取不到数据，则从网络请求中获取数据，并将获取到的数据缓存下来
      return fetchFunc().then(value => {
        if (value) {
          setStorage(key, value)
        }
        return value
      })
    }
  })
}

export {dataCache}
