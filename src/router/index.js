import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

// import AllTickets from '../views/Allticket.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    // path: "/Allticket",
    // name: "All-tickets",
    // component: AllTickets,
  },
  {
    path: "/Allticket/id",
    name: "Ticket-details",
    component: () => import("../components/Tickets"),
  },
  {
    path: "/Drafts",
    name: "TicketDraft",
    component: () => import("../components/shared/TicketDraft"),
  },
  {
    path: "/ViewTicket",
    name: "viewTicketDetail",
    component: () => import("../components/ViewTicket"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
