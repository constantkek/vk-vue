<template>
  <div id="app">
    <Header/>
    <section class="content">
      <div id="search-section">
        <SearchSection 
          v-if="userInfo"
          :userID="userInfo && userInfo.id"
          :inputText="inputText"
          :token="token"
          @input-change="inputChange"
        />
        <Loader v-else/>
      </div>
      <div class="vl"></div>
      <div id="build-section">
        <BuildSection 
          v-if="users.length"
          :users="users"
          @remove="removeUser"
        />
        <p v-else>Empty.</p>
      </div>
    </section>
  </div>
</template>

<script>
import SearchSection from './components/SearchSection'
import BuildSection from './components/BuildSection'
import Header from './components/Header'
import Loader from './components/Loader'
import config from './config/config'
import $ from 'jquery'
export default {
  name: 'App',
  components: {
    SearchSection,
    BuildSection,
    Header,
    Loader
  },
  data() {
    return {
      userInfo: null,
      inputText: '',
      users: [{
        name: 'Egor',
        age: 20,
        sex: 'M'
      }, 
      {
        name: 'Tyoma',
        age: 30,
        sex: 'W'
      }, 
      {
        name: 'Kostya',
        age: 21,
        sex: 'M'
      }],
      token: null,
    }
  },
  methods: {
    removeUser(id) {
      this.users = this.users.filter(user => user.name != id)
    },
    sortUsers() {
      this.users.sort((a, b) => a.name > b.name ? 1 : -1)
    },
    inputChange(value) {
      this.inputText = value
    }
  },
  async mounted() {
    this.token = getToken()
    this.userInfo = await getUserInfo(this.token)
    console.log('User Information:', this.userInfo);

    function getToken() {
      const url = window.location.href
      const token = localStorage.getItem('token')
      const expires = Number(localStorage.getItem('expiresIn'))
      const dateNow = new Date().getTime() / 1000
      const dateStorage = Number(localStorage.getItem('date'))

      if (!url.includes('access_token=') && !token || (dateStorage && expires && dateNow - dateStorage >= expires)) {
        window.location.href = config.oauthUrl(url)
      } else {
        if (url.includes('access_token=')) {
          // get token from url and set to localStorage
          localStorage.setItem('token', url.split('access_token=')[1].split('&')[0])
          localStorage.setItem('expiresIn', url.split('expires_in=')[1].split('&')[0])
          localStorage.setItem('date', new Date().getTime() / 1000)
        }
        return localStorage.getItem('token')
      }
    }
    async function getUserInfo(token) {
      return await $.ajax({
        method: 'GET',
        url: config.getUserInfo(token),
        dataType: 'JSONP'
      }).then(res => res.response[0])
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  display: flex;
}
#search-section {
  width: 35% !important;
  margin: 2rem 1rem !important;
}
#build-section {
  width: 65% !important;
  margin: 2rem 1rem !important;
}
.vl {
  border-left: 1px solid black;
  height: 500px;
}
</style>
