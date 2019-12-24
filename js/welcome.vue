<template>
  <div>
    <ul>
      <li>
        <button class="btn">About</button>
      </li>
      <li>
        <button class="btn" @click="INIT_GAME">Start game</button>
      </li>
    </ul>
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
    // this.$store.mutations.INIT_GAME
    ...mapMutations(["INIT_GAME"])
  },
  components: {
    // ChoosePlayers
  }
};
</script>