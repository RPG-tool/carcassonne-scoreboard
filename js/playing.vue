<template>
  <div
    :class="['view-wrapper', 'view-choose-players', {'starwars':($store.state.current_game_mode === 0), 'classic':($store.state.current_game_mode === 1)}]"
  >
    <header class="main-header">
      <p class="screen-title left">
        Total time
        <span id="current-playing-time"></span>
      </p>
      <button @click="startMiniTimer" id="mini-timer" class="btn right timer">Start timer</button>
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
import Timer from "easytimer.js";

export default {
  data() {
    return {
      miniTimer: false
    };
  },
  prop: {},
  computed: {},
  watch: {},
  created: function() {
    // console.log(this.$store.getters.activePlayers);
    // window.snd["start-01"].play();
    var timer = new Timer(/* default config */);
    timer.start(/* config */);
    timer.addEventListener("secondsUpdated", function(e) {
      document.getElementById(
        "current-playing-time"
      ).innerHTML = timer.getTimeValues().toString(["minutes", "seconds"]);
    });
  },
  methods: {
    finishGame() {
      window.snd["ui-click-switch"].play();
      var vm = this;
      this.$dialog
        .confirm("Please confirm to end the current game", {
          okText: "Finish game",
          cancelText: "Continue playing"
        })
        .then(dialog => {
          // console.log("Clicked on proceed");
          if (vm.miniTimer.isRunning()) {
            vm.miniTimer.stop();
          }
          this.$store.commit("SET_GAME_STATE", "ended");
        })
        .catch(function() {
          // console.log("Clicked on cancel");
        });
    },
    startMiniTimer() {
      var vm = this;
      window.snd["ui-click-switch"].play();
      if (this.miniTimer === false) {
        this.miniTimer = new Timer(/* default config */);
        this.miniTimer.start(/* config */);
        this.miniTimer.addEventListener("secondsUpdated", function(e) {
          document.getElementById(
            "mini-timer"
          ).innerHTML = vm.miniTimer
            .getTimeValues()
            .toString(["minutes", "seconds"]);
        });
      } else if (this.miniTimer.isRunning()) {
        this.miniTimer.stop();
        document.getElementById("mini-timer").innerHTML = "Start timer";
      } else {
        this.miniTimer.reset();
      }
    }
  },
  components: {
    PlayerScoreRow
  }
};
</script>