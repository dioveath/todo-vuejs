import Vue from 'vue'
import App from './App.vue'

import './index.css';

import { library  } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faCalendarDays, faPenToSquare, faLessThan, faGreaterThan, faTrash, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import store from './store';

library.add(faBars);
library.add(faXmark);
library.add(faCalendarDays);
library.add(faPenToSquare);
library.add(faLessThan);
library.add(faGreaterThan);
library.add(faTrash);
library.add(faCopy);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
