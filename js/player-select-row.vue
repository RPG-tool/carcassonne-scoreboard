<template>
  <li
    :class="['player-card', `player-select-${player.color}`, {'is-inactive':!player.active}]"
    :id="'player-select-' + player.color"
  >
    <label>
      <div class="player-img">
        <img
          :src="`/static/img/${$store.state.current_game_mode}-${player.color}.png`"
          :alt="player.name[$store.state.current_game_mode]"
        />
      </div>

      <p class="player-name">{{ player.name[$store.state.current_game_mode] }}</p>

      <input
        v-model="active"
        type="checkbox"
        :name="'player-color-' + player.color +'-'+ $store.state.current_game_mode"
        :id="'player-color-' + player.color +'-'+ $store.state.current_game_mode"
      />
      <!-- {{ player.color }}
      -->
      <p v-if="player.active" class="cta">Ready!</p>
      <p v-else class="cta">
        Click to
        <br />select player
      </p>
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