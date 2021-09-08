<template v-slot:tickets>
  <v-container class="dashboard">
    <v-card elevation="2">
      <!-- <div class="allTicket">All Tickets</div> -->
      <div>
        <raise-ticket>
          <slot></slot>
        </raise-ticket>
      </div>
      <!-- 
      <raise-ticket>
        <slot></slot>
      </raise-ticket> -->

      <table hover table-striped class="table table-bordered">
        <thead>
          <tr>
            <th
              v-for="(header, index) in ticketTable.tableHeadings"
              :key="index"
            >
              {{ header }}
              <br />
              <span class="material-icons" id="filters"> filter_alt </span>
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ticket, index) in tickets" :key="index">
            <td
              v-for="(field, fieldIndex) in ticketTable.fields"
              :key="fieldIndex"
            >
              {{ getTicketFieldValues(ticket, field) }}
              <view-ticket :tickets="ticket"></view-ticket>
            </td>
            <td>
              <v-chip class="" small flat>
                {{ ticket.status }}
              </v-chip>
            </td>
            <div class="hover">
              <v-btn color="success" @click="viewTicket(ticket.id)"
                >Details</v-btn
              >
              <i @click="editTickets(ticket.id)" class="far fa-edit"></i>

              <i class="fas fa-trash" @click="onOpen"> </i>
            </div>
          </tr>
        </tbody>
      </table>
    </v-card>
    <v-dialog v-model="dialogDelete" transition="dialog-transition">
      <v-card class="" elevation="" max-width="">
        <v-card-text>
          <p class="">Are you sure you want to delete this ticket</p>
          <div class="text--primary"></div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="danger" @click="close"> No </v-btn>
          <v-btn text color="Success" @click="deleteTickets(ticket.id)">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import AllTicketsDataService from "../service/All-ticketDataservices";
import status from "./Status.vue";

import { ticketLabels } from "../utils/constants";
import { xpath_getter } from "../utils/jasonHelpers";
import ViewTicket from "./Tickets.vue";
import RaiseTicket from "./shared/RaiseTicket.vue";
export default {
  name: "AllTicket",

  component: {
    status,
    ViewTicket,
    RaiseTicket: RaiseTicket,
  },
  data() {
    return {
      status: "",
      loading: false,
      search: "",
      selected: [],
      selectAll: false,
      tickets: [],
      ticketTable: {
        tableHeadings: [
          ticketLabels.id,
          ticketLabels.date,
          ticketLabels.summary,
          ticketLabels.category,
        ],
        fields: ["$.id", "$.submitDate", "$.summary", "$.category"],
      },
      dialog: false,
      dialogDelete: false,
    };
  },

  created() {
    this.retrieveTickets();
  },

  methods: {
    onOpen() {
      this.dialogDelete = true;
    },
    close() {
      this.dialogDelete = false;
    },
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let ticket in this.tickets) {
          this.selected.push(this.tickets[ticket].id);
        }
      }
    },

    getTicketFieldValues(row, field) {
      return xpath_getter(row, field);
    },

    retrieveTickets() {
      var tickets = tickets;
      setInterval(() => {
        AllTicketsDataService.getAll()
          .then((response) => {
            this.tickets = response.data;
            this.tickets.map((ticket) => {
              ticket.summary = this.getDisplayTicket(ticket.summary);
            });
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }, 10000);
    },

    refreshList() {
      this.retrieveTickets();
    },
    viewTicket(id) {
      this.$router.push({ name: "viewTicketDetail", params: { id: id } });
    },

    editTickets(id) {
      this.$router.push({ name: "Ticket-details", params: { id: id } });
    },

    deleteTickets(id) {
      AllTicketsDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayTicket(summary) {
      summary = summary.length > 20 ? summary.substr(0, 20) + "..." : summary;
      return summary;
    },

    mounted() {
      this.retrieveTickets();
    },
  },
};
</script>

<style>
table {
  width: 100%;
  border: 1px solid rgb(199, 199, 199);
  background: rgb(255, 254, 254);
}

td {
  text-align: left;
  padding: 1px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: rgb(253, 254, 255);
  color: rgb(0, 0, 0);
  padding: 1px;
  text-align: center;
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
.allTicket {
  /* padding-left: 5px; */
  text-transform: capitalize;
  letter-spacing: 0.6em;
  font-size: 1em;
  color: rgba(#fff, 0.35);
}
#fa {
  padding: 5px;
  height: 35px;
  top: 223px;
  left: 150px;
  color: rgb(0, 0, 0);
}
#contain {
  margin-left: 2%;
  width: 10px;
  margin-top: 5px;
  color: white;
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
}
#filters {
  border: 1px solid rgb(219, 217, 217);
  padding-left: 50px;
  border-radius: 3px;
}
</style>
