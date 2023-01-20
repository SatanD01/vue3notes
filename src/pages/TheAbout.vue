<template>
  <h1>All users</h1>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? "Admin" : "User" }}</p>
    </li>
  </ul>
  {{ getUsersLength }}
</template>

<script>
export default {
  computed: {
    getUsers() {
      return this.$store.getters.getAllUsers;
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    }
  }
}
</script>