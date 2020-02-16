<template>
  <div class="c-edition card-box">
    <div class="content" v-for="note in notes" :key="note.id">
      <NoteCard :note="note" @delete-note="delNote($event)"></NoteCard>
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
    ...mapMutations(['deleteNote']),

    delNote(e) {
      // id
      this.deleteNote({ id: e });
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
