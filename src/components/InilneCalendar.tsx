import React, { useState } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';

export const InlineCalendar = () => {
  const [date, setDate] = useState<Nullable<string | Date | Date[]>>(null);

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
