export function daysInMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

export function startOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

export interface ISection {
    day: number;
    section: -1 | 0 | 1;
    isDay: boolean;
}

export default function createDates(date: Date): ISection[] {
    const start = startOfMonth(date);
    const diff = start.getDay();
    let i;

    const prevMonthDays: ISection[] = [];
    for (i = 0; i < diff; i++) {
        prevMonthDays.push({
            day: start.getDate() - (diff - i),
            section: -1,
            isDay: false,
        });
    }

    const currentMonthDays: ISection[] = [];
    for (i = 1; i < daysInMonth(date) + 1; i++) {
        currentMonthDays.push({
            day: i,
            section: 0,
            isDay: date.getDate() === i,
        });
    }

    const daysAdded = prevMonthDays.length + currentMonthDays.length - 1;
    const nextMonthDays: ISection[] = [];
    i = 1;
    while ((daysAdded + i) % 7 !== 0) {
        nextMonthDays.push({
            day: currentMonthDays[currentMonthDays.length - 1].day + i,
            section: 1,
            isDay: false,
        });
        i = i + 1;
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
}
