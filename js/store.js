import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    game_state: false,
    game_modes: ["starwars", "classic"],
    current_game_mode: 0, // 0 -> sw, 1 -> classic
    players: [
      {
        color: "yellow",
        score: 0,
        status: false,
        available_in: [1]
      },
      {
        name: "grey",
        score: 0,
        status: false,
        available_in: [1]
      },
      {
        name: "blue",
        score: 0,
        status: false,
        available_in: [1]
      },
      {
        name: "black",
        score: 0,
        status: false,
        available_in: [0, 1]
      },
      {
        name: "green",
        score: 0,
        status: false,
        available_in: [0, 1]
      },
      {
        name: "red",
        score: 0,
        status: false,
        available_in: [0, 1]
      },
      {
        name: "orange",
        score: 0,
        status: false,
        available_in: [0, 1]
      },
      {
        name: "white",
        score: 0,
        status: false,
        available_in: [0, 1]
      }
    ]
  },
  getters: {
    activePlayers: state => state.players.filter(player => player.active),
    playerIsActive: (state, player) => state.players.find(p => p == player).active
  },
  mutations: {
    resetGame: state => state.game_state = false,
    initGame: state => state.game_state = true,
    resetPlayersScore: state => state.players = state.players.map(player => player.score = 0),
    resetPlayersStatus: state => state.players = state.players.map(player => player.status = false)
  },
  actions: {
    initializeGame: (ctx) => {
      ctx.commit('initGame');
      ctx.commit('resetPlayersScore');
      ctx.commit('resetPlayersStatus');
    },
    resetGame: (ctx) => {
      ctx.commit('resetGame');
    }
  }

});