import Vue from 'vue'
import App from './App.vue'
import { Button } from 'vant'

Vue.config.productionTip = false
Vue.use(Button)
new Vue({
  render: h => h(App),
}).$mount('#app')
