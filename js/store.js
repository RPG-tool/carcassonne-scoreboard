import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    game_state: 'start',
    players: [
      {
        color: "yellow",
        score: 0,
        active: false
      },
      {
        name: "grey",
        score: 0,
        active: false
      },
      {
        name: "blue",
        score: 0,
        active: false
      },
      {
        name: "black",
        score: 0,
        active: false
      },
      {
        name: "green",
        score: 0,
        active: false
      },
      {
        name: "red",
        score: 0,
        active: false
      },
      {
        name: "orange",
        score: 0,
        active: false
      },
      {
        name: "white",
        score: 0,
        active: false
      }
    ]
  },
  getters: {
    activePlayers: state => state.players.filter(player => player.active),
    playerIsActive: (state, player) => state.players.find(p => p == player).active
  }

});