import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IAccounts } from '../../reducers/accounts';
import { IState } from '../../reducers/index';
import accountSelector from './accountSelector';
import * as styles from './styles.scss';

type Props = {
    accounts: IAccounts[]
    google: boolean,
    start: () => any,
    end: () => any,
};

class SettingsScreen extends React.PureComponent<Props> {
    public render() {
        const { google, accounts } = this.props;
        return (
            <div id={styles.settings} className={styles.modal}>
                <div className={styles.content}>
                    {accounts.map((item) => (
                        <div key={item.id}>{item.name} - {item.email} - {item.access_token}</div>
                    ))}
                    {!google
                        ? <button onClick={this.props.start}>Authorize Google</button>
                        : <button onClick={this.props.end}>Unauthorize Google</button>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    google: state.selected.authorizeGoogle,
    accounts: accountSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
    start: () => dispatch({type: 'AUTH_GOOGLE'}),
    end: () => dispatch({type: 'UNAUTH_GOOGLE'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
