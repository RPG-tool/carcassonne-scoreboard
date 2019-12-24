<template>
  <li
    :class="['player-card', `player-select-${player.color}`, {'is-active':player.active}]"
    :id="'player-select-' + player.color"
  >
    <label>
      <p class="player-name">{{ player.name[$store.state.current_game_mode] }}</p>
      <p v-if="player.active" class="cta">Ready!</p>
      <p v-else class="cta">Click to select player</p>
      <input
        v-model="active"
        type="checkbox"
        :name="'player-color-' + player.color +'-'+ $store.state.current_game_mode"
        :id="'player-color-' + player.color +'-'+ $store.state.current_game_mode"
      />
      <!-- {{ player.color }}
      -->
    </label>
  </li>
</template>

<script>
export default {
  data: function() {
    return {
      // player_score: 0
    };
  },
  computed: {
    active: {
      get() {
        // return false;
        return this.player.active;
      },
      set(value) {
        this.$store.commit("ACTIVATE_PLAYER", {
          value: value,
          player: this.player
        });
      }
    }
  },
  props: ["player"],
  mounted: function() {},
  methods: {}
};
</script>