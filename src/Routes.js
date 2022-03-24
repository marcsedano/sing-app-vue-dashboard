import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Targets
import TargetsPage from '@/pages/Targets/Targets';

// New Target
import NewTarget from '@/pages/Targets/NewTarget';

// Licences
import LicencesPage from '@/pages/Licences/Licences';

// Licences Payment
import LicencesPaymentPage from '@/pages/Licences/Payment/LicencesPayment';

// Settings
import SettingsPage from '@/pages/Settings/Settings';

// Settings Profile
import SettingsProfilePage from '@/pages/Settings/Profile';

// Settings Password
import SettingsPasswordPage from '@/pages/Settings/Password';

// Settings Billing
import SettingsBillingPage from '@/pages/Settings/Billing';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import ChartsPage from '@/pages/Charts/Charts';

// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
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
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
      ],
    },
  ],
});
