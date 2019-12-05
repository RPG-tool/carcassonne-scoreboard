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
      return [
        {
          color: "yellow",
          score: 28,
          active: false,
          is_checked: false,
          available_in: [1]
        },
        {
          color: "grey",
          score: 26,
          active: false,
          is_checked: false,
          available_in: [1]
        }
      ];
    }
  },
  watch: {},
  methods: {
    startNewGame() {
      this.$store.commit("SET_GAME_STATE", "choosing_players_and_mode");
    }
  },
  components: {
    // ChoosePlayers
  }
};
</script>