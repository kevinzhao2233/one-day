<template>
<div class="home">
  <!-- 输入框组件 -->
  <AddTodoList/>

  <!-- List -->
  <div v-for="undoneTodo in undoneTodos" :key="undoneTodo.id">
    <ListContent :todo="undoneTodo"/>
  </div>
  <div v-for="doneTodo in doneTodos" :key="doneTodo.id">
    <ListContent :todo="doneTodo"/>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListContent from './widget/ListContent';
import AddTodoList from './widget/AddTodoList';

export default {
  name: 'Home',
  components: {
    ListContent,
    AddTodoList,
  },

  computed: {
    ...mapGetters([
      'doneTodos',
      'undoneTodos',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
