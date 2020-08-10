<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">👍</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber"],
  computed: {
    halfNumber: function() {
      return this.totalNumber / 2;
    },
  },
  methods: {
    increment: function() {
      this.$emit("my-click", this.totalNumber++);
    },
  },
};
</script>
