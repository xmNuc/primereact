import React, { useState } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';

export default function IconDoc() {
  const [date, setDate] = useState<Nullable<string | Date | Date[]>>();
  const [date2, setDate2] = useState<Nullable<string | Date | Date[]>>(null);
  const [time, setTime] = useState<Nullable<string | Date | Date[]>>(null);

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
      <Calendar value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
    </div>
  );
}
