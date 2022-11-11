import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { data, Idata } from './data';
import { v4 as uuidv4 } from 'uuid';

export const ListBoxX = () => {
  const [dataArr, setDataArr] = useState<Idata[]>(data);
  const [selectedData, setSelectedData] = useState<Idata[]>([]);
  // console.log('dataArr', dataArr);
  // console.log('Selected data before', selectedData);

  const handleRemove = (option: Idata) => {
    // const handleRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, option: Idata) => {
    // e.stopPropagation();
    const numberGenerator = () => Math.floor(Math.random() * 1000 * 200);
    const newObj = {
      id: uuidv4(),
      name: 'NuC ' + numberGenerator(),
      price: numberGenerator(),
      isins: [
        `${numberGenerator()}`,
        `${numberGenerator()}`,
        `${numberGenerator()}`,
        `${numberGenerator()}`,
      ],
    };
    const filteredData = dataArr.filter((obj) => obj.id !== option.id);
    setDataArr([...filteredData, newObj]);

    // setDataArr((prev) => prev.filter((obj) => obj.id !== option.id));
    // setDataArr((prev) => [...prev, newObj]);
  };

  const itemTemplate = (option: any) => {
    return (
      <div
        onClick={(e) => {
          handleRemove(option);
          // handleRemove(e, option);
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
