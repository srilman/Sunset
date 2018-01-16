import { Action } from 'redux';

export interface ISelectedState {
    date: Date;
    leftSidebar: boolean;
    enabledGoogle: boolean;
    authorizeGoogle: boolean;
}

const initial: ISelectedState = {
    date: new Date(2015, 2, 4),
    leftSidebar: true,
    enabledGoogle: false,
    authorizeGoogle: false,
};

const reducer = (state: ISelectedState = initial, action: Action) => {
    switch (action.type) {
        case 'ENABLE_GOOGLE_SUCCESS':
            return {
                ...state,
                enabledGoogle: true,
            };
        case 'AUTH_GOOGLE_SUCCESS':
            return {
                ...state,
                authorizeGoogle: true,
            };
        default:
            return state;
    }
};

export default reducer;
