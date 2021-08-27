
<template>
  <v-card :elevation="hover ? 24 : 3" class="mx-auto my-12" max-width="600">
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-card-text>
          <form v-if="currentTicket">
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Id:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.id"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Date:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.submitDate"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Category:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.category"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Summary:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.summary"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Description:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.description"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Attachment:</label>
              <div class="col-sm-10">
                <input type="text" disabled class="form-control-plaintext" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Status:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.status"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>
          </form>
        </v-card-text>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import AllTicketsDataService from "../service/All-ticketDataservices";

export default {
  name: "ViewTicket",

  components: {},
  data() {
    return {
      currentTicket: null,
      message: "",
    };
  },
  updated: false,
  methods: {
    onSend: function (message) {
      alert(message);
    },
    onClickEditTicket() {
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
  mounted() {
    this.message = "";
    this.getTicket(this.$route.params.id);
  },
};
</script>

<style >
form input {
  margin-left: 30px;
}
form label {
  font-weight: bold;
  color: black;
  font-size: 16px;
}
</style>





 