const initialState = {
    login: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                login: false,
            };
        default:
            return state;
    }
}
