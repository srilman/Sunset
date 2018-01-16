import { Action } from 'redux';

interface IEvents {
    id: number;
    name: string;
    start: number;
    end: number;
    location: string;
}

export interface IEventsState {
    eventsById: {
        [id: number]: IEvents
    };
    numEvents: number;
}

const initial: IEventsState = {
    eventsById: {
        100: {
            id: 100,
            name: 'Philosophy Class',
            start: 1,
            end: 2,
            location: 'HH1001',
        },
        101: {
            id: 101,
            name: 'Chemistry Class',
            start: 2,
            end: 3,
            location: 'DH1001',
        },
        102: {
            id: 102,
            name: 'Science Class',
            start: 4,
            end: 5.5,
            location: 'HH1102',
        },
        103: {
            id: 103,
            name: 'CS Class',
            start: 8,
            end: 8.75,
            location: 'GHC 1102',
        },
    },
    numEvents: 4,
};

const reducer = (state: IEventsState = initial, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
