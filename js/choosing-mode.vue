<template>
  <div>
    <div>Choose game variant</div>
    <label>
      <input name="game-style" value="0" type="radio" id="rb-starwars" v-model="current_game_mode" /> Starwars
    </label>
    <label>
      <input name="game-style" value="1" type="radio" id="rb-classic" v-model="current_game_mode" /> Classic
    </label>
    <br />
    Vuex store value: {{ $store.state.current_game_mode }}
    <br />
    Computed property value: {{ current_game_mode }}
    <button
      :disabled="$store.state.current_game_mode < 0"
      @click="choosePlayers"
    >Choose players</button>
  </div>
</template>

<script>
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
    choosePlayers() {
      this.$store.commit("SET_GAME_STATE", "choosing_players");
    }
  },
  components: {}
};
</script>