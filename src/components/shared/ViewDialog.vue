<template v-slot:details>
  <v-btn depresses v-on="on" @click="onOpen" id="search">
    <i class="fas fa-eye" id="fa"></i>
  </v-btn>
  <v-dialog v-model="dialog" persistent>
    <v-card :elevation="hover ? 24 : 3" width="500px">
      <v-card-title primary-title class="modal-header">
        View Ticket
      </v-card-title>
      <v-card-text v-if="currentTicket">
        <v-system-bar color="primary" id="systembar">
          <div>
            <v-card-text v-model="currentTicket.summary">
              Ticket -4556 <span>Bugs</span>
            </v-card-text>
          </div>
          <v-card-text> Status: <span id="spanopen">Open</span> </v-card-text>
          <v-spacer></v-spacer>
        </v-system-bar>
        <div class="grid-container" style="grid-auto-flow: column">
          <div class="item2">Summary:{{ ticket.summary }}</div>
          <div class="item3">Category:{{ ticket.category }}</div>
          <div class="item4">Date:{{ ticket.submitDate }}</div>
        </div>
        <div class="grid-container" style="grid-auto-flow: column">
          <div class="item1">Description:{{ ticket.description }}</div>
          <div class="item2">Attachment</div>
        </div>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          type="button"
          text
          @click="dialog = false"
          variant="outlined"
          rounded="pill"
          id="close"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AllTicketsDataService from "../../service/All-ticketDataservices";
export default {
  name: "viewDialog",
  data() {
    return {
      currentTicket: null,
      dialog: false,
    };
  },
  methods: {
    onOpen() {
      this.dialog = true;
    },
    getTicket(id) {
      AllTicketsDataService.get(id)
        .then((response) => {
          this.currentTicket = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
#fa {
  padding: 5px;
  height: 35px;
  top: 223px;
  left: 173px;
  border-radius: 4px;
  color: black;
}
#spanopen {
  color: black;
  font-weight: bold;
}
#systembar {
  border: 1px solid rgb(189, 189, 189);
}
#close {
  width: 100px;
}
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #f3f3f3;
  border-bottom-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background: #f6f8fa;
}
#card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 12px;
  word-wrap: break-word;
  background-color: #f6f8fa;
  background-clip: border-box;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
}
#search {
  margin-left: -20%;
  margin-top: 20px;
  width: 10px;
  color: white;
  background-color: rgb(253, 253, 253);
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-gap: 5px;
  padding: 5px;
}
.grid-container > div {
  text-align: left;
  padding: 5px 0;
  font-size: 15px;
}
</style>
