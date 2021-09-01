<template v-slot:draft>
  <v-container class="">
    <v-card>
      <table class="table" color="grey">
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket">
            <td scope="row">
              <!-- Material unchecked -->
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="tableMaterialCheck2"
                />
                <label class="form-check-label" for="tableMaterialCheck2"
                  >Draft</label
                >
              </div>
            </td>

            <td>({{ ticket.category }})-{{ ticket.summary }}</td>

            <div class="hover">
              <i @click="editDraft(ticket.id)" class="far fa-edit"></i>
              <i @click="deleteDraft(ticket.id)" class="fas fa-trash"></i>
            </div>
          </tr>
        </tbody>
      </table>
    </v-card>
  </v-container>
</template>

<script>
import DraftsDataService from "../../service/DraftTicketService";
export default {
  components: {},
  data() {
    return {
      tickets: [],

      dialog: false,
    };
  },
  created() {
    this.retrieveDraft();
  },
  methods: {
    onOpen() {
      this.dialog = true;
    },
    retrieveDraft() {
      var tickets = tickets;
      setInterval(() => {
        DraftsDataService.getAll()
          .then((response) => {
            this.tickets = response.data;
            this.tickets.map((ticket) => {
              ticket.summary = this.getDisplayDraft(ticket.summary);
            });

            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }, 10000);
    },

    refreshList() {
      this.retrieveDraft();
    },
    viewDraft(id) {
      this.$router.push({ name: "viewDraftDetail", params: { id: id } });
    },

    editDraft(id) {
      this.$router.push({ name: "DraftTicket", params: { id: id } });
    },

    deleteDraft(id) {
      DraftsDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayDraft(summary) {
      summary = summary.length > 50 ? summary.substr(0, 50) + "..." : summary;
      return summary;
    },

    mounted() {
      this.retrieveDrafts();
    },
  },
};
</script>
<style>
table {
  background-color: lightgray;
}
tr:hover {
  background-color: #f9f9f9;
  color: black;
  cursor: pointer;
}
tr .hover {
  position: absolute;
  right: 4px;
  font-size: 30px;
  text-decoration: none;
  padding: 2px;
  margin-bottom: 14px;
  color: black;
  display: none;
  height: 30px;
}
i {
  padding: 10px;
}
tr:hover .hover {
  display: inline-block;
  background-color: #f9f9f9;
  padding: 0 5px;
  margin-bottom: 16px;
}
input:hover {
  border: 1px solid black;
}
.form-check-label {
  color: red;
}
</style>
