import { addLocale } from 'primereact/api';
import { Calendar, CalendarDateTemplateEvent } from 'primereact/calendar';
import './css/calendarChatbot.css';

const arr = [
  {
    id: '123',
    n_date: '2023-04-01',
    p_date: '2023-04-02',
  },
  {
    id: '1234',
    n_date: '2023-04-05',
    p_date: '2023-04-06',
  },
];

const newDatesArray = arr.map(({ n_date }) => {
  const [year, month, day] = n_date.split('-');
  return [parseInt(day), parseInt(month), parseInt(year)];
});

console.log(newDatesArray); // [[1, 4, 2023], [5, 4, 2023]]

function dateTemplate(date: CalendarDateTemplateEvent): React.ReactNode {
  const weekend = date.day === 1 || date.day === 6;
  const className = weekend ? 'weekend' : '';
  console.log(date);
  return (
    <div className={className}>
      <span>{date.day}</span>
    </div>
  );
}

addLocale('all', {
  firstDayOfWeek: 1,
  dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  monthNames: [
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
  ],
  today: 'Today',
  clear: 'Clear',
});

export const CalendarChatbot = () => {
  return <Calendar dateTemplate={dateTemplate} locale="all" inline />;
};
