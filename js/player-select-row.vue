<template>
  <div class="player-select-row" :id="'player-select-' + player_color">
    <label :for="'player-color-' + player_color">
      <input
        v-model="player_checked"
        type="checkbox"
        :name="'player-color-' + player_color"
        :id="'player-color-' + player_color"
        :data-color="player_color"
        :data-idx="idx"
      />
      ( {{ idx }} ) {{ player_color }}
    </label>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      player_score: 0,
      player_checked: false
    };
  },
  props: ["idx", "player_color", "player_selected"],
  mounted: function() {},
  methods: {}
};
</script>