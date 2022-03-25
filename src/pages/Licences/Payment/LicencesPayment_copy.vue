<template>
  <b-row class="custom-div-row" style="align-content:center;align-self:center;">
    <b-col>
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
    <b-col>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>
        <p class="widget-auth-info">
            Use your email to sign in.
        </p>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" ref="email" required type="email" name="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" ref="password" required type="password" name="password" placeholder="Password" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">Login</b-button>
          <p class="widget-auth-info">or sign in with</p>
          <div class="social-buttons">
            <b-button variant="primary" class="social-button mb-2">
              <i class="social-icon social-google"></i>
              <p class="social-text">GOOGLE</p>
            </b-button>
            <b-button variant="success" class="social-button">
              <i class="social-icon social-microsoft"></i>
              <p class="social-text">MICROSOFT</p>
            </b-button>
          </div>
        </form>
        <p class="widget-auth-info">
          Don't have an account? Sign up now!
        </p>
        <router-link class="d-block text-center" to="login">Create an Account</router-link>
      </Widget>
    </b-col>
  </b-row>
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

