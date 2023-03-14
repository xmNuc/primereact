import React, { useState } from 'react';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

export const InputSw = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checked1, setChecked1] = useState<boolean>(false);

  const handleClick = () => {
    console.log('test');
  };

  return (
    <div>
      <div className="card">
        <h5>Input Switch</h5>
        <InputSwitch
          checked={checked1}
          onChange={(e: InputSwitchChangeEvent) => setChecked1(e.value ?? false)}
        />
        <Checkbox onChange={(e) => setChecked(e.checked ?? false)} checked={checked}></Checkbox>
      </div>
      <Button label="ClickMe" onClick={handleClick} />
    </div>
  );
};
