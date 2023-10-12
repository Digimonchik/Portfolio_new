import {api} from '../http/index'

class AuthService {
    static async login(login, password) {
    try {
        return api.post('/login', {login, password})}
    catch(error) {
        console.log(error.response.data)

    }
    }

    static async registration(login, password) {
        try {
        return api.post('/registration', {login, password})}
        catch(e) {
            console.log(e)
        }
    }

    // static async logout() {
    //     return $api.post('/logout')
    // }

    static async checkUser() {
        return api.get('/refresh', {withCredentials: true})
    }
}

export {AuthService}