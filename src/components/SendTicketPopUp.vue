<template v-slot:send-ticket>
  <v-btn
    v-on="on"
    rounded="pill"
    variant="outlined"
    @click="updateTicket"
    id="button"
    text-center
    class="text-capitalize"
    >Send Ticket</v-btn
  >
  <v-dialog v-model="dialog">
    <v-container grid-list-xs>
      <v-card
        :elevation="hover ? 24 : 2"
        class="mx-auto my-12"
        max-width="300"
        max-height="190"
      >
        <v-card-actions>
          <v-btn icon dark @click="onCloseDialog" id="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text id="text">
          Ticket Created Successfully.Ticket <span>#4556</span> 12Jun2021
        </v-card-text>
        <v-card-actions>
          <v-btn @click="onOkCloseDialog" id="buton">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    onOk: false,
    onSend() {
      this.dialog = true;
    },
    onOkCloseDialog() {
      this.dialog = false;
    },
    onCloseDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
#close {
  margin-left: 85%;
  size: 3rem;
}
#text {
  text-align: center;
}
span {
  color: red;
}
#buton {
  background-color: rgb(1, 26, 80);
  margin-left: 38%;
  color: white;
}
#button {
  margin-bottom: 10px;
  margin-right: 7%;
  width: 140px;
  background-color: rgb(1, 26, 80);
  color: white;
}
</style>
