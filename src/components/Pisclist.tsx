import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { data } from './data';

const PickListDemo = () => {
  const [source, setSource] = useState([]);
  const [target, setTarget] = useState([]);

  const onChange = (event: {
    source: React.SetStateAction<never[]>;
    target: React.SetStateAction<never[]>;
  }) => {
    setSource(event.source);
    setTarget(event.target);
  };

  const itemTemplate = (item: any) => {
    return (
      <div className="product-item">
        <div className="product-list-detail">
          <h5 className="mb-2">{item.name}</h5>
          <i className="pi pi-tag product-category-icon"></i>
          <span className="product-category">{item.category}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="picklist-demo">
      <div className="card">
        <PickList
          source={source}
          target={target}
          itemTemplate={itemTemplate}
          sourceHeader="Available"
          targetHeader="Selected"
          sourceStyle={{ height: '342px' }}
          targetStyle={{ height: '342px' }}
          onChange={onChange}
          //   filterBy="name"
          //   sourceFilterPlaceholder="Search by name"
          //   targetFilterPlaceholder="Search by name"
        />
      </div>
    </div>
  );
};
