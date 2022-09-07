import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';

export const InputSw = () => {
  const [checked1, setChecked1] = useState(false);

  const handleClick = () => {
    console.log('test');
  };

  return (
    <div>
      <div className="card">
        <h5>Input Switch</h5>
        <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
      </div>
      <Button label="ClickMe" onClick={handleClick} />
    </div>
  );
};
