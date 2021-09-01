<template>
  <div></div>
  <div class="AllTickets">
    <div class="navigation-bar">
      <v-icon>mdi-bars</v-icon>
    </div>

    <all-tickets></all-tickets>
  </div>
</template>

<script>
import AllTickets from "../components/AllTicket.vue";

export default {
  name: "Home",

  component: {
    AllTickets,
  },
};
</script>

<style>
#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  float: right;
}
i {
  font-size: 1.5rem;
}
</style>
