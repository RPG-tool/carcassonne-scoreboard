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

    // Common UI sounds
    ['click'].forEach(item => {
      window.snd[item] = new Howl({
        src: [`./static/snd/${item}.mp3`]
      });
    });

    // Coin sounds
    window.snd.coin = [
      [
        new Howl({ src: ['./static/snd/0-blaster-01.mp3'] }),
        new Howl({ src: ['./static/snd/0-blaster-02.mp3'] }),
        new Howl({ src: ['./static/snd/0-blaster-03.mp3'] })
      ],
      [
        new Howl({ src: ['./static/snd/1-coin.mp3'] })
      ]
    ];
    // ['0-coin-1', '0-coins-2', 'b-03', 'end-empire', 'end-luke', 'end-rebels', 'end-bounty', '0-start'].forEach(item => {
    //   window.snd[item] = new Howl({
    //     src: [`./static/snd/${item}.mp3`]
    //   });
    // });
  }
});

// $(document).ready(function () {
//   // La magia aquí
//   console.log('Ready!');
// });

