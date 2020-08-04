import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
 
Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(LoadScript)

Vue.loadScript('https://vk.com/js/api/openapi.js?168')

new Vue({
  render: h => h(App),
}).$mount('#app')
