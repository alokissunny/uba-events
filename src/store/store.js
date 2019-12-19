import { createStore } from 'redux'
import reducer from './reducer'
var initState = {
    events : [],
    select : []
}
export const store = createStore(reducer,initState);