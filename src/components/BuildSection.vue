<template>
  <div>
    <h1>Build Section</h1>
    <div class="card">
      <a-tag 
        v-for="(user, key) of users"
        :color="getColor(user.counter, length)" 
        :key="key">
          <!-- avatar -->
          <img :src="user.photo" alt="">
          <p>{{ user.name }}</p>
          <p>Birthday: {{ user.bdate }}</p>
          <p>Sex: {{ user.sex }}</p>
      </a-tag>
    </div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  props: {
    users: {
      type: Array,
      required: true
    },
    length: {
      type: Number,
      required: true
    }
  },
  components: {
    Card
  },
  data() {
    return {
      
    }
  },
  methods: {
    getColor(counter, length) {
      const color = Math.floor(counter / length * 255)
      return `rgba(0, ${color}, 0, 1)`
    }
  }
}

</script>

<style>
.ant-card {
  margin: 1rem auto !important;
  text-align: left;
}
.ant-tag {
  margin: 1rem !important;
}
</style>