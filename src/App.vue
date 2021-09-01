<template>
  <v-app>
    <v-main>
      <dashboard></dashboard>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from "./components/shared/Dashboard.vue";

export default {
  name: "App",

  components: {
    Dashboard,
  },
  data: () => ({
    //
  }),
};
</script>
