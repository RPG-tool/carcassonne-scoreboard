<template>
  <div class="player-score" :id="'player-score-' + player.color">
    <label :for="player.color">{{ player.color }}</label>
    <br />
    <button :disabled="player.score === 0" v-on:click="playerScoreUpdate(-1)">-1</button>
    <input readonly :name="player.color" type="text" class="score" :value="player.score" />
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
  props: ["player"],
  mounted: function() {
    // this.$root.$on("resetPlayerScore", this.resetPlayerScore);
  },
  methods: {
    playerScoreUpdate: function(val) {
      this.player.score = this.player.score + val;
      if (this.player.score < 0) {
        this.player.score = 0;
      }
      this.$store.commit("UPDATE_PLAYER_SCORE", {
        value: this.player.score,
        player_color: this.player.color
      });
    },
    resetPlayerScore: function() {
      this.player.score = 0;
    }
  }
};
</script>