import React, { useState } from 'react';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Chips } from 'primereact/chips';
import { Knob } from 'primereact/knob';
import { Nullable } from 'primereact/ts-helpers';

export const InputSw = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checked1, setChecked1] = useState<boolean>(false);
  const [value, setValue] = useState<any>([]);
  // const [value1, setValue1] = useState<number>();

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
        <Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
        {/* <Knob value={value1} onChange={(e) => setValue1(e.value)} /> */}
      </div>
      <Button label="ClickMe" onClick={handleClick} />
    </div>
  );
};
