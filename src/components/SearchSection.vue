<template>
  <div>
    <!-- <a-select
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
        <div @click.prevent="onClick"><a href="#">{{user.name}}</a></div>
      </a-select-option>
    </a-select> -->
    <a-auto-complete
      v-model="searchedName"
      :data-source="friendsMatched"
      style="width: 400px"
      placeholder="input here"
      @select="onSelect"
      @search="onSearch"
      @change="onChange"
    />
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
    },
    friends: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchedName: this.inputText,
      // value: '',
      // users: [],
      friendsMatched: [],
      fetching: false,
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
      // Object.assign(this, {
      //   value,
      //   users: [],
      //   fetching: false,
      // })
    },
    async onSearch(value) {
      console.log('onSearch', value);
      this.searchedName = value
      this.friendsMatched = this.searchedName ? this.friends.filter(f => f.name.includes(value)).map(f => f.name) : []
      console.log(this.friendsMatched);
      // this.fetching = true
      // console.log('onSearch', config.searchFriends(this.searchedName, this.token));
      // this.users = await $.ajax({
      //   method: 'GET',
      //   url: config.searchFriends(this.searchedName, this.token),
      //   dataType: 'JSONP'
      // })
      //   .then(response => {
      //     return response.response.items.map(friend => ({
      //       userID: friend.id,
      //       name: `${friend.first_name} ${friend.last_name}`,
      //       city: friend.city ? friend.city.title : 'NO PERMISSION',
      //       sex: friend.sex === 2 ? 'Men' : 'Woman',
      //       photo: friend.photo_100
      //     }))
      //   })
    },
    // onClick(event) {
      
    //   console.log('onClick', event.target.innerText)
    //   const user = this.users.find(user => user.name === event.target.innerText)
    //   this.$emit('user-clicked', user)
    //   console.log(user)
    //   setTimeout(() => {
    //     const child = document.querySelector('.ant-select-selection__choice')
    //     child.remove()
    //   })
    // },
    onSelect(value) {
      this.searchedName = ''
      console.log('onSelect', value)
    }
  },
  components: {
    Card
  },
}
</script>

<style>

</style>