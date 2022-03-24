<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo mt-2" style="text-align:left;">
        <router-link to="/app/dashboard"><span class="primary-word"></span><img src="../../assets/esed/white_icon_esed.png" alt="..." style="width:45px"/><span class="secondary-word ml-3"><img src="../../assets/esed/white_logo_esed.png" alt="..." style="width:80px"/></span></router-link>
      </header>
      <h5 class="navTitle first">
      </h5>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Dashboard"
            link="/app/dashboard"
            iconName="flaticon-home"
            index="dashboard"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Targets"
            link="/app/targets"
            iconName="flaticon-list"
            index="targets"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Licences"
            link="/app/licences"
            iconName="flaticon-equal-1"
            index="licences"
            isHeader
        />
      </ul>
      <h5 class="navTitle last">
      </h5>
      <hr style="height:2px;border-width:0;color:#FFFFFF;background-color:#FFFFFF">
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Settings"
            link="/app/settings"
            iconName="flaticon-dots"
            index="settings"
            isHeader
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
