<template>
  <div class="player-select-row" :id="'player-select-' + player_color">
    <label :for="'player-color-' + player_color">
      <input
        v-model="update_cb_status"
        type="checkbox"
        :name="'player-color-' + player_color +'-'+ $store.state.current_game_mode"
        :id="'player-color-' + player_color +'-'+ $store.state.current_game_mode"
        :data-color="player_color"
        :data-idx="idx"
      />
      ( {{ idx }} ) {{ player_color }}
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
        return false;
        // return this.$store.state.obj.message;
      },
      set(value) {
        this.$store.commit("UPDATE_CHECKBOX", {
          value: value,
          player_color: this.player_color
        });
      }
    }
  },
  props: ["idx", "player_color"],
  mounted: function() {},
  methods: {}
};
</script>