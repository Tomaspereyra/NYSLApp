<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <form>
          <h4 slot="header" class="card-title text-center">Create your personal account</h4>

        <card>

            <div class="row">

              <div class="col-md-6">
                <base-input type="text"
                          label="First Name"
                          :disabled="false"
                          placeholder=""
                          v-model="user.company">
                </base-input>
              </div>
              <div class="col-md-6">
                <base-input type="text"
                          label="Last Name"
                          placeholder=""
                          v-model="user.username">
                </base-input>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12">
                <base-input type="text"
                          label="User name"
                          placeholder=""
                          v-model="user.email">
                </base-input>
              </div>


            </div>

            <div class="row">
              <div class="col-md-6">
                <base-input type="text"
                          label="Email:"
                          placeholder=""
                          v-model="user.lastName">
                </base-input>
              </div>
              <div class="col-md-6">
                <base-input type="text"
                          label="Password"
                          placeholder="Last Name"
                          v-model="user.lastName">
                </base-input>
              </div>


            </div>



            <div class="text-center">
              <button type="submit" class="btn btn-info btn-fill float-right" v-on:click="createUser">
                Send
              </button>
            </div>
            </card>
        </form>
      </div>

    </div>

  </div>

</template>

<script>
  import Card from 'src/components/Cards/Card.vue'
  import BaseCheckbox from'src/components/Inputs/BaseCheckbox.vue'



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

        firebase.auth().createUserWithEmailAndPassword("pereyratomas@gmail.com","password").catch(function(error){
          console.log(error.code);
          console.log(error.message);
        }).then(updateUser);



      },
      updateUser:function(){
        let user = firebase.auth().currentUser;
        user.updateProfile({
          displayName:"Tomas Pereyra"
        }).then(function(){
          console.log("Account created");
        }).catch(function(error){
          console.log("Error:",error);
        });
      }
    }
  }

</script>
<style>

</style>
