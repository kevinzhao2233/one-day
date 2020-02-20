<template>
<div class="home c-edition">
  <!-- 输入框组件 -->
  <AddTodoList/>
  <!-- List -->
  <!-- 未完成的TODO -->
  <draggable v-model="todos" forceFallvack: true handle=".color-label">
    <transition-group name="flip-list"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut">
      <div v-for="todo in todos" :key="todo.id">
        <ListContent @play-ding="playDing" :todo="todo" v-if="!todo.done"/>
      </div>
    </transition-group>
  </draggable>

  <br>
  <!-- 已经完成的TODO -->
  <transition-group name="flip-list"
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div v-for="doneTodo in doneTodos" :key="doneTodo.id">
      <ListContent :todo="doneTodo"/>
    </div>
  </transition-group>

  <audio v-if="sidebar.setting.isPlayAudio.state" ref="audio" src="../../public/ding.mp3"></audio>

  <footer class="footer">
    <SmallTomato/>
  </footer>
</div>
</template>

<script>
import draggable from 'vuedraggable';
import { mapState, mapGetters } from 'vuex';
import ListContent from '../components/todolist/ListContent.vue';
import AddTodoList from '../components/todolist/AddTodoList.vue';
import SmallTomato from '../components/SmallTomato.vue';

export default {
  name: 'Home',
  components: {
    ListContent,
    AddTodoList,
    SmallTomato,
    draggable,
  },

  methods: {
    playDing() {
      if (this.sidebar.setting.isPlayAudio.state) {
        this.$refs.audio.currentTime = 0;
        this.$refs.audio.play();
      }
    },
  },

  computed: {
    ...mapState(['sidebar']),
    ...mapGetters([
      'doneTodos',
      'undoneTodos',
    ]),

    undoneTodos: {
      get() {
        return this.$store.getters.undoneTodos;
      },
      set(value) {
        this.$store.commit('updateTodos', value);
      },
    },

    todos: {
      get() {
        return this.$store.state.todos;
      },
      set(value) {
        this.$store.commit('updateTodos', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/lib/scss/mixins.scss';

.flip-list-move {
  transition: transform .5s;
}

.home {
  padding-bottom: 160px;
  padding-top: 120px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @include respond-to(lg) {
    width: 1026px;
  }

  .footer {
    position: fixed;
    width: inherit;
    bottom: 0;
  }
}
</style>
