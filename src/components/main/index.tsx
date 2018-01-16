import * as React from 'react';
import { connect } from 'react-redux';

import Event from '../event/index';
import Header from '../header/index';
import Selector from './eventsSelector';
import * as styles from './styles.scss';

type Props = {
    events: any[],
};

const stuff = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Main = ({events}: Props) => (
    <div id={styles.main}>
        <Header />
        <div id={styles.calendar}>
            <div id={styles.date}>
                <div className={styles.row}>
                    <div className={styles.label}>EST</div>
                    <div className={styles.data}>Wed 2/2</div>
                </div>
            </div>
            <div id={styles.allday}>
                <div className={styles.row}>
                    <div className={`${styles.label} ${styles.inside}`} />
                    <div className={styles.data} />
                </div>
            </div>
            <div id={styles.mainsection}>
                <div id={styles.times}>
                    <div id={styles.inner}>
                        <div className={styles.label} />
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                            <div className={styles.label}>{item} AM</div>
                        ))}
                        {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                            <div className={styles.label}>{item} PM</div>
                        ))}
                    </div>
                </div>
                <div id={styles.eventarea}>
                    {stuff.map(() => (
                        <div className={styles.hour}>
                            <div className={styles.half} />
                        </div>
                    ))}
                    {events.map((event: any) => (
                        <Event key={event.id} {...event} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state: any) => ({
    events: Selector(state),
});

export default connect(mapStateToProps)(Main);
