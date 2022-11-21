import React, { useState, useEffect } from 'react';
import { PickList, PickListChangeParams } from 'primereact/picklist';
import { data, Idata } from './data';

export const PickListDemo = () => {
  const [source, setSource] = useState<Idata[]>([]);
  const [target, setTarget] = useState<Idata[]>([]);

  useEffect(() => {
    setSource(data);
  }, []);

  const onChange = (e: PickListChangeParams) => {
    setSource(e.source);
    setTarget(e.target);
  };

  const itemTemplate = (item: { name: string }) => {
    return (
      <div className="product-item">
        <h5 className="mb-2">{item?.name}</h5>
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
        />
      </div>
    </div>
  );
};
