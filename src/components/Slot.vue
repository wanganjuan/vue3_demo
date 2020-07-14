<template>
  <div>
    <slot :count="count" :increment="increment "></slot>
  </div>
</template>

<script>
import CounterMixin from '../mixin'
export default {
props: ['url'],
mixins: [CounterMixin]
}
</script>

<style>

</style>