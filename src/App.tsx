import React, { useRef, useState } from 'react';
import './App.css';
import 'primereact/resources/themes/arya-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { FileUploadDemo } from './components/Uploader';
import { InputSw } from './components/InputSw';
import { ListBoxX } from './components/ListBoxX';
import { PickListDemo } from './components/Pisclist';
import { AutoCompleteDemo } from './components/AutocompleteComp';
import { SunEditorComponent } from './components/SunEditorComponent';
import { InlineCalendar } from './components/inilneCalendar';

function App() {
  const [text, setText] = useState('');
  const toastRef: any = useRef();

  const onClickBtn = () => {
    text
      ? toastRef.current.show({ severity: 'info', summary: 'Success', detail: text })
      : toastRef.current.show({ severity: 'error', summary: 'Error', detail: 'Value is required' });
  };

  return (
    <div className="App p-input-filled">
      <header className="App-header">
        <InlineCalendar />
        <div>----------------------------------------------------------------------</div>
        <SunEditorComponent />
        <div>----------------------------------------------------------------------</div>
        <AutoCompleteDemo />
        <div>----------------------------------------------------------------------</div>
        <PickListDemo />
        <div>----------------------------------------------------------------------</div>
        <ListBoxX />
        <div>----------------------------------------------------------------------</div>
        <Toast ref={toastRef} />
        <FileUploadDemo />
        <span className="p-float-label">
          <InputText value={text} onChange={(e) => setText(e.target.value)} />
          <label htmlFor="input_text" className="p-component">
            Name
          </label>
        </span>
        {text}
        <br />
        <Button type="button" label="Submit" icon="pi pi-check" onClick={onClickBtn} />
      </header>
      <InputSw />
    </div>
  );
}

export default App;
