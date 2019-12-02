import Vue from 'vue';
import store from './store';
import app from './app.vue';
let vm = new Vue({
  el: "#main-app",
  store,
  render: createElement => createElement(app)
});

// $(document).ready(function () {
//   // La magia aquí
//   console.log('Ready!');
// });

