<template>
  <v-app-bar
    id="app-bar"
    shrink-on-scroll
    scroll-target="#scrolling-techniques"
    flat
  >
    <div id="title">
      <v-app-bar-title class="text-uppercase">StreamDesk </v-app-bar-title>
    </div>
    <v-row id="tabs" align="center">
      <v-router to="" text id="draft">Drafts</v-router>
      <v-router to="" text id="comment">Comments</v-router>
    </v-row>
    <v-spacer></v-spacer>
    <v-btn icon id="fa"><i class="fas fa-bell"></i></v-btn>
  </v-app-bar>
  <v-container grid-list-xs>
    <v-card>
      <div id="raise">
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
      </div>
    </v-card>
  </v-container>
</template>

<script>
import RaiseTicket from "../shared/RaiseTicket.vue";
import EditTicket from "../shared/EditTicketPopup.vue";

// import DraftTable from "../shared/DraftTable.vue";

export default {
  name: "dashboard",
  components: {
    RaiseTicket: RaiseTicket,
    EditTicket: EditTicket,
  },
  data() {
    return {
      drawer: false,
      group: null,
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
#title {
  color: rgb(7, 36, 163);
  font-family: "Segoe UI", Roboto, Oxygen, "Open Sans", "Helvetica Neue",
    sans-serif;
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
  margin-inline-start: 5%;
  margin-top: -15px;
}
.btn {
  margin: 5px;
}
#fa {
  margin-right: 30px;
}
#tabs {
  margin-inline-start: 5%;
  color: #f6f8fa;
  font-size: 15px;
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
  background-color: rgb(113, 199, 248);
}
</style>
