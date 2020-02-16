<template>
  <div class="c-edition card-box">
    <div class="content" v-for="note in notes" :key="note.id">
      <NoteCard
        :note="note"
        @delete-note="delNote($event)"
        @edit-note="editNote($event)"
      ></NoteCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import NoteCard from '@/components/NoteCard.vue';

export default {
  name: 'Note',

  components: {
    NoteCard,
  },

  computed: {
    ...mapState(['notes']),
  },

  methods: {
    ...mapMutations(['deleteNote', 'updateNote']),

    delNote(e) {
      // id
      this.deleteNote({ id: e });
    },
    editNote(e) {
      // 一个note对象
      this.updateNote(e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";
@import "@/assets/lib/scss/mixins.scss";

.card-box {
  width: 95%;

  @include respond-to(lg) {
    width: 1026px;
  }

  .content {
    display: flex;
    width: 100%;
  }
}
</style>
