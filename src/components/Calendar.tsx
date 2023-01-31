import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

export default function IconDoc() {
  const [date, setDate] = useState<Date | Date[] | undefined>();

  return (
    <div className="card flex justify-content-center">
      <Calendar id="icon" value={date} onChange={(e) => setDate(e.value)} showIcon />
    </div>
  );
}
