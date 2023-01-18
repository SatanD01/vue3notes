<template>
  <div class="note-form-wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type your note"/>
      <TheTagsList :items="tags" @onItemClick="handleClick"/>
      <button class="btn btnPrimary" type="submit">Add new Note</button>
    </form>
  </div>
</template>

<script>
import TheTagsList from "@/components/UI/TheTagsList";

export default {
  name: "TheForm",
  components: {TheTagsList},
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel']
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value);
      this.value = '';
    },
    handleClick(tag) {
      console.log(tag)
    }
  }
}
</script>

<style scoped lang="scss">
.note-form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  textarea {
    margin-bottom: 0;
  }
}
</style>