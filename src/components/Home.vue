<template>
<div class="home">
  <div class="list" v-for="todo in todos" v-bind:key="todo.id">{{todo.text}}</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 1200px;

  .list {
    width: 100%;
    height: 48px;
  }
}
</style>
