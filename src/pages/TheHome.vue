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
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updateList) {
        localStorage.setItem('notes', JSON.stringify(updateList))
      },
      deep: true
    }
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes){
        this.notes = JSON.parse(localNotes);
      }
    },
    handleSubmit(title) {
      const note = {
        title: title,
        tags: []
      }
      this.notes.push(note);
    },
    handleRemove(idx) {
      this.notes.splice(idx, 1);
    }
  }
}
</script>