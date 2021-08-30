import http from "../http-ticket";

class AllTicketsDataService {
    getAll() {
        return http.get("/api/Tickets");

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
        return http.delete(`/api/Tickets/${id}`);

    }

    // deleteAll() {
    //     return http.delete(`/tickets`);
    // }

    // findByDate(date) {
    //     return http.get(`/tickets?date=${date}`);
    // }

    upload(file, onUploadProgress) {
        let formData = new FormData();

       
        formData.append("file", file);
     console.log(formData);

        return http.post("/api/Tickets/Upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress
        });
    }

    getFiles() {
        return http.get("/api/Tickets/Download");
    }
}

export default new AllTicketsDataService();