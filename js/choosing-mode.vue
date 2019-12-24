<template>
  <div class="view-wrapper view-choose-game-mode">
    <header class="main-header">
      <p class="screen-title">Click to select game mode</p>
    </header>

    <main class="main-main">
      <label
        :class="{'select-game':true, 'starwars':true, 'is-selected':($store.state.current_game_mode === 0), 'is-disabled':($store.state.current_game_mode !== 0)}"
        title="Carcassonne Starwars"
      >
        <input
          name="game-style"
          value="0"
          type="radio"
          id="rb-starwars"
          v-model="current_game_mode"
        />
      </label>
      <label
        :class="{'select-game':true, 'classic':true, 'is-selected':($store.state.current_game_mode === 1), 'is-disabled':($store.state.current_game_mode !== 1)}"
        title="Carcassonne Classic"
      >
        <input name="game-style" value="1" type="radio" id="rb-classic" v-model="current_game_mode" />
      </label>
      <!-- Vuex store value: {{ $store.state.current_game_mode }} -->
      <!-- Computed property value: {{ current_game_mode }} -->
    </main>

    <footer class="main-footer">
      <button
        class="btn"
        :disabled="$store.state.current_game_mode < 0"
        @click="choosePlayers"
      >Choose players</button>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Howl, Howler } from "howler";

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
    current_game_mode: {
      get() {
        return this.$store.state.current_game_mode;
      },
      set(value) {
        this.$store.commit("SET_GAME_MODE", value);
        window.snd["ui-click-switch"].play();
      }
    }
  },
  watch: {},
  created: function() {
    // console.log(this.$store.getters.activePlayers);
    // window.snd["ui-click-switch"] = new Howl({
    //   src: ["./static/snd/ui-click-switch.mp3"]
    // });
  },
  methods: {
    choosePlayers() {
      window.snd["ui-click-switch"].play();
      this.$store.commit("SET_GAME_STATE", "choosing_players");
    }
  },
  components: {}
};
</script>