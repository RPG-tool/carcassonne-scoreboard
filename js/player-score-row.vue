<template>
  <div class="player-score" :id="'player-score-' + player.color">
    <label :for="player.color">{{ player.color }} {{ player.score }}</label>
    <!--button :disabled="player.score === 0" @click="playerScoreUpdate(-1)">-1</button-->
    <!--input
      readonly
      :name="'main-player-score-' + player.color"
      type="number"
      class="score"
      :value="player.score"
      @click="showAddtionalScoreModal"
    /-->
    <!--button @click="playerScoreUpdate(1)">+1</button-->
    <br />
    <button
      :disabled="player.score === 0 || player_aditional_score < 1"
      @click="playerScoreUpdate(-1*player_aditional_score)"
    >Substract</button>
    <input
      :name="'aditional-player-score-'+player.color"
      type="number"
      class="additional-score"
      min="0"
      step="1"
      v-model="player_aditional_score"
    />
    <button
      :disabled="player_aditional_score < 1"
      @click="playerScoreUpdate(player_aditional_score)"
    >Add</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      player_aditional_score: 1
    };
  },
  props: ["player"],
  mounted: function() {
    // this.$root.$on("resetPlayerScore", this.resetPlayerScore);
  },
  computed: {},
  methods: {
    playerScoreUpdate: function(value) {
      const player = this.player;
      this.$store.commit("UPDATE_PLAYER_SCORE", {
        value,
        player
      });
      this.player_aditional_score = 1;
    },
    resetPlayerScore: function() {
      this.$store.commit("RESET_PLAYER_SCORE", this.player);
    }
  }
};
</script>