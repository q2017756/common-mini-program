const getStorage = key => new Promise((resolve, reject) => {
  wx.getStorage({
    key: key,
    success (res) {
      resolve(res.data)
    },
    fail (e) {
      reject(e)
    }
  })
})

const setStorage = (key, value) => new Promise((resolve, reject) => {
  wx.setStorage({
    key: key,
    data: value,
    success () {
      resolve()
    },
    fail (e) {
      reject(e)
    }
  })
})

const removeStorage = key => new Promise((resolve, reject) => {
  wx.removeStorage({
    key: key,
    success (res) {
      resolve(res.data)
    },
    fail (e) {
      reject(e)
    }
  })
})

const clearStorage = () => new Promise((resolve, reject) => {
  try {
    wx.clearStorageSync()
    resolve()
  } catch (e) {
    reject(e)
  }
})

const getLocation = () => new Promise((resolve) => {
  wx.getLocation({
    type: 'wgs84',
    success ({latitude, longitude, speed, accuracy}) {
      resolve({latitude, longitude, speed, accuracy})
    },
    fail () {
      resolve({
        latitude: -999,
        longitude: -999
      })
    }
  })
})

const chooseLocation = () => new Promise((resolve, reject) => {
  wx.chooseLocation({
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

const openLocation = ({latitude, longitude}) => new Promise((resolve, reject) => {
  wx.openLocation({
    latitude: latitude,
    longitude: longitude,
    scale: 18,
    success: function (res) {
      resolve(res)
    },
    fail: function (e) {
      reject(e)
    }
  })
})

const login = () => new Promise((resolve, reject) => {
  console.log(111)
  wx.login({
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

const getUserInfo = obj => new Promise((resolve, reject) => {
  wx.getUserInfo({
    ...obj,
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

const addCard = (cardId = '', cardExt = '') => new Promise((resolve, reject) => {
  wx.addCard({
    cardList: [
      {
        cardId: cardId,
        cardExt: cardExt
      }
    ],
    success: function (res) {
      resolve(res)
    },
    fail: function (e) {
      reject(e)
    }
  })
})

const chooseImage = (count = 1, sourceType = ['album']) => new Promise((resolve, reject) => {
  wx.chooseImage({
    count,
    sourceType,
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

const handleScan = () => new Promise((resolve, reject) => {
  wx.scanCode({
    success: function (res) {
      resolve(res)
    },
    fail: function (e) {
      reject(e)
    }
  })
})

const showModal = (title, content, isCancel) => new Promise(resolve => {
  wx.showModal({
    title: title,
    content: content,
    showCancel: isCancel,
    success: function (res) {
      if (res.confirm) {
        resolve('ok')
      } else if (res.cancel) {
        resolve('cancle')
      }
    }
  })
})

const toast = content => new Promise((resolve, reject) => {
  wx.showToast({
    title: content,
    icon: 'none',
    duration: 4000,
    success: function (res) {
      resolve(res)
    },
    fail: function (e) {
      reject(e)
    }
  })
})

const toastSuccess = content => new Promise((resolve, reject) => {
  wx.showToast({
    title: content,
    icon: 'success',
    duration: 3000,
    success: function (res) {
      resolve(res)
    },
    fail: function (e) {
      reject(e)
    }
  })
})

const actionSheet = items => new Promise((resolve, reject) => {
  wx.showActionSheet({
    itemList: items,
    success: function (res) {
      resolve(res.tapIndex)
    },
    fail: function (e) {
      reject(e)
    }
  })
})

const showShareMenu = () => {
  return wx.showShareMenu
}

const pageScrollTo = () => {
  console.log(111)
  return wx.pageScrollTo
}

const alert = content => new Promise((resolve, reject) => {
  wx.showModal({
    title: '',
    content,
    showCancel: false,
    success: function (res) {
      resolve(res)
    },
    fail: function (e) {
      reject(e)
    }
  })
})

const navigateTo = url => {
  wx.navigateTo({
    url
  })
}

const redirectTo = url => {
  wx.redirectTo({
    url: url
  })
}

const startPullDownRefresh = () => new Promise((resolve, reject) => {
  wx.startPullDownRefresh({
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})

const stopPullDownRefresh = () => new Promise((resolve, reject) => {
  wx.stopPullDownRefresh({
    success (res) {
      resolve(res)
    },
    fail (e) {
      reject(e)
    }
  })
})


const checkNetWork = () => new Promise((resolve, reject) => {
  wx.getNetworkType({
    success: function (res) {
      let networkType = res.networkType
      if (networkType === 'none' || networkType === 'unknown') {
        resolve(false)
      } else {
        resolve(true)
      }
    },
    fail: function (e) {
      resolve(false)
    }
  })
})

const uploadFile = params => new Promise((resolve, reject) => {
  wx.uploadFile({
    ...params,
    success: function (res) {
      resolve(res)
    },
    fail: function (e) {
      reject(e)
    }
  })
})

const saveImage = url => {
  wx.downloadFile({
    url: url,
    success: function (res) {
      let path = res.tempFilePath
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success (res) {
          toastSuccess('保存成功！')
        },
        fail (res) {
          toast('保存失败！')
        }
      })
    },
    fail: function (res) {
      toast('保存失败！')
    }
  })
}

const checkSession = () => new Promise((resolve, reject) => {
  wx.checkSession({
    success: function () {
      // session_key 未过期，并且在本生命周期一直有效
      resolve(true)
    },
    fail: function () {
      // session_key 已经失效，需要重新执行登录流程
      resolve(false)
    }
  })
})

export {
  getStorage,
  setStorage,
  getLocation,
  chooseLocation,
  openLocation,
  removeStorage,
  clearStorage,
  login,
  request,
  chooseImage,
  showShareMenu,
  pageScrollTo,
  getUserInfo,
  alert,
  navigateTo,
  redirectTo,
  startPullDownRefresh,
  stopPullDownRefresh,
  uploadFile,
  handleScan,
  checkNetWork,
  addCard,
  showModal,
  toast,
  toastSuccess,
  actionSheet,
  saveImage,
  checkSession
}
