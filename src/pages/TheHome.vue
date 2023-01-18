<template>
  <TheForm @onSubmit="handleSubmit"/>
  <TheList @onRemove="handleRemove" :items="notes"/>
</template>

<script>
import TheForm from "@/components/Notes/TheForm";
import TheList from "@/components/Notes/TheList";

export default {
  components: {TheList, TheForm},
  data() {
    return {
      notes: ['task 1', 'task 2', 'task 3']
    }
  },
  methods: {
    handleSubmit(note) {
      this.notes.push(note);
    },
    handleRemove(idx) {
      this.notes.splice(idx, 1);
    }
  }
}
</script>