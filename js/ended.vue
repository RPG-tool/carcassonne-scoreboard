<template>
  <div
    :class="['view-wrapper', 'view-winner', {'starwars':($store.state.current_game_mode === 0), 'classic':($store.state.current_game_mode === 1)}]"
  >
    <header class="main-header">
      <!--p class="screen-title right">And the winner is...</p-->
    </header>

    <main class="main-main">
      <table class="score-table">
        <caption>Ranking</caption>
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
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      winner_tune: false
    };
  },
  created: function() {
    const first = this.getSortedListByScore[0];
    if (this.$store.state.current_game_mode === 0) {
      // SW
      this.winner_tune = new Howl({
        src: [`./static/snd/0-end-${first.end_music}.mp3`]
      });
    } else {
      // Classic
      this.winner_tune = new Howl({
        src: ["./static/snd/1-end.mp3"]
      });
    }
    this.winner_tune.play();
    console.log(first.end_music);
  },
  computed: {
    getSortedListByScore() {
      return this.$store.getters.activePlayers.sort(
        (a, b) => b.score - a.score
      );
    },
    ...mapGetters(["getTopScore"])
  },
  watch: {},
  methods: {
    startNewGame() {
      this.winner_tune.stop();
      window.snd["click"].play();
      this.$store.commit("RESET_PLAYERS_SCORE");
      this.$store.commit("SET_GAME_STATE", "choosing_players");
    }
  },
  components: {
    // ChoosePlayers
  }
};
</script>