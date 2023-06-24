import {api} from '../http/index'

class TestService {
    
    static async test() {
        return api.post('/test', {})
    }
}

export {TestService}