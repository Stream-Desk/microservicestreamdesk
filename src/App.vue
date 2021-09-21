<template>
  <v-app>
    <v-main>
      <dashboard></dashboard>
      <sendTicket></sendTicket>

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from "./components/shared/Dashboard.vue";
// import sendTicket from "./components/SendTicket.vue";

export default {
  name: "App",

  components: {
    Dashboard,
    // sendTicket,
  },
  data: () => ({
    //
  }),
};
</script>
