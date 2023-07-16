const initialUserState = [];

const userStateReducer = (state, action) => {
    switch (action.type) {
        case "edit": 
            state.filter(user => user.name === action.name)[0][action.property] = action.newValue
            return [...state]
        case "create":
            return [...action.data]
        default: 
            console.log("Not supported")
    }
}

export {
    initialUserState,
    userStateReducer
}
