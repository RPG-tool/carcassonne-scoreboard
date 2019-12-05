<template>
  <div>
    <div>Choose style and number of players</div>
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
        <li v-for="(player, idx) in this.$store.state.players" v-bind:key="idx">
          <PlayerSelectRow v-bind:idx="idx" v-bind:player_color="player.color"></PlayerSelectRow>
        </li>
      </ul>
    </template>

    <button @click="activePlayers">Active playerSet</button>
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
    activePlayers() {
      console.log(this.$store.state.players);
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