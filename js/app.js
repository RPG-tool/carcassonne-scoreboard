import Vue from 'vue';
import VuejsDialog from 'vuejs-dialog';
import store from './store';
import app from './app.vue';
import { Howl, Howler } from 'howler';

import '../css/app.scss';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

Vue.use(VuejsDialog);

window.blaster = new Howl({
  src: ['./sounds/blaster.mp3']
});
window.blaster.once('load', function () {
  console.log('Sound play');
  blaster.play();
});

let vm = new Vue({
  el: "#main-app",
  store,
  render: createElement => createElement(app)
});

// $(document).ready(function () {
//   // La magia aquí
//   console.log('Ready!');
// });

