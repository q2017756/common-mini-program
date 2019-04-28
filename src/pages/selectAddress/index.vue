<template>
  <div>
    <picker
      mode="region"
      @change="bindRegionChange"
      :value="region"
      :custom-item="customItem"
    >
      <view class="picker">
        当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
      </view>
    </picker>
    <div class="counter-warp">
      <p>Vuex counter：{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
  </div>
</template>

<script>
import store from '../../store'

export default {
  components: {
  },

  data () {
    return {
      region: ['广东省', '广州市', '海珠区'],
      customItem: '全部'
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  created () {
  },
  methods: {
    bindRegionChange (e) {
      this.region = e.target.value
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>

</style>
