import http from "../http-ticket";

class AllTicketsDataService {
  getAll() {
    return http.get("/api/Tickets/BO/All");
  }

  get(id) {
    return http.get(`/api/Tickets/${id}`);
  }

  create(values) {
    return http.post("/api/Tickets", values);
  }

  createComment(data) {
    return http.post("/api/Comments", data);
  }

  update(id, values) {
    return http.put(`/api/Tickets/${id}`, values);
  }

  delete(id, values) {
    return http.put(`/api/Tickets/BO/Delete/${id}`, values);
  }

  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("files", file);
    console.log(formData);

    return http.post("/api/Files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles(fileId) {
    return http.get(`/api/Files/${fileId}`);
  }
}

export default new AllTicketsDataService();
