import {makeAutoObservable} from "mobx";
import {TodoService} from "../Projects/TodoWithAuth/src/services/TodoService"



export default class TodoStore {
    todo = []

    constructor() {
        makeAutoObservable(this);
    }
    

    setTodos(todos) {
        this.todo = todos
    }

    async createTodo(userId, text) {
        try {
            await TodoService.createTodo(userId, text);
            this.getTodos(userId)
            
        } catch (e) {
            console.log('ошибка');
        }
    }

    async getTodos(userId) {

        try {
            const response = await TodoService.getTodos(userId)
            this.todo = response.data
        }

        catch(e) {
            console.log('ашибка при загрузка данных')
        }
        finally {
            console.log('flflf')
        }
    }

    async deleteTodo(todoId) {
        try {
            await TodoService.deleteTodo(todoId)
        }
        catch(e) {

        }
    }
}