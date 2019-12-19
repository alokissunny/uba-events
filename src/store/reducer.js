var initState = {
    events : [],
    select : []
}

export default function reducer(state = initState, action) {
    switch(action.type) {
        case 'INIT' : 
            return Object.assign({},state,{events : action.data});
        case 'SELECT' :
            return Object.assign({},state,{select : action.data});
            default:
                    return state
    }

}

