import http from '../http-common'

class Kartu_KeluargaService{

    create(data) {
        return http.post("/kartukeluarga/insert", data);
    }
    getAll() {
        return http.get("/kartukeluarga/getAll");
    }
    deleteKK(id) {
        return http.delete(`/kartukeluarga/delete/${id}`);
    }
    
    updateKK(id, data) {
        return http.put(`/kartukeluarga/update/${id}`, data);
    }

    getKKbyId(id) {
        return http.get(`/kartukeluarga/getkkbyid/${id}`);
    }
}

export default new Kartu_KeluargaService();