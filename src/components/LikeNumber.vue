<template>
  <div>
    <p>いいね({{ number }})</p>
    <button @click="increment">👍</button>
  </div>
</template>

<script>
export default {
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
