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
      v-if="this.$store.state.current_game_mode > -1"
    >
      <ul class="player-list">
        <li v-for="(player, idx) in $store.getters.activePlayers" v-bind:key="idx">
          <PlayerSelectRow v-bind:idx="idx" v-bind:player_color="player.color"></PlayerSelectRow>
        </li>
      </ul>
    </template>
    <button
      :disabled="this.$store.state.current_game_mode < 0 && true"
      @click="startGame"
    >Start game</button>
  </div>
</template>

<script>
import PlayerSelectRow from "./player-select-row";
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
    startGame() {
      console.log(this.$store.getters.testA);
    },
    getActivePlayerGroup(group_id) {
      console.log(this.$store.state.current_game_mode);
      if (this.$store.state.current_game_mode !== null) {
        // return this.$store.getters.activePlayers;
      } else {
        console.log("Current game mode is null");
      }
    }
  },
  components: {
    PlayerSelectRow
  }
};
</script>