<template>
  <v-card :elevation="hover ? 24 : 3" class="mx-auto my-12" max-width="500">  
    <v-card-title primary-title class="justify-center" id="title">
    </v-card-title>
     <router-link class="icon" to="/Drafts" color="danger"
      ><i color="red lighten-5" class="fas fa-times"></i
    ></router-link>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-card-text>
          <div v-if="draftTicket">
            <label for="subject">Summary</label>
            <input
              type="subject"
              class="mdc-text-field__input"
              aria-labelledby="my-label-id"
              required
              v-model="draftTicket.summary"
              name="subject"
              outlined
            />
            <label for="category"
              >Category <span class="required">*</span></label
            >
            <select class="form-control" v-model="draftTicket.category">
              <option>Slow Display</option>
              <option>File download</option>
              <option>Login</option>
            </select>
            <label for="textarea">Description</label>
            <textarea
              type="description"
              class="mdc-text-field__input"
              aria-label="Label"
              required
              v-model="draftTicket.description"
              name="description"
            ></textarea>
            <label for="attach-name">Attachment</label>
            <i class="fas fa-cloud-upload-alt" id="fas"></i>
          </div>
        </v-card-text>
      </v-layout>
    </v-container>
    <v-card-actions>
       <v-btn small elevation="1" color="primary" @click="updateDraft"
        >save</v-btn
      >
      <v-btn small elevation="1" color="primary" @click="sendTicket"
        >Send Ticket</v-btn
      >
    </v-card-actions>
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
#label1 {
  margin-inline-start: 5%;
}
#label2 {
  margin-inline-start: 5%;
}
#label3 {
  margin-inline-start: 5%;
}
#label4 {
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
textarea {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 50px;
  margin-inline-start: 5%;
}
#buton {
  width: 50px;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 7%;
  color: white;
  border-radius: 18px;
  border: 1px solid transparent;
  cursor: pointer;
}
.fill:hover,
.fill:focus {
  box-shadow: inset 0 0 0 2em var(--hover);
}
btn {
  transition: 0.25s;
}
#contain {
  margin-left: 70%;
  margin-top: 20px;
  color: white;
  background-color: rgb(73, 159, 230);
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
.icon {
  float: left;
  font-size: 18px;
}
</style>
