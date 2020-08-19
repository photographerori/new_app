<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>いいねの合計：{{ number }}</h2>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <Tweet></Tweet>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import Tweet from "./components/Tweet.vue";

export default {
  data: function() {
    return {
      number: 10,
    };
  },
  components: {
    LikeHeader,
    Tweet,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
};
</script>
