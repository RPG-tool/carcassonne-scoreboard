<template>
  <div
    :class="['view-wrapper', 'view-choose-players', `players-${activePlayers.length}`, {'starwars':($store.state.current_game_mode === 0), 'classic':($store.state.current_game_mode === 1)}]"
  >
    <header class="main-header">
      <p class="screen-title left cap-on-mobile">
        <span class="hide-on-mobile">Total</span>time
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
import { mapGetters } from "vuex";
import PlayerScoreRow from "./player-score-row.vue";
import Timer from "easytimer.js";

export default {
  data() {
    return {
      total_timer: false,
      mini_timer: false
    };
  },
  prop: {},
  computed: {
    ...mapGetters(["activePlayers", "playersScoreSum"])
  },
  watch: {},
  created: function() {
    // console.log(this.$store.getters.activePlayers);
    if (this.playersScoreSum === 0) {
      // window.snd["start-01"].stop().play();
    }

    var vm = this;
    this.total_timer = new Timer();
    this.total_timer.start();
    this.total_timer.addEventListener("secondsUpdated", function(e) {
      document.getElementById(
        "current-playing-time"
      ).innerHTML = vm.total_timer
        .getTimeValues()
        .toString(["minutes", "seconds"]);
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
          vm.total_timer.removeEventListener("secondsUpdated", null, true);
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