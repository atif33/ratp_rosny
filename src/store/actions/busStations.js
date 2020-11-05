export const busStations = (stations) => {
    return {
        type: 'GET_ALL_STATIONS_BUS',
        payload: stations
    }
};

export const busScheduls = (schedules) => {
    return {
        type: 'GET_SCHEDULES_BUS',
        payload: schedules
    }
};

export const busSelectedNumber = (busSelected) => {
    return {
        type: 'BUS_SELECTED_NUMBER',
        payload: busSelected
    };
};

export const busesNumbers = (numbers) => {
    return {
        type: 'GET_ALL_BUSES',
        payload: numbers
    }
};

