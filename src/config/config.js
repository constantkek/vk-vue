module.exports = {
  oauthUrl(currentUrl) { 
    return ("https://oauth.vk.com/authorize?" +
      "client_id=7553424&" +
      "display=page&" +
      `redirect_uri=${currentUrl}&` +
      "scope=friends&" +
      "response_type=token&" +
      "v=5.52")
  },
  getUserInfo(token) {
    return `https://api.vk.com/method/` +
    `users.get?` +
    `v=5.52&` +
    `access_token=${token}`
  },
  searchFriends(q, token) {
    return `https://api.vk.com/method/` +
    `friends.search?` +
    `q=${q}&` +
    `fields=sex,photo_100,city&` +
    `v=5.122&` +
    `count=10&` +
    `access_token=${token}`
    // return `https://api.vk.com/method/` +
    // `users.search?` +
    // `from_list=friends&` +
    // `q=${q}&` +
    // `fields=sex,photo_100,city&` +
    // `v=5.122&` +
    // `access_token=${token}`
  },
  getFriends(token) {
    return `https://api.vk.com/method/` +
    `friends.get?` +
    `order=name&` +
    `fields=sex,photo_100,city&` +
    `v=5.122&` +
    `access_token=${token}`
  }
}