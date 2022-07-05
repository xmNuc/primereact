import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import 'primereact/resources/themes/arya-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function App() {
  const [text, setText] = useState('');
  const toastRef: any = useRef();

  const onClickBtn = () => {
    text
      ? toastRef.current.show({ severity: 'info', summary: 'Success', detail: text })
      : toastRef.current.show({ severity: 'error', summary: 'Error', detail: 'Value is required' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Toast ref={toastRef} />
        <InputText value={text} onChange={(e) => setText(e.target.value)} />
        {text}
        <br />
        <Button type="button" label="Submit" icon="pi pi-check" onClick={onClickBtn} />
      </header>
    </div>
  );
}

export default App;
