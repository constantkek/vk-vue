<template>
  <div>
    <h1>Build Section</h1>
    <div class="card">
      <Card 
        v-for="(user, key) of users"
        v-bind:key="key"
        v-bind:user="user"
        v-on:remove="removeUser"
      />
    </div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  props: ['users'],
  components: {
    Card
  },
  data() {
    return {
      
    }
  },
  methods: {
    removeUser(id) {
      this.$emit('remove', id)
    }
  }
}
</script>

<style>
.ant-card {
  margin: 1rem auto !important;
  text-align: left;
}
</style>