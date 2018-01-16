import * as React from 'react';
import { GoGear, GoSearch } from 'react-icons/lib/go';

import AccountList from './accountlist/index';
import MiniMonth from './minimonth/index';
import * as styles from './styles.scss';

const Sidebar = () => (
    <React.Fragment>
        <div id={styles.sidebar}>
            <div id={styles.search}>
                <div className={styles.inputWrapper}>
                    <label htmlFor={styles.stuff} className={styles.inputIcon}><GoSearch size={12} /></label>
                    <input id={styles.stuff} placeholder='Search' />
                </div>
                <GoGear size={26} className={styles.settings}/>
            </div>
            <div id={styles.main}>
                <p>Calendar</p>
                <MiniMonth />
                <p>Accounts</p>
                <AccountList />
            </div>
            <div id={styles.copyright}>Copyright Info - Data</div>
        </div>
        <div className={styles.line} />
    </React.Fragment>
);

export default Sidebar;
