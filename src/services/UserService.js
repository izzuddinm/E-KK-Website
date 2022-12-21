import http from '../http-common'

class UserService {
    create(data) {
        return http.post("/user/insert", data);
    }

    login(data) {
        return http.post("/user/login", data);
    }

}

export default new UserService();