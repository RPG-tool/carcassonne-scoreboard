<template>
  <div>
    <template v-if="this.$store.state.game_state == 'choosing_mode'">
      <ChoosingMode></ChoosingMode>
    </template>
    <template v-if="this.$store.state.game_state == 'choosing_players'">
      <ChoosingPlayers></ChoosingPlayers>
    </template>
    <template v-else-if="this.$store.state.game_state == 'playing'">
      <Playing></Playing>
    </template>
    <template v-else-if="this.$store.state.game_state == 'ended'">
      <Ended></Ended>
    </template>
    <template v-else>
      <Welcome></Welcome>
    </template>
    <button @click="resetGame">DEBUG: Reset game</button>
  </div>
</template>

<script>
import Welcome from "./welcome.vue";
import ChoosingMode from "./choosing-mode.vue";
import ChoosingPlayers from "./choosing-players.vue";
import Playing from "./playing.vue";
import Ended from "./ended.vue";
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
    ChoosingMode,
    ChoosingPlayers,
    Playing,
    Ended
  }
};
</script>