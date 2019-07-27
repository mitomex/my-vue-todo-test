<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in items"
      :key="item.id"
    >
      <Todo :todo="item" />
    </li>
  </ul>
</template>

<script>
import Todo from '@/components/Todo'
export default {
  components: {
    Todo
  },
  props: {
    items: Array
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 0;
}
.item {
  list-style: none;
  margin: 1em 0;
}
</style>
