import http from "../axios"

class TicketService {
  create(data) {
    return http.post("/api/Tickets", data);
  }
}

export default new TicketService();
