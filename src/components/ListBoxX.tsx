import React, { useState } from 'react';
import { ListBox, ListBoxItemTemplateType } from 'primereact/listbox';
import { data } from './data';

export const ListBoxX = () => {
  const [selectedData, setSelectedData] = useState(null);

  const itemTemplate = (option: any) => {
    console.log(option.name);
    return <div>{option.name}</div>;
  };

  return (
    <div className="card">
      <ListBox
        value={selectedData}
        options={data}
        onChange={(e) => setSelectedData(e.value)}
        optionLabel="name"
        filter
        filterBy="name"
        style={{ width: '15rem' }}
        itemTemplate={itemTemplate}
      />
    </div>
  );
};
