import React, { useState } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function InlineDemo() {
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
}
