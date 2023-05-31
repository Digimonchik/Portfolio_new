import {makeAutoObservable} from "mobx";   


import {AuthService} from "../Projects/TodoWithAuth/src/services/AuthService"




export default class AuthStore {
    user = {}
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }
    

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(login, password) {

        try {
            const response = await AuthService.login(login, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(login, password) {

        console.log(login, password)
        try {
            const response = await AuthService.registration(login, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const response = await AuthService.checkUser()
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } 
    }
}