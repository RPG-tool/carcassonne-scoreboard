import Vue from 'vue';
import VuejsDialog from 'vuejs-dialog';
import store from './store';
import app from './app.vue';


import '../css/app.scss';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

Vue.use(VuejsDialog);



let vm = new Vue({
  el: "#main-app",
  store,
  render: createElement => createElement(app)
});

// $(document).ready(function () {
//   // La magia aquí
//   console.log('Ready!');
// });

