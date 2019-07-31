<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <card>
            <div class="card-image">
              <img src="img/young-athlete1.jpg" style="height:200px" alt="">

            </div>
            <div slot="header" class="card-header">
              <h4 class="card-title">Mission</h4>
            </div>
            <div class="card-body">
              <p>To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and plactice skills related to the game of soccer, specificaly those skills around team cooperation and good sportsmanship.</p>

            </div>
          </card>
        </div>
        <div class="col-xl-3 col-md-6">
          <card>
            <div class="card-image" >
              <img src="img/training.jpg" style="height:200px;" alt="">
            </div>
            <div slot="header" class="card-header">
              <h4 class="card-title">Vision</h4>
            </div>
            <div class="card-body">
              <p>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.</p>
            </div>
          </card>
        </div>
        <div class="col-xl-3 col-md-6">
          <card>
            <div class="card-image" style="height:auto">
              <img src="img/northside-soccer.png" alt="">
            </div>
            <div slot="header" class="card-header">
              <h4 class="card-title">General Information</h4>
            </div>
            <div class="card-body">
              <p>The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an enviroment in which to learn an play soccer. To be a member of NYSL, you must be between the ages of 4-12 and reside in a chicago northside neigthborhood. NYSL is a ran by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.</p>
              </div>
          </card>
        </div>

      </div>

    </div>

  </div>

</template>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<script>
import Card from 'src/components/Cards/Card.vue'
export default {
}
</script>

<style lang="scss" scoped>
</style>
