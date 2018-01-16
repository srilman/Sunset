import * as React from 'react';
import { connect } from 'react-redux';

import createDates, { ISection } from './monthGen';
import * as styles from './styles.scss';

type Props = {
    date: Date,
    dates: ISection[],
};

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const MiniMonth = ({date, dates}: Props) => {
    const items = [];
    for (let i = 0; i < dates.length / 7; i++) {
        let isWeek = false;
        const internals = dates.slice(i * 7, (i + 1) * 7).map((item) => {
            if (item.isDay) { isWeek = true; }
            return <td key={item.day} id={item.isDay ? styles.selected : ''}>{item.day}</td>;
        });
        items.push(
            <tr key={i} className={isWeek ? styles.week : ''}>
                {internals}
            </tr>
        );
    }

    return (
        <div>
            <div id={styles.title}>
                {`${months[date.getMonth() - 1]} ${date.getFullYear()}`}
            </div>
            <table id={styles.days}>
                <tbody>
                    <tr>
                        <th>U</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>R</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                    {...items}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    date: state.selected.date,
    dates: createDates(state.selected.date),
});

export default connect(mapStateToProps)(MiniMonth);
