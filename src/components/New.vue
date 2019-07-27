<template>
  <div>
    <p>add task</p>
    <input type="text" v-model="formData.title" placeholder="input task name" />
    <button @click="addTask">submit</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      formData: {
        id: '',
        title: '',
        created_at: '',
        isFinished: false
      }
    }
  },
  computed: {
    ...mapGetters(['totalNum'])
  },
  methods: {
    addTask () {
      this.formData.id = this.totalNum + 1
      this.formData.created_at = new Date()
      this.addTodo(this.formData)
      this.$router.push({ path: '/' })
    },
    ...mapActions(['addTodo'])
  }
}
</script>

<style scoped></style>
