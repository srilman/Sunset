import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Main from '../main/index';
import SettingsScreen from '../settings/index';
import Sidebar from '../sidebar/index';
import * as styles from './styles.scss';

type Props = {
    left: boolean,
    startGoogle: () => any,
};

class App extends React.PureComponent<Props> {
    public componentDidMount() {
        this.props.startGoogle();
    }

    public render() {
        const { left } = this.props;
        return (
            <React.Fragment>
                <div id={styles.app}>
                    {left && <Sidebar />}
                    <Main />
                </div>
                <SettingsScreen />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => ({
    left: state.selected.leftSidebar,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    startGoogle: () => dispatch({type: 'ENABLE_GOOGLE'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
