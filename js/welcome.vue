<template>
  <div>
    <ul>
      <li>
        <button>About</button>
      </li>
      <li>
        <button @click="initGame">Start game</button>
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
    // this.$store.mutations.initGame
    ...mapMutations(["initGame"])
  },
  components: {
    // ChoosePlayers
  }
};
</script>