<template>
  <div class="player-select-row" :id="'player-select-' + player.color">
    <label>
      <input
        v-model="active"
        type="checkbox"
        :name="'player-color-' + player.color +'-'+ $store.state.current_game_mode"
        :id="'player-color-' + player.color +'-'+ $store.state.current_game_mode"
      />
      {{ player.color }}
      <br />
    </label>
  </div>
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