<template>
  <div id="user-page">
    <a-button id="back" @click="onClick" type="danger" icon="rollback">Back</a-button>
    <section class="flex-container">
      <div class="card-container">
        <Card
          class="card"
          v-for="(user, key) of user.friends"
          :user="user"
          :key="key"
        />
      </div>
      <div class="vk-div">
        <div id="vk_groups"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from './Card'
export default {
  components: {
    Card
  },
  props: {
    user: {
      type: Object,
      requred: true
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  },
  mounted() {
    VK.Widgets.Group("vk_groups", { mode: 4, height: "400", width: "500" }, `-${this.user.id}`)
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
}
.card-container {
  display: inline-flex;
  margin: auto 2rem !important;
  width: 50% !important;
}
.card {
  margin: 2rem !important;
  text-align: left;
}
.vk-div {
  margin: 2rem auto !important;
  display: inline-flex;
  width: 50% !important;
  text-align: center;
}
#vk_groups {
  margin: 0 auto;
}
#back {
  display: inline-flex !important;
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: left !important;
}
</style>