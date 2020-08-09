<template>
  <div class="home">
    <input type="text" />
    <button v-on:click="postTweet">ツイート</button>
    <!-- 変更点１ -->
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">{{ tweet.text }}</p>
    </div>
    <LikesCount></LikesCount>
  </div>
</template>

<script>
import db from "@/firebase";
import LikesCount from "../components/LikesCount";

export default {
  name: "home",
  components: {
    LikesCount,
  },
  /* 変更点２ */
  data() {
    return {
      tweets: [
        // こんな感じのデータが入る予定
        // {
        //   id: "0GwoGZuhTNhqHQDBeiVW",
        //   text: "こんにちは、ツイートの本文です。",
        // },
      ],
    };
  },
  methods: {
    postTweet() {
      const tweet = {
        text: "こんにちは、ツイートの本文です。",
      };
      db.collection("tweets")
        .add(tweet)
        .then(ref => {
          this.tweets.push({
            id: ref.id,
            ...tweet,
          });
        });
    },
    created() {
      db.collection("tweets")
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            this.tweets.push({
              id: doc.id,
              ...doc.data(),
            });
          });
        });
    },
  },
};
</script>
