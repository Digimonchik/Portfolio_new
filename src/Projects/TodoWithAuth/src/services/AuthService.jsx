import {api} from '../http/index'

class AuthService {
    
    static async login(login, password) {
        return api.post('/login', {login, password})
    }

    static async registration(login, password) {
        try {
        return api.post('/registration', {login, password})}
        catch(e) {
            console.log('ошибка')
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