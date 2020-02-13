<template>
  <div class="c-edition card-box">
    <div class="content" v-for="(note, index) in notes" :key="index">
      <NoteCard :note="note.content"></NoteCard>
    </div>
  </div>
</template>

<script>
import NoteCard from './widget/NoteCard.vue';

export default {
  name: 'Note',

  components: {
    NoteCard,
  },

  data() {
    return {
      notes: [
        {
          content:
            'HTML 属性名称对大小写不敏感，因此浏览器会将所有大写字符解释为小写字符。也就是说。当你在你 DOM 模板中书写 prop 时，你应当将驼峰式(camelCase)转写为等价的（连字符分割的）串联式(kebab-case)：',
        },
        {
          content:
            'HTML 属性名称对大小写不敏感，因此浏览器会将所有大写字符解释为小写字符。也就是说。当你在你 DOM 模板中书写 prop 时',
        },
        {
          content:
            'HTML 属性名称对大小写不敏感,你应当将驼峰式(camelCase)转写为等价的（连字符分割的）串联式(kebab-case)：',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/lib/scss/config.scss";
@import "../assets/lib/scss/mixins.scss";

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
