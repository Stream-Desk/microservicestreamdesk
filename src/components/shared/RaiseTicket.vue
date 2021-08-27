<template v-slot:add>
  <v-btn depressed id="contain" v-on="on" @click="onOpen">
    <i class="fas fa-plus" id="fa"></i>
  </v-btn>
  <v-dialog v-model="dialog" persistent class="form" v-if="!submitted">
    <form ref="form">
      <v-card id="card" :elevation="hover ? 10 : 1" width="450px">
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-card-text>
              <v-card-title primary-title class="justify-center" id="title">
                New Ticket
              </v-card-title>
              <label for="subject">Summary*</label>
              <input
                type="text"
                required
                v-model.lazy="subject"
                name="subject"
                outlined
                v-model="ticket.summary"
              />

              <label for="category"
                >Category <span class="required">*</span></label
              >

              <select id="issues" v-model="ticket.category">
                <option>Slow Updates</option>
                <option>Blue screen</option>
                <option>Bugs</option>
              </select>

              <label for="textarea">Description*</label>
              <textarea
                type="textarea"
                class="mdc-text-field__input"
                aria-label="Label"
                required
                v-model.lazy="description"
                name="description"
                v-model="ticket.description"
              ></textarea>
              <label
                >Attachment <i class="fas fa-cloud-upload-alt" id="fas"></i
              ></label>
              <div v-if="currentFile" class="progress">
                <div
                  class="progress-bar progress-bar-info progress-bar-striped"
                  role="progressbar"
                  :aria-valuenow="progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{ width: progress + '%' }"
                >
                  {{ progress }}%
                </div>
              </div>
              <input style="none" type="file" ref="file" @change="selectFile" />

              <v-card-actions class="submit">
                <v-spacer></v-spacer>
                <v-btn
                  elevation="1"
                  variant="outlined"
                  text
                  class="mb-5"
                  @click="dialog = false"
                  rounded="pill"
                  text-center
                  id="buton"
                  >Cancel</v-btn
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

export default {
  components: {},
  data() {
    return {
      ticket: {
        summary: "",
        category: "",
        description: "",
        selectedFiles: undefined,
        currentFile: undefined,
        progress: 0,
        message: "",

        fileInfos: [],
      },
      submitted: false,

      dialog: false,
    };
  },

  methods: {
    sendTicket() {
      var data = {
        summary: this.ticket.summary,
        category: this.ticket.category,
        description: this.ticket.description,
        // selectedFiles: this.ticket.selectedFiles,
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
    },
    newTicket() {
      this.submitted = false;
      this.ticket = {};
    },

    onOpen() {
      this.dialog = true;
    },
  },

  selectFile() {
    this.selectedFiles = this.$refs.file.files;
  },
  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    AllTicketsDataService.upload(this.currentFile, (event) => {
      this.progress = Math.round((100 * event.loaded) / event.total);
    })
      .then((response) => {
        this.message = response.data.message;
        return AllTicketsDataService.getFiles();
      })
      .then((files) => {
        this.fileInfos = files.data;
      })
      .catch(() => {
        this.progress = 0;
        this.message = "Could not upload the file!";
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  },
  mounted() {
    AllTicketsDataService.getFiles().then((response) => {
      this.fileInfos = response.data;
    });
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
  padding: 5px;
}
#contain {
  margin-left: -20%;
  width: 20px;
  margin-top: 20px;
  color: white;
  background-color: rgb(255, 255, 255);
  padding-left: -20px;
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
label {
  width: 70%;
  height: 40px;
  margin-inline-start: 5%;
}
/* input { */
/* border: 1px solid grey;
  border-radius: 3px;
  width: 90%; */
/* height: 30px; */
/* margin-bottom: 10px;
  margin-inline-start: 5%; */
/* } */
/* input[type="text"] {
  padding: 20px 10px;
  box-sizing: border-box;
  font-size: 15px;
  height: 20px;
} */
/* input[type="text"]:focus {
  background-color: lightblue;
} */
input {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 30px;
  margin-bottom: 20px;
  margin-inline-start: 5%;
}

textarea[type="textarea"] {
  padding: 1rem 10px;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 50px;
  margin-inline-start: 5%;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: capitalize;
  resize: none;
  /* box-sizing: border-box; */
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
.submit {
  margin-right: 3.5em;
  top: 10vh;
}
#btn {
  /* margin-right: 1.5em; */
  margin-bottom: 10px;
  margin-right: -1%;
  width: 130px;
  background-color: rgb(1, 26, 80);
  color: white;
}
#buton {
  width: 100px;
}
#card {
  background-color: #f1f1f1;
}
</style>
