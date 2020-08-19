<template>
  <div id="app">
    <div v-if="user">
      <button v-on:click="signOut">ログアウト</button>
      <h3>ログイン中</h3>
      <div>
        <span>email:</span>
        <span>{{ user.email }}</span>
      </div>
    </div>
    <div v-else>
      <span>email:</span>
      <input type="text" v-model="email" />
    </div>
    <div>
      <span>password:</span>
      <input type="password" v-model="password" />
    </div>
    <button v-on:click="signUp">sign up</button>
    <button v-on:click="logIn">login</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      user: null,
    };
  },
  methods: {
    signUp: function() {
      // ユーザー登録
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
      this.email = "";
      this.password = "";
    },
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .catch(function(error) {
          console.log(error);
        });
    },
    logIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          console.log(error);
        });
      this.email = "";
      this.password = "";
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>
