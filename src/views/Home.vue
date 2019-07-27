<template>
  <div class="container">
    <Todo :items="items" />
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/components/Todos.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Todo
  },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style lang="scss" scoped>
</style>
