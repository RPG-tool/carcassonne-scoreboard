<template>
  <div
    :class="['view-wrapper', 'view-winner', {'starwars':($store.state.current_game_mode === 0), 'classic':($store.state.current_game_mode === 1)}]"
  >
    <header class="main-header">
      <!--p class="screen-title right">And the winner is...</p-->
    </header>

    <main class="main-main">
      <p class="final-score-title">Ranking!</p>

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
          <template v-for="(player, idx) in getSortedListByScore">
            <tr v-bind:key="idx" :class="{'winner':(getTopScore === player.score)}">
              <td>
                <div :class="['score-thumb', `score-thumb-${player.color}`]">
                  <img
                    :src="`/static/img/${$store.state.current_game_mode}-${player.color}.png`"
                    :alt="player.name[$store.state.current_game_mode]"
                  />
                </div>
              </td>
              <td>
                <span class="cell-data">{{ player.name[$store.state.current_game_mode] }}</span>
              </td>
              <td>
                <span class="cell-data">{{ player.color }}</span>
              </td>
              <td class="score r">
                <span class="cell-data">{{ player.score }}</span>
              </td>
            </tr>
          </template>
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
    return {
      winner_song: false
    };
  },
  created: function() {
    var first = this.getSortedListByScore[0];
    console.log(this.$store.state.players);
    console.log(first.end_music);
  },
  computed: {
    getSortedListByScore() {
      return this.$store.getters.activePlayers.sort(
        (a, b) => b.score - a.score
      );
    },
    getTopScore() {
      return Math.max.apply(
        Math,
        this.$store.getters.activePlayers.map(function(obj) {
          return obj.score;
        })
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