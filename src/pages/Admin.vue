<template lang="html">
  <div class="content">
    <div class="container-fluid">

          <div class="row d-flex justify-content-center">
            <div class="col-6">
              <h5>New game</h5>
              <form>
                <div class="form-row" style="margin:20px 0px;">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Equipo 1" id="equipo1">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Equipo 2" id="equipo2">
                  </div>
                </div>
                <div class="form-row" style="margin:20px 0px;">
                  <div class="col">
                    <input type="date" class="form-control" placeholder="fecha" id="fecha">

                  </div>
                  <div class="col">
                    <input type="time" class="form-control" placeholder="hora" id="hora">


                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="lugar" id="lugar">


                  </div>


                </div>
                <div class="form-row">
                  <div class="col">
                    <button type="submit" class="btn btn-primary" v-on:click="createGame">Submit</button>



                  </div>

                </div>

              </form>


              </div>
                </div>
                  </div>



    </div>


</template>

<script>

export default {


      methods:{
      createGame:function(){
        let partidosRef =  new Firebase("https://nysl2-e01e4.firebaseio.com/partidos");
        let nuevoPartidoRef = partidosRef.push();
        nuevoPartidoRef.set({
          equipo1: equipo1.value,
          equipo2: equipo2.value,
          fecha: fecha.value,
          hora : hora.value,
          lugar: lugar.value,
          id : nuevoPartidoRef.key()
        },function(error){
          if(error){
            alert("Data could not be saved."+error);
          }
          else{
            alert("Data saved succesfully.");
          }
        });

      }
    }



}
</script>

<style lang="css" scoped>
</style>
