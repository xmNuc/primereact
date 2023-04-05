import React, { useState } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function IconDoc() {
  const [date, setDate] = useState<string | Date | Date[] | undefined | null>();
  const [date2, setDate2] = useState<string | Date | Date[] | null>(null);
  const [time, setTime] = useState(null);

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
      <Calendar value={date2} onChange={(e) => setDate2(e.value)} view="year" dateFormat="yy" />
      <Calendar value={time} onChange={(e) => setTime(e.value)} timeOnly />
    </div>
  );
}
