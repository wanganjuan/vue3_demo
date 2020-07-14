<template>
  <button @click="increment">
    Count is: {{ count }}, double is {{ double }}, click to increment.
  </button>
</template>

<script>
import {a} from './hooks'
export default {
  setup() {
    const x = a()

    return x
  }
}
</script>

