<template>
  <div>
    <div>
      <p>{{ this.count }}</p>
      <p>{{ doubleCount }}</p>
      <button @click="increment">+1</button>
    </div>
    <div>
      <Item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="list-none my-5"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { db } from "@/main";
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
  methods: {
    increment() {
      this.$store.state.count++;
    },
  },
  firestore() {
    return {
      posts: db.collection("posts"),
    };
  },
};
</script>
