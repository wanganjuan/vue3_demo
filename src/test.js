import { reactive, computed } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })
    
    function increment() {
      state.count++
    }
    
    return {
      state,
      increment
    }
  }
}

//  Reactive 相当于当前的 Vue.observable () API，经过reactive处理后的函数能变成响应式的数据，类似于option api里面的data属性的值