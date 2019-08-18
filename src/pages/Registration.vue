<template>
  <div class="content">
    <div class="container-fluid">
          <h4 slot="header" class="card-title text-center">Create your personal account</h4>
          <div class="row d-flex justify-content-center">
            <div class="col-xl-4 col-md-6">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" id="password"  class="form-control" placeholder="Password">

                 </div>
                 <div class="form-group">
                   <label for="exampleInputPassword1">First Name</label>
                   <input type="password" id="firstName"  class="form-control" placeholder="Password">

                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Last Name</label>
                    <input type="password" id="lastName"  class="form-control" placeholder="Password">

                   </div>
                <button type="submit" class="btn btn-primary" v-on:click="createUser">Submit</button>
              </form>

            </div>

          </div>


        </form>
      </div>

    </div>

  </div>

</template>

<script>
  import Card from 'src/components/Cards/Card.vue'
  import BaseCheckbox from'src/components/Inputs/BaseCheckbox.vue'
  import VueRouter from 'vue-router'
  const router = new VueRouter({})



  export default {
    components: {
      Card,
      BaseCheckbox
    },
    data () {
      return {
        user: {
          company: 'Light dashboard',
          username: 'michael23',
          email: '',
          firstName: 'Mike',
          lastName: 'Andrew',
          address: 'Melbourne, Australia',
          city: 'melbourne',
          country: 'Australia',
          postalCode: '',
          aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      },
      createUser:function(){

        firebase.auth().createUserWithEmailAndPassword(email.value,password.value).then(function(){
            let user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName:firstName.value+lastName.value
                    }).then(function(){
                        alert("Account created");
                        router.go(-1);
                      }).catch(function(error){
                        alert("Error:",error);
                      });
                    }).catch(function(error){
                      console.log(error.code);
                      alert(error.message);
                    });
      }
    }
  }

</script>
<style>

</style>
