import http from "../http-ticket";

class DraftsDataService {
  getAll() {
    return http.get("/api/Drafts");
  }

  get(id) {
    return http.get(`/api/Drafts/${id}`);
  }

  create(data) {
    return http.post("/api/Drafts", data);
  }

  update(id, data) {
    return http.put(`/api/Drafts/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/Drafts/${id}`);
  }


  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/api/Tickets/Upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/api/Tickets/Download");
  }
}

export default new DraftsDataService();
