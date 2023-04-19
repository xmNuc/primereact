import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { Nullable } from 'primereact/ts-helpers';

export default function LocaleDemo() {
  const [date, setDate] = useState<Nullable<string | Date | Date[]>>(null);

  addLocale('pl', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ],
    today: 'Hoy',
    clear: 'Limpiar',
  });

  return (
    <div className="card flex justify-content-center">
      <Calendar value={date} onChange={(e) => setDate(e.value)} locale="pl" />
    </div>
  );
}
