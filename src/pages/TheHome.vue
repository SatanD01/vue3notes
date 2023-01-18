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
      notes: [
        {
          title: 'Learn Vue3',
          tags: ['work']
        },
        {
          title: 'Finish course',
          tags: ['work', 'home']
        },
        {
          title: 'hello',
          tags: []
        }
      ]
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