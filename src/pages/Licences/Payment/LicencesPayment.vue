<template>
  <div class="licence-payment"> 
    <b-row>
      <b-col class="col-xl-4 offset-xl-1 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 col-xs-12 p-3">
        <Widget
        >
          <div align="center">
            <img src="../../../assets/esed/white_icon_esed.png" alt="..." class="mt-3" style="width:85px"/>
            <h1 class="mt-3 mb-5"> Starter Licences </h1>
            <ul class="fa-ul">
              <li class="mb-5"><img src="../../../assets/icons/flaticon-check.svg" alt="..." style="width:25px;position:relative;right:60px;"/>Feature 01</li>
              <li class="mb-5"><img src="../../../assets/icons/flaticon-check.svg" alt="..." style="width:25px;position:relative;right:60px;"/>Feature 02</li>
              <li class="mb-5"><img src="../../../assets/icons/flaticon-check.svg" alt="..." style="width:25px;position:relative;right:60px;"/>Feature 03</li>
              <li class="mb-5"><img src="../../../assets/icons/flaticon-check.svg" alt="..." style="width:25px;position:relative;right:60px;"/>Feature 04</li>
            </ul>
            <vue-slider 
              v-model="target_slider"
              :width="225"
              :min="1"
              :max="25"
              :lazy="true"
              :tooltip="'active'"
              :dot-style="{ background: '#6AC0D6' }"           
              :rail-style="{ background: 'white' }"           
              :process-style="{ background: '#6AC0D6' }"           
              :tooltip-style="{ background: '#6AC0D6', borderColor: '#6AC0D6' }"           
              class="mb-5"
            ></vue-slider>
          </div>


          <div align="center">
            <b-button variant="primary" size="lg" v-on:click="makePayment()">Buy Now</b-button>
          </div>

        </Widget>
      </b-col>
      <b-col class="col-xl-4 offset-xl-2 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 col-xs-12 p-3 non-active">
        <Widget
        >
          <div align="center">
            <img src="../../../assets/esed/white_icon_esed.png" alt="..." class="mt-3" style="width:85px"/>
            <h1 class="mt-3 mb-5"> Extended Licences </h1>
            <ul class="fa-ul">
              <li class="mb-5"><img src="../../../assets/icons/flaticon-check.svg" alt="..." style="width:25px;position:relative;right:60px;"/>Feature 01</li>
              <li class="mb-5"><img src="../../../assets/icons/flaticon-check.svg" alt="..." style="width:25px;position:relative;right:60px;"/>Feature 02</li>
              <li class="mb-5"><img src="../../../assets/icons/flaticon-check.svg" alt="..." style="width:25px;position:relative;right:60px;"/>Feature 03</li>
              <li class="mb-5"><img src="../../../assets/icons/flaticon-check.svg" alt="..." style="width:25px;position:relative;right:60px;"/>Feature 04</li>
            </ul>
          </div>


          <div align="center">
            <b-button variant="primary" size="lg">Buy Now</b-button>
          </div>

        </Widget>
        <div class="card-img-overlay">
          <h5 class="card-title">Coming soon</h5>
        </div>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import Swal from 'sweetalert2';

export default {
  name: 'Licences',
  components: { Widget, VueSlider },
  data() {
    return {
      target_slider: 1
    }
  },
  methods: {
    makePayment: function(){
      Swal.fire({
        title: 'Confirm action',
        icon: 'warning',
        text: 'You will not be able to recover this action',
        confirmButtonText: 'Cool',
        confirmButtonColor: '#6AC0D6',
        showCancelButton: true,
        cancelButtonColor: '#E74149',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push({ name: 'LicencesPaymentPage' })
        }
      });  
    }
  }
};
</script>

<style src="./LicencesPayment.scss" lang="scss" scoped />

