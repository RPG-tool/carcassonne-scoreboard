<template>
  <div>
    Game mode {{ $store.state.game_modes[$store.state.current_game_mode] }}
    <br />
    Vuex store value: {{ $store.state.current_game_mode }}
    <ul class="player-list">
      <li v-for="(player, idx) in $store.getters.activePlayers" v-bind:key="idx">
        <PlayerScoreRow v-bind:player="player"></PlayerScoreRow>
      </li>
    </ul>
    <button @click="stopGame">Stop game</button>
  </div>
</template>

<script>
import PlayerScoreRow from "./player-score-row.vue";
export default {
  data() {
    return {};
  },
  prop: {},
  computed: {},
  watch: {},
  created: function() {
    // console.log(this.$store.getters.activePlayers);
  },
  methods: {
    stopGame() {
      this.$dialog
        .confirm("Please confirm to end the current game", {
          okText: "Stop game",
          cancelText: "Continue playing"
        })
        .then(dialog => {
          // console.log("Clicked on proceed");
          this.$store.commit("SET_GAME_STATE", "ended");
        })
        .catch(function() {
          // console.log("Clicked on cancel");
        });
    }
  },
  components: {
    PlayerScoreRow
  }
};
</script>