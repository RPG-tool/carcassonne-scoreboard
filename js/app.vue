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
    game_available_status: ['settings', 'started', 'ended'],
    game_status: 'settings'
  },
  // components: {
  //   'choose-players': 'choose-players'
  // },
  created: function () {
    //this.current_game_mode = this.available_game_modes[0];
    //console.log( this.available_game_modes );
    this.initialize();
  },
  methods: {
    initialize() {
      this.game_status = 'settings';
      console.log( 'App initialize' );
    },
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