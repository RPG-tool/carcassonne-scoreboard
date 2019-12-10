import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    // Posible states
    // "welcome" -> Pantalla inicial
    // "choosing_players_and_mode" -> Eligiedo jugadores y modo de juego
    // "playing" -> Juego corriendo, partida normal
    // "ended" -> Juego terminado, mostrar vencedor, volver a jugar
    game_state: 'welcome',
    game_modes: ["starwars", "classic"],
    current_game_mode: -1, // 0 -> sw, 1 -> classic
    players_selected: [],
    /* playerGroups: [
      [3, 4, 5, 6, 7], // Sw
      [0, 1, 2, 3, 4, 5] // Classic
    ], */
    players: [
      {
        color: "yellow",
        score: 0,
        active: false,
        available_in: [1]
      },
      {
        color: "grey",
        score: 0,
        active: false,
        available_in: [1]
      },
      {
        color: "blue",
        score: 0,
        active: false,
        available_in: [1]
      },
      {
        color: "black",
        score: 0,
        active: false,
        available_in: [0, 1]
      },
      {
        color: "green",
        score: 0,
        active: false,
        available_in: [0, 1]
      },
      {
        color: "red",
        score: 0,
        active: true,
        available_in: [0, 1]
      },
      {
        color: "orange",
        score: 0,
        active: false,
        available_in: [0]
      },
      {
        color: "white",
        score: 0,
        active: false,
        available_in: [0]
      }
    ]
  },
  getters: {
    testA: state => state.players,
    playerObjByColor: (state, color) => state.players.find(p => p.color == color),
    availablePlayers: (state) => {
      return state.players.filter(
        (player) => {
          return player.available_in.includes(state.current_game_mode)
        }
      )
    },
    // activePlayers: (state) => {
    //   return state.players.filter(
    //     (player) => {
    //       return player.active
    //     }
    //   )
    // },
    playerIsActive: (state, player) => state.players.find(p => p == player).active
  },
  mutations: {
    RESET_GAME: state => {
      state.game_state = 'welcome';
      state.current_game_mode = -1;
      state.players_selected = [];
    },
    INIT_GAME: state => state.game_state = 'choosing_players_and_mode',
    RESET_PLAYER_SCORE: state => state.players = state.players.map(player => player.score = 0),
    RESET_PLAYER_STATUS: state => state.players = state.players.map(player => player.active = false),
    SET_GAME_MODE(state, current_game_mode) {
      state.players_selected = [];
      state.current_game_mode = parseInt(current_game_mode, 10);
      // Actualiza tb la lista de players activos
      state.players.forEach((player, idx) => {
        if (player.available_in.includes(state.current_game_mode)) {
          player.active = true;
        } else {
          player.active = false;
        }
      });
    },

    SET_GAME_STATE(state, game_state) {
      state.game_state = game_state;
    },

    UPDATE_CHECKBOX(state, data) {
      console.log(data);
      if (data.value) {
        if (!state.players_selected.includes(data.player_color)) {
          state.players_selected.push(data.player_color);
        }
      } else {
        if (state.players_selected.includes(data.player_color)) {
          state.players_selected.splice(state.players_selected.indexOf(data.player_color), 1);
        }
      }
    },

    UPDATE_PLAYER_SCORE(state, data) {
      console.log(data);
    }
  },
  actions: {
    initializeGame: (ctx) => {
      ctx.commit('INIT_GAME');
      ctx.commit('RESET_PLAYER_SCORE');
      ctx.commit('RESET_PLAYER_STATUS');
    },
    resetGame: (ctx) => {
      ctx.commit('RESET_GAME');
    }
  }

});