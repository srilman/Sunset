import { combineReducers } from 'redux';

import accounts, { IAccountsState } from './accounts';
import events, { IEventsState } from './events';
import selected, { ISelectedState } from './selected';

export interface IState {
    events: IEventsState;
    selected: ISelectedState;
    accounts: IAccountsState;
}

export default combineReducers({
    events,
    selected,
    accounts,
});
