import fly from '@/network/fly'

// 首页数据
export function getIndexData (params) {
  return fly.post('/coreapi/api/master/providecategory', params)
}
