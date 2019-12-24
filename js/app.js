import Vue from 'vue';
import VuejsDialog from 'vuejs-dialog';
import store from './store';
import app from './app.vue';
import { Howl, Howler } from "howler";

import '../css/app.scss';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

Vue.use(VuejsDialog);

window.snd = {};

let vm = new Vue({
  el: "#main-app",
  store,
  render: createElement => createElement(app),
  created: function () {
    // `this` points to the vm instance
    // console.log('a is: ' + this.a)
    console.log('App created!');

    // UI sounds
    ['ui-click-switch'].forEach(item => {
      window.snd[item] = new Howl({
        src: [`./static/snd/${item}.mp3`]
      });
    });
    // Starwars
    ['b-01', 'b-02', 'b-03', 'end-empire', 'end-luke', 'end-rebels', 'end-bounty', 'f-01', 'f-02', 'start-01'].forEach(item => {
      window.snd[item] = new Howl({
        src: [`./static/snd/${item}.mp3`]
      });
    });
  }
});

// $(document).ready(function () {
//   // La magia aquí
//   console.log('Ready!');
// });

