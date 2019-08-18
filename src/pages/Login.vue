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


    </div>
  </div>

</div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>

<script>

import VueRouter from 'vue-router'
const router = new VueRouter({})

export default {


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
      router.go(-1);
          }
    })
  }

}
}
</script>

<style lang="css" scoped>
</style>
