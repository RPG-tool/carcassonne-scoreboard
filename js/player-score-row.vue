<template>
  <div class="player-score" :id="'player-score-' + player_color" :data-color="player_color">
    <button :disabled="player_score === 0" v-on:click="playerScoreUpdate(-1)">-1</button>
    <input readonly type="text" class="score" :value="player_score" />
    <button v-on:click="playerScoreUpdate(1)">+1</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      player_score: 0
    };
  },
  props: ["player_color", "player_selected"],
  mounted: function() {
    this.$root.$on("resetPlayerScore", this.resetPlayerScore);
  },
  methods: {
    playerScoreUpdate: function(val) {
      this.player_score = this.player_score + val;
      if (this.player_score < 0) {
        this.player_score = 0;
      }
    },
    resetPlayerScore: function() {
      this.player_score = 0;
    }
  }
};
</script>