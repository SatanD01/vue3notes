<template>
  <div class="md-body">
    <TheForm @onSubmit="handleSubmit"/>
  </div>
</template>

<script>
import TheForm from "@/components/Notes/TheForm";
export default {
  components: {TheForm},
  methods: {
    handleSubmit(note) {
      console.log(note)
    }
  }
}
</script>