import * as React from 'react';
import { FaBars, FaChevronLeft, FaChevronRight } from 'react-icons/lib/fa';
import { connect } from 'react-redux';

import * as styles from './styles.scss';

type Props = {
    left: boolean,
};

const Header = ({left}: Props) => (
    <header>
        <button
            type='button'
            className={`${left ? styles.selected : ''} ${styles.left}`}
        >
            <FaBars size={24}/>
        </button>
        <button type='button' className={styles.left}>Today</button>
        <button type='button' className={styles.left}><FaChevronLeft size={16} /></button>
        <button type='button' className={styles.left}><FaChevronRight size={16} /></button>
        <button type='button' className={styles.right}><FaBars size={24}/></button>
        <p id={styles.text}>Feb 1 - 7 2015</p>
    </header>
);

const mapStateToProps = (state: any) => ({
    left: state.selected.leftSidebar,
});

export default connect(mapStateToProps)(Header);
