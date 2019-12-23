<template>
  <div>
    <h1>Mostrar al ganador</h1>
    <ul class="player-list winner-list">
      <li
        v-for="(player, idx) in getSortedListByScore"
        v-bind:key="idx"
      >{{ idx }} {{ player.color }} {{ player.score }}</li>
    </ul>
    <hr />
    <button @click="startNewGame">Start new game</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    getSortedListByScore() {
      return this.$store.getters.activePlayers.sort(
        (a, b) => a.score > b.score
      );
    }
  },
  watch: {},
  methods: {
    startNewGame() {
      this.$store.commit("RESET_PLAYERS_SCORE");
      this.$store.commit("SET_GAME_STATE", "choosing_playersbbgvb");
    }
  },
  components: {
    // ChoosePlayers
  }
};
</script>