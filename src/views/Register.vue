<template>
  <div class="register">
    <h2>アカウント作成</h2>
    <div>
      <button>Googleアカウントで作成</button>
    </div>
    <div>
      <button>Facebookアカウントで作成</button>
    </div>
    <div>
      <button>メールアドレスで作成</button>
      <div>
        <label for="email">Email: </label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div>
        <label for="password">パスワード: </label>
        <input id="password" type="password" v-model="password" />
      </div>
    </div>
    <button @click="register">登録</button>
    <p>すでにアカウントをお持ちの方はこちらから</p>
    <router-link to="/Login">ログイン</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      user: null,
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          alert(error.message);
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.email = user.email;
        this.password = user.password;
        this.user = user;
      } else {
        this.user = null;
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
.register {
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
