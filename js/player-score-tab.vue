<template>
  <div class="player-score" :id="'player-score-' + player_color" :data-color="player_color">
    <label :for="player_color">
      <input
        v-model="player_checked"
        v-on:change="updatePlayerStatus"
        type="checkbox"
        :name="player_color"
        :id="player_color"
        @click="$event.target.closest('li').classList.toggle('selected')"
      />
      {{ player_color }}
    </label>
    <fieldset :disabled="!player_checked">
      <button :disabled="player_score === 0" v-on:click="playerScoreUpdate(-1)">-1</button>
      <input readonly type="text" class="score" :value="player_score" />
      <button v-on:click="playerScoreUpdate(1)">+1</button>
    </fieldset>
  </div>
</template>

<script>
Vue.component("player-score-tab", {
  data: function() {
    return {
      player_score: 0,
      player_checked: false
    };
  },
  props: ["player_color", "player_selected"],
  methods: {
    playerScoreUpdate: function(val) {
      this.player_score = this.player_score + val;
      if (this.player_score < 0) {
        this.player_score = 0;
      }
    },
    resetPlayerScore: function() {
      this.player_score = 0;
    },
    updatePlayerStatus: function() {
      console.log("Update Player Status");
      this.$parent.updateActivePlayers();
    }
  },
  mounted: function() {
    this.$root.$on("resetPlayerScore", this.resetPlayerScore);
  }
});
</script>