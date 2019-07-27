<template>
  <div>
    <input type="text" v-model="formData.title" placeholder="input task name" />
    <button @click="addTask">Submit</button>
  </div>
</template>

<script>
import moment from 'moment'
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
      this.formData.created_at = moment(new Date()).format('YYYY/MM/DD')
      this.addTodo(this.formData)
      this.$router.push({ path: '/' })
    },
    ...mapActions(['addTodo'])
  }
}
</script>

<style lang="scss" scoped>
input {
  appearance: none;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  &::placeholder {
    transition: opacity 0.2s ease-in-out;
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
}
button {
  background-color: #FFF;
  border: 1px solid #CCC;
  border-radius: 10px;
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  text-align: center;
  margin: 30px auto;
  padding: 10px 0;
  width: 300px;
}
</style>
