<template v-slot:add>
  <v-btn id="contain" v-on="on" @click="onOpen">
    <i class="fas fa-plus" id="fa"></i> Raise Ticket
  </v-btn>
  <v-dialog v-model="dialog" class="form" v-if="!submitted">
    <form ref="form">
      <v-card
        my-10
        id="card"
        :elevation="hover ? 24 : 3"
        class="mx-auto"
        width="600"
        mb-5
      >
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-card-text>
              <h4>New Ticket</h4>
              <label for="subject">Subject*</label>
              <input
                type="text"
                class="mdc-text-field__input"
                aria-labelledby="my-label-id"
                required
                v-model.lazy="subject"
                name="subject"
                outlined
                v-model="ticket.summary"
              />
              <label for="category"
                >Category <span class="required">*</span></label
              >
              <select v-model.lazy="category" v-model="ticket.category">
                <option value="Bugs">Slow Updates</option>
                <option value="Display">Slow displays</option>
                <option value="Blue screen">No displays</option>
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
              <input type="file" ref="file" @change="selectFile" />

              <v-card-actions class="submit">
                <v-spacer></v-spacer>
                <v-btn
                  flat
                  elevation="1"
                  id="btn"
                  text
                  color="blue"
                  class="mb-5"
                  @click="dialog = false"
                  >Cancel</v-btn
                >
                <v-btn
                  flat
                  elevation="1"
                  color="primary"
                  class="mb-5"
                  @click="sendTicket"
                  text-color="white"
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
import UploadFilesService from "../../service/UploadFilesService";

export default {
  components: {},
  data() {
    return {
      ticket: {
        summary: "",
        category: "",
        description: "",
        // selectedFiles: undefined,
        // currentFile: undefined,
        // progress: 0,
        // message: "",

        // fileInfos: [],
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
    UploadFilesService.upload(this.currentFile, (event) => {
      this.progress = Math.round((100 * event.loaded) / event.total);
    })
      .then((response) => {
        this.message = response.data.message;
        return UploadFilesService.getFiles();
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

  height: 10px;
  margin-inline-start: 5%;
  font-weight: bold;
  color: black;
  font-size: 18px;
  padding: 5px;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: capitalize;
}
input {
  border: 1.5px solid grey;
  border-radius: 4px;
  width: 90%;
  height: 30px;
  margin-bottom: 10px;
  margin-inline-start: 5%;
}
input[type="text"] {
  padding: 20px 10px;
  box-sizing: border-box;

  font-size: 16px;
}
input[type="text"]:focus {
  background-color: lightblue;
}

textarea[type="textarea"] {
  padding: 1rem 10px;
  height: 13vh;
  font-size: 16px;
  box-sizing: border-box;
}
textarea[type="textarea"]:focus {
  background-color: lightblue;
}
select {
  border: 1.5px solid grey;
  border-radius: 4px;
  width: 90%;
  margin-bottom: 10px;
  margin-inline-start: 5%;
  padding: 12px 8px;
  border-radius: 4px;
}
textarea {
  border: 1.5px solid grey;
  border-radius: 4px;
  width: 90%;
  height: 50px;
  margin-inline-start: 5%;
  resize: none;
}

.submit {
  margin-right: 3.5em;
  top: 10vh;
}
#btn {
  margin-right: 1.5em;
}
#card {
  background-color: #f1f1f1;
}
</style>
