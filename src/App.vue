<template>
  <v-app>
    <v-main>
      <router-view />

      <dashboard></dashboard>

      <!-- <all-tickets></all-tickets> -->
    </v-main>
  </v-app>
</template>

<script>
// import AllTickets from "./components/All-tickets.vue";
import Dashboard from "./components/shared/Dashboard.vue";

export default {
  name: "App",

  components: {
    // AllTickets,
    Dashboard,
  },
  data: () => ({
    //
  }),
};
</script>
