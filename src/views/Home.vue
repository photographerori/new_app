<template>
  <div>
    <p>{{ this.count }}</p>
    <p>{{ doubleCount }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      count: this.$store.state.count,
    };
  },
  computed: mapGetters(["doubleCount"]),
  methods: {
    increment() {
      this.$store.state.count++;
    },
  },
};
</script>
