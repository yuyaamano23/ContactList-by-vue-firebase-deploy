<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-tool-bar-title>マイアドレス帳</v-tool-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <SideNav/>
    </v-content>

    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    SideNav
  },
  methods: {
    ...mapActions(['toggleSideMenu'])
  },
  data: () => ({
    //
  }),
};
</script>
