import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

import './index.css';

import { library  } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(Vuex);

library.add(faBars);
library.add(faXmark);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: { count: 0 }, 
  mutations: {
    increment (state) { 
      state.count++;
    }
  }
})

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
