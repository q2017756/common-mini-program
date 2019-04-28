<template>
  <div class="list">
    <van-tabs :active="active" @change="handleChangeTab">
      <van-tab v-for="(item, index) in tabs" :key="index"
               :title="item.name"></van-tab>
    </van-tabs>
    <div class="content">
      <div class="sub-nav">
        <div v-for="(item, index) in tabs[active].children" :key="index"
             class="item" :class="{active: item.active}"
             @click="handleChangeSubTab(index)">{{item.subName}}</div>
      </div>
      <div class="sub-content">
        <div v-for="item in 4" :key="item" class="item">
          <div class="item-top">
            <img src="https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640"/>
            <div class="desc">
              <p class="font-normal">服务名</p>
              <div class="color-gray">
                <span>已售2 </span>
                <span>接单率90% </span>
                <span>平均分5分</span>
              </div>
              <div>
                <span>提供者</span>
                <span>姓名/性别/年龄</span>
              </div>
              <van-rate
                disabled
                value="4"
                @change="onChange"
              />
              <div class="color-gray">7年工作经验有爱心</div>
            </div>
          </div>
          <div class="item-bottom font-small">
            <div>
              <p>截至日期</p>
              <p class="color-gray">2017/1/1</p>
            </div>
            <div>
              <p>一口价 <span class="color-gray">300元</span></p>
              <p>小时工 <span class="color-gray">50元/小时</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      active: 0,
      contentText: '111',
      tabs: [
        {
          name: '分类1',
          children: [
            {
              subName: '子分类1'
            },
            {
              subName: '子分类2'
            },
            {
              subName: '子分类3'
            },
            {
              subName: '子分类4'
            }
          ]
        },
        {
          name: '分类2',
          children: [
            {
              subName: '子分类5'
            },
            {
              subName: '子分类6'
            },
            {
              subName: '子分类7'
            },
            {
              subName: '子分类8'
            }
          ]
        },
        {
          name: '分类3',
          children: [
            {
              subName: '子分类9'
            },
            {
              subName: '子分类10'
            }
          ]
        },
        {
          name: '分类4',
          children: [
            {
              subName: '子分类11'
            }
          ]
        },
        {
          name: '分类5',
          children: [
            {
              subName: '子分类12'
            },
            {
              subName: '子分类13'
            },
            {
              subName: '子分类14'
            }
          ]
        },
        {
          name: '分类5',
          children: [
            {
              subName: '子分类15'
            }
          ]
        },
        {
          name: '分类6',
          children: [
            {
              subName: '子分类16'
            }
          ]
        },
        {
          name: '分类7',
          children: [
            {
              subName: '子分类17'
            }
          ]
        },
        {
          name: '分类8',
          children: [
            {
              subName: '子分类18'
            }
          ]
        }

      ]
    }
  },
  computed: {
  },
  created () {
    this.tabs.map((item) => {
      item.children.map((subItem, subIndex) => {
        subItem.active = subIndex === 0
      })
    })
  },
  methods: {
    handleChangeTab (e) {
      this.active = e.target.index
    },
    handleChangeSubTab (index) {
      console.log(index)
      this.tabs[this.active].children.map((e, i) => {
        e.active = index === i
      })
      this.contentText = index
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  /deep/ .list {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .van-tabs__scroll--line {
      background: $mainColor;
    }
    .van-tab {
      color: #fff;
    }
    .content {
      flex: 1;
      display: flex;
    }
    .sub-nav {
      flex: 0 0 20vw;
      font-size: 14px;
      padding: 0 10px;
      .item  {
        position: relative;
        width: 100%;
        margin: 10px 0 15px 0;
        padding: 2px 0;
        text-align: center;
        &.active {
          background: $mainColor;
          color: #fff;
          border-radius: 10px;
        }
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 20vw;
          height: 1px;
          background: #eee;
        }
      }
    }
    .sub-content {
      flex: 1;
      background: #eee;
      padding-left: 5px;
      overflow: scroll;
      .item {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: 5px;
        padding: 10px;
        background: #fff;
        border-bottom-left-radius: 10px;
        font-size: 12px;
      }
      .item-top, .item-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .item-bottom {
        margin-top: 10px;
      }
      .desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 20vh;
      }
      image {
        width: 20vw;
        height: 20vw;
        margin-right: 10px;
        border-radius: 50%;
      }

    }
  }

</style>
