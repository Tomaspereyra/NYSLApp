<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <form>
          <h4 slot="header" class="card-title">Registration form</h4>

        <card>

            <div class="row">

              <div class="col-md-6">
                <base-input type="text"
                          label="Player’s First Name"
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
              <div class="col-md-4">
                <base-input type="text"
                          label="City"
                          placeholder=""
                          v-model="user.email">
                </base-input>
              </div>
              <div class="col-md-8">
                <base-input type="text"
                          label="Street Address"
                          placeholder=""
                          v-model="user.email">
                </base-input>


              </div>

            </div>

            <div class="row">
              <div class="col-md-4">
                <base-input type="text"
                          label="Zip Code:"
                          placeholder=""
                          v-model="user.lastName">
                </base-input>
              </div>
              <div class="col-md-4">
                <base-input type="date"
                          label="Birth Date"
                          placeholder="Last Name"
                          v-model="user.lastName">
                </base-input>
              </div>
              <div class="col-md-1">
                <label class="form-check-label"> Gender:</label>
                </div>
              <div class="col-md-1.5 mt-2">
                  <base-radio class="mt-4">
                  male
                  </base-radio>
              </div>
              <div class="col-md-1.5 mt-2">
                <base-radio class="mt-4">
                female
                </base-radio>
              </div>
            </div>

            <div class="row">
              <div class="col-md-2">
                <label class="form-check-label"> Grade:</label>
                </div>
                <div class="col-md-1.5">
                  <base-radio class="mt-4">
                  Pre-School
                  </base-radio>
                </div>
                  <div class="col-md-1.5">
                    <base-radio class="mt-4">
                    1 st
                    </base-radio>
                  </div>
                  <div class="col-md-1.5">
                    <base-radio class="mt-4">
                   2 st
                    </base-radio>
                  </div>
                  <div class="col-md-1.5">
                    <base-radio class="mt-4">
                     3 st
                    </base-radio>
                  </div>
                  <div class="col-md-1.5">
                    <base-radio class="mt-4">
                    4 st
                    </base-radio>
                  </div>
                  <div class="col-md-1.5">
                    <base-radio class="mt-4">
                    5 st
                    </base-radio>
                  </div>
              </div>
            <div class="row">
              <div class="col-md-6">
                <base-input type="text"
                          label="Parent/Guardian:"
                          placeholder="City"
                          v-model="user.city">
                </base-input>
              </div>
              <div class="col-md-3">
                <base-input type="numbers"
                          label="Contact Phone:"
                          placeholder=""
                          v-model="user.country">
                </base-input>
              </div>
              <div class="col-md-3">
                <base-input type="email"
                          label="Contact Email:"
                          placeholder=""
                          v-model="user.email">
                </base-input>
              </div>
            </div>
            </card>
            <card>
            <div class="row">
              <div class="col-12">
                <h5><strong>Which elementary schools do you live near?</strong></h5>

              </div>

            </div>
            <div class="row">
              <div class="col-md-3">
                <label for="">First Clossest School</label>
              </div>
              <div class="col-md-4">
                <base-checkbox class="mt-4" >
                AJ Katzenmaier
               </base-checkbox>
                <base-checkbox class="mt-4">
                Greenbay
                </base-checkbox>
                <base-checkbox class="mt-4">
                Howard A Yeager
                </base-checkbox>
              </div>
              <div class="col-md-4">
                <base-checkbox class="mt-4" >
                 Marjorie P Hart
               </base-checkbox>
                <base-checkbox class="mt-4">
                North Elementary
                </base-checkbox>
                <base-checkbox class="mt-4">
                South Elementary
                </base-checkbox>


              </div>

            </div>
            <div class="row mt-5">
              <div class="col-md-3">
                <label for="">Second Closest School</label>
              </div>
              <div class="col-md-4">
                <base-checkbox class="mt-4" >
                AJ Katzenmaier
               </base-checkbox>
                <base-checkbox class="mt-4">
                Greenbay
                </base-checkbox>
                <base-checkbox class="mt-4">
                Howard A Yeager
                </base-checkbox>
              </div>
              <div class="col-md-4">
                <base-checkbox class="mt-4" >
                 Marjorie P Hart
               </base-checkbox>
                <base-checkbox class="mt-4">
                North Elementary
                </base-checkbox>
                <base-checkbox class="mt-4">
                South Elementary
                </base-checkbox>


              </div>

            </div>
            <div class="row">
              <div class="col-12 mt-5">
                <h5><strong>What position(s) do you notmally play? (check all that apply)</strong></h5>
              </div>


            </div>
            <div class="row">
              <div class="col-md-4">
                <base-checkbox class="mt-4" >
                  Forward
               </base-checkbox>
                <base-checkbox class="mt-4">
                Defense
                </base-checkbox>
              </div>
              <div class="col-md-4">
                <base-checkbox class="mt-4" >
                  Midfield
               </base-checkbox>
                <base-checkbox class="mt-4">
                Goalkeeper
                </base-checkbox>
              </div>
              </div>
              <div class="row mt-5">
                <div class="col-md-3">
                  <label for="">Jersey Size:</label>
                </div>
                <div class="col-md-4">
                  <base-checkbox class="mt-4" >
                  Youth Small
                  </base-checkbox>
                  <base-checkbox class="mt-4">
                  Youth Medium
                  </base-checkbox>
                  <base-checkbox class="mt-4">
                  Youth Large
                  </base-checkbox>
                  <base-checkbox class="mt-4">
                  Small
                  </base-checkbox>
                </div>
                <div class="col-md-4">
                  <base-checkbox class="mt-4" >
                  Medium
                  </base-checkbox>
                  <base-checkbox class="mt-4">
                  Large
                  </base-checkbox>
                  <base-checkbox class="mt-4">
                  Extra-Large
                  </base-checkbox>
                </div>

              </div>
              <div class="row">
                <div class="col-md-6">
                  <base-checkbox class="mt-4">
                   Already have a Uniform
                  </base-checkbox>
              </div>


            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
                Send
              </button>
            </div>
            <div class="clearfix"></div>

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
      }
    }
  }

</script>
<style>

</style>
