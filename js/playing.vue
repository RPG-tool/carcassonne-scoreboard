<template>
  <div>
    Game mode {{ $store.state.game_modes[$store.state.current_game_mode] }}
    <br />

    Vuex store value: {{ $store.state.current_game_mode }}
    <ul class="player-list">
      <li v-for="(player, idx) in $store.getters.activePlayers" v-bind:key="idx">
        <PlayerScoreRow v-bind:idx="idx" v-bind:player_color="player.color"></PlayerScoreRow>
      </li>
    </ul>
    Players selected: {{ $store.state.players_selected }} ( {{ $store.state.players_selected.length }} )
    <hr />

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
      this.$store.commit("SET_GAME_STATE", "ended");
    }
  },
  components: {
    PlayerScoreRow
  }
};
</script>