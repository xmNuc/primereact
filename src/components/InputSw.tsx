import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

export const InputSw = () => {
  const [checked1, setChecked1] = useState(false);

  return (
    <div>
      <div className="card">
        <h5>Input Switch</h5>
        <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
      </div>
    </div>
  );
};
