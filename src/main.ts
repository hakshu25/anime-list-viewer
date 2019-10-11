import Vue from 'vue'
import App from './App.vue'
import VueTables from 'vue-tables-2';

window.Vue = Vue;
Vue.config.productionTip = false
Vue.use(VueTables.ClientTable);


new Vue({
  render: h => h(App),
}).$mount('#app')
