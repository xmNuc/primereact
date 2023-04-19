import { addLocale } from 'primereact/api';
import { Calendar, CalendarDateTemplateEvent } from 'primereact/calendar';
import './css/calendarChatbot.css';

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
