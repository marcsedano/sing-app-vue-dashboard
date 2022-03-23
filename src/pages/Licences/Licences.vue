<template>
  <div>
    <h1 class="page-title">
      Licences
    </h1>
    <b-row>
      <b-col>
        <Widget
        >
          <div align="center" class="category">
            <img class="first" src="../../assets/esed/text-file.png" alt="..." />
            <img src="../../assets/esed/text-file.png" alt="..." />
            <img class="last" src="../../assets/esed/text-file.png" alt="..." />
            <h1 class="mt-5"> No licences found </h1>
          </div>


          <router-link to="/app/licences/payment" class="sidebar-link">
            <div align="center" class="mt-5">
              <b-button variant="primary" size="lg">Buy Licences</b-button>
            </div>
          </router-link>

        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Licences',
  components: { Widget },
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style src="./Licences.scss" lang="scss" scoped />

