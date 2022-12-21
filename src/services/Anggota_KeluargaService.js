import http from '../http-common'

class Anggota_KeluargaService{

    create(data) {
        console.log(data)
        return http.post("/anggotakeluarga/insert", data);
    }
    getAll() {
        return http.get("/anggotakeluarga/getAll");
    }
    deleteAK(id) {
        return http.delete(`/anggotakeluarga/delete/${id}`);
    }
    
    updateAK(id, data) {
        return http.put(`/anggotakeluarga/update/${id}`, data);
    }

    getAKbyId(id) {
        return http.get(`/anggotakeluarga/getbyid/${id}`);
    }
    getAKbyIdAK(id_kk) {
        return http.get(`/anggotakeluarga/getakbyidak/${id_kk}`)
    }

    deleteAKbyIdAK(id_kk) {
        return http.delete(`/anggotakeluarga/deleteakbyidak/${id_kk}`)
    }
}

export default new Anggota_KeluargaService();