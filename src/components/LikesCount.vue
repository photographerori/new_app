<template>
  <div>
    <p>いいね{{ number }}</p>
    <button @click="increment">👍</button>
  </div>
</template>

<script>
export default {
  name: "LikesCount",
  props: {},
  data: function() {
    return {
      number: 0,
    };
  },
  methods: {
    increment: function() {
      this.number++;
    },
  },
};
</script>
