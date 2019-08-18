<template>
  <div class="content">
    <div class="container-fluid">
<div class="row" v-if="september">
  <div class="col-12">
    <h5>September</h5>

  </div>


        <div class="col-xl-4 col-md-6" v-for="partido in september" v-bind:key="partido">

          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-money-coins text-warning"></i>
            </div>
            <div slot="content">
              <h4 class="card-title">
                <router-link tag="a" :to="{name:'Game',params:{id:partido.id}}">
                    <a class="btn btn-outline-info">{{partido.equipo1}} - {{partido.equipo2}}</a>
                </router-link></h4>
              <p class="card-category">{{partido.hora}}</p>
              <p class="card-body">{{partido.lugar}}</p>

            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>{{partido.fecha}}
            </div>
          </stats-card>

        </div>




      </div>
      <div class="row" v-if="october">
        <div class="col-12">
          <h5>October</h5>

        </div>


              <div class="col-xl-4 col-md-6" v-for="partido in october" v-bind:key="partido">

                <stats-card>
                  <div slot="header" class="icon-warning">
                    <i class="nc-icon nc-money-coins text-warning"></i>
                  </div>
                  <div slot="content">
                    <h4 class="card-title">
                      <router-link tag="a" :to="{name:'Game',params:{id:partido.id}}">
                          <a class="btn btn-outline-info">{{partido.equipo1}} - {{partido.equipo2}}</a>
                      </router-link></h4>
                    <p class="card-category">{{partido.hora}}</p>
                    <p class="card-body">{{partido.lugar}}</p>

                  </div>
                  <div slot="footer">
                    <i class="fa fa-calendar-o"></i>{{partido.fecha}}
                  </div>
                </stats-card>

              </div>




            </div>


      </div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    </div>
  </div>

</template>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
<script>
import Chat from 'vue-beautiful-chat'


import StatsCard from 'src/components/Cards/StatsCard.vue'
export default {
  components: {
    StatsCard
  },
  data(){
    return{
      september:[],
      october:[]


    }
  },
  methods:{
    leer:function(){
      let ref =  new Firebase("https://nysl2-e01e4.firebaseio.com/partidos");
      // Retrieve new posts as they are added to our database
      let fechas_september=this.september;
      let fechas_october = this.october;

      let i =0;
      ref.on("child_added", function(snapshot, prevChildKey) {

        var partido = snapshot.val();
        let mes='';
        switch(partido.fecha.substr(5,2)){
          case "09":
            fechas_september.push({
                          "equipo1":partido.equipo1,
                          "equipo2":partido.equipo2,
                          "fecha":partido.fecha,
                          "hora":partido.hora,
                          "lugar":partido.lugar,
                          "id":partido.id
                        })
            break;
          case "10":
          fechas_october.push({
                         "equipo1":partido.equipo1,
                        "equipo2":partido.equipo2,
                        "fecha":partido.fecha,
                        "hora":partido.hora,
                        "lugar":partido.lugar,
                        "id":partido.id
                      })
          break;


          break;
        }







      });

  },
  setearMes(mes){
    switch(mes){
      case '09':
      return "September";
      break;
    }

  }
},
  created(){
    this.leer()
  }
  }




</script>

<style lang="css" scoped>
</style>
