<template>
<div class="content">
  <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" id="pass"  class="form-control" placeholder="Password">

             </div>
            <button type="submit" class="btn btn-primary" v-on:click="enviar">Submit</button>
          </form>
          <div class="card">
            <div class="card-body text-center">
            New user?
             <router-link tag="a" to="/admin/registration">
                  <a class="link">Create an account.</a>
              </router-link></h4>
            </div>
          </div>
        </div>

      </div>
      <div class="row" v-if="logged()=== true">
        <div class="col">
          <div>
             <beautiful-chat
               :participants="participants"
               :titleImageUrl="titleImageUrl"
               :onMessageWasSent="onMessageWasSent"
               :messageList="messageList"
               :newMessagesCount="newMessagesCount"
               :isOpen="isChatOpen"
               :close="closeChat"
               :open="openChat"
               :showEmoji="true"
               :showFile="true"
               :showTypingIndicator="showTypingIndicator"
               :colors="colors"
               :alwaysScrollToBottom="alwaysScrollToBottom"
               :messageStyling="messageStyling"
               @onType="handleOnType" />
           </div>
          </div>

      </div>

    </div>
  </div>

</div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>
<script>


    // Create a callback which logs the current auth state
function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}
// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
ref.onAuth(authDataCallback);
</script>
<script>
import Chat from 'vue-beautiful-chat'

import VueRouter from 'vue-router'
const router = new VueRouter({})

export default {
  data() {
    return {
      participants: [
        {
          id: 'user1',
          name: 'Matteo',
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        },
        {
          id: 'user2',
          name: 'Support',
          imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user1`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
      email:"",
      password:"",
    }
  },
  methods:{
    logged:function(){
    let user= firebase.auth().currentUser;
    if(user != null){
      return true; 
      }
    else{
      return false;
    }
  },
  enviar:function(){
    firebase.auth().signInWithEmailAndPassword(email.value,pass.value).catch(function(error){

        switch (error.code) {
      case "INVALID_EMAIL":
        console.log("The specified user account email is invalid.");
        break;
      case "INVALID_PASSWORD":
        console.log("The specified user account password is incorrect.");
        break;
      case "INVALID_USER":
        console.log("The specified user account does not exist.");
        break;
      default:
        console.log("Error logging user in:", error.code);
    }

    });

    firebase.auth().onAuthStateChanged(function(user){
      if(user) { // si el usuario entro
        console.log(firebase.auth().currentUser);
      router.go(-1);
          }
      else{
        router.push('admin/login');

      }

    })
  },
  sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: firebase.auth().currentUser.displayName, type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
  	},
    handleOnType () {
      console.log('Emit typing event')
    }
}
}
</script>

<style lang="css" scoped>
</style>
