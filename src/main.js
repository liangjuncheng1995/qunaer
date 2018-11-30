// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import vConsole from '@/assets/js/vconsole.js'
import common from '@/assets/js/common.js'

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.prototype.common = common

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
