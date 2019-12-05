<template>
  <div class="player-score" :id="'player-score-' + player_color" :data-color="player_color">
    <label :for="player_color">{{ player_color }}</label>
    <br />
    <button :disabled="player_score === 0" v-on:click="playerScoreUpdate(-1)">-1</button>
    <input readonly :name="player_color" type="text" class="score" :value="player_score" />
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
  props: ["player_color"],
  mounted: function() {
    // this.$root.$on("resetPlayerScore", this.resetPlayerScore);
  },
  methods: {
    playerScoreUpdate: function(val) {
      this.player_score = this.player_score + val;
      if (this.player_score < 0) {
        this.player_score = 0;
      }
      this.$store.commit("UPDATE_PLAYER_SCORE", {
        value: this.player_score,
        player_color: this.player_color
      });
    },
    resetPlayerScore: function() {
      this.player_score = 0;
    }
  }
};
</script>