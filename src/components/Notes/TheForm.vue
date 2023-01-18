<template>
  <div class="note-form-wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type your note"/>
      <button class="btn btnPrimary" type="submit">Add new Note</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheForm",
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value);
      this.value = '';
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
}
</style>