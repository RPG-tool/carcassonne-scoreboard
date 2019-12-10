<template>
  <div class="player-select-row" :id="'player-select-' + player.color">
    <label :for="'player-color-' + player.color">
      <input
        v-model="player.update_cb_status"
        type="checkbox"
        :name="'player-color-' + player.color +'-'+ $store.state.current_game_mode"
        :id="'player-color-' + player.color +'-'+ $store.state.current_game_mode"
        :data-color="player.color"
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
    update_cb_status: {
      get() {
        // return false;
        return this.$store.getters.playerObjByColor(this.player.color).active;
      },
      set(value) {
        this.$store.commit("UPDATE_CHECKBOX", {
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