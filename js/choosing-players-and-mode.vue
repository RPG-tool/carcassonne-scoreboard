<template>
  <div>
    <div>Choose game variant and number of players</div>
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
    <template
      v-if="$store.state.current_game_mode > -1"
    >
      <ul class="player-list">
        <li v-for="(player, idx) in availablePlayers" v-bind:key="idx">
          <PlayerSelectRow v-bind:player="player"></PlayerSelectRow>
        </li>
      </ul>
      Players selected: {{ activePlayers.length }}
      <hr />
    </template>
    <button :disabled="activePlayers.length < 1" @click="uncheckAll">Uncheck All</button>
    <button
      :disabled="$store.state.current_game_mode < 0 || activePlayers.length < 2"
      @click="startGame"
    >Start game</button>
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
    startGame() {
      this.$store.commit("SET_GAME_STATE", "playing");
    },
    uncheckAll() {
      this.$store.commit("RESET_PLAYERS_STATUS");
    }
  },
  components: {
    PlayerSelectRow
  }
};
</script>