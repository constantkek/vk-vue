<template>
  <div>
    <h1>Build Section</h1>
    <div class="card">
      <a-tag 
        v-for="(user, key) of users"
        :color="getColor(user.friends.length, length)" 
        :key="key">
          <!-- avatar -->
          <img :src="user.photo" alt="">
          <p>{{ user.name }}</p>
          <p>Birthday: {{ user.bdate }}</p>
          <p>Sex: {{ user.sex }}</p>
          <a-button 
            :name="user.name"
            @click="onClick" 
            type="primary"
            icon="export">
          </a-button>
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
  methods: {
    getColor(mutualNumber, length) {
      const color = Math.floor(mutualNumber / length * 255)
      return `rgba(0, ${color}, 0, 1)`
    },
    onClick(event) {
      this.$emit('click', event.target.name)
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
  padding: 0.5rem !important;
}
</style>