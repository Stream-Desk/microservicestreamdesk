<template>
  <v-card max-width="600" height="450" left="350">
    <h5>Ticket Information</h5>
    <div v-for="ticket in tickets" :key="ticket.id">
      <div class="info">
        <strong><label>Summary</label></strong>
        <p>{{ tickets.summary }}</p>
      </div>
      <div class="info">
        <strong><label>Category</label></strong>
        <p>{{ tickets.category }}</p>
      </div>
      <div class="info">
        <strong><label>Description</label></strong>
        <p>{{ tickets.description }}</p>
      </div>
      <div class="info">
        <strong><label>Atachments</label></strong>
        <p>hello there</p>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  // name: "ViewTicket",
  // data() {
  //   return {
  //     currentTicket: null,
  // };
  // },
  methods: {
    // getTicket(id) {
    //   AllTicketsDataService.get(id)
    //     .then((response) => {
    //       this.currentTicket = response.data;
    //       console.log(response.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },
};
</script>

<style>
.info {
  display: flex;
  flex-direction: row;
  padding: 10px;
}
p {
  margin-left: 10%;
  padding: 10px;
}
</style>