<template>
  <div>
    <a-auto-complete
      v-model="searchedName"
      :data-source="friendsMatched"
      style="width: 80%"
      placeholder="Enter friend name"
      @select="onSelect"
      @search="onSearch"
    />
    <div v-if="users.length">
        <Card 
        v-for="(user, key) of users"
        v-bind:key="key"
        v-bind:user="user"
        @remove="removeUser"
      />
      <a-button 
        type="primary"
        @click="onClick"
      >
        Build<a-icon type="build" />
      </a-button>
    </div>
    <a-empty v-else class="empty"/>
  </div>
</template>

<script>
import $ from 'jquery'
import Card from './Card'
import config from '../config/config';
export default {
  props: {
    inputText: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    },
    friends: {
      type: Array,
      required: true
    },
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchedName: this.inputText,
      friendsMatched: []
    };
  },
  watch: {
    searchedName(value) {
      this.$emit('input-change', value)
    }
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.searchedName = '';
    },
    onSearch(value) {
      this.searchedName = value
      this.friendsMatched = this.searchedName ? this.friends.filter(f => f.name.includes(value)).map(f => f.name + ` (@${f.domain})`) : []
    },
    onSelect(value) {
      this.searchedName = ''
      this.$emit('select', value)
    },
    onClick(event) {
      this.$emit('click')
    },
    removeUser(name) {
      this.$emit('remove', name)
    }
  },
  components: {
    Card
  },
}
</script>

<style>
.ant-card {
  margin: 1rem auto !important;
  text-align: left;
}
.ant-empty {
  margin-top: 2rem !important;
}
</style>