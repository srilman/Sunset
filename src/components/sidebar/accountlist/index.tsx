import * as React from 'react';

import * as styles from './styles.scss';

const AccountList = () => (
    <div id={styles.account}>
        <p>Google (jordan@venturebeat.com)</p>
        <ul>
            <li>
                <span>jordan@venturebeat.com</span>
                <input type='checkbox' />
            </li>
            <li>
                <span>Dylan Tweeny (VB)</span>
                <input type='checkbox' />
            </li>
            <li>
                <span>VB Editorial Coverage Calendar</span>
                <input type='checkbox' />
            </li>
        </ul>
    </div>
);

export default AccountList;
