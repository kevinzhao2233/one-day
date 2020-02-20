<template>
  <div class="c-edition card-box">
    <transition-group
      name="flip-list"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
      tag="div"
    >
      <div class="content" v-for="note in notes" :key="note.id">
        <NoteCard
          :note="note"
          @delete-note="delNote($event)"
          @edit-note="editNote($event)"
        ></NoteCard>
      </div>
    </transition-group>
    <div class="empty-box" @mousedown="addNote">
      <i class="icon fa fa-plus"></i>
    </div>
    <footer class="footer">
      <SmallTomato/>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { createId } from '@/assets/lib/myLib';
import NoteCard from '@/components/note/NoteCard.vue';
import SmallTomato from '../components/SmallTomato.vue';

export default {
  name: 'Note',

  components: {
    NoteCard,
    SmallTomato,
  },

  computed: {
    ...mapState(['notes']),
  },

  methods: {
    ...mapMutations(['addANote', 'deleteNote', 'updateNote']),

    addNote() {
      this.addANote({ id: this.getId() });
    },

    delNote(e) {
      // id
      this.deleteNote({ id: e });
    },
    editNote(e) {
      // 一个note对象
      this.updateNote(e);
    },
    // 生成一个不会重复的id值
    getId() {
      const id = createId();
      return id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";
@import "@/assets/lib/scss/mixins.scss";

.flip-list-move {
  transition: transform .5s;
}

.card-box {
  padding-top: 120px;
  padding-bottom: 160px;
  width: 95%;
  height: 100%;

  @include respond-to(lg) {
    width: 1026px;
  }

  .content {
    display: flex;
    width: 100%;
  }

  .empty-box {
    margin: 12px auto 100px auto;
    width: 64px;
    height: 64px;
    background-color: $cl-main1;
    box-shadow: 0px 6px 12px $cl-shallow1;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;

    .icon {
      color: $cl-aux1;
      font-size: 36px;
      line-height: 64px;
    }
  }
  .footer {
    position: fixed;
    width: inherit;
    bottom: 0;
  }
}
</style>
