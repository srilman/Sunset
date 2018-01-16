import { createSelector } from 'reselect';

const eventsSelector = (state: any) => state.events.eventsById;

const eventsList = (eventsById: any) => {
    return Object.values(eventsById);
};

export default createSelector(
    eventsSelector,
    eventsList
);
