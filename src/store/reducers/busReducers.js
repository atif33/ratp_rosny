const initialState = {
    stations: [{}],
    schedules: [{}],
    busNumbers: [{}],
    busSelected: 0
};

const busReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_STATIONS_BUS':
            return {
                ...state,
                stations: action.payload
            };
        case 'GET_SCHEDULES_BUS':
            return {
                ...state,
                schedules: action.payload

            };
        case 'BUS_SELECTED_NUMBER':
            return {
                ...state,
                busSelected: action.payload
            };
        case 'GET_ALL_BUSES':
            return {
                ...state,
                busNumbers: action.payload
            };

        default:
            return state;

    }

};

export default busReducer;
