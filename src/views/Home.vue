<template>
  <div>
    <div>
      <Item v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { db } from "@/firebase";
import Item from "@/components/Item";
export default {
  components: {
    Item,
  },
  data() {
    return {
      count: this.$store.state.count,
      posts: [],
    };
  },
  computed: mapGetters(["doubleCount"]),
  firestore() {
    return {
      posts: db.collection("posts"),
    };
  },
};
</script>
