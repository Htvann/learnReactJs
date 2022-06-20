const initState = {
    users: [
        {id: 1, name: 'Jame'},
        {id: 2, name: 'David'},
    ],
    post: []
}
const rootReducer= ( state = initState, action) =>{
    switch (action.type){
        case "DELETE_USER":
            console.log('hello', action)
            let users = state.users;
            users= users.filter(item =>item.id !== action.payload.id)
            return {
                ...state, users
            }
        case "ADD_USER":
            let id = Math.floor(Math.random() * 100000)
            let user = {id: id, name: `ramdom + ${id}`}

            return {
                ...state, users: [...state.users, user]
            }


        default: return state;
    }
}

export default rootReducer;