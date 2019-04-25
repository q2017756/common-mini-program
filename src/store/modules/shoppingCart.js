/** Created by guangqiang on 2018-09-27 17:32:35 */
import {formatYMD} from '@/utils/formatTime'
import {shoppingCart} from '@/pages/shoppingCart/data'

const state = {
  shopInfo: {},
  foods: [],
  spus: [],
  commentInfo: [],
  reduceFee: 0.0,
  visibleSkuModal: false,
  visibleItemModal: false,
  skuInfo: {},
  previewInfo: {}
}

const mutations = {
  changeShopInfoDataMut (state, info) {
    state.shopInfo = info
  },
  changeFoodsDataMut (state, info) {
    state.foods = info
  },
  changeSpusDataMut (state, info) {
    state.spus = info
  },
  changeCommentDataMut (state, info) {
    state.commentInfo = info
  },
  changeReduceFeeDataMut (state, info) {
    state.reduceFee = info
  },
  changeSkuModalMut (state, info) {
    state.visibleSkuModal = info
  },
  changeItemModalMut (state, info) {
    state.visibleItemModal = info
  },
  changeSkuDataMut (state, info) {
    state.skuInfo = info
  },
  changePreviewDataMut (state, info) {
    state.previewInfo = info
  }
}

const actions = {
  getMenuDataAction ({state, commit}) {
    const res = shoppingCart.menuData.data

    const shopInfo = res.poi_info || {}
    shopInfo.prompt_text = res.shopping_cart.prompt_text
    shopInfo.activity_info = JSON.parse(res.shopping_cart.activity_info.policy)
    commit('changeShopInfoDataMut', shopInfo)

    let foods = res.food_spu_tags
    foods = foods.map(item => {
      item.count = 0
      item.totalPrice = 0
      return item
    })
    commit('changeFoodsDataMut', foods)

    const arr = state.foods[0].spus.map(item => {
      item.sequence = 0
      return item
    })
    const spus = {title: foods[0].name, index: 0, list: arr}
    commit('changeSpusDataMut', spus)
  },
  getCommentDataAction ({state, commit}) {
    const res = shoppingCart.commentData.data
    const commentData = res
    const comments = res.comments.map(item => {
      const reply = item.add_comment_list[0] || {}
      item.poi_reply_contents = `${reply.desc}：${reply.content}`
      item.commentTags = item.comment_labels.map(item => item.content).join()
      item.comment_time = formatYMD(item.comment_time * 1000)
      return item
    })
    commentData.comments = comments

    const commentMolds = res.comment_categories.map(item => {
      const num = item.replace(/[^0-9]/ig, '')
      const characters = item.match(/[\u4e00-\u9fa5]/g)
      const title = characters.join('')
      return `${title}(${num})`
    })
    res.labels.map(item => {
      const tag = `${item.content}(${item.label_count})`
      commentMolds.push(tag)
    })
    commentData.commentMolds = commentMolds

    commit('changeCommentDataMut', commentData)
  },
  getCategoryMenuDataAction ({state, commit}, {index}) {
    const spus = {}
    spus.title = state.foods[index].name
    spus.index = index
    spus.list = state.foods[index].spus.map(item => {
      if (!item.sequence) item.sequence = 0
      return item
    })
    commit('changeSpusDataMut', spus)
  },
  addItemAction ({state, commit}, {item, index}) {
    const spus = state.spus
    spus.list[index].sequence += 1
    commit('changeSpusDataMut', spus)

    const foods = state.foods
    const foodsIndex = spus.index
    const selectedFood = foods[foodsIndex]
    selectedFood.count += 1
    selectedFood.totalPrice += item.min_price + (item.min_price > 0 ? 1 : 0)
    commit('changeFoodsDataMut', foods)
  },
  reduceItemAction ({state, commit}, {item, index}) {
    const spus = state.spus
    spus.list[index].sequence -= 1
    if (spus.list[index].sequence <= 0) spus.list[index].sequence = 0
    commit('changeSpusDataMut', spus)

    const foods = state.foods
    const foodsIndex = spus.index
    const selectedFood = foods[foodsIndex]
    selectedFood.count = selectedFood.count - 1
    selectedFood.totalPrice = selectedFood.totalPrice - item.min_price - (item.min_price > 0 ? 1 : 0)
    commit('changeFoodsDataMut', foods)
  },
  closeShoppingCartAction ({state, commit}) {
    const array = state.foods
    const selectedArr = []
    array.map((item, index) => {
      item.spus.map((itm, idx) => {
        if (itm.sequence > 0) {
          const price = itm.min_price * itm.sequence
          itm.totalPrice = parseFloat(price).toFixed(1)
          selectedArr.push(itm)
        }
      })
    })
    const shopInfo = state.shopInfo
    shopInfo.selectedArr = selectedArr
    commit('changeShopInfoDataMut', shopInfo)
    wx.navigateTo({url: '/pages/submitOrder/main'})
  },
  selectSkuAction ({state, commit}, {item, index}) {
    commit('changeSkuModalMut', true)
    const sku = {}
    const array = item.attrs
    const selectedItems = []
    for (let i = 0; i < array.length; i++) {
      const attr = array[i].values
      attr.map((item, idx) => {
        if (idx === 0) {
          item.selected = true
          selectedItems.push(item.value)
        } else {
          item.selected = false
        }
        return item
      })
    }

    sku.item = item
    sku.index = index
    sku.attrs = array
    sku.title = item.name
    sku.selectedCount = item.sequence
    sku.price = parseFloat(item.min_price).toFixed(1)
    sku.selectedItems = selectedItems.join(',')
    sku.time = new Date()
    commit('changeSkuDataMut', sku)
  },
  attrSelectAction ({state, commit}, {itm, idx, setIdx}) {
    const sku = state.skuInfo
    const array = sku.attrs
    const selectedItems = sku.selectedItems.split(',')
    const section = array[setIdx]
    for (let i = 0; i < section.values.length; i++) {
      const item = section.values[i]
      if (i === idx) {
        item.selected = true
        selectedItems[setIdx] = item.value
      } else {
        item.selected = false
      }
    }
    sku.selectedItems = selectedItems.join(',')
    sku.time = new Date()
    commit('changeSkuDataMut', sku)
  },
  changeSkuModalDataAction ({state, commit}, {num}) {
    const sku = state.skuInfo
    sku.selectedCount = sku.selectedCount + num
    commit('changeSkuDataMut', sku)
  },
  previewItemAction ({state, commit}, {item, index}) {
    commit('changeItemModalMut', true)
    const preview = item
    preview.preIndex = index
    preview.description = item.skus[0].description
    commit('changePreviewDataMut', preview)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
