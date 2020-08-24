<template>
  <div id="app">
    <header>
      <router-link to="/comment" class="header-item">コメント</router-link>
      <router-link to="/login" class="header-item">ログイン</router-link>
      <router-link to="/register" class="header-item">登録</router-link>
    </header>
    <main>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/teams">Teams</router-link>
    </main>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

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
