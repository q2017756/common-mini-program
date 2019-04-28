<!--<template>-->
  <!--<div class="container">-->
    <!--<div class="header-c">-->
      <!--<div class="header">-->
        <!--<div class="h-l">-->
          <!--<img class="shop-logo" :src="shopInfo.pic_url">-->
        <!--</div>-->
        <!--<div class="h-r">-->
          <!--<div class="r-t">-->
            <!--<span class="t-l">{{shopInfo.min_price_tip}}</span>-->
            <!--<div class="s-l"></div>-->
            <!--<span class="t-m">{{shopInfo.delivery_time_tip}}</span>-->
            <!--<div class="s-r"></div>-->
            <!--<span class="t-r">{{shopInfo.distance}}</span>-->
          <!--</div>-->
          <!--<span class="r-m">公告：{{shopInfo.bulletin}}</span>-->
          <!--<div class="r-b">-->
            <!--<span class="b-l">减</span>-->
            <!--<span class="b-r">{{shopInfo.prompt_text}}</span>-->
            <!--<i class="icon mt-arrow-right-o"></i>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="cate-c">-->
        <!--<span class="c-l" :style="{'font-weight': pageIndex === 0 ? 'bold' : null}" @click="menuClick">菜单</span>-->
        <!--<span class="c-m" :style="{'font-weight': pageIndex === 1 ? 'bold' : null}" @click="commentClick">评价</span>-->
        <!--<span class="c-r" :style="{'font-weight': pageIndex === 2 ? 'bold' : null}" @click="shopClick">商家</span>-->
        <!--<div class="line" :style="lineStyle"></div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="list-c" v-if="pageIndex === 0">-->
      <!--<scroll-view class="list-l" :scroll-y="true">-->
        <!--<div class="l-item" :class="{active: index === tagIndex}" v-for="(item, index) in foods" :key="index"-->
             <!--@click="categoryClick(item, index)">-->
          <!--<img :src="item.icon" v-if="item.icon.length > 0">-->
          <!--<span>{{item.name}}</span>-->
          <!--<text class="count" v-if="item.count > 0">{{item.count}}</text>-->
        <!--</div>-->
      <!--</scroll-view>-->
      <!--<scroll-view class="list-r" :scroll-y="true">-->
        <!--<div class="section">-->
          <!--<span class="title">{{spus.title}}</span>-->
        <!--</div>-->
        <!--<div class="item-list" v-for="(item, index) in spus.list" :key="index">-->
          <!--<div class="item" @click="itemClick(item, index)">-->
            <!--<div class="item-l">-->
              <!--<img :src="item.picture">-->
            <!--</div>-->
            <!--<div class="item-r">-->
              <!--<span class="title">{{item.name}}</span>-->
              <!--<span class="sub-title">{{item.description}}</span>-->
              <!--<span class="sale-num">{{item.month_saled_content}} {{item.praise_content}}</span>-->
              <!--<div class="r-t">-->
                <!--<span class="price">￥{{item.min_price}}</span>-->
                <!--<div class="sku" v-if="item.attrs.length" @click.stop="skuClick(item, index)">-->
                  <!--<span>选规格</span>-->
                  <!--<span class="count" v-if="item.sequence > 0">{{item.sequence}}</span>-->
                <!--</div>-->
                <!--<div class="add-item" v-else>-->
                  <!--<div class="add-l" @click.stop="reduceClick(item, index)" v-if="item.sequence > 0">-->
                    <!--<i class="icon mt-reduce-o"></i>-->
                    <!--<span>{{item.sequence}}</span>-->
                  <!--</div>-->
                  <!--<div class="add-r" @click.stop="addClick(item, index)">-->
                    <!--<i class="icon mt-add-o"></i>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="tags-c">-->
                <!--<img class="tags" :src="itm.picture_url" v-for="(itm, idx) in item.product_label_picture_list"-->
                     <!--:key="idx">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</scroll-view>-->
    <!--</div>-->
    <!--<div class="comment-c" v-else-if="pageIndex === 1">-->
      <!--<scroll-view class="comment-sc" :scroll-y="true">-->
        <!--<div class="comment-header">-->
          <!--<div class="h-l">-->
            <!--<span class="score">{{commentInfo.quality_score}}</span>-->
            <!--<span class="title">商家评分</span>-->
          <!--</div>-->
          <!--<div class="h-m">-->
            <!--<div class="m-t">-->
              <!--<span class="title">口味</span>-->
              <!--<div class="star-c">-->
                <!--<i class="icon mt-star-s" v-for="(itx, idx) in stars" :key="idx"></i>-->
              <!--</div>-->
              <!--<span class="score">{{commentInfo.food_score}}</span>-->
            <!--</div>-->
            <!--<div class="m-b">-->
              <!--<span class="title">包装</span>-->
              <!--<div class="star-c">-->
                <!--<i class="icon mt-star-s" v-for="(itx, idx) in stars" :key="idx"></i>-->
              <!--</div>-->
              <!--<span class="score">{{commentInfo.pack_score}}</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="line"></div>-->
          <!--<div class="h-r">-->
            <!--<span class="score">{{commentInfo.delivery_score}}</span>-->
            <!--<span class="title">配送评分</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="comment-tags">-->
          <!--<div class="tag-item" v-for="(item, index) in commentInfo.commentMolds" :key="index">-->
            <!--<span>{{item}}</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="comment-list">-->
          <!--<div class="item-c" v-for="(item, index) in commentInfo.comments" :key="index">-->
            <!--<div class="item-l">-->
              <!--<img-->
                <!--:src="item.user_pic_url.length > 0 ? item.user_pic_url : 'http://ovyjkveav.bkt.clouddn.com/18-9-26/85572180.jpg'">-->
            <!--</div>-->
            <!--<div class="item-r">-->
              <!--<div class="h-r">-->
                <!--<div class="r-t">-->
                  <!--<span class="name">{{item.user_name}}</span>-->
                  <!--<span class="date">{{item.comment_time}}</span>-->
                <!--</div>-->
                <!--<div class="r-b">-->
                  <!--<div class="b-l">-->
                    <!--<i class="icon mt-star-s" v-for="(itx, idx) in stars" :key="idx"></i>-->
                  <!--</div>-->
                  <!--<span class="b-r">{{item.ship_time}}分钟送达</span>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="r-comtent">-->
                <!--<span>{{item.comment}}</span>-->
              <!--</div>-->
              <!--<div class="r-imgs">-->
                <!--<div class="single" v-if="item.comment_pics.length === 1">-->
                  <!--<img :src="itm.url" v-for="(itm, idx) in item.comment_pics" :key="idx">-->
                <!--</div>-->
                <!--<div class="double" v-if="item.comment_pics.length === 2 || item.comment_pics.length === 3">-->
                  <!--<img class="comment-img" :src="itm.url" v-for="(itm, idx) in item.comment_pics" :key="idx">-->
                <!--</div>-->
                <!--<div class="four" v-if="item.comment_pics.length === 4">-->
                  <!--<img class="comment-img" :src="itm.url" v-for="(itm, idx) in item.comment_pics" :key="idx">-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="food-name">-->
                <!--<div class="name-t" v-if="item.praise_food_tip.length > 0">-->
                  <!--<i class="icon mt-praise-o"></i>-->
                  <!--<span>{{item.praise_food_tip}}}</span>-->
                <!--</div>-->
                <!--<div class="name-b" v-if="item.comment_labels.length > 0">-->
                  <!--<i class="icon mt-discount-o"></i>-->
                  <!--<span>{{item.commentTags}}</span>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="reply-c" v-if="item.add_comment_list.length">-->
                <!--<span>{{item.poi_reply_contents}}</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</scroll-view>-->
    <!--</div>-->
    <!--<div class="shop-info" v-else-if="pageIndex === 2">-->
      <!--<div class="address">-->
        <!--<i class="icon mt-location-o"></i>-->
        <!--<span>上海市闵行区龙茗路1888号</span>-->
        <!--<i class="icon mt-phone-o"></i>-->
      <!--</div>-->
      <!--<div class="archive">-->
        <!--<i class="icon mt-security-o"></i>-->
        <!--<span>查看食品安全档案</span>-->
        <!--<i class="icon mt-arrow-right-o"></i>-->
      <!--</div>-->
      <!--<div class="delivery">-->
        <!--<div class="top">-->
          <!--<i class="icon mt-service-o"></i>-->
          <!--<span>配送服务：由美团快递提供配送服务</span>-->
        <!--</div>-->
        <!--<div class="btm">-->
          <!--<i class="icon mt-clock-s"></i>-->
          <!--<span>配送时间：09:50-23:59</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="service">-->
        <!--<div class="top">-->
          <!--<i class="icon mt-selected-o"></i>-->
          <!--<span class="l">商家服务：</span>-->
          <!--<span class="k">订</span>-->
          <!--<span class="v">跨天预订</span>-->
          <!--<span class="k" :style="{'margin-left': 10 + 'rpx'}">取</span>-->
          <!--<span class="v">到店自取（享优惠）</span>-->
        <!--</div>-->
        <!--<div class="discounts">-->
          <!--<div class="item" v-for="(item, index) in shopInfo.discounts2" :key="index">-->
            <!--<img :src="item.icon_url">-->
            <!--<span>{{item.info}}</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="footer-c" v-if="pageIndex === 0">-->
      <!--<div class="c-t">-->
        <!--<span>{{reduceTip}}</span>-->
      <!--</div>-->
      <!--<div class="c-m">-->
        <!--<div class="l">-->
          <!--<span class="price" v-if="totalPrice > 0 || productCount > 0">￥<span>{{totalPrice}}</span></span>-->
          <!--<div class="m-l">-->
            <!--<span class="l-l">另需配送费￥{{shopInfo.support_pay}}</span>-->
            <!--<div class="l-m"></div>-->
            <!--<span class="l-r">支持自取</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="m-r" :style="{'background-color': btnTitle === '去结算' ? '#F0D179' : '#2F2F2F'}" @click="orderClick">-->
          <!--<span :style="{color: btnTitle === '去结算' ? '#333' : '#666'}">{{btnTitle}}</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="cart-c">-->
        <!--<img mode='widthFix'-->
             <!--:src="productCount > 0 ? 'http://ovyjkveav.bkt.clouddn.com/18-9-28/55877074.jpg' : 'http://ovyjkveav.bkt.clouddn.com/18-9-25/77715001.jpg'">-->
        <!--<span v-if="productCount > 0">{{productCount}}</span>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="sku-modal" v-if="visibleSkuModal">-->
      <!--<div class="modal-c">-->
        <!--<div class="header">-->
          <!--<span class="title">{{skuInfo.title}}</span>-->
          <!--<div class="attrs" v-for="(item, index) in skuInfo.attrs" :key="index">-->
            <!--<span class="name">{{item.name}}：</span>-->
            <!--<div class="sku">-->
              <!--<div class="item" :class="{selected: itm.selected}" v-for="(itm, idx) in item.values" :key="idx"-->
                   <!--@click="attrClick(itm, idx, index)">-->
                <!--<span>{{itm.value}}</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="footer">-->
          <!--<div class="f-l">-->
            <!--<span class="price">￥{{skuInfo.price}}</span>-->
            <!--<span class="sku">({{skuInfo.selectedItems}})</span>-->
          <!--</div>-->
          <!--<div class="f-r">-->
            <!--<div class="shopping-c" v-if="!skuInfo.selectedCount" @click="modalAdd">-->
              <!--<i class="icon mt-shopping-cart-o"></i>-->
              <!--<span>加入购物车</span>-->
            <!--</div>-->
            <!--<div class="add" v-if="skuInfo.selectedCount > 0">-->
              <!--<i class="icon mt-reduce-o" :style="{color: '#ccc', 'font-size': 36 + 'rpx'}" @click="modalReduce"></i>-->
              <!--<span>{{skuInfo.selectedCount}}</span>-->
              <!--<i class="icon mt-add-o" :style="{color: '#F9D173', 'font-size': 40 + 'rpx'}" @click="modalAdd"></i>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="cancle" @click="closeSku">-->
        <!--<i class="icon mt-fork-o"></i>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="previewModal" v-if="visibleItemModal">-->
      <!--<div class="modal-c">-->
        <!--<div class="header-p">-->
          <!--<img class="item-img" :src="previewInfo.picture">-->
          <!--<span class="title">{{previewInfo.name}}</span>-->
          <!--<div class="saled">-->
            <!--<span class="l">{{previewInfo.month_saled_content}}</span>-->
            <!--<span class="r">{{previewInfo.praise_content}}</span>-->
          <!--</div>-->
          <!--<div class="tags-c" v-if="previewInfo.product_label_picture_list > 0">-->
            <!--<img class="tags" :src="itm.picture_url" v-for="(itm, idx) in previewInfo.product_label_picture_list"-->
                 <!--:key="idx">-->
          <!--</div>-->
          <!--<span class="desc">{{previewInfo.description}}</span>-->
        <!--</div>-->
        <!--<div class="footer-p">-->
          <!--<span class="l">￥{{previewInfo.min_price}}</span>-->
          <!--<div class="r">-->
            <!--<div class="add-c" v-if="previewInfo.attrs.length === 0">-->
              <!--<div class="c-l" v-if="previewInfo.sequence > 0">-->
                <!--<i class="icon mt-reduce-o" :style="{color: '#ccc', 'font-size': 36 + 'rpx'}"-->
                   <!--@click="previewReduce"></i>-->
                <!--<span>{{previewInfo.sequence}}</span>-->
              <!--</div>-->
              <!--<i class="icon mt-add-o" :style="{color: '#F9D173', 'font-size': 40 + 'rpx'}" @click="previewAdd"></i>-->
            <!--</div>-->
            <!--<div class="attr" v-if="previewInfo.attrs.length > 0" @click="previewAttr">-->
              <!--<span>选规格</span>-->
              <!--<span class="count" v-if="previewInfo.sequence > 0">{{previewInfo.sequence}}</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="cancle" @click="closePreview">-->
        <!--<i class="icon mt-fork-o"></i>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import {jointStyle} from '@/utils/style'-->
  <!--import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'-->
  <!--import {formatYMD} from '@/utils/formatTime'-->

  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--tagIndex: 0,-->
        <!--pageIndex: 0,-->
        <!--left: '40rpx',-->
        <!--stars: [1, 2, 3, 4]-->
      <!--}-->
    <!--},-->
    <!--computed: {-->
      <!--...mapState('shoppingCart', ['shopInfo', 'foods', 'spus', 'commentInfo', 'visibleSkuModal', 'visibleItemModal', 'skuInfo', 'previewInfo']),-->
      <!--lineStyle () {-->
        <!--let left = this.left-->
        <!--let style = {left}-->
        <!--return jointStyle(style)-->
      <!--},-->
      <!--totalPrice () {-->
        <!--var price = 0-->
        <!--this.foods.map(item => price += item.totalPrice)-->
        <!--return parseFloat(price).toFixed(1)-->
      <!--},-->
      <!--productCount () {-->
        <!--var count = 0-->
        <!--this.foods.map(item => count += item.count)-->
        <!--return count-->
      <!--},-->
      <!--reduceTip () {-->
        <!--var content = this.shopInfo.prompt_text-->
        <!--var price = 0-->
        <!--this.foods.map(item => price += item.totalPrice)-->
        <!--if (price <= 0) return content-->
        <!--if (price < this.shopInfo.min_price) {-->
          <!--var value = parseFloat(this.shopInfo.min_price - price).toFixed(1)-->
          <!--return `还差 ${value}元 就能起送`-->
        <!--}-->
        <!--var activity_info = this.shopInfo.activity_info-->
        <!--for (let i = 0; i < activity_info.length; i++) {-->
          <!--const item = activity_info[i]-->
          <!--if (price < item.priceLower) {-->
            <!--var str = parseFloat(item.priceLower - price).toFixed(1)-->
            <!--if (i === 0) {-->
              <!--this.changeReduceFeeDataMut(0.0)-->
              <!--return `再买 ${str}元 可减 ${item.reduce}元 [去凑单]`-->
            <!--} else {-->
              <!--var perItem = activity_info[i - 1]-->
              <!--this.changeReduceFeeDataMut(perItem.reduce)-->
              <!--return `已减${perItem.reduce}元 再买 ${str}元 可减 ${item.reduce}元 [去凑单]`-->
            <!--}-->
          <!--} else {-->
            <!--continue-->
          <!--}-->
        <!--}-->
        <!--var lastItem = activity_info[activity_info.length - 1]-->
        <!--this.changeReduceFeeDataMut(lastItem.priceLower)-->
        <!--return `已满 ${lastItem.priceLower} 可减 ${lastItem.reduce}`-->
      <!--},-->
      <!--btnTitle () {-->
        <!--var content = `${this.shopInfo.min_price}元起送`-->
        <!--var price = 0-->
        <!--this.foods.map(item => price += item.totalPrice)-->
        <!--if (price <= 0) return content-->
        <!--if (price < this.shopInfo.min_price) {-->
          <!--var value = parseFloat(this.shopInfo.min_price - price).toFixed(1)-->
          <!--return `还差${value}元`-->
        <!--} else {-->
          <!--return '去结算'-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--...mapMutations('shoppingCart', ['changeReduceFeeDataMut', 'changeSkuModalMut', 'changeItemModalMut']),-->
      <!--...mapActions('shoppingCart', ['getMenuDataAction', 'getCommentDataAction', 'getCategoryMenuDataAction', 'addItemAction', 'reduceItemAction', 'closeShoppingCartAction', 'selectSkuAction', 'changeSkuDataMut', 'attrSelectAction', 'changeSkuModalDataAction', 'previewItemAction']),-->
      <!--orderClick () {-->
        <!--var price = 0-->
        <!--this.foods.map(item => price += item.totalPrice)-->
        <!--if (price < this.shopInfo.min_price) return-->
        <!--this.closeShoppingCartAction()-->
      <!--},-->
      <!--categoryClick (item, index) {-->
        <!--this.tagIndex = index-->
        <!--this.getCategoryMenuDataAction({index})-->
      <!--},-->
      <!--menuClick () {-->
        <!--this.left = 40 + 'rpx'-->
        <!--this.pageIndex = 0-->
      <!--},-->
      <!--commentClick () {-->
        <!--this.left = 182 + 'rpx'-->
        <!--this.pageIndex = 1-->
        <!--this.getCommentDataAction()-->
      <!--},-->
      <!--shopClick () {-->
        <!--this.left = 325 + 'rpx'-->
        <!--this.pageIndex = 2-->
      <!--},-->
      <!--skuClick (item, index) {-->
        <!--this.selectSkuAction({item, index})-->
      <!--},-->
      <!--addClick (item, index) {-->
        <!--this.addItemAction({item, index})-->
      <!--},-->
      <!--reduceClick (item, index) {-->
        <!--this.reduceItemAction({item, index})-->
      <!--},-->
      <!--closeSku () {-->
        <!--this.changeSkuModalMut(false)-->
      <!--},-->
      <!--attrClick (itm, idx, setIdx) {-->
        <!--this.attrSelectAction({itm, idx, setIdx})-->
      <!--},-->
      <!--modalAdd () {-->
        <!--var skuInfo = this.skuInfo-->
        <!--const {item, index} = skuInfo-->
        <!--this.addItemAction({item, index})-->
        <!--this.changeSkuModalDataAction({num: 1})-->
      <!--},-->
      <!--modalReduce () {-->
        <!--var skuInfo = this.skuInfo-->
        <!--const {item, index} = skuInfo-->
        <!--this.reduceItemAction({item, index})-->
        <!--this.changeSkuModalDataAction({num: -1})-->
      <!--},-->
      <!--closePreview () {-->
        <!--this.changeItemModalMut(false)-->
      <!--},-->
      <!--itemClick (item, index) {-->
        <!--this.previewItemAction({item, index})-->
      <!--},-->
      <!--previewAdd () {-->
        <!--var item = this.previewInfo-->
        <!--this.addItemAction({item, index: item.preIndex})-->
      <!--},-->
      <!--previewReduce () {-->
        <!--var item = this.previewInfo-->
        <!--this.reduceItemAction({item, index: item.preIndex})-->
      <!--},-->
      <!--previewAttr () {-->
        <!--this.changeItemModalMut(false)-->
        <!--var item = this.previewInfo-->
        <!--this.selectSkuAction({item, index: item.preIndex})-->
      <!--}-->
    <!--},-->
    <!--mounted () {-->
      <!--this.getMenuDataAction()-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

  <!--.container {-->
    <!--display: flex;-->
    <!--flex-direction: column;-->
    <!--background-color: $page-bgcolor;-->
    <!--position: relative;-->
    <!--.header-c {-->
      <!--display: flex;-->
      <!--flex-direction: column;-->
      <!--position: fixed;-->
      <!--.header {-->
        <!--display: flex;-->
        <!--align-items: center;-->
        <!--background-color: #333;-->
        <!--height: 150 rpx;-->
        <!--.h-l {-->
          <!--display: flex;-->
          <!--margin-left: 16 rpx;-->
          <!--.shop-logo {-->
            <!--height: 120 rpx;-->
            <!--width: 120 rpx;-->
            <!--border-radius: 8 rpx;-->
          <!--}-->
        <!--}-->
        <!--.h-r {-->
          <!--display: flex;-->
          <!--flex-direction: column;-->
          <!--margin: 0 20 rpx;-->
          <!--.r-t {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--.t-l {-->
              <!--font-size: 20 rpx;-->
              <!--color: white;-->
            <!--}-->
            <!--.s-l {-->
              <!--margin: 0 20 rpx;-->
              <!--width: 2 rpx;-->
              <!--height: 30 rpx;-->
              <!--background-color: white;-->
            <!--}-->
            <!--.t-m {-->
              <!--font-size: 20 rpx;-->
              <!--color: white;-->
            <!--}-->
            <!--.s-r {-->
              <!--margin: 0 20 rpx;-->
              <!--width: 2 rpx;-->
              <!--height: 30 rpx;-->
              <!--background-color: white;-->
            <!--}-->
            <!--.t-r {-->
              <!--font-size: 20 rpx;-->
              <!--color: white;-->
            <!--}-->
          <!--}-->
          <!--.r-m {-->
            <!--font-size: 20 rpx;-->
            <!--color: white;-->
            <!--line-height: 30 rpx;-->
            <!--height: 30 rpx;-->
            <!--overflow: hidden;-->
            <!--margin: 10 rpx 0;-->
          <!--}-->
          <!--.r-b {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--.b-l {-->
              <!--width: 30 rpx;-->
              <!--height: 30 rpx;-->
              <!--background-color: #FF616D;-->
              <!--align-items: center;-->
              <!--justify-content: center;-->
              <!--text-align: center;-->
              <!--color: white;-->
              <!--font-size: 20 rpx;-->
            <!--}-->
            <!--.b-r {-->
              <!--font-size: 20 rpx;-->
              <!--color: white;-->
              <!--flex: 1;-->
              <!--margin-left: 20 rpx;-->
            <!--}-->
            <!--i {-->
              <!--font-size: 20 rpx;-->
              <!--color: white;-->
            <!--}-->
          <!--}-->
        <!--}-->
      <!--}-->
      <!--.cate-c {-->
        <!--display: flex;-->
        <!--height: 70 rpx;-->
        <!--align-items: center;-->
        <!--border-bottom: 2 rpx solid $spLine-color;-->
        <!--position: relative;-->
        <!--transition: all 0.2s;-->
        <!--.c-l {-->
          <!--font-size: 32 rpx;-->
          <!--color: $textBlack-color;-->
          <!--margin-left: 40 rpx;-->
        <!--}-->
        <!--.c-m {-->
          <!--font-size: 32 rpx;-->
          <!--color: $textBlack-color;-->
          <!--margin-left: 80 rpx;-->
        <!--}-->
        <!--.c-r {-->
          <!--font-size: 32 rpx;-->
          <!--color: $textBlack-color;-->
          <!--margin-left: 80 rpx;-->
        <!--}-->
        <!--.line {-->
          <!--position: absolute;-->
          <!--width: 60 rpx;-->
          <!--height: 4 rpx;-->
          <!--background-color: $theme-color;-->
          <!--left: 40 rpx;-->
          <!--bottom: 2 rpx;-->
          <!--transition: left 0.2s;-->
        <!--}-->
      <!--}-->
    <!--}-->
    <!--.list-c {-->
      <!--display: flex;-->
      <!--position: fixed;-->
      <!--top: 220 rpx;-->
      <!--bottom: 200 rpx;-->
      <!--.list-l {-->
        <!--display: flex;-->
        <!--flex-direction: column;-->
        <!--width: 160 rpx;-->
        <!--background-color: $page-bgcolor;-->
        <!--.l-item {-->
          <!--display: flex;-->
          <!--width: 160 rpx;-->
          <!--align-items: center;-->
          <!--justify-content: center;-->
          <!--padding: 20 rpx;-->
          <!--box-sizing: border-box;-->
          <!--position: relative;-->
          <!--img {-->
            <!--width: 30 rpx;-->
            <!--height: 30 rpx;-->
            <!--background-size: cover;-->
            <!--border-radius: 15 rpx;-->
          <!--}-->
          <!--span {-->
            <!--font-size: 24 rpx;-->
            <!--color: $textDarkGray-color;-->
            <!--margin-left: 10 rpx;-->
          <!--}-->
          <!--.count {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--justify-content: center;-->
            <!--background-color: $mtRed-color;-->
            <!--width: 30 rpx;-->
            <!--height: 30 rpx;-->
            <!--border-radius: 15 rpx;-->
            <!--right: 0;-->
            <!--top: 6 rpx;-->
            <!--position: absolute;-->
            <!--font-size: 20 rpx;-->
            <!--color: white;-->
          <!--}-->
        <!--}-->
        <!--.active {-->
          <!--background-color: white;-->
          <!--span {-->
            <!--color: #000;-->
            <!--font-weight: bold;-->
          <!--}-->
        <!--}-->
      <!--}-->
      <!--.list-r {-->
        <!--display: flex;-->
        <!--flex-direction: column;-->
        <!--flex: 1;-->
        <!--background-color: white;-->
        <!--.section {-->
          <!--display: flex;-->
          <!--height: 70 rpx;-->
          <!--align-items: center;-->
          <!--margin-left: 20 rpx;-->
          <!--span {-->
            <!--font-size: 28 rpx;-->
            <!--color: $textBlack-color;-->
          <!--}-->
        <!--}-->
        <!--.item-list {-->
          <!--display: flex;-->
          <!--margin: 0 20 rpx;-->
          <!--flex-direction: column;-->
          <!--.item {-->
            <!--display: flex;-->
            <!--margin-bottom: 30 rpx;-->
            <!--.item-l {-->
              <!--img {-->
                <!--width: 160 rpx;-->
                <!--height: 160 rpx;-->
                <!--background-size: cover;-->
              <!--}-->
            <!--}-->
            <!--.item-r {-->
              <!--display: flex;-->
              <!--flex-direction: column;-->
              <!--margin-left: 20 rpx;-->
              <!--justify-content: space-between;-->
              <!--flex: 1;-->
              <!--.title {-->
                <!--font-size: 28 rpx;-->
                <!--color: $textBlack-color;-->
                <!--font-weight: bold;-->
                <!--overflow: hidden;-->
                <!--line-height: 30 rpx;-->
                <!--height: 30 rpx;-->
              <!--}-->
              <!--.sub-title {-->
                <!--font-size: 20 rpx;-->
                <!--color: $textDarkGray-color;-->
                <!--line-height: 30 rpx;-->
                <!--overflow: hidden;-->
                <!--height: 30 rpx;-->
                <!--margin-top: 10 rpx;-->
              <!--}-->
              <!--.sale-num {-->
                <!--font-size: 20 rpx;-->
                <!--color: $textDarkGray-color;-->
                <!--margin-top: 10 rpx;-->
              <!--}-->
              <!--.r-t {-->
                <!--display: flex;-->
                <!--align-items: center;-->
                <!--justify-content: space-between;-->
                <!--.price {-->
                  <!--font-size: 32 rpx;-->
                  <!--color: $mtRed-color;-->
                  <!--font-weight: bold;-->
                <!--}-->
                <!--.sku {-->
                  <!--display: flex;-->
                  <!--align-items: center;-->
                  <!--justify-content: center;-->
                  <!--background-color: $theme-color;-->
                  <!--padding: 8 rpx 12 rpx;-->
                  <!--border-radius: 25 rpx;-->
                  <!--position: relative;-->
                  <!--span {-->
                    <!--font-size: 20 rpx;-->
                    <!--color: $textBlack-color-->
                  <!--}-->
                  <!--.count {-->
                    <!--width: 30 rpx;-->
                    <!--height: 30 rpx;-->
                    <!--background-color: $mtRed-color;-->
                    <!--display: flex;-->
                    <!--align-items: center;-->
                    <!--justify-content: center;-->
                    <!--position: absolute;-->
                    <!--color: white;-->
                    <!--font-size: 20 rpx;-->
                    <!--right: 0;-->
                    <!--top: -14rpx;-->
                    <!--border-radius: 15 rpx;-->
                  <!--}-->
                <!--}-->
                <!--.add-item {-->
                  <!--display: flex;-->
                  <!--align-items: center;-->
                  <!--.add-l {-->
                    <!--display: flex;-->
                    <!--flex-direction: row;-->
                    <!--align-items: center;-->
                    <!--i {-->
                      <!--font-size: 36 rpx;-->
                      <!--color: $textGray-color;-->
                    <!--}-->
                    <!--span {-->
                      <!--font-size: 24 rpx;-->
                      <!--color: $textBlack-color;-->
                      <!--margin: 0 20 rpx;-->
                    <!--}-->
                  <!--}-->
                  <!--.add-r {-->
                    <!--i {-->
                      <!--color: $theme-color;-->
                      <!--font-size: 40 rpx;-->
                    <!--}-->
                  <!--}-->
                <!--}-->
              <!--}-->
              <!--.tags-c {-->
                <!--display: flex;-->
                <!--align-items: center;-->
                <!--margin-top: 10 rpx;-->
                <!--flex-wrap: wrap;-->
                <!--img {-->
                  <!--width: 60 rpx;-->
                  <!--height: 30 rpx;-->
                  <!--background-size: cover;-->
                <!--}-->
              <!--}-->
            <!--}-->
          <!--}-->
        <!--}-->
      <!--}-->
      <!--::-webkit-scrollbar {-->
        <!--width: 0;-->
        <!--height: 0;-->
        <!--color: transparent;-->
      <!--}-->
    <!--}-->
    <!--.comment-c {-->
      <!--.comment-sc {-->
        <!--display: flex;-->
        <!--position: fixed;-->
        <!--top: 220 rpx;-->
        <!--flex-direction: column;-->
        <!--height: 100%;-->
        <!--.comment-header {-->
          <!--margin-top: 20 rpx;-->
          <!--display: flex;-->
          <!--align-items: center;-->
          <!--height: 140 rpx;-->
          <!--background-color: white;-->
          <!--width: 100%;-->
          <!--justify-content: space-around;-->
          <!--.h-l {-->
            <!--display: flex;-->
            <!--flex-direction: column;-->
            <!--align-items: center;-->
            <!--justify-content: center;-->
            <!--.score {-->
              <!--font-size: 50 rpx;-->
              <!--color: $theme-color;-->
            <!--}-->
            <!--.title {-->
              <!--font-size: 20 rpx;-->
              <!--color: $textBlack-color;-->
            <!--}-->
          <!--}-->
          <!--.h-m {-->
            <!--display: flex;-->
            <!--flex-direction: column;-->
            <!--align-items: center;-->
            <!--justify-content: space-around;-->
            <!--.m-t {-->
              <!--display: flex;-->
              <!--align-items: center;-->
              <!--.title {-->
                <!--font-size: 20 rpx;-->
                <!--color: $textBlack-color;-->
              <!--}-->
              <!--.star-c {-->
                <!--display: flex;-->
                <!--align-items: center;-->
                <!--margin: 0 30 rpx;-->
                <!--i {-->
                  <!--color: $theme-color;-->
                  <!--font-size: 24 rpx;-->
                <!--}-->
              <!--}-->
              <!--.score {-->
                <!--font-size: 24 rpx;-->
                <!--color: $theme-color;-->
              <!--}-->
            <!--}-->
            <!--.m-b {-->
              <!--@extend .m-t;-->
            <!--}-->
          <!--}-->
          <!--.line {-->
            <!--width: 2 rpx;-->
            <!--height: 80 rpx;-->
            <!--background-color: $spLine-color;-->
            <!--margin-left: 30 rpx;-->
          <!--}-->
          <!--.h-r {-->
            <!--@extend .h-l;-->
            <!--.score {-->
              <!--color: $textDarkGray-color-->
            <!--}-->
          <!--}-->
        <!--}-->
        <!--.comment-tags {-->
          <!--margin-top: 20 rpx;-->
          <!--display: flex;-->
          <!--background-color: white;-->
          <!--padding: 30 rpx;-->
          <!--width: auto;-->
          <!--flex-wrap: wrap;-->
          <!--padding-top: 12 rpx;-->
          <!--.tag-item {-->
            <!--background-color: white;-->
            <!--border: 2 rpx solid $spLine-color;-->
            <!--padding: 0 16 rpx;-->
            <!--margin-right: 20 rpx;-->
            <!--margin-top: 18 rpx;-->
            <!--align-items: center;-->
            <!--justify-content: center;-->
            <!--line-height: 50 rpx;-->
            <!--span {-->
              <!--font-size: 24 rpx;-->
              <!--color: $textDarkGray-color;-->
            <!--}-->
          <!--}-->
          <!--.tag-item:first-child {-->
            <!--background-color: #FFF7E2;-->
            <!--border: 2 rpx solid #F0EDBA;-->
            <!--span {-->
              <!--color: #E7AC40;-->
            <!--}-->
          <!--}-->
        <!--}-->
        <!--.comment-list {-->
          <!--margin-top: 20 rpx;-->
          <!--display: flex;-->
          <!--flex-direction: column;-->
          <!--.item-c {-->
            <!--display: flex;-->
            <!--overflow: hidden;-->
            <!--background-color: white;-->
            <!--border-bottom: 2 rpx solid $spLine-color;-->
            <!--.item-l {-->
              <!--margin-left: 30 rpx;-->
              <!--margin-top: 20 rpx;-->
              <!--img {-->
                <!--width: 70 rpx;-->
                <!--height: 70 rpx;-->
                <!--border-radius: 35 rpx;-->
              <!--}-->
            <!--}-->
            <!--.item-r {-->
              <!--display: flex;-->
              <!--flex-direction: column;-->
              <!--background-color: white;-->
              <!--margin-left: 20 rpx;-->
              <!--margin-top: 20 rpx;-->
              <!--margin-right: 30 rpx;-->
              <!--flex: 1;-->
              <!--.h-r {-->
                <!--display: flex;-->
                <!--flex-direction: column;-->
                <!--flex: 1;-->
                <!--.r-t {-->
                  <!--display: flex;-->
                  <!--justify-content: space-between;-->
                  <!--.name {-->
                    <!--font-size: 32 rpx;-->
                    <!--color: $textBlack-color;-->
                  <!--}-->
                  <!--.date {-->
                    <!--font-size: 20 rpx;-->
                    <!--color: $textGray-color;-->
                  <!--}-->
                <!--}-->
                <!--.r-b {-->
                  <!--display: flex;-->
                  <!--align-items: center;-->
                  <!--.b-l {-->
                    <!--display: flex;-->
                    <!--align-items: center;-->
                    <!--i {-->
                      <!--font-size: 20 rpx;-->
                      <!--color: $theme-color;-->
                    <!--}-->
                  <!--}-->
                  <!--.b-r {-->
                    <!--font-size: 20 rpx;-->
                    <!--color: $textGray-color;-->
                    <!--margin-left: 20 rpx;-->
                  <!--}-->
                <!--}-->
              <!--}-->
              <!--.r-comtent {-->
                <!--display: flex;-->
                <!--margin-top: 10 rpx;-->
                <!--span {-->
                  <!--font-size: 24 rpx;-->
                  <!--color: $textBlack-color;-->
                <!--}-->
              <!--}-->
              <!--.r-imgs {-->
                <!--display: flex;-->
                <!--flex-direction: row;-->
                <!--margin-top: 10 rpx;-->
                <!--.single {-->
                  <!--margin-top: 10 rpx;-->
                  <!--img {-->
                    <!--width: 300 rpx;-->
                    <!--height: 300 rpx;-->
                  <!--}-->
                <!--}-->
                <!--.double {-->
                  <!--img {-->
                    <!--width: 160 rpx;-->
                    <!--height: 160 rpx;-->
                    <!--margin-right: 16 rpx;-->
                  <!--}-->
                <!--}-->
                <!--.four {-->
                  <!--display: flex;-->
                  <!--width: 300 rpx;-->
                  <!--flex-wrap: wrap;-->
                  <!--justify-content: space-between;-->
                  <!--img {-->
                    <!--width: 140 rpx;-->
                    <!--height: 140 rpx;-->
                    <!--margin: 10 rpx 0;-->
                  <!--}-->
                <!--}-->
              <!--}-->
              <!--.food-name {-->
                <!--display: flex;-->
                <!--flex-direction: column;-->
                <!--margin-top: 10 rpx;-->
                <!--.name-t {-->
                  <!--display: flex;-->
                  <!--i {-->
                    <!--font-size: 24 rpx;-->
                    <!--color: $textGray-color;-->
                  <!--}-->
                  <!--span {-->
                    <!--font-size: 24 rpx;-->
                    <!--color: #777D8A;-->
                    <!--margin-left: 20 rpx;-->
                  <!--}-->
                <!--}-->
                <!--.name-b {-->
                  <!--@extend .name-t;-->
                  <!--margin-top: 8 rpx;-->
                  <!--span {-->
                    <!--color: $textBlack-color;-->
                  <!--}-->
                <!--}-->
              <!--}-->
              <!--.reply-c {-->
                <!--display: flex;-->
                <!--background-color: #F4F4F4;-->
                <!--padding: 20 rpx 14 rpx;-->
                <!--margin-top: 20 rpx;-->
                <!--margin-bottom: 30 rpx;-->
                <!--span {-->
                  <!--color: $textGray-color;-->
                  <!--font-size: 24 rpx;-->
                <!--}-->
              <!--}-->
            <!--}-->
          <!--}-->
          <!--.item-c:last-child {-->
            <!--margin-bottom: 220 rpx;-->
          <!--}-->
        <!--}-->
      <!--}-->
    <!--}-->
    <!--.shop-info {-->
      <!--display: flex;-->
      <!--position: fixed;-->
      <!--top: 220 rpx;-->
      <!--flex-direction: column;-->
      <!--width: 100%;-->
      <!--height: 100%;-->
      <!--.address {-->
        <!--display: flex;-->
        <!--align-items: center;-->
        <!--height: 70 rpx;-->
        <!--margin-top: 20 rpx;-->
        <!--background-color: white;-->
        <!--padding: 0 20 rpx;-->
        <!--i {-->
          <!--font-size: 38 rpx;-->
          <!--color: $textGray-color;-->
        <!--}-->
        <!--i:last-child {-->
          <!--color: $textBlack-color;-->
        <!--}-->
        <!--span {-->
          <!--flex: 1;-->
          <!--margin: 0 20 rpx;-->
          <!--font-size: 24 rpx;-->
          <!--color: $textBlack-color;-->
        <!--}-->
      <!--}-->
      <!--.archive {-->
        <!--@extend .address;-->
        <!--i:last-child {-->
          <!--font-size: 24 rpx;-->
          <!--color: $textGray-color;-->
        <!--}-->
      <!--}-->
      <!--.delivery {-->
        <!--display: flex;-->
        <!--flex-direction: column;-->
        <!--margin-top: 20 rpx;-->
        <!--background-color: white;-->
        <!--padding: 0 16 rpx;-->
        <!--.top {-->
          <!--display: flex;-->
          <!--align-items: center;-->
          <!--height: 80 rpx;-->
          <!--padding-left: 10 rpx;-->
          <!--border-bottom: 2 rpx solid $spLine-color;-->
          <!--i {-->
            <!--font-size: 32 rpx;-->
            <!--color: $textGray-color;-->
          <!--}-->
          <!--span {-->
            <!--font-size: 24 rpx;-->
            <!--color: $textBlack-color;-->
            <!--margin: 0 20 rpx;-->
          <!--}-->
        <!--}-->
        <!--.btm {-->
          <!--@extend .top;-->
          <!--border-bottom: 0 solid $spLine-color;-->
        <!--}-->
      <!--}-->
      <!--.service {-->
        <!--display: flex;-->
        <!--flex-direction: column;-->
        <!--margin-top: 20 rpx;-->
        <!--background-color: white;-->
        <!--padding: 0 16 rpx;-->
        <!--.top {-->
          <!--display: flex;-->
          <!--align-items: center;-->
          <!--height: 80 rpx;-->
          <!--padding-left: 14 rpx;-->
          <!--border-bottom: 2 rpx solid $spLine-color;-->
          <!--i {-->
            <!--font-size: 28 rpx;-->
            <!--color: $textGray-color;-->
          <!--}-->
          <!--.l {-->
            <!--font-size: 24 rpx;-->
            <!--color: $textBlack-color;-->
            <!--margin-left: 20 rpx;-->
          <!--}-->
          <!--.k {-->
            <!--width: 30 rpx;-->
            <!--height: 30 rpx;-->
            <!--align-items: center;-->
            <!--justify-content: center;-->
            <!--display: flex;-->
            <!--text-align: center;-->
            <!--border: 2 rpx solid #0095D8;-->
            <!--color: #0095D8;-->
            <!--font-size: 20 rpx;-->
            <!--margin-left: 10 rpx;-->
          <!--}-->
          <!--.v {-->
            <!--font-size: 24 rpx;-->
            <!--color: $textBlack-color;-->
            <!--margin-left: 10 rpx;-->
          <!--}-->
        <!--}-->
        <!--.discounts {-->
          <!--display: flex;-->
          <!--flex-direction: column;-->
          <!--justify-content: space-around;-->
          <!--padding: 0 16 rpx;-->
          <!--padding-bottom: 20 rpx;-->
          <!--.item {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--height: 60 rpx;-->
            <!--margin-top: 10 rpx;-->
            <!--img {-->
              <!--width: 30 rpx;-->
              <!--height: 30 rpx;-->
            <!--}-->
            <!--span {-->
              <!--font-size: 24 rpx;-->
              <!--color: $textBlack-color;-->
              <!--margin-left: 20 rpx;-->
            <!--}-->
          <!--}-->
        <!--}-->
      <!--}-->
    <!--}-->
    <!--.footer-c {-->
      <!--display: flex;-->
      <!--flex-direction: column;-->
      <!--position: fixed;-->
      <!--bottom: 0;-->
      <!--height: 200 rpx;-->
      <!--background-color: #333;-->
      <!--z-index: 990;-->
      <!--width: 100%;-->
      <!--.c-t {-->
        <!--display: flex;-->
        <!--align-items: center;-->
        <!--justify-content: center;-->
        <!--height: 50 rpx;-->
        <!--background-color: #FFEFD2;-->
        <!--span {-->
          <!--font-size: 20 rpx;-->
          <!--color: $textBlack-color;-->
        <!--}-->
      <!--}-->
      <!--.c-m {-->
        <!--display: flex;-->
        <!--justify-content: center;-->
        <!--height: 88 rpx;-->
        <!--margin-left: 140 rpx;-->
        <!--.l {-->
          <!--display: flex;-->
          <!--flex-direction: column;-->
          <!--flex: 1;-->
          <!--justify-content: space-around;-->
          <!--.price {-->
            <!--font-size: 24 rpx;-->
            <!--color: white;-->
            <!--span {-->
              <!--font-size: 40 rpx;-->
              <!--color: white;-->
            <!--}-->
          <!--}-->
          <!--.m-l {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--.l-l {-->
              <!--font-size: 24 rpx;-->
              <!--color: $textDarkGray-color;-->
            <!--}-->
            <!--.l-m {-->
              <!--width: 2 rpx;-->
              <!--height: 20 rpx;-->
              <!--background-color: $textDarkGray-color;-->
              <!--margin: 0 20 rpx;-->
            <!--}-->
            <!--.l-r {-->
              <!--font-size: 24 rpx;-->
              <!--color: $textDarkGray-color;-->
            <!--}-->
          <!--}-->
        <!--}-->
        <!--.m-r {-->
          <!--display: flex;-->
          <!--align-items: center;-->
          <!--justify-content: center;-->
          <!--width: 200 rpx;-->
          <!--height: 88 rpx;-->
          <!--background-color: #2F2F2F;-->
          <!--span {-->
            <!--font-size: 32 rpx;-->
            <!--color: $textDarkGray-color;-->
            <!--font-weight: bold;-->
          <!--}-->
        <!--}-->
      <!--}-->
      <!--.cart-c {-->
        <!--position: absolute;-->
        <!--left: 20 rpx;-->
        <!--top: 20 rpx;-->
        <!--z-index: 991;-->
        <!--img {-->
          <!--width: 100 rpx;-->
          <!--height: 100 rpx;-->
          <!--background-size: cover;-->
        <!--}-->
        <!--span {-->
          <!--position: absolute;-->
          <!--right: 0;-->
          <!--top: 20 rpx;-->
          <!--background-color: $mtRed-color;-->
          <!--width: 30 rpx;-->
          <!--height: 30 rpx;-->
          <!--border-radius: 15 rpx;-->
          <!--display: flex;-->
          <!--align-items: center;-->
          <!--justify-content: center;-->
          <!--color: white;-->
          <!--font-size: 20 rpx;-->
        <!--}-->
      <!--}-->
    <!--}-->
    <!--.sku-modal {-->
      <!--position: fixed;-->
      <!--width: 100%;-->
      <!--height: 100%;-->
      <!--background: rgba($color: #000000, $alpha: 0.3);-->
      <!--z-index: 996;-->
      <!--flex-direction: column;-->
      <!--display: flex;-->
      <!--justify-content: center;-->
      <!--align-items: center;-->
      <!--.modal-c {-->
        <!--display: flex;-->
        <!--flex-direction: column;-->
        <!--background-color: white;-->
        <!--width: 90%;-->
        <!--margin-right: 40 rpx;-->
        <!--margin-left: 40 rpx;-->
        <!--border-radius: 10 rpx;-->
        <!--.header {-->
          <!--display: flex;-->
          <!--flex-direction: column;-->
          <!--.title {-->
            <!--font-size: 32 rpx;-->
            <!--color: $textDarkGray-color;-->
            <!--align-self: center;-->
            <!--margin-top: 20 rpx;-->
          <!--}-->
          <!--.attrs {-->
            <!--display: flex;-->
            <!--flex-direction: column;-->
            <!--margin: 0 20 rpx;-->
            <!--margin-top: 20 rpx;-->
            <!--.name {-->
              <!--font-size: 28 rpx;-->
              <!--color: $textBlack-color;-->
            <!--}-->
            <!--.sku {-->
              <!--display: flex;-->
              <!--flex-direction: row;-->
              <!--width: 100%;-->
              <!--flex-wrap: wrap;-->
              <!--margin-bottom: 20 rpx;-->
              <!--.item {-->
                <!--display: flex;-->
                <!--align-items: center;-->
                <!--justify-content: center;-->
                <!--width: 140 rpx;-->
                <!--height: 50 rpx;-->
                <!--border: 2 rpx solid $spLine-color;-->
                <!--border-radius: 4 rpx;-->
                <!--margin-top: 20 rpx;-->
                <!--margin-right: 20 rpx;-->
                <!--span {-->
                  <!--font-size: 24 rpx;-->
                  <!--color: $textBlack-color-->
                <!--}-->
              <!--}-->
              <!--.selected {-->
                <!--background-color: #FFF9F4;-->
                <!--border: 2 rpx solid $theme-color;-->
                <!--span {-->
                  <!--color: $theme-color;-->
                <!--}-->
              <!--}-->
            <!--}-->
          <!--}-->
        <!--}-->
        <!--.footer {-->
          <!--display: flex;-->
          <!--align-items: center;-->
          <!--background-color: $page-bgcolor;-->
          <!--height: 100 rpx;-->
          <!--border-bottom-right-radius: 10 rpx;-->
          <!--border-bottom-left-radius: 10 rpx;-->
          <!--padding: 0 20 rpx;-->
          <!--.f-l {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--flex: 1;-->
            <!--.price {-->
              <!--font-size: 36 rpx;-->
              <!--color: $mtRed-color;-->
              <!--font-weight: bold;-->
            <!--}-->
            <!--.sku {-->
              <!--font-size: 20 rpx;-->
              <!--color: $textBlack-color;-->
              <!--margin-left: 20 rpx;-->
            <!--}-->
          <!--}-->
          <!--.f-r {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--.shopping-c {-->
              <!--display: flex;-->
              <!--align-items: center;-->
              <!--height: 60 rpx;-->
              <!--border-radius: 30 rpx;-->
              <!--padding: 0 20 rpx;-->
              <!--background-color: $theme-color;-->
              <!--i {-->
                <!--font-size: 28 rpx;-->
                <!--color: $textBlack-color;-->
              <!--}-->
              <!--span {-->
                <!--font-size: 24 rpx;-->
                <!--color: $textBlack-color;-->
                <!--margin-left: 10 rpx;-->
              <!--}-->
            <!--}-->
            <!--.add {-->
              <!--display: flex;-->
              <!--flex-direction: row;-->
              <!--align-items: center;-->
              <!--span {-->
                <!--font-size: 24 rpx;-->
                <!--color: $textDarkGray-color;-->
                <!--margin: 0 20 rpx;-->
              <!--}-->
            <!--}-->
          <!--}-->
        <!--}-->
      <!--}-->
      <!--.cancle {-->
        <!--display: flex;-->
        <!--align-items: center;-->
        <!--justify-content: center;-->
        <!--margin-top: 40 rpx;-->
        <!--width: 70 rpx;-->
        <!--height: 70 rpx;-->
        <!--border-radius: 35 rpx;-->
        <!--background: rgba($color: #000000, $alpha: 0.5);-->
        <!--border: 2 rpx solid $textGray-color;-->
        <!--i {-->
          <!--font-size: 32 rpx;-->
          <!--color: white;-->
        <!--}-->
      <!--}-->
    <!--}-->
    <!--.previewModal {-->
      <!--@extend .sku-modal;-->
      <!--.modal-c {-->
        <!--.header-p {-->
          <!--display: flex;-->
          <!--flex-direction: column;-->
          <!--.item-img {-->
            <!--width: 100%;-->
            <!--height: 400 rpx;-->
            <!--background-color: #E7AC40;-->
            <!--border-top-left-radius: 10 rpx;-->
            <!--border-top-right-radius: 10 rpx;-->
          <!--}-->
          <!--.title {-->
            <!--font-size: 28 rpx;-->
            <!--color: $textBlack-color;-->
            <!--font-weight: bold;-->
            <!--margin-left: 16 rpx;-->
            <!--margin-top: 16 rpx;-->
          <!--}-->
          <!--.saled {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--flex-direction: row;-->
            <!--margin: 0 16 rpx;-->
            <!--margin-top: 10 rpx;-->
            <!--.l {-->
              <!--font-size: 20 rpx;-->
              <!--color: $textDarkGray-color;-->
            <!--}-->
            <!--.r {-->
              <!--@extend .l;-->
              <!--margin-left: 30 rpx;-->
            <!--}-->
          <!--}-->
          <!--.tags-c {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--margin: 0 16 rpx;-->
            <!--margin-top: 10 rpx;-->
            <!--flex-wrap: wrap;-->
            <!--img {-->
              <!--width: 60 rpx;-->
              <!--height: 30 rpx;-->
              <!--background-size: cover;-->
            <!--}-->
          <!--}-->
          <!--.desc {-->
            <!--font-size: 20 rpx;-->
            <!--color: $textDarkGray-color;-->
            <!--margin-left: 16 rpx;-->
            <!--margin-top: 30 rpx;-->
            <!--margin-bottom: 20 rpx;-->
          <!--}-->
        <!--}-->
        <!--.footer-p {-->
          <!--display: flex;-->
          <!--align-items: center;-->
          <!--height: 80 rpx;-->
          <!--background-color: $page-bgcolor;-->
          <!--padding: 0 20 rpx;-->
          <!--border-bottom-left-radius: 10 rpx;-->
          <!--border-bottom-right-radius: 10 rpx;-->
          <!--.l {-->
            <!--font-size: 36 rpx;-->
            <!--color: $mtRed-color;-->
            <!--flex: 1;-->
            <!--font-weight: bold;-->
          <!--}-->
          <!--.r {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--.add-c {-->
              <!--display: flex;-->
              <!--align-items: center;-->
              <!--.c-l {-->
                <!--display: flex;-->
                <!--align-items: center;-->
              <!--}-->
              <!--span {-->
                <!--font-size: 20 rpx;-->
                <!--color: $textBlack-color;-->
                <!--margin: 0 20 rpx;-->
              <!--}-->
            <!--}-->
            <!--.attr {-->
              <!--display: flex;-->
              <!--align-items: center;-->
              <!--justify-content: center;-->
              <!--background-color: $theme-color;-->
              <!--padding: 8 rpx 12 rpx;-->
              <!--border-radius: 25 rpx;-->
              <!--position: relative;-->
              <!--span {-->
                <!--font-size: 20 rpx;-->
                <!--color: $textBlack-color-->
              <!--}-->
              <!--.count {-->
                <!--width: 30 rpx;-->
                <!--height: 30 rpx;-->
                <!--background-color: $mtRed-color;-->
                <!--display: flex;-->
                <!--align-items: center;-->
                <!--justify-content: center;-->
                <!--position: absolute;-->
                <!--color: white;-->
                <!--font-size: 20 rpx;-->
                <!--right: 0;-->
                <!--top: -14rpx;-->
                <!--border-radius: 15 rpx;-->
              <!--}-->
            <!--}-->
          <!--}-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->
