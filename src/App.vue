<template>
  <div id="app">
    <Header></Header>
    <header>
      <router-link to="/comment" class="header-item">コメント</router-link>
      <router-link to="/login" class="header-item">ログイン</router-link>
      <router-link to="/register" class="header-item">登録</router-link>
      <router-link to="/mypage" class="header-item">マイページ</router-link>
    </header>
    <main>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/premier-league">Premier League</router-link>
      <router-link to="/chat">Chat</router-link>
    </main>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.header-item {
  padding: 10px;
}
</style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
