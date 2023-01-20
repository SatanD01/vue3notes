<template>
  <h1>Simple users</h1>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? "Admin" : "User" }}</p>
    </li>
  </ul>
  <br>
  <br>
  <input type="number" v-model="userId">
  <p>{{ getUser }}</p>
  <br>
  <br>
  <p>{{ getUsersLength }}</p>
</template>

<script>
export default {
  data() {
    return{
      userId: 3
    }
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    },
    getUser() {
      return this.$store.getters.getUsersById(this.userId) || 'not found';
    }
  }
}
</script>