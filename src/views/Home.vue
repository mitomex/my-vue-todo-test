<template>
  <div class="container">
    <div v-if="totalNum < 1">
      no data...
    </div>
    <Todo :items="items" v-else />
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
    ...mapGetters(['items', 'totalNum'])
  }
}
</script>

<style lang="scss" scoped>
</style>
