import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()
const host = 'http://pointslinks.com'
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  console.log(request)
  request.headers = {
    'X-Tag': 'flyio',
    'content-type': 'application/json',
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMTMiLCJuYW1lIjoiIiwicGhvbmVfbnVtYmVyIjoiIiwiYXVkIjoiYXBpIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MjAwIiwibmJmIjoxNTU2MzU5NjYxLCJleHAiOjE1NTY1NzU2NjEsImlhdCI6MTU1NjM1OTY2MX0.70wZ9tWfG3PET6OMEs5w1444YCyFCLFPJov-nTW4VH4'
  }

  let authParams = {
    // 公共参数
    'categoryType': 'SaleGoodsType@sim',
    'streamNo': 'wxapp153570682909641893',
    'reqSource': 'MALL_H5',
    'appid': 'string',
    'timestamp': new Date().getTime(),
    'sign': 'string'
  }

  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === '') {
      delete request.body[val]
    }
  })
  request.body = {
    ...request.body,
    ...authParams
  }
  return request
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    return response.data// 请求成功之后将返回值返回
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    console.log(err)
    wx.hideLoading()
    if (err) {
      return '请求失败'
    }
  }
)

fly.config.baseURL = host

export default fly
