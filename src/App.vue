<template>
  <div id="app">
    <Header/>
    <section class="content">
      <div id="search-section">
        <SearchSection 
          v-if="userInfo"
          :inputText="inputText"
          :token="token"
          :friends="friends"
          :users="usersForBuild"
          @input-change="inputChange"
          @select="onSelect"
          @remove="removeUser"
          @click="onClick"
        />
        <Loader v-else/>
      </div>
      <div class="vl"></div>
      <div id="build-section">
        <a-spin v-if="fetching" size="large" />
        <div v-else>
          <BuildSection 
            v-if="usersResult.length && usersForBuild.length"
            :users="usersResult"
            :length="usersForBuild.length"
          />
          <a-empty v-else class="empty"/>
        </div>
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
      friends: [],
      usersForBuild: [],
      usersResult: [],
      token: null,
      fetching: false
    }
  },
  methods: {
    removeUser(name) {
      this.usersForBuild = this.usersForBuild.filter(user => user.name != name)
      this.usersResult = []
    },
    sortUsers() {
      this.usersForBuild.sort((a, b) => a.name > b.name ? 1 : -1)
    },
    inputChange(value) {
      this.inputText = value
    },
    onSelect(name) {
      const userDomain = name.substring(name.indexOf('@') + 1, name.indexOf(')'))
      const user = this.friends.find(f => f.domain === userDomain)
      if (!this.usersForBuild.find(u => u.domain === userDomain)) {
        this.usersForBuild.push(user)
        this.usersForBuild.sort((u1, u2) => u1.name > u2.name ? 1 : -1)
        this.inputText = ''
      }
    },
    async onClick() {
      const res = {}
      this.fetching = true
      for (const u of this.usersForBuild) {
        const friends = await $.ajax({
          method: 'GET',
          url: config.getFriendsByID(u.id, this.token),
          dataType: 'JSONP'
        }).then(r => r.response.items.map(f => ({
            id: f.id,
            name: `${f.first_name} ${f.last_name}`,
            city: f.city ? f.city.title : config.unknown,
            sex: f.sex === 2 ? 'Men' : 'Woman',
            bdate: f.bdate || config.unknown,
            domain: f.domain,
            photo: f.photo_100,
          })))
        for (const f of friends) {
          const index = f.id
          if (res[index]) {
            res[index].counter++
          } else {
            res[index] = {}
            Object.assign(res[index], f, { counter: 1 })
          }
        }
      }
      this.usersResult = Object.values(res).sort((u1, u2) => u1.name > u2.name ? 1 : -1)
      this.fetching = false
    }
  },
  async mounted() {
    this.token = getToken()
    this.userInfo = await getUserInfo(this.token)
    this.friends = await getFriends(this.token)
    console.log('Friends', this.friends)
    console.log('User Information:', this.userInfo);

    function getToken() {
      const url = window.location.href
      const token = localStorage.getItem('token')
      const expires = Number(localStorage.getItem('expiresIn'))
      const dateNow = new Date().getTime() / 1000
      const dateStorage = Number(localStorage.getItem('date'))

      if (!url.includes('access_token=') && !token || (dateStorage && expires && dateNow - dateStorage >= expires) && !url.includes('access_token=')) {
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
    async function getFriends(token) {
      return await $.ajax({
        method: 'GET',
        url: config.getFriends(token),
        dataType: 'JSONP'
      }).then(response => {
          return response.response.items.map(friend => ({
            id: friend.id,
            name: `${friend.first_name} ${friend.last_name}`,
            city: friend.city ? friend.city.title : '¯\\_(ツ)_/¯',
            sex: friend.sex === 2 ? 'Men' : 'Woman',
            bdate: friend.bdate || '¯\\_(ツ)_/¯',
            domain: friend.domain,
            photo: friend.photo_100,
          }))
        })
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
  height: 1000px;
}
</style>
