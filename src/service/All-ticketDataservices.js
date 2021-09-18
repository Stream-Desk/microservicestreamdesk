import http from "../http-ticket";

class AllTicketsDataService {
  getAll() {
    return http.get("/api/Tickets/BO/All");
  }

  get(id) {
    return http.get(`/api/Tickets/${id}`);
  }

 create(data) {
    return http.post("/api/Tickets", data);
  }

 

  update(id, data) {
    return http.put(`/api/Tickets/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/Tickets/BO/Delete/${id}`);
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

  getFiles(id) {
    return http.get(`/api/Files/${id}`);
  }
}

export default new AllTicketsDataService();
