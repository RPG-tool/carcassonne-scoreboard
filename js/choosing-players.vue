<template>
  <div
    :class="['view-wrapper', 'view-playing', {'starwars':($store.state.current_game_mode === 0), 'classic':($store.state.current_game_mode === 1)}]"
  >
    <header class="main-header">
      <button class="btn left" @click="goBack">‹ Change mode</button>
      <p class="screen-title right">
        Select players
        <small>( {{ activePlayers.length }} )</small>
      </p>
    </header>

    <main class="main-main">
      <template v-if="$store.state.current_game_mode > -1">
        <ul class="player-list">
          <template v-for="(player, idx) in availablePlayers">
            <PlayerSelectRow v-bind:key="idx" v-bind:player="player"></PlayerSelectRow>
          </template>
        </ul>
      </template>
    </main>

    <footer class="main-footer">
      <button class="btn" :disabled="activePlayers.length < 1" @click="uncheckAll">Deselect All</button>
      <button
        class="btn"
        :disabled="$store.state.current_game_mode < 0 || activePlayers.length < 2"
        @click="startGame"
      >Start game</button>
    </footer>
  </div>
</template>

<script>
import PlayerSelectRow from "./player-select-row";
import { mapGetters } from "vuex";

// window.snd = new Howl({
//   src: ["./sounds/start-01.mp3"]
// });
// window.blaster.once("load", function() {
//   console.log("Sound play");
//   blaster.play();
// });

export default {
  data() {
    return {};
  },
  prop: {},
  computed: {
    ...mapGetters(["availablePlayers", "activePlayers"]),
    current_game_mode: {
      get() {
        return this.$store.state.current_game_mode;
      },
      set(value) {
        this.$store.commit("SET_GAME_MODE", value);
      }
    }
  },
  watch: {},
  created: function() {
    // console.log(this.$store.getters.activePlayers);
  },
  methods: {
    goBack() {
      window.snd["ui-click-switch"].play();
      this.$store.commit("SET_GAME_STATE", "choosing_mode");
    },
    startGame() {
      this.$store.commit("SET_GAME_STATE", "playing");
      window.snd["ui-click-switch"].play();
    },
    uncheckAll() {
      window.snd["ui-click-switch"].play();
      this.$store.commit("RESET_PLAYERS_STATUS");
    }
  },
  components: {
    PlayerSelectRow
  }
};
</script>