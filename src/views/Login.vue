<template>
  <div class="login">
    <h2>ログイン</h2>
    <div>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div>
        <label for="password">パスワード:</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button @click="login">ログイン</button>
      <p>まだアカウントを作成していない方はこちらから</p>
      <router-link to="/register">登録</router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      currentUser: {},
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(result => {
          this.$router.push({
            name: "Mypage",
            params: { uid: result.user.uid },
          });
        })
        .catch(function(error) {
          alert(error.message);
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.email = user.email;
        this.password = user.password;
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  },
};
</script>

<style scoped>
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  color: white;
  background-color: slategray;
  margin: 15px auto;
}
.login {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  border: 1px solid black;
}
</style>
