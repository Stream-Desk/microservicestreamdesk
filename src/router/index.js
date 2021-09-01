import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "AllTicket",
    component: () => import("../components/AllTicket.vue"),
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
