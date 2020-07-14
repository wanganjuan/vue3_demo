<template>
  <button @click="increment">
    Count is: {{ count }}, double is {{ double }}, click to increment.
  </button>
</template>

<script>
import CounterMixin from '../mixin'
export default {
  mixins: [CounterMixin]
}
</script>

