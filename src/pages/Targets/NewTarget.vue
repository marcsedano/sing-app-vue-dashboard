<template>
  <div>
    <h1 class="page-title">
      New Target
    </h1>
    <Widget
        >
      
      <div class="clearfix">
        <div class="float-right">
            <h1>1 out of 10 licences available</h1>
        </div>
      </div>

      <h4> Target </h4>
      <form>
        <div class="row mt-4">
          <div class="form-group col-xl-3 col-md-5 col-sm-12">
            <input type="text" class="form-control" placeholder="example.com">
          </div>
        </div>
        <b-button type="submit" variant="primary" class="" v-on:click="noLicences()">Add Target <i class="ml-2 fa fa-angle-right fa-lg"/></b-button>
      </form>
    </Widget>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import Swal from 'sweetalert2';

export default {
  name: 'Targets',
  components: { Widget },
  data() {
    return {
    }
  },
  methods: {
    noLicences: function(){
      Swal.fire({
        title: 'Oops',
        icon: 'warning',
        text: 'You must apply for a license before',
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
