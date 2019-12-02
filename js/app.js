import Vue from 'vue';
import app from './js/app.vue';
let vm = new Vue({
  el: "#main-app",
  render: createElement => createElement(app)
});

// $(document).ready(function () {
//   // La magia aquí
//   console.log('Ready!');
// });

