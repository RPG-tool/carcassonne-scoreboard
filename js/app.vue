<template>
  <div>
    <template v-if="!this.$store.state.game_state">
      <Welcome></Welcome>
    </template>
    <template v-else>
      <ChooseGameStyle></ChooseGameStyle>
    </template>
    <button @click="resetGame">DEBUG: Reset game</button>
  </div>
</template>

<script>
import Welcome from "./welcome.vue";
import ChooseGameStyle from "./choose-game-style.vue";
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
    // ...mapMutations(["initGame"])
  },
  components: {
    Welcome,
    ChooseGameStyle
  }
};
</script>