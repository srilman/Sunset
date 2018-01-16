import { createSelector } from 'reselect';
import { IState } from '../../reducers/index';

const accountsSelector = (state: IState) => state.accounts.byEmail;

const accountsList = (accountsByEmail: object) => {
    return Object.values(accountsByEmail);
};

export default createSelector(
    accountsSelector,
    accountsList
);
