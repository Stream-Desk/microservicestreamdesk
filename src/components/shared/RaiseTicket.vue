<template v-slot:add>
  <v-btn flat depressed id="contain" @click="onOpen">
    <i class="fas fa-plus" id="fa"></i>
  </v-btn>
  <v-dialog v-model="dialog" persistent class="form" v-if="!submitted">
    <form ref="form">
      <v-card id="card" :elevation="hover ? 10 : 1" width="700px">
         <i @click="close" class="fas fa-times" id="close"></i>
        <v-container grid-list-xs>
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
                    v-model="ticket.summary"
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
                  <datalist id="issues">
                    <option>Slow Updates</option>
                    <option>Blue screen</option>
                    <option>Bugs</option>
                  </datalist>
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
                    v-model="ticket.description"
                  ></textarea>
                </v-col>
              </v-row>
              <v-row class="my-1">
                <v-col sm="3">
                  <label id="label-none">Attachment </label>
                  <FileUpload />
                </v-col>
                <v-col sm="9"> </v-col>
              </v-row>
              <v-card-actions class="submit">
                <v-spacer></v-spacer>
                <v-btn
                  elevation="1"
                  variant="outlined"
                  text
                  class="mb-5"
                  @click="sendTicket"
                  rounded="pill"
                  text-center
                  id="buton"
                  >Sava</v-btn
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
  </v-dialog>
</template>
<script>
import AllTicketsDataService from "../../service/All-ticketDataservices";
import DraftsDataService from "../../service/DraftTicketService";
// import FileUpload from "../shared/FileUpload.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  components: {
    // FileUpload,
  },
  setup() {
    return { v$: useVuelidate() };
  },
 data() {
    return {
      ticket: {
        summary: "",
        category: "",
        description: "",
      },
      submitted: false,
      dialogCancel: false,
      dialog: false,
    };
  },


  validation() {
    return {
      ticket: {
        summary: {
          required,
        },
        category: {
          required,
        },
        description: {
          required,
        },
      },
    };
  },

  methods: {
    sendTicket() {
      var data = {
        summary: this.ticket.summary,
        category: this.ticket.category,
        description: this.ticket.description,
        status: false,
      };

      AllTicketsDataService.create(data)
        .then((response) => {
          this.ticket.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
      DraftsDataService.create(data)
        .then((response) => {
          this.ticket.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTicket() {
      this.submitted = false;
      this.ticket = {};
    },

    onOpen() {
      this.dialog = true;
    },

    close() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
#fa {
  padding: 5px;
  height: 35px;
  top: 223px;
  border-radius: 4px;
  color: black;
}
#fas {
  padding: 5px;
}
#contain {
  margin-left: 20%;
  width: 20px;
  margin-top: 20px;
  color: rgb(244, 247, 60);
  background: linear-gradient(to center rgb(60, 172, 247));
  cursor: pointer;
  padding-left: -20px;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(rgb(60, 172, 247));
  transition: 0.5s ease-in-out;
}
#title {
  padding-top: 10px;
  color: black;
}
h4 {
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
}
#back {
  color: rgb(18, 117, 209);
  margin-inline: 33px;
}
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
  resize: none;
  /* margin-left: 11%; */
}
/* textarea[type="textarea"]:focus {
  background-color: rgb(202, 232, 241);
} */
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
#input {
  border: none;
}
#close {
  font-size: 24px;
  float: right;
  margin-right: 3rem;
  padding-top: 1.5rem;
  color: red;
}
</style>
