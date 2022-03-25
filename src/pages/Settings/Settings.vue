<template>
    <div class="custom-div">
        <h1 class="page-title">
            Settings
        </h1>
        <b-row class="custom-div-row">
            <b-col class="col-xl-3 col-sm-12 col-xs-12">
                <Widget title="Admin Panel">
                    <ul class="nav flex-column nav-pills">
                        <li v-for="tab in tabs" :key="tab.route" class="nav-item">
                            <router-link :to="{ name: tab.route }" class="nav-link" active-class="a">
                                <i :class="tab.icon" fixed-width/>
                                {{ tab.name }}
                            </router-link>
                        </li>
                    </ul>
                </Widget>
            </b-col>
            <b-col class="custom-div col-xl-9 col-sm-12 col-xs-12">
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Settings',
  components: { Widget },
  data() {
    return {
    }
  },
  computed: {
    tabs () {
      return [
        {
            name: 'Profile',
            icon: 'fa fa-user',
            route: 'SettingsProfilePage'
        },
        {
            name: 'Password',
            icon: 'fa fa-lock',
            route: 'SettingsPasswordPage'
        },
        {
            name: 'Billing',
            icon: 'fa fa-credit-card',
            route: 'SettingsBillingPage'
        },
      ]
    }
  },
  methods: {
  }
};
</script>


