import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

interface IProduct {
  id: string | null;
  product_name: string | null;
  product_fa_code: string | null;
  product_alt_fa_code: string | null;
  other: string | null;
}

const products: IProduct[] = [
  {
    id: '123',
    product_name: 'name',
    product_fa_code: 'fa-1',
    product_alt_fa_code: 'fa-2',
    other: 'asd',
  },
  {
    id: '456',
    product_name: 'name2',
    product_fa_code: 'fa-1_1',
    product_alt_fa_code: 'fa-2_2',
    other: 'asd_2',
  },
];

const App = () => {
  const [productData, setProductData] = useState<IProduct[]>(products);

  const onProductFaCodeEditor = (rowData: IProduct) => {
    return (
      <InputText
        type="text"
        value={rowData.product_fa_code || ''}
        onChange={(e) => {
          const newProductData = productData.map((product) => {
            if (product.id === rowData.id) {
              return { ...product, product_fa_code: e.target.value };
            } else {
              return product;
            }
          });
          setProductData(newProductData);
        }}
      />
    );
  };

  const onProductAltFaCodeEditor = (rowData: IProduct) => {
    return (
      <InputText
        type="text"
        value={rowData.product_alt_fa_code || ''}
        onChange={(e) => {
          const newProductData = productData.map((product) => {
            if (product.id === rowData.id) {
              return { ...product, product_alt_fa_code: e.target.value };
            } else {
              return product;
            }
          });
          setProductData(newProductData);
        }}
      />
    );
  };

  const onSaveButtonClick = () => {
    // save product data
    console.log(productData);
  };

  return (
    <>
      <DataTable value={productData} editMode="row">
        <Column field="product_name" header="Product Name" />
        <Column field="product_fa_code" header="Product FA Code" editor={onProductFaCodeEditor} />
        <Column
          field="product_alt_fa_code"
          header="Product Alt FA Code"
          editor={onProductAltFaCodeEditor}
        />
      </DataTable>
      <Button label="Save" onClick={onSaveButtonClick} />
    </>
  );
};

export default App;
