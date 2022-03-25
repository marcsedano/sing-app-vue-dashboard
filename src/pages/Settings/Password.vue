<template>
    <Widget
        title="Your Password"
        class="custom-div"
    >
        <form>
            <div class="row mt-4">
                <div class="form-group col-xl-3 col-md-5 col-sm-12">
                    <h5> New Password </h5>
                    <input type="password" class="form-control">
                </div>
            </div>
            <div class="row mt-4">
                <div class="form-group col-xl-3 col-md-5 col-sm-12">
                    <h5> Confirm Password </h5>
                    <input type="password" class="form-control">
                </div>
            </div>
            <b-button type="submit" variant="primary" class="mt-4">Update</b-button>
        </form>
    </Widget>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Password',
  components: { Widget },
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>