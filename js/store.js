import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState() // Guarda en LocalStorage
  ],
  state: {
    // Posible states
    // "about" -> Pantalla inicial
    // "welcome" -> Pantalla inicial
    // "choosing_mode" -> Eligiedo modo de juego
    // "choosing_players" -> Eligiedo jugadores
    // "playing" -> Juego corriendo, partida normal
    // "ended" -> Juego terminado, mostrar vencedor, volver a jugar
    game_state: 'welcome',
    game_modes: ["starwars", "classic"],
    current_game_mode: -1, // 0 -> sw, 1 -> classic
    /* playerGroups: [
      [3, 4, 5, 6, 7], // Sw
      [0, 1, 2, 3, 4, 5] // Classic
    ], */
    players: [
      {
        color: "yellow",
        name: [
          '',
          'Yellow'
        ],
        score: 0,
        active: false,
        available_in: [1],
        end_music: 'empire'
      },
      {
        color: "pink",
        name: [
          '',
          'Pink'
        ],
        score: 0,
        active: false,
        available_in: [1]
      },
      {
        color: "blue",
        name: [
          '',
          'Blue'
        ],
        score: 0,
        active: false,
        available_in: [1]
      },
      {
        color: "black",
        name: [
          'Darth Vader',
          'Black'
        ],
        score: 0,
        active: false,
        available_in: [0, 1],
        end_music: 'empire'
      },
      {
        color: "green",
        name: [
          'Yoda',
          'Green'
        ],
        score: 0,
        active: false,
        available_in: [0, 1],
        end_music: 'rebel'
      },
      {
        color: "red",
        name: [
          'Luke Skywalker',
          'Red'
        ],
        score: 0,
        active: false,
        available_in: [0, 1],
        end_music: 'luke'
      },
      {
        color: "orange",
        name: [
          'Boba Fett',
          ''
        ],
        score: 0,
        active: false,
        available_in: [0],
        end_music: 'bounty'
      },
      {
        color: "white",
        name: [
          'Stormtrooper',
          ''
        ],
        score: 0,
        active: false,
        available_in: [0],
        end_music: 'empire'
      }
    ],
    snd: {

    }
  },
  getters: {
    availablePlayers: (state) => {
      return state.players.filter(
        (player) => {
          return player.available_in.includes(state.current_game_mode)
        }
      )
    },
    activePlayers: (state, getters) => {
      return getters.availablePlayers.filter(
        (player) => {
          return player.active
        }
      )
    },
    playersScoreSum: (state, getters) => {
      let total_score_sum = 0;
      getters.availablePlayers.forEach((p, idx) => {
        total_score_sum += p.score;
      })
      return total_score_sum;
    }
  },
  mutations: {
    RESET_GAME: state => {
      state.game_state = 'welcome';
      state.current_game_mode = -1;
      // state.players_selected = [];
      state.game_modes.forEach((mode) => {
        console.log(mode);
        document.querySelector('body').classList.remove(mode);
      })
    },

    INIT_GAME: (state) => {
      state.game_state = 'choosing_mode';
      //state.snd['start'] = "./static/start-01.mp3";


    },

    RESET_PLAYER_SCORE: (state, player) => state.players.find(p => p.color == player.color).score = 0,

    RESET_PLAYERS_SCORE: state => state.players.forEach(player => player.score = 0),

    RESET_PLAYERS_STATUS: state => state.players.forEach(player => player.active = false),

    SET_GAME_MODE(state, current_game_mode) {
      state.current_game_mode = parseInt(current_game_mode, 10);
    },

    SET_GAME_STATE(state, game_state) {
      state.game_state = game_state;
    },

    UPDATE_PLAYER_SCORE(state, { value, player }) {
      let new_score = player.score + parseInt(value, 10);
      if (new_score < 0) {
        new_score = 0;
      }
      state.players.find(p => p.color == player.color).score = new_score;
    },

    ACTIVATE_PLAYER(state, { value, player }) {
      state.players.find(p => p.color == player.color).active = value;
      window.snd['ui-click-switch'].play();
    },

    INITIALICE_SOUNDS(state) {
      console.log('Add sounds');
      // state.sounds = new Howl({
      //   src: ["./sounds/start-01.mp3"]
      // })
    }
  },
  actions: {
    initializeGame: (ctx) => {
      ctx.commit('INIT_GAME');
      ctx.commit('RESET_PLAYERS_SCORE');
      ctx.commit('RESET_PLAYERS_STATUS');
    },
    resetGame: (ctx) => {
      ctx.commit('RESET_GAME');
    }
  }

});