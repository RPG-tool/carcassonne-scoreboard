Vue.component('choose-players', {
  data: function () {
    return {
      selected_players: 0
    }
  },
  props: [
    'current_game_mode',
    'all_player_colors'
  ],
  template: `
  <div id="choose-players" :class="current_game_mode">
    <div class="tabs" v-show="!isGameStarted()">
      <label>
      <input type="radio" v-on:change="updateGameMode(0)" name="current-game-mode" value="0" checked>
        Starwars
      </label>
      <label>
      <input type="radio" v-on:change="updateGameMode(1)" name="current-game-mode" value="1">
        Classic
      </label>
    </div>
    <ul class="player-list">
      <li v-for="player_color in all_player_colors">
        <player-score-tab v-bind:player_color=player_color></player-score-tab>
      </li>
    </ul>
    <div class="action">
      <button v-show="!isGameStarted()" id="player-reset" v-on:click="resetAll">Reset</button>
      <button v-show="!isGameStarted()" :disabled.boolean="selected_players < 2" id="start-game" v-on:click="startGame">Start game</button>
      <button v-show="isGameStarted()" id="end-game">End game</button>
    </div>
  </div>
  `,
  methods: {
    scoreUpdate: function (val) {
      this.player_score = this.player_score + val;
      if (this.player_score < 0) {
        this.player_score = 0;
      }
    },
    updateGameMode: function (val) {
      console.log(val);
      this.$root.updateGameMode(val);
    },
    updateActivePlayers: function () {
      console.log('Update active players');
      this.selected_players = $('#choose-players li.selected').length;
    },
    resetAll: function () {
      console.log('Reset All!');
    },
    isGameStarted: function () {
      return this.$root.game_status === 'started';
    },
    startGame: function () {
      console.log('Start game');
      this.$root.game_status = 'started';
    }
  },
  created: function () {
    this.$on('resetPlayerScore', function () {
      console.log('children!');
    });
  }
});