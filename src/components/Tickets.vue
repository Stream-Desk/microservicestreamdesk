<template>
  <v-card :elevation="hover ? 24 : 3" class="mx-auto my-12" max-width="500">
    <v-card-title primary-title class="justify-center" id="title">
      Edit Ticket
    </v-card-title>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-card-text>
          <div v-if="currentTicket">
            <label for="subject">Summary</label>
            <input
              type="subject"
              class="mdc-text-field__input"
              aria-labelledby="my-label-id"
              required
              v-model="currentTicket.summary"
              name="subject"
              outlined
            />
            <label for="category"
              >Category <span class="required">*</span></label
            >
            <select v-model="currentTicket.category">
              <option value="Bugs">Slow Updates</option>
              <option value="Display">Slow displays</option>
              <option value="Blue screen">No displays</option>
            </select>
            <label for="textarea">Description</label>
            <textarea
              type="description"
              class="mdc-text-field__input"
              aria-label="Label"
              required
              v-model="currentTicket.description"
              name="description"
            ></textarea>
            <label for="attach-name">Attachment</label>
            <i class="fas fa-cloud-upload-alt" id="fas"></i>
          </div>
        </v-card-text>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <save-to-draft>
        <slot></slot>
      </save-to-draft>

      <sent-ticket-pop @click="updateTicket">
        <slot></slot>
      </sent-ticket-pop>
    </v-card-actions>
  </v-card>
</template>

<script>
import SentTicketPop from "./SendTicketPopUp.vue";
// import SaveToDraft from "../SaveToDraft.vue";
import AllTicketsDataService from "../service/All-ticketDataservices";

export default {
  name: "EditTicketPopup",

  components: {
    // SaveToDraft: SaveToDraft,
    SentTicketPop: SentTicketPop,
  },
  data() {
    return {
      // dialog: false,
      // subject: "",
      // category: "",
      // description: "",
      currentTicket: null,
      message: "",
    };
  },
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
    updateTicket() {
      AllTicketsDataService.update(this.currentTicket.id, this.currentTicket)
        .then((response) => {
          console.log(response.data);
          this.message = "Ticket is sent successfully!";
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

<style scoped>
#fa {
  padding: 5px;
}
#fas {
  padding: 5px;
}
#contain {
  margin-left: 70%;
  margin-top: 20px;
  color: white;
  background-color: rgb(73, 159, 230);
}
#title {
  padding-top: 10px;
}
#back {
  color: rgb(18, 117, 209);
  margin-inline: 33px;
}
label {
  width: 70%;
  height: 40px;
  margin-inline-start: 5%;
}
input {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 30px;
  margin-bottom: 20px;
  margin-inline-start: 5%;
}
select {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 30px;
  margin-bottom: 20px;
  margin-inline-start: 5%;
}
textarea {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 50px;
  margin-inline-start: 5%;
}
</style>
