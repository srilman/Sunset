import * as React from 'react';
import * as styles from './styles.scss';

type Props =  {
    name: string,
    start: number,
    end: number,
    location: string,
};

const Event = ({name, start, end, location}: Props) => {
    const eventLoc = {
        height: `${(end - start) * 60 - 5}px`,
        top: `${start * 60}px`,
    };

    return (
        <div className={styles.event} style={eventLoc}>
            <div className={styles.border} />
            <div className={styles.title}>{name} - {start} - {location}</div>
        </div>
    );
};

export default Event;
