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
      <router-link class="router" to="/Allticket" exact>Tickets</router-link>
      <router-link class="router" to="/Drafts">Drafts</router-link>
    </v-row>
    <v-spacer></v-spacer>
    <v-btn icon id="fa"><i class="fas fa-bell"></i></v-btn>
    <v-btn icon id="fa"><i class="fas fa-user"></i></v-btn>
  </v-app-bar>
  <v-system-bar color="primary" window id="system"> </v-system-bar>
  <v-container grid-list-xs>
    <v-row>
      <div id="raise"></div>
      <!-- <all-tickets>
        <slot></slot>
      </all-tickets> -->
      <raise-ticket>
        <slot></slot>
      </raise-ticket>
    </v-row>
  </v-container>
</template>

<script>
import RaiseTicket from "../shared/RaiseTicket.vue";
export default {
  name: "dashboard",
  components: {
    RaiseTicket: RaiseTicket,
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
.router {
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding: 10px 10px;
}
a.router-link-exact-active {
  text-decoration: underline;
  color: lightgreen;
}
</style>
