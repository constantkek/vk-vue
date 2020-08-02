<template>
  <a-card class="card" v-bind:title="user.name" size="small" style="width: 300px">
    <!-- avatar -->
    <div class="card-content">
      <p>Age: {{ user.age }}</p>
      <p>Sex: {{ user.sex }}</p>
      <!-- TODO -->
      <button v-on:click="$emit('remove', user.name)" class="card-btn">&times;</button>
    </div>
  </a-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
}
</script>

<style>

.card-content {
  display: inline-flex;
}
p {
  margin-left: 5px ;
}
.card-btn {
  position: absolute;
  right: 1rem;
}
</style>