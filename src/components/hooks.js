import { ref, computed, onMounted } from '@vue/composition-api'

function useCounter() {
  const count = ref(0)

  return {
    count
  }
}

function a() {
  const {count} = useCounter()
  const double = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  onMounted(() => console.log('component mounted!'))

  return {
    count,
    double,
    increment
  }
}
export {
  a
}
