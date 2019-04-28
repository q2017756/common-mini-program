<template>
  <div @click="clickHandle">
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <div v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="full-image"/>
        </swiper-item>
      </div>
    </swiper>
    <div class="item-container">
      <div class="top">
        <p class="name">家政公告:</p>
        <p class="desc">本小区今日停水停电停煤气啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
      </div>
      <div class="list">
        <div v-for="(item,index) in list" v-if="index < 4" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
      <div class="list">
        <div v-for="(item,index) in list" v-if="index > 3" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
      <div class="bottom">
        <div>
          <p class="title">社圈</p>
          <p class="desc">分享社区中的新鲜事儿</p>
        </div>
        <div>
          <p class="title">社区公告</p>
          <p class="desc">停水停电，政策信息，社区动态一网打尽</p>
        </div>
        <div>
          <p class="title">社区活动</p>
          <p class="desc">组团拼好货<br/>社区活动实时更新，丰富您的社区生活</p>
        </div>
      </div>
    </div>

    <img class="full-image" :src="imgUrls[0]" alt="">
  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data () {
      return {
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        },
        imgUrls: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        list: [
          {
            img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            name: '社区小时工'
          },
          {
            img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            name: '月嫂保姆'
          },
          {
            img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            name: '共享时间'
          },
          {
            img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            name: '宠物代管'
          },
          {
            img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            name: '保洁清扫'
          },
          {
            img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            name: '跳蚤市场'
          },
          {
            img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            name: '家庭教室'
          },
          {
            img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            name: '发现更多'
          }
        ]
      }
    },

    components: {
      card
    },

    methods: {
      bindViewTap () {
        const url = '../logs/main'
        if (mpvuePlatform === 'wx') {
          mpvue.switchTab({url})
        } else {
          mpvue.navigateTo({url})
        }
      },
      clickHandle (ev) {
        console.log('clickHandle:', ev)
        // throw {message: 'custom test'}
      }
    },

    created () {
      //      wx.authorize({scope: 'scope.userInfo'})
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .full-image {
    width: 100%;
  }

  .item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(to bottom, #359470, white);
    padding: 10rpx 0 30rpx 0;
    .top {
      display: flex;
      align-items: flex-end;
      padding: 0 10rpx 10rpx 10rpx;
      color: #fff;
      .name {
        width: 3rem;
      }
      .desc {
        text-decoration: underline;
        vertical-align: bottom;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
      }

    }
    .list {
      display: flex;
      justify-content: space-around;
      padding: 10rpx 0;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20rpx;
      }
      img {
        width: 10vw;
        height: 10vw;
        margin-bottom: 10rpx;
        border-radius: 50%;
      }
      p {
        width: 25vw;
        text-align: center;
        font-size: 14px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      margin-top: 20rpx;
      div {
        box-sizing: border-box;
        width: 29vw;
        padding: 10rpx;
        background: #fff;
        border-radius: 10px;
        box-shadow: 1px 5px 5px #eee;
        .title {
          margin-bottom: 20rpx;
          font-size: 16px;
          font-weight: bold;
        }
        .desc {
          font-size: 12px;
          height: 12vh;
          vertical-align: middle;
        }
      }

    }
  }

</style>
