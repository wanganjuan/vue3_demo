export default {
  data () {
    return  {
      count: 0
    }
  },
  computed: {
    double () {
      return this.count * 3
    }
  },
  methods: {
    increment () {
      this.count++
    }
  },
  mounted () {
    console.log('我是mixin 生命周期')
  }
}