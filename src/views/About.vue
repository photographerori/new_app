<template>
  <div>
    <h1>This is About page.</h1>
    <div>
      <LikeHeader></LikeHeader>
      <LikeNumber></LikeNumber>
      <Tweet></Tweet>
      <SignUp></SignUp>
    </div>
  </div>
</template>

<script>
import LikeHeader from "../components/LikeHeader";
import LikeNumber from "../components/LikeNumber";
import Tweet from "../components/Tweet";
export default {
  components: {
    LikeHeader,
    LikeNumber,
    Tweet,
  },
};
</script>
