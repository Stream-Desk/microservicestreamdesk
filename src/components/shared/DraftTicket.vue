<template>
  <v-card :elevation="hover ? 24 : 3" class="mx-auto my-12" max-width="700">
    <form ref="form" v-if="draftTicket">
      <v-card id="card" :elevation="hover ? 10 : 1" width="700px">
        <v-container grid-list-xs>
          <router-link to="/Drafts"><i class="fas fa-times"></i></router-link>
          <v-layout row wrap>
            <v-card-text>
              <v-card-title primary-title id="title"> New Ticket </v-card-title>
              <v-row class="my-1">
                <v-col sm="3">
                  <label for="input-none" id="label-none">Summary</label>
                </v-col>
                <v-col sm="9">
                  <input
                    id="input-none"
                    :state="null"
                    type="text"
                    v-model.lazy="summary"
                    outlined
                    v-model="draftTicket.summary"
                  />
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col sm="3">
                  <label for="input-none" id="label-none">Category</label>
                </v-col>
                <v-col sm="9">
                  <select id="issues" v-model="draftTicket.category">
                    <option>Slow Updates</option>
                    <option>Blue screen</option>
                    <option>Bugs</option>
                  </select>
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col sm="3">
                  <label for="textarea" id="label-non">Description </label>
                </v-col>
                <v-col sm="9">
                  <textarea
                    debounce="500"
                    rows="3"
                    max-rows="5"
                    type="textarea"
                    name="description"
                    v-model="draftTicket.description"
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
              <v-card-actions class="submit">
                <v-spacer></v-spacer>
                <v-btn
                  elevation="1"
                  variant="outlined"
                  text
                  class="mb-5"
                  @click="updateDraft"
                  rounded="pill"
                  text-center
                  id="buton"
                  >Save</v-btn
                >
                <v-btn
                  flat
                  elevation="1"
                  class="mb-5"
                  @click="sendTicket"
                  rounded="pill"
                  id="btn"
                  >Send</v-btn
                >
              </v-card-actions>
            </v-card-text>
          </v-layout>
        </v-container>
      </v-card>
    </form>
  </v-card>
</template>

<script>
import DraftsDataService from "../../service/DraftTicketService";
import AllTicketsDataService from "../../service/All-ticketDataservices";
export default {
  data() {
    return {
      draftTicket: null,
      message: "",
    };
  },
  methods: {
    sendTicket() {
      var data = {
        summary: this.draftTicket.summary,
        category: this.draftTicket.category,
        description: this.draftTicket.description,
      };
      AllTicketsDataService.create(data)
        .then((response) => {
          this.draftTicket.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDraft(id) {
      DraftsDataService.get(id)
        .then((response) => {
          this.draftTicket = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateDraft() {
      DraftsDataService.update(this.draftTicket.id, this.draftTicket)
        .then((response) => {
          console.log(response.data);
          this.message = "Ticket saved!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getDraft(this.$route.params.id);
  },
};
</script>

<style scoped>
#label-none {
  margin-inline-start: 5%;
  margin-bottom: 10%;
}
#label-non {
  margin-inline-start: 2%;
}
.submit {
  margin-right: 3.5em;
  top: 10vh;
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
#card {
  background-color: #f1f1f1;
}
#input-none {
  width: 198%;
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
select {
  border: 1px solid grey;
  border-radius: 4px;
  width: 90%;
  margin-bottom: 10px;
  margin-inline-start: 5%;
  padding: 12px 8px;
  border-radius: 4px;
  height: 30px;
}
</style>
