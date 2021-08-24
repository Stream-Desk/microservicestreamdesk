<template>
  <div class="AllTickets">
    <div class="navigation-bar">
      <v-icon>mdi-bars</v-icon>
    </div>
    <RaiseTicket />
    <all-tickets></all-tickets>
  </div>
</template>

<script>
import AllTickets from "../components/All-tickets.vue";
import RaiseTicket from "../components/shared/RaiseTicket.vue";

export default {
  name: "Home",

  component: {
    RaiseTicket,
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

