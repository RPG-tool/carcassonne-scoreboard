<template>
  <div
    :class="['view-wrapper', 'view-winner', {'starwars':($store.state.current_game_mode === 0), 'classic':($store.state.current_game_mode === 1)}]"
  >
    <header class="main-header">
      <!--p class="screen-title right">And the winner is...</p-->
    </header>

    <main class="main-main">
      <p class="score-title">Ranking!</p>

      <table class="score-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Color</th>
            <th class="r">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, idx) in getSortedListByScore" v-bind:key="idx">
            <td>
              <div :class="['score-thumb', `score-thumb-${player.color}`]">
                <img
                  :src="`/static/img/${$store.state.current_game_mode}-${player.color}.png`"
                  :alt="player.name[$store.state.current_game_mode]"
                />
              </div>
            </td>
            <td>{{ player.name[$store.state.current_game_mode] }}</td>
            <td>{{ player.color }}</td>
            <td class="score r">{{ player.score }}</td>
          </tr>
        </tbody>
      </table>
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