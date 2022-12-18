import http from '../http-common'

class UserService {
    create(data) {
        return http.post("/user/insert", data);
    }
}

export default new UserService();