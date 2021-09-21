import http from "../http-ticket";

class DraftsDataService {
  getAll() {
    return http.get("/api/Drafts");
  }

  get(id) {
    return http.get(`/api/Drafts/${id}`);
  }

  create(values) {
    return http.post("/api/Drafts", values);
  }

  update(id, values) {
    return http.put(`/api/Drafts/${id}`, values);
  }

  delete(id) {
    return http.delete(`/api/Drafts/${id}`);
  }
}

export default new DraftsDataService();
