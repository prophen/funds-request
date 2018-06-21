import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import sc2 from 'sc2-sdk'

Vue.use(BootstrapVue, axios, sc2)

new Vue({
  el: '#app',
  render: h => h(App)
})
