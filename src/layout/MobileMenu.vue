<template>
  <ul class="nav nav-mobile-menu">

    <!--<base-dropdown>
      <template slot="title">
        <i class="fa fa-globe"></i>
        <b class="caret"></b>
        <span class="notification">5 Notifications</span>
      </template>
      <a class="dropdown-item" href="#">Notification 1</a>
      <a class="dropdown-item" href="#">Notification 2</a>
      <a class="dropdown-item" href="#">Notification 3</a>
      <a class="dropdown-item" href="#">Notification 4</a>
      <a class="dropdown-item" href="#">Another notification</a>
    </base-dropdown>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <i class="nc-icon nc-zoom-split hidden-lg-up"></i>
        <span class="d-lg-none">Search</span>
      </a>
    </li>
    <base-dropdown title="Dropdown">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>-->
    <li class="nav-item">
        <router-link tag="a" class="nav-link" to="/admin/login">
            <a class="nav-link" v-if="not_signed">Sign in</a>
        </router-link></h4>
    </li>
    <li class="nav-item">
      <a class="nav-link" v-if="is_signed">{{user}}</a>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'Home', params: {} }">
        <a class="nav-link" v-on:click="logOut" v-if="is_signed" >
            Log out
        </a>
      </router-link>


    </li>
  </ul>
</template>
<script>
  export default {
    data(){
      return{
        is_signed:false,
        not_signed:true,
        user:""
      }
    },
    name: 'mobile-menu',
    methods:{
      logOut:function(){
      firebase.auth().signOut().then(function(){
          alert("Sign-out successful");
        }).catch(function(error){
          alert("An error happened");
        })

      }
    },
    created:function(){
        var that = this;
        firebase.auth().onAuthStateChanged(function(user){
          if(user == null){
            that.is_signed = false; // true si no esta loggeado
            that.not_signed=true;
          }
          else{
            that.is_signed = true;
            that.not_signed=false;
            that.user=firebase.auth().currentUser.displayName;
          }
        });
      }
  }
</script>
<style>
</style>
