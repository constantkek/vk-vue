<template>
  <a-card class="card" hoverable style="width: 80%">
    <template slot="actions" class="ant-card-actions">
      <a-icon key="close" type="close" @click="$emit('remove', user.name)"/>
    </template>
    <a-card-meta :title="user.name" :description="getDesc(user)">
      <a-avatar
        slot="avatar"
        :src="user.photo"
      />
    </a-card-meta>
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
  methods: {
    getDesc(user) {
      return `Birthday: ${user.bdate}\tSex: ${user.sex}`
    }
  }
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