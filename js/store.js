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
    current_game_mode: 1, // 0 -> sw, 1 -> classic
    /* playerGroups: [
      [3, 4, 5, 6, 7], // Sw
      [0, 1, 2, 3, 4, 5] // Classic
    ], */
    players: [
      {
        color: "yellow",
        score: 0,
        status: false,
        available_in: [1]
      },
      {
        color: "grey",
        score: 0,
        status: false,
        available_in: [1]
      },
      {
        color: "blue",
        score: 0,
        status: false,
        available_in: [1]
      },
      {
        color: "black",
        score: 0,
        status: false,
        available_in: [0, 1]
      },
      {
        color: "green",
        score: 0,
        status: false,
        available_in: [0, 1]
      },
      {
        color: "red",
        score: 0,
        status: false,
        available_in: [0, 1]
      },
      {
        color: "orange",
        score: 0,
        status: false,
        available_in: [0, 1]
      },
      {
        color: "white",
        score: 0,
        status: false,
        available_in: [0, 1]
      }
    ]
  },
  getters: {
    activePlayers: state => state.players.filter(player => player.active),
    activePlayersCount: state => state.players.filter(player => player.active).length,
    playerIsActive: (state, player) => state.players.find(p => p == player).active
  },
  mutations: {
    resetGame: state => state.game_state = false,
    initGame: state => state.game_state = true,
    resetPlayersScore: state => state.players = state.players.map(player => player.score = 0),
    resetPlayersStatus: state => state.players = state.players.map(player => player.status = false),
    SET_GAME_MODE(state, current_game_mode) {
      state.current_game_mode = current_game_mode;
    }
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