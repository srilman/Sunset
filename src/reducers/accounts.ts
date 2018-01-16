import { AnyAction } from 'redux';

export interface IAccounts {
    id: string;
    email: string;
    name: string;
    image: string;
    access_token: string;
}

export interface IAccountsState {
    byEmail: {
        [id: string]: IAccounts;
    };
    numAccounts: number;
}

const initial: IAccountsState = {
    byEmail: {},
    numAccounts: 0,
};

const reducer = (state: IAccountsState = initial, action: AnyAction) => {
    switch (action.type) {
        case 'AUTH_GOOGLE_SUCCESS':
            return {
                ...state,
                byEmail: {
                    ...state.byEmail,
                    [action.userInfo.email]: action.userInfo,
                },
                numAccounts: state.numAccounts + 1,
            };
        default:
            return state;
    }
};

export default reducer;
