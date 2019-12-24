<template>
  <div
    :class="['view-wrapper', 'view-choose-players', {'starwars':($store.state.current_game_mode === 0), 'classic':($store.state.current_game_mode === 1)}]"
  >
    <header class="main-header">
      <p class="screen-title left">
        Total time:
        <span>00:00</span>
      </p>
      <button class="btn right timer">Start timer</button>
    </header>

    <main class="main-main">
      <ul class="player-list">
        <template v-for="(player, idx) in $store.getters.activePlayers">
          <PlayerScoreRow v-bind:key="idx" v-bind:player="player"></PlayerScoreRow>
        </template>
      </ul>
    </main>

    <footer class="main-footer">
      <button class="btn" @click="finishGame">Finish game</button>
    </footer>
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
    // window.snd["start-01"].play();
  },
  methods: {
    finishGame() {
      window.snd["ui-click-switch"].play();
      this.$dialog
        .confirm("Please confirm to end the current game", {
          okText: "Finish game",
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