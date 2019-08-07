<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
{{user.correo}}

      </div>
      <div class="row" v-for="fecha in fechas" v-bind:key="fecha">
        <div class="col-12">
          <h5>{{fecha.mes}}</h5>
        </div>

        <div class="col-xl-4 col-md-6" v-for="partido in fecha.partidos" v-bind:key="partido">

          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-money-coins text-warning"></i>
            </div>
            <div slot="content">
              <h4 class="card-title">
                <router-link tag="a" to="/admin/game">
                    <a class="btn btn-outline-info">{{partido.equipo}}</a>
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
      fechas:[{
                mes:'September',
                partidos :[{equipo:'U1 and U4', hora:'9:30 pm',lugar:'AJ Katzenmaier',fecha:'9/01'},
                              {equipo:'U2 and U3', hora:'9:30 pm',lugar:'Greenbay',fecha:'12/01'}]},
                {mes:'October',
                partidos :[{equipo:'U1 and U4', hora:'9:30 pm',lugar:'AJ Katzenmaier',fecha:'9/01'},
                              {equipo:'U2 and U3', hora:'9:30 pm',lugar:'Greenbay',fecha:'12/01'}]}],
                user:{correo:''},
                msj:'' //validar cuando no esta logueado
    }
  },
  methods:{
    leer:function(){
      let ref =  new Firebase("https://nysl2-e01e4.firebaseio.com/partidos");
      // Retrieve new posts as they are added to our database
      let partidos;
      let i =0;
      ref.on("child_added", function(snapshot, prevChildKey) {
        var partido = snapshot.val();


        console.log("fecha " + partido.equipo1);
      });

  }
},
  beforeMount(){
    this.leer()
  }
  }




</script>

<style lang="css" scoped>
</style>
