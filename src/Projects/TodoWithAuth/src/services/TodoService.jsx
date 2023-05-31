import {api} from '../http/index'

class TodoService {
    
    static async createTodo(userId, text) {
        return api.post('/createTodo', {userId, text} )
    }

    static async getTodos(userId) {
        return api.post('/getTodos', {userId})
    }

    static async deleteTodo(todoId) {
        return api.post('/deleteTodo', {todoId})
    }

}

export {TodoService}