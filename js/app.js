$( document ).ready( function () {
  // La magia aquí
  console.log( 'Ready!' );
} );

Vue.component( 'choose-players', {
  data: function () {
    return {
      selected_players: []
    }
  },
  props: [
    'current_game_mode',
    'all_player_colors'
  ],
  template: `
  <div id="choose-players" :class="current_game_mode">
    <div class="tabs">
      <button class="tab" id="play-classic">Classic</button>
      <button class="tab" id="play-star-wars">StarWars</button>
    </div>
    <ul class="player-list">
      <li v-for="player_color in all_player_colors">
        <label :for=player_color>
          <input v-on:change="updateStatus" type="checkbox" :name=player_color :id=player_color> {{ player_color }}
        </label>
        <player-score-tab v-bind:player_color=player_color></player-score-tab>
      </li>
    </ul>
    <div class="action">
      <button id="player-reset">Reset</button>
      <button id="start-game">Start game</button>
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
    updateStatus: function () {
      console.log( 'fired!' );
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
      player_score: 0
    }
  },
  props: [
    'player_color'
  ],
  template: `
  <div ref="player-score" class="player" :id="'player-score-' + player_color">
    <button v-on:click="playerScoreUpdate(-1)">-1</button>
    <input readonly type="text" class="score" :value="player_score">
    <button v-on:click="playerScoreUpdate(1)">+1</button>
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
    }
  },
  mounted: function () {
    this.$root.$on( 'resetPlayerScore', this.resetPlayerScore );
  }
} );

// new Vue( {
//   el: '#player-scores-container'
// } );

var vm = new Vue( {
  el: '#main-app',
  data: {
    available_game_modes: ['starwars', 'classic'],
    current_game_mode: 0, // 0 -> sw, 1 -> classic
    all_player_colors: ['yellow', 'grey', 'blue', 'black', 'green', 'red', 'orange', 'white'],
    player_colors_set: {
      'classic': [0, 1, 2, 3, 4, 5],
      'startwars': [3, 4, 5, 6, 7]
    }
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
    gameModeUpdateTest() {
      this.current_game_mode = +!this.current_game_mode; // Switchs between 0 <=> 1
    },
    resetAllScoresTest() {
      console.log( 'Reset!' );
      this.$root.$emit( 'resetPlayerScore' );
    }
  }
} );

