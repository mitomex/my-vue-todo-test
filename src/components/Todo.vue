<template>
  <div :class="todo.isFinished ? 'is-finished' : ''">
    <span class="checkbox" @click="onClick" />
    <span class="title">
      {{ todo.id }}: {{ todo.title }} ( 作成日：{{ todo.created_at }} )
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: Object
  },
  methods: {
    onClick () {
      this.doAction(this.todo)
    },
    ...mapActions(['doAction'])
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  border: 1px solid green;
  border-radius: 5px;
  display: inline-block;
  margin-right: 1em;
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
.title {
  display: inline-block;
  vertical-align: middle;
}
.is-finished {
  .checkbox {
    background-color: green;
    position: relative;

    &::after {
      border-right: 2px solid white;
      border-bottom: 2px solid white;
      content: '';
      position: absolute;
      top: 2px;
      left: 5px;
      width: 4px;
      height: 8px;
      transform: rotate(45deg);
    }
  }
  .title {
    color: gray;
    text-decoration: line-through;
  }
}
</style>
