$( document ).ready( function () {
  // La magia aquí
  console.log( 'Ready!' );
} );

Vue.component( 'choose-players', {
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
    scoreUpdate: function ( val ) {
      this.player_score = this.player_score + val;
      if ( this.player_score < 0 ) {
        this.player_score = 0;
      }
    },
    updateGameMode: function ( val ) {
      console.log( val );
      this.$root.updateGameMode( val );
    },
    updateActivePlayers: function () {
      console.log( 'Update active players' );
      this.selected_players = $( '#choose-players li.selected' ).length;
    },
    resetAll: function () {
      console.log( 'Reset All!' );
    },
    isGameStarted: function () {
      return this.$root.game_status === 'started';
    },
    startGame: function () {
      console.log( 'Start game' );
      this.$root.game_status = 'started';
    }
  },
  created: function () {
    this.$on( 'resetPlayerScore', function () {
      console.log( 'children!' );
    } );
  }
} );


Vue.component( 'player-score-tab', {
  data: function () {
    return {
      player_score: 0,
      'player_checked': false
    }
  },
  props: [
    'player_color'
  ],
  template: `
  <div class="player-score" :id="'player-score-' + player_color" :data-color="player_color">
    <label :for=player_color>
      <input v-model="player_checked" v-on:change="updatePlayerStatus" type="checkbox" :name=player_color :id=player_color @click="$event.target.closest('li').classList.toggle('selected')"> {{ player_color }}
    </label>
    <fieldset :disabled="!player_checked">
      <button :disabled.boolean="player_score === 0" v-on:click="playerScoreUpdate(-1)">-1</button>
      <input readonly type="text" class="score" :value="player_score">
      <button v-on:click="playerScoreUpdate(1)">+1</button>
    </fieldset>
  </div>
  `,
  methods: {
    playerScoreUpdate: function ( val ) {
      this.player_score = this.player_score + val;
      if ( this.player_score < 0 ) {
        this.player_score = 0;
      }
    },
    resetPlayerScore: function () {
      this.player_score = 0;
    },
    updatePlayerStatus: function () {
      console.log( 'Update Player Status' );
      this.$parent.updateActivePlayers();
    }
  },
  mounted: function () {
    this.$root.$on( 'resetPlayerScore', this.resetPlayerScore );
  }
} );

var vm = new Vue( {
  el: '#main-app',
  data: {
    available_game_modes: ['starwars', 'classic'],
    current_game_mode: 0, // 0 -> sw, 1 -> classic
    all_player_colors: ['yellow', 'grey', 'blue', 'black', 'green', 'red', 'orange', 'white'],
    player_colors_set: [
      [3, 4, 5, 6, 7],   // Starwars
      [0, 1, 2, 3, 4, 5] // Classic
    ],
    current_selected_players: [],
    game_available_status: ['settings', 'started', 'ended'],
    game_status: 'settings'
  },
  // components: {
  //   'choose-players': 'choose-players'
  // },
  created: function () {
    //this.current_game_mode = this.available_game_modes[0];
    //console.log( this.available_game_modes );
  },
  methods: {
    playerUpdateTest: function ( val ) {
      this.all_player_colors.push( 'purple' );
      console.log( this.all_player_colors );
    },
    updateGameMode( val ) {
      this.current_game_mode = val; // Switchs between 0 <=> 1
    },
    toggleGameMode() {
      this.current_game_mode = +!this.current_game_mode; // Switchs between 0 <=> 1
    },
    resetAllScoresTest() {
      console.log( 'Reset!' );
      this.$root.$emit( 'resetPlayerScore' );
    },
    filtered_player_colors() {
      var filtered = this.all_player_colors.filter( ( elemento, idx ) => {
        // debugger;
        if ( this.player_colors_set[this.current_game_mode].indexOf( idx ) > -1 ) {
          return elemento;
        }
      } );
      // console.log( filtered );
      return filtered;
    }
  }
} );

