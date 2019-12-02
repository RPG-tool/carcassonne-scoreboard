import Vue from 'vue';
import App from './js/app.vue';
new Vue({ render: createElement => createElement(app) }).$mount('#main-app');

$(document).ready(function () {
  // La magia aquí
  console.log('Ready!');
});

