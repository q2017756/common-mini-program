<template>
  <div class="detail">
    <div class="detail-container">
      <div class="desc">
        <img src="https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640"/>
        <div class="content">
          <p>
            <span class="label">商品名称</span>
            <span class="font-normal">xxx服务</span>
          </p>
          <p>
            <span class="label">一口价</span>
            <span class="font-normal">300元</span>
          </p>
          <p>
            <span class="label">小时工</span>
            <span class="font-normal">50元/小时</span>
          </p>
        </div>
      </div>
      <div class="desc-bottom">
        保障
        <van-icon name="award" color="#359470" />
        未服务及时退
      </div>
    </div>

    <div class="detail-container">
      <div class="title">商品详情</div>
      <div class="content">
        <p>提供洗手间、卧室、客厅 无死角清洁</p>
        <div class="more">
          <van-icon name="search" size="20px" color="#fff" />
          查看更多
        </div>
      </div>
    </div>

    <div class="detail-container">
      <div class="title">提供者详情</div>
      <div class="content">
        <div class="people-info">
          <img src="https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640"/>
          <div>
            <p>李阿姨</p>
            <p>成为社区服务员1年</p>
            <p>擅长客厅厨房保洁</p>
            <van-rate disabled value="4"/>
          </div>
          <div class="more">
            <van-icon name="search" size="20px" color="#fff" />
            查看更多
          </div>
        </div>
      </div>
    </div>

    <div class="detail-container">
      <div class="title">评价</div>
      <div class="content">
        <div>
          <div>
            <div class="mb5">
              <span>小张 </span><span>2017-1-1</span>
            </div>
            <van-rate disabled size="15" value="4"/>
            <p>非常满意</p>
          </div>
        </div>
        <div class="more">
          <van-icon name="search" size="20px" color="#fff" />
          查看更多
        </div>
      </div>
    </div>

    <div class="detail-container">
      <div class="title">购买须知</div>
      <div class="content">
        <p>非新品，介意勿买</p>
        <div class="more">
          <van-icon name="search" size="20px" color="#fff" />
          查看更多
        </div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-button text="原价购买" type="warning" />
      <van-goods-action-button text="拼团购买" />
    </van-goods-action>

  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  /deep/ .detail {
    display: flex;
    flex-direction: column;
    background: #eee;
    padding-bottom: 8vh;
    font-size: 14px;
    image {
      width: 25vw;
      height: 25vw;
    }
    .detail-container {
      background: #fff;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-bottom: 10px;
      .title {
        padding: 5px 5vw;
        border-bottom: 2px solid #eee;
        font-weight: bold;
      }
      .content {
        padding: 5px 5vw;
      }
    }
    .desc-bottom {
      padding: 5px 8vw;
    }
    .desc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 8vw;
      border-bottom: 4px solid #eee;
      .content {
        flex: 1;
        height: 25vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10vw;
        padding: 5px 0;
        .label {
          display: inline-block;
          width: 20vw;
        }
      }
    }
    .more {
      float: right;
      display: flex;
      margin: 10px 0;
      padding: 4px 8px 0 8px;
      border-radius: 10px;
      background: $mainColor;
      color: #fff;
    }
    .people-info {
      display: flex;
      justify-content: space-between;
      .more {
        align-self: flex-end;
      }
    }
  }

</style>
