<template v-slot:edit>
  <v-btn
    depressed
    text-color="white"
    ma-4
    @click="onClickEditTicket"
    id="contain"
    v-on="on"
  >
    <i class="fas fa-pen" id="fa"></i>
  </v-btn>
  <v-dialog v-model="dialog">
    <v-card
      :elevation="hover ? 24 : 3"
      mb-4
      class="mx-auto"
      max-width="450"
      my-2
    >
      <v-card-title primary-title class="justify-center" id="title">
        Edit Ticket
      </v-card-title>

      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-card-text>
            <v-row class="my-1">
              <v-col sm="3">
                <label for="input-none" id="label-none" v-if="currentTicket"
                  >Summary</label
                >
              </v-col>
              <v-col sm="9">
                <input
                  id="input-none"
                  :state="null"
                  type="text"
                  v-model.lazy="summary"
                  outlined
                  v-model="currentTicket.summary"
                />
              </v-col>
            </v-row>
            <v-row class="my-1">
              <v-col sm="3">
                <label for="input-none" id="label-none">Category</label>
              </v-col>
              <v-col sm="9">
                <input
                  id="input-none"
                  :state="null"
                  type="text"
                  name="issues"
                  list="issues"
                  autocomplete="off"
                />
                <datalist id="issues" @change="changeTicket($event)">
                  <option>Slow Updates</option>
                  <option>Blue screen</option>
                  <option>Bugs</option>
                </datalist>
              </v-col>
            </v-row>
            <v-row class="my-1">
              <v-col sm="3">
                <label for="textarea" id="label-non">Description</label>
              </v-col>
              <v-col sm="9">
                <textarea
                  debounce="500"
                  rows="3"
                  max-rows="5"
                  type="textarea"
                  name="description"
                  v-model="currentTicket.description"
                ></textarea>
              </v-col>
            </v-row>
            <v-row class="my-1">
              <v-col sm="3">
                <label id="label-none">Attachment </label>
              </v-col>
              <v-col sm="9">
                <input type="file" ref="file" @change="selectFile" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-layout>
      </v-container>
      <v-card-actions class="submit">
        <v-spacer></v-spacer>
        <v-btn
          flat
          elevation="1"
          class="mb-5"
          @click="sendTicket"
          rounded="pill"
          id="btn"
          >Delete</v-btn
        >
        <v-btn
          small
          elevation="1"
          rounded="pill"
          text-center
          id="buton"
          variant="outlined"
          text
          color="primary"
          @click="updateTicket"
          >Send Ticket</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AllTicketsDataService from "../service/All-ticketDataservices";

export default {
  name: "EditTicketPopup",

  components: {},
  data() {
    return {
      dialog: false,
      subject: "",
      category: "",
      description: "",
      currentTicket: null,
      message: "",

      categories: [
        { name: "Product designer", id: 1 },
        { name: "Full-stack developer", id: 2 },
        { name: "Product manager", id: 3 },
        { name: "Senior front-end developer", id: 4 },
      ],
      selectedCategory: null,
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
    changeTicket(event) {
      this.changeTicket =
        event.target.options[event.target.options.selectedIndex].text;
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
    mounted() {
      this.message = "";
      this.getTicket(this.$route.params.id);
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
#fas {
  padding: 1px;
}
#contain {
  margin-left: -20%;
  margin-top: 20px;
  width: 20px;
  color: white;
  background-color: rgb(255, 255, 255);
}
#title {
  padding-top: 10px;
}
#label-none {
  margin-inline-start: 5%;
  margin-bottom: 10%;
}
#label-non {
  margin-inline-start: 2%;
}
#input-none {
  width: 198%;
}
#btn {
  /* margin-right: 1.5em; */
  margin-bottom: 10px;
  margin-left: 54%;
  width: 130px;
  background-color: rgb(1, 26, 80);
  color: white;
}
#buton {
  width: 100px;
  margin-left: 70%;
  margin-right: -30px;
}
input {
  border: 1px solid grey;
  border-radius: 3px;
  width: 198%;
  height: 30px;
  margin-bottom: 20px;
}
textarea[type="textarea"] {
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 3px;
  width: 198%;
  height: 110px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: capitalize;
  resize: none;
  /* margin-left: 11%; */
}
textarea[type="textarea"]:focus {
  background-color: rgb(202, 232, 241);
}
/* label {
  width: 70%;
  height: 40px;
  margin-inline-start: 5%;
  margin-trim: 30px;
}
input {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 30px;
  margin-bottom: 20px;
  margin-inline-start: 5%;
} */
select {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 30px;
  margin-bottom: 20px;
  margin-inline-start: 5%;
}
/* textarea {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 50px;
  margin-inline-start: 5%;
} */
</style>
