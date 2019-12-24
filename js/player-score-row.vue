<template>
  <li
    :class="['player-card', 'player-score', `player-${player.color}`]"
    :id="'player-score-' + player.color"
  >
    <div class="player-content-wrapper">
      <!-- {{ player.color }} {{ player.score }} -->
      <div class="player-img">
        <img
          :src="`/static/img/${$store.state.current_game_mode}-${player.color}.png`"
          :alt="player.name[$store.state.current_game_mode]"
        />
      </div>

      <p class="player-name">{{ player.name[$store.state.current_game_mode] }}</p>

      <div class="score-control-block">
        <div class="score-current">
          <p class="score-title">Player score</p>
          <p class="score-value">{{ player.score }}</p>
        </div>

        <div class="score-control">
          <label :for="'aditional-player-score-'+player.color">Enter value</label>
          <div class="row">
            <button
              class="btn-score"
              :disabled="player.score === 0 || player_aditional_score < 1"
              @click="playerScoreUpdate(-1*player_aditional_score)"
              title="Substract"
            >−</button>
            <input
              class="additional-score"
              :name="'aditional-player-score-'+player.color"
              type="number"
              min="0"
              step="1"
              v-model="player_aditional_score"
            />
            <button
              class="btn-score"
              :disabled="player_aditional_score < 1"
              @click="playerScoreUpdate(player_aditional_score)"
              title="Add"
            >+</button>
          </div>
        </div>
      </div>
    </div>
  </li>
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
      window.snd["b-0" + (Math.floor(Math.random() * (4 - 1)) + 1)].play();
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