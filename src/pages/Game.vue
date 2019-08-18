<template>

  <div class="content">
    <div class="container-fluid">
  <div class="row" v-for="p in partido" v-bind:key="partido">
    <div class="col-md-6">
      <div class="card text-center">
  <div class="card-body">
    <h5 class="card-title">{{p.equipo1}} vs {{p.equipo2}}</h5>
    <h6 class="card-subtitle mb-2 mt-2 text-muted">{{p.hora}}</h6>
    <p class="card-text">{{p.fecha}} - {{p.lugar}}</p>

  </div>
  <div class="card-footer">
    <iframe :src=p.mapa width="300" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
</div>
        </div>

    </div>
    <div class="row" v-if="is_signed">
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
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script>
export default {
  data(){
      return {
        is_signed:false,
        partido:[],
        participants: [], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
        titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
        title:"Hola",
        messageList: [], // the list of the messages to show, can be paginated and adjusted dynamically
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
        messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
}
      },
      methods:{
        sendMessage (text) {
            if (text.length > 0) {
              this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
              this.onMessageWasSent({ author: firebase.auth().currentUser.displayName, type: 'text', data: { text } })

            }
          },
          leermsj:function(){
            let id= this.$route.params.id;
            let msjlist= this.messageList;
            let participants =this.participants;

            let ref =  new Firebase("https://nysl2-e01e4.firebaseio.com/chat/"+id);
            let idUser=0;
            ref.on("child_added", function(snapshot, prevChildKey) {
              let msj = snapshot.val();
              console.log(msj);
              if(msj.author!=firebase.auth().currentUser.displayName){

                msjlist.push(msj);
                participants.push({
                  id:"otherUser",
                  name:msj.author,
                  imageUrl:""
                })

              }
              else{
                msjlist.push({
                  author:"me",
                  data:msj.data,
                  type:msj.type
                })

              }



            });




        },

          onMessageWasSent (message) {

            let id= this.$route.params.id;
            let ref =  new Firebase("https://nysl2-e01e4.firebaseio.com/chat/"+id);
            let refchat = ref.push();
            refchat.set({
              author:firebase.auth().currentUser.displayName,
              data:message.data,
              type:message.type
            }).then(function(){
              this.messageList = [ ...this.messageList, message ]

            });

            // called when the user sends a message
          //  this.messageList = [ ...this.messageList, message ]
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
          },
          logged:function(){
          let that = this;
          firebase.auth().onAuthStateChanged(function(user){
            if(user != null){
              that.is_signed=true
              }
              else{
                that.is_signed=false
              }
            });
        },
        traerPartido:function(){
          let partido= this.partido;

          let ref =  new Firebase("https://nysl2-e01e4.firebaseio.com/partidos");

          let id= this.$route.params.id;
          ref.child(id).on("value",function(snapshot){
            let p = snapshot.val();
            partido.push({
              "equipo1":p.equipo1,
              "equipo2":p.equipo2,
              "fecha":p.fecha,
              "hora":p.hora,
              "lugar":p.lugar,
              "id":p.id,
              "mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246110985!2d-87.63123908512219!3d41.90029237922045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses!2sar!4v1556573210558!5m2!1ses!2sar"
            })


          });

        }
      },
      created(){
        this.traerPartido();
        this.logged();
        this.leermsj();

      }
  }

</script>

<style lang="css" scoped>
</style>
