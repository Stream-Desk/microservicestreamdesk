<template v-slot:edit>
  <v-btn
    depressed
    flat
    color="red-lighten-1"
    text-color="white"
    ma-4
    @click="onClickEditTicket"
    id="contain"
    v-on="on"
  >
    <i class="fas fa-edit"></i>
  </v-btn>
  <v-dialog v-model="dialog">
    <v-card :elevation="hover ? 24 : 3" class="mx-auto my-12" max-width="500">
      <v-card-title primary-title class="justify-center" id="title">
        Edit Ticket
      </v-card-title>
      <v-card-actions>
        <span class="ma-3px" id="back">
          <v-icon dark left color="blue">mdi-chevron-left</v-icon>Back</span
        >
      </v-card-actions>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-card-text>
            <label for="subject">Subject</label>
            <input
              type="subject"
              class="mdc-text-field__input"
              aria-labelledby="my-label-id"
              required
              v-model.lazy="subject"
              name="subject"
              outlined
            />
            <label for="category"
              >Category <span class="required">*</span></label
            >
            <select v-model.lazy="category">
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
              v-model.lazy="description"
              name="description"
            ></textarea>
            <label for="attach-name">Attachment</label>
            <i class="fas fa-cloud-upload-alt" id="fas"></i>
          </v-card-text>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <save-to-draft>
          <slot></slot>
        </save-to-draft>
        <sent-ticket-pop>
          <slot></slot>
        </sent-ticket-pop>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SaveToDraft from "../SaveToDraft.vue";
import SentTicketPop from "../SendTicketPopUp.vue";

export default {
  name: "EditTicketPopup",

  components: {
    SaveToDraft: SaveToDraft,
    SentTicketPop: SentTicketPop,
  },
  data() {
    return {
      dialog: false,
      subject: "",
      category: "",
      description: "",
    };
  },
  methods: {
    onSend: function (message) {
      alert(message);
    },
    onClickEditTicket() {
      this.dialog = true;
    },
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
