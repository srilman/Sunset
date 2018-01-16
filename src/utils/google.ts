import { all, put, takeEvery } from 'redux-saga/effects';

const CLIENT_ID = '880049561622-cj3pssirdivdkoshrh4tfks61kqgp0ou.apps.googleusercontent.com';
// const CLIENT_SECRET = 'mfD2_dobT0ZIhQDBALOTQtrz';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar';

function* initClient() {
    try {
        // Might want to separate later on
        yield gapi.load('client:auth2', () => {
            gapi.client.init({
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            });
        });
        yield put({type: 'ENABLE_GOOGLE_SUCCESS'});
    } catch (e) {
        console.log('Didnt work');
    }
}

function* initClientLoad() {
    yield takeEvery('ENABLE_GOOGLE', initClient);
}

function* authorizeClient() {
    try {
        yield gapi.auth2.getAuthInstance().signIn();
        const user = yield gapi.auth2.getAuthInstance()
            .currentUser.get();
        const profile = user.getBasicProfile();
        yield put({
            type: 'AUTH_GOOGLE_SUCCESS',
            userInfo: {
                access_token: user.getAuthResponse().access_token,
                id: profile.getId(),
                email: profile.getEmail(),
                name: profile.getName(),
                image: profile.getImageUrl(),
            },
        });
        yield put
    } catch (e) {
        console.log('Didnt work auth');
    }
}

function* authorizeClientLoad() {
    yield takeEvery('AUTH_GOOGLE', authorizeClient);
}

function* unauthorizeClient() {
    try {
        yield gapi.auth2.getAuthInstance().signOut();
        yield put({type: 'UNAUTH_GOOGLE_SUCCESS'});
    } catch (e) {
        console.log('Didnt work unauth');
    }
}

function* unauthorizeClientLoad() {
    yield takeEvery('UNAUTH_GOOGLE', unauthorizeClient);
}

export default function* root() {
    yield all([
        initClientLoad(),
        authorizeClientLoad(),
        unauthorizeClientLoad(),
    ]);
}
