<template>
  <div
    :class="['view-wrapper', 'view-winner', {'starwars':($store.state.current_game_mode === 0), 'classic':($store.state.current_game_mode === 1)}]"
  >
    <header class="main-header">
      <p class="screen-title right">And the winner is...</p>
    </header>

    <main class="main-main">
      <ul class="player-list winner-list">
        <li
          v-for="(player, idx) in getSortedListByScore"
          v-bind:key="idx"
        >{{ idx }} {{ player.color }} {{ player.score }}</li>
      </ul>
    </main>

    <footer class="main-footer">
      <button class="btn" @click="startNewGame">Start new game</button>
    </footer>
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
      this.$store.commit("SET_GAME_STATE", "choosing_players");
    }
  },
  components: {
    // ChoosePlayers
  }
};
</script>