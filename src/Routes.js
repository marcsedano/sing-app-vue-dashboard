import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login_Copy';
import Register from '@/pages/Register/Register';
import ErrorPage from '@/pages/Error/Error';

// Targets
import TargetsPage from '@/pages/Targets/Targets';

// New Target
import NewTarget from '@/pages/Targets/NewTarget';

// Licences
import LicencesPage from '@/pages/Licences/Licences';

// Licences Payment
import LicencesPaymentPage from '@/pages/Licences/Payment/LicencesPayment_copy';

// Settings
import SettingsPage from '@/pages/Settings/Settings';

// Settings Profile
import SettingsProfilePage from '@/pages/Settings/Profile';

// Settings Password
import SettingsPasswordPage from '@/pages/Settings/Password';

// Settings Billing
import SettingsBillingPage from '@/pages/Settings/Billing';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'targets',
          name: 'TargetsPage',
          component: TargetsPage,
        },
        {
          path: 'targets/newtarget',
          name: 'NewTarget',
          component: NewTarget,
        },
        {
          path: 'licences',
          name: 'LicencesPage',
          component: LicencesPage,
        },
        {
          path: 'licences/payment',
          name: 'LicencesPaymentPage',
          component: LicencesPaymentPage,
        },
        {
          path: 'settings',
          component: SettingsPage,
          children: [
            { path: '', redirect: { name: 'SettingsProfilePage' } },
            { path: 'settings/profile', name: 'SettingsProfilePage', component: SettingsProfilePage },
            { path: 'settings/password', name: 'SettingsPasswordPage', component: SettingsPasswordPage },
            { path: 'settings/billing', name: 'SettingsBillingPage', component: SettingsBillingPage },
          ]
        }
      ],
    },
  ],
});
