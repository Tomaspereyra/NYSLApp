<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Northside Youth Soccer League</a>
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
      <!--<ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" data-toggle="dropdown">
              <i class="nc-icon nc-palette"></i>
            </a>
          </li>
          <base-dropdown tag="li">
            <template slot="title">
              <i class="nc-icon nc-planet"></i>
              <b class="caret"></b>
              <span class="notification">5</span>
            </template>
            <a class="dropdown-item" href="#">Notification 1</a>
            <a class="dropdown-item" href="#">Notification 2</a>
            <a class="dropdown-item" href="#">Notification 3</a>
            <a class="dropdown-item" href="#">Notification 4</a>
            <a class="dropdown-item" href="#">Another notification</a>
          </base-dropdown>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nc-icon nc-zoom-split"></i>
              <span class="d-lg-block">&nbsp;Search</span>
            </a>
          </li>
        </ul>-->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/admin/login">
                  <a class="nav-link" v-if="not_signed">Sign in</a>
              </router-link></h4>
          </li>
        <!--  <base-dropdown title="Dropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something</a>
            <div class="divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </base-dropdown>-->
          <li class="nav-item">
            <a class="nav-link" v-if="is_signed">{{user}}</a>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Home', params: {} }">
              <a v-on:click="logOut" v-if="is_signed" >
                  Log out
              </a>
            </router-link>


          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>

import VueRouter from 'vue-router'
const router = new VueRouter({})

  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false,
        is_signed:false,
        not_signed:true,
        user:""
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      logOut:function(){
      firebase.auth().signOut().then(function(){
          console.log("Sign-out successful");
          alert("Sign-out successful");

        }).catch(function(error){
          console.log("An error happened");
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
        that.user = firebase.auth().currentUser.displayName;
      }
    });
  /*
    let user= firebase.auth().currentUser;
    console.log(user);
    if(user == null){
      that.is_signed = false; // true si no esta loggeado
    }
    else{
      that.is_signed = true;
    }*/

  }
  }

</script>
<style>

</style>
