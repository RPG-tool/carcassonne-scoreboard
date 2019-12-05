<template>
  <div>
    <template v-if="this.$store.state.game_state == 'choosing_players_and_mode'">
      <ChoosingPlayersAndMode></ChoosingPlayersAndMode>
    </template>
    <template v-else-if="this.$store.state.game_state == 'playing'">
      <Playing></Playing>
    </template>
    <template v-else-if="this.$store.state.game_state == 'ended'">Ended! Show winner</template>
    <template v-else>
      <Welcome></Welcome>
    </template>
    <button @click="resetGame">DEBUG: Reset game</button>
  </div>
</template>

<script>
import Welcome from "./welcome.vue";
import ChoosingPlayersAndMode from "./choosing-players-and-mode.vue";
import Playing from "./playing.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      // ...mapState()
      /* game_available_status: ["settings", "started", "ended"],
      game_status: "settings" */
    };
  },
  computed: {},
  watch: {},
  created: function() {
    // console.log(this.$store.state.players);
  },
  methods: {
    ...mapActions(["resetGame"])
    // ...mapMutations(["INIT_GAME"])
  },
  components: {
    Welcome,
    ChoosingPlayersAndMode,
    Playing
  }
};
</script>