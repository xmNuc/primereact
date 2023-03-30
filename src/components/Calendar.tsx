import React, { useState } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function IconDoc() {
  const [date, setDate] = useState<string | Date | Date[] | undefined | null>();

  return (
    <div className="card flex justify-content-center">
      <Calendar id="icon" value={date} onChange={(e) => setDate(e.value)} showIcon />
      <Calendar
        value={date}
        onChange={(e: CalendarChangeEvent) => setDate(e.value)}
        inline
        showWeek
        selectionMode="multiple"
        readOnlyInput
      />
    </div>
  );
}
