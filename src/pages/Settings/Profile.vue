<template>
        <Widget
            title="Your Information"
        >
            <form>
                <div class="row mt-4">
                    <div class="form-group col-xl-3 col-md-5 col-sm-12">
                        <h5> Name </h5>
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="form-group col-xl-3 col-md-5 col-sm-12">
                        <h5> Email </h5>
                        <input type="email" class="form-control" placeholder="email@email.com">
                    </div>
                </div>
                <b-button type="submit" variant="primary" class="mt-4">Update</b-button>
            </form>
        </Widget>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Profile',
  components: { Widget },
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>