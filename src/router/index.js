import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
import AllTicket from "../components/AllTicket.vue"


const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/Allticket",
    name: "AllTicket",
    component: AllTicket
  },
  {
    path: "/Allticket/id",
    name: "Ticket-details",
    component: () => import("../components/Tickets.vue"),
  },
  {
    path: "/Drafts",
    name: "TicketDraft",
    component: () => import("../components/shared/TicketDraft.vue"),
  },
  {
    path: "/ViewTicket",
    name: "viewTicketDetail",
    component: () => import("../components/ViewTicket.vue"),
  },
  {
    path: "/DraftTicket",
    name: "DraftTicket",
    component: () => import("../components/shared/DraftTicket.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
