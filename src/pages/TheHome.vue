<template>
  <TheForm @test="handleTest"/>
</template>

<script>
import TheForm from "@/components/Notes/TheForm";

export default {
  components: {TheForm},
  methods: {
    handleSubmit(note) {
      console.log(note)
    },
    handleTest(value) {
      console.log('hello test', value.name, value.age)
    }
  }
}
</script>