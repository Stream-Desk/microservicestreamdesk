<template>
  <v-app-bar
    id="app-bar"
    shrink-on-scroll
    scroll-target="#scrolling-techniques"
    flat
  >
    <v-card flat id="cardtitle">
      <v-card-title primary-title class="text-uppercase" id="texts">
        Stream|<span id="spantext">Desk</span>
      </v-card-title>
    </v-card>
    <v-row id="tabs" align="center">
      <v-card-text id="word"> Tickets </v-card-text>
      <v-card-text id="word"> Drafts </v-card-text>
    </v-row>
    <v-spacer></v-spacer>
    <v-btn icon id="fa"><i class="fas fa-bell"></i></v-btn>
    <v-btn icon id="fa"><i class="fas fa-user"></i></v-btn>
  </v-app-bar>
  <v-system-bar color="primary" window id="system"> </v-system-bar>
  <v-container grid-list-xs>
    <v-card>
      <v-row>
        <div id="raise">
          <div class="btn">
            <refresh-ticket>
              <slot></slot>
            </refresh-ticket>
          </div>
          <div class="btn">
            <raise-ticket>
              <slot></slot>
            </raise-ticket>
          </div>
          <div class="btn">
            <edit-ticket>
              <slot></slot>
            </edit-ticket>
          </div>
          <div class="btn"></div>
          <div class="btn">
            <delete>
              <slot></slot>
            </delete>
          </div>
        </div>
        <all-tickets>
          <slot></slot>
        </all-tickets>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import RaiseTicket from "../shared/RaiseTicket.vue";
import EditTicket from "../shared/EditTicketPopup.vue";

import Delete from "../shared/Delete.vue";
import RefreshTicket from "../shared/RefreshTicket.vue";
import AllTickets from "../All-tickets.vue";
// import TicketDraft from "../shared/TicketDraft.vue";

// import DraftTable from "../shared/DraftTable.vue";

export default {
  name: "dashboard",
  components: {
    RaiseTicket: RaiseTicket,
    EditTicket: EditTicket,

    Delete: Delete,
    RefreshTicket: RefreshTicket,
    AllTickets: AllTickets,

    // TicketDraft: TicketDraft,
  },
  data() {
    return {
      drawer: false,
      group: null,
      links: [{ text: "Dashboard", route: "/Drafts" }],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
#cardtitle {
  position: absolute;
  width: 300px;
  height: 110px;
  left: 0px;
  top: 0px;
  background-color: #404040;
}
#texts {
  width: 317px;
  height: 56px;
  top: 5px;
  left: 52px;
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  line-height: 56.25px;
  position: absolute;
  color: #f8e220;
}
#spantext {
  color: #ffffff;
}
#card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #f6f8fa;
  background-clip: border-box;
  border-radius: 5px;
  margin-top: 8px;
}
#card-text {
  padding-inline-start: 40px;
  background-color: rgb(233, 233, 233);
  margin-top: -20px;
}
#raise {
  display: flex;
  justify-content: flex-start;
  margin-inline-start: 0.5%;
}
.btn {
  margin: 5px;
}
#fa {
  margin-right: 30px;
}
#tabs {
  margin-inline-start: 28%;
  color: black;
  width: 170px;
  height: 105px;
  top: 0px;
  font-style: normal;
}
#word {
  font-weight: 100;
  font-size: 20px;
  left: 400px;
}
#draft {
  padding-right: 25px;
}
#comment {
  padding-right: 20px;
}
#app-bar {
  font-family: Poppins, sans-serif;
  font-weight: 400px;
  background-color: #f8e220;
}
#system {
  background-color: #f2f1f1;
}
</style>
