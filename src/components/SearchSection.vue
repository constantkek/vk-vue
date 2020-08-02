<template>
  <div>
    <a-select
      mode="multiple"
      label-in-value
      :value="value"
      placeholder="Select users"
      style="width: 100%"
      :filter-option="false"
      :not-found-content="fetching ? undefined : null"
      @search="onSearch"
      @change="onChange"
    >
      <a-spin v-if="fetching" slot="notFoundContent" size="small" />
      <a-select-option v-for="(user, key) in users" :key="key">
        <a href="#" @click.prevent="onClick">{{user.name}}</a>
      </a-select-option>
    </a-select>
    <!-- <Card
      v-for="user of users"
      v-bind:key="user"
      v-bind:user="user"
    /> -->
    
  </div>
</template>

<script>
import $ from 'jquery'
import Card from './Card'
import config from '../config/config';
export default {
  props: {
    userID: {
      type: Number,
      required: true
    },
    inputText: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      searchedName: this.inputText,
      value: [],
      users: [],
      fetching: false
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
    onChange(value) {
      Object.assign(this, {
        value,
        data: [],
        fetching: false,
      })
    },
    async onSearch(value) {
      this.searchedName = value
      this.data = [];
      this.fetching = true
      this.users = await $.ajax({
        method: 'GET',
        url: config.searchFriends(this.searchedName, this.token),
        dataType: 'JSONP'
      })
        .then(response => {
          return response.response.items.map(friend => ({
            userID: friend.id,
            name: `${friend.first_name} ${friend.last_name}`,
            city: friend.city ? friend.city.title : 'NO PERMISSION',
            sex: friend.sex === 2 ? 'Men' : 'Woman',
            photo: friend.photo_100
          }))
        })
    },
    onClick(event) {
      console.log(event.target.text);
    }
  },
  components: {
    Card
  },
  mounted() {
    
  }
}
</script>

<style>

</style>