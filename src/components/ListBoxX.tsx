import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { data, Idata } from './data';
import { v4 as uuidv4 } from 'uuid';

export const ListBoxX = () => {
  const [dataArr, setDataArr] = useState<Idata[]>(data);
  const [selectedData, setSelectedData] = useState<Idata[]>([]);
  console.log('dataArr', dataArr);
  console.log('Selected data before', selectedData);

  const handleRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, option: Idata) => {
    console.log('Selected data', selectedData);
    // e.stopPropagation();
    const newObj = {
      id: uuidv4(),
      name: 'NuC ' + Math.floor(Math.random() * 1000 * 200),
      price: 65,
      isins: ['1234', '1234', '1234', '1234'],
    };

    console.log(
      'Remove',
      setDataArr((prev) => prev.filter((obj) => obj.id !== option.id))
    );
    setDataArr((prev) => [...prev, newObj]);
  };

  const itemTemplate = (option: any) => {
    return (
      <div
        onClick={(e) => {
          handleRemove(e, option);
        }}
      >
        {option.name}
      </div>
    );
  };

  return (
    <div className="card">
      <ListBox
        value={selectedData}
        options={dataArr}
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
