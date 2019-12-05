<template>
  <div>
    <h1>Mostrar al ganador</h1>
    <hr />
    <button @click="startNewGame">Start new game</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    startNewGame() {
      this.$store.commit("SET_GAME_STATE", "choosing_players_and_mode");
    }
  },
  components: {
    // ChoosePlayers
  }
};
</script>