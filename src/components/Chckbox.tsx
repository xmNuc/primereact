import React, { useState } from 'react';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState<boolean | undefined>(false);

  return (
    <div className="card flex justify-content-center">
      <Checkbox
        onChange={(e: CheckboxChangeEvent) => setChecked(e.checked)}
        checked={checked ? checked : false}
      ></Checkbox>
    </div>
  );
}
