<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="typo-line mb-3">
            <h3><p class="category"></p>Upcoming events </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-money-coins text-warning"></i>
            </div>
            <div slot="content">
              <h4 class="card-title">NYSL Fundraiser</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i> August 4
            </div>
          </stats-card>

        </div>
        <div class="col-xl-4 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-zoom-split text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Season Kick-off:</p>
              <h4 class="card-title">Meet the Teams</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i> August 16
            </div>
          </stats-card>

          </div>
          <div class="col-xl-4 col-md-6">
            <stats-card>
              <div slot="header" class="icon-danger">
                <i class="nc-icon nc-check-2 text-warning"></i>
              </div>
              <div slot="content">
                <p class="card-category">Season</p>
                <h4 class="card-title">First Game</h4>
              </div>
              <div slot="footer">
                <i class="fa fa-clock-o"></i>September 1
              </div>
            </stats-card>

        </div>

      </div>

    </div>

  </div>

</template>

<script>

import StatsCard from 'src/components/Cards/StatsCard.vue'
export default {
  components: {
    StatsCard
  }
}
</script>

<style lang="css" scoped>
</style>
