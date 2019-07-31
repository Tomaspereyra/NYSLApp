<template>
<div class="content">
  <div class="container-fluid">
      <div class="row">
      <div class="col-3">

          <label for="">Email:</label>
          <input type="email" id="email" value="">
          <label for="">Contraseña:</label>
          <input type="password" id="pass" value="">
          <button  id="sign-in" v-on:click="enviar"> Sign in</button>





      </div>
    

      </div>

    </div>
  </div>

</div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>
<script>
    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
        apiKey: "AIzaSyD6rCGqg4qsz4xG6VPWkvU_EggV4Zm0n2M",
        authDomain: "nysl2-e01e4.firebaseapp.com",
        databaseURL: "https://nysl2-e01e4.firebaseio.com",
        projectId: "nysl2-e01e4",
        storageBucket: "",
        messagingSenderId: "342551489808",
        appId: "1:342551489808:web:1f77e9fed17caefc"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //probar borrar esto y poner el motodo enviar en main.
</script>
<script>
import VueRouter from 'vue-router'
const router = new VueRouter({})
let nombre, email
export default {
  data:{
    user:{}
  },
  methods:{
  enviar:function(){
    firebase.auth().signInWithEmailAndPassword("pereyratomas18@gmail.com","tomasporve").catch(function(error){
      console.log(error.code);
      console.log(error.message);
    });

    firebase.auth().onAuthStateChanged(function(user){
      if(user) { // si el usuario entro
      router.go(-1);


      }
      else{
        router.push('admin/login');
        alert(error.code);
      }

    })
  }
}
}
</script>

<style lang="css" scoped>
</style>
