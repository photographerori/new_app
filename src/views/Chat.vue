<template>
  <div class="container">
    <!-- ここにメッセージの履歴を追加 -->
    <div class="message-box"></div>
    <div>
      <input type="text" class="text" v-model="messageText" />
      <button type="submit" @click="saveMessage">Send</button>
    </div>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      name: "",
      messageText: "",
    };
  },
  methods: {
    // Saves a new message on the Firebase DB.
    saveMessage(messageText) {
      console.log(messageText);
      return firebase
        .firestore()
        .collection("messages")
        .add({
          name: "Tom",
          text: messageText,
          profilePicUrl: "",
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .catch(function(error) {
          console.error("Error writing new message to database", error);
        });
    },
    // onMessageFormSubmit(e) {
    //   e.preventDefault();
    //   // Check that the user entered a message and is signed in.
    //   if (messageInputElement.value && checkSignedInWithMessage()) {
    //     saveMessage(messageInputElement.value).then(function() {
    //       // Clear message text field and re-enable the SEND button.
    //       resetMaterialTextfield(messageInputElement);
    //       toggleButton();
    //     });
    //   }
    // },
  },
};
</script>

<style scoped>
.container {
  width: 60%;
  height: 500px;
  border: 1px solid black;
}
.message-box {
  width: 50%;
  height: 360px;
  border: 1px solid black;
  margin: 30px auto;
}
.text {
  border: 1px solid black;
}
</style>
