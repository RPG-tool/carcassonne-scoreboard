<template>
  <div></div>
  <!--div>
    <ChoosePlayers
      v-bind:class="available_game_modes[current_game_mode]"
      v-bind:all_player_colors="filtered_player_colors()"
    ></ChoosePlayers>

    <hr />

    <button @click="toggleGameMode">Toggle game mode</button>
    <button @click="playerUpdateTest">Add player</button>
    <button @click="resetAllScoresTest">Reset all scores</button>
  </div-->
</template>

<script>
import ChoosePlayers from "./welcome.vue";

export default {
  data() {
    return {
      /* game_available_status: ["settings", "started", "ended"],
      game_status: "settings" */
    };
  },
  computed: {},
  watch: {},
  created: function() {
    console.log(this.$store.state.players);
  },
  methods: {
    /* initialize() {
      // this.game_status = "settings";
      console.log("App initialize");
    },
    playerUpdateTest: function(val) {
      this.all_player_colors.push("purple");
      console.log(this.all_player_colors);
    },
    updateGameMode(val) {
      this.current_game_mode = val; // Switchs between 0 <=> 1
    },
    toggleGameMode() {
      this.current_game_mode = +!this.current_game_mode; // Switchs between 0 <=> 1
    },
    resetAllScoresTest() {
      console.log("Reset!");
      this.$root.$emit("resetPlayerScore");
    },
    filtered_player_colors() {
      var filtered = this.all_player_colors.filter((elemento, idx) => {
        // debugger;
        if (this.player_colors_set[this.current_game_mode].indexOf(idx) > -1) {
          return elemento;
        }
      });
      // console.log( filtered );
      return filtered;
    } */
  },
  components: {
    ChoosePlayers
  }
};
</script>