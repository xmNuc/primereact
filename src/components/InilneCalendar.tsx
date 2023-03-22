import React, { useState } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export const InlineCalendar = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="card flex justify-content-center">
      <Calendar
        value={date}
        onChange={(e: CalendarChangeEvent) => setDate(e.value)}
        inline
        showWeek
      />
    </div>
  );
};
