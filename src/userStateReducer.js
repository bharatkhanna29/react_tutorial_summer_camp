const initialUserState = [
    {
      "Name": "Pranav Bansal",
      "College": "LPU"
    },
    {
      "Name": "Satish Kumar",
      "College": "University College of engineering and technology "
    },
    {
      "Name": "Prerna Choudhary",
      "College": "KIET"
    }
];

const userStateReducer = (state, action) => {
    switch (action.type) {
        case "delete": 
            return state.filter(user => user.Name !== action.name)
        case "insert":
            return [
                ...state,
                {
                    "Name": action.name,
                    "College": action.college
                }
            ]
        case "edit": 
            state.filter(user => user.Name === action.name)[0][action.property] = action.newValue
            return [...state]
        default: 
            console.log("Not supported")
    }
}

export {
    initialUserState,
    userStateReducer
}
