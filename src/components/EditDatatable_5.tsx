import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IProducts } from './types';
import { useStore } from './store';

const ProductsTable: React.FC = observer(() => {
  const { productsStore } = useStore();
  const [products, setProducts] = useState<IProducts[]>(productsStore.products);

  const onProductEditorValueChange = (props: any, product: IProducts) => {
    const updatedProducts = [...products];
    updatedProducts[products.findIndex((p) => p.id === product.id)] = {
      ...product,
      [props.field]: props.value,
    };
    setProducts(updatedProducts);
  };

  const onSave = async () => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(products),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onProductEditorKeyDown = (event: any, product: IProducts) => {
    if (event.key === 'Enter') {
      const updatedProducts = [...products];
      updatedProducts[products.findIndex((p) => p.id === product.id)] = product;
      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      <DataTable value={products} editable editMode="cell" onValueChange={setProducts}>
        <Column field="product_name" header="Product Name" />
        <Column
          field="product_fa_code"
          header="Product FA Code"
          body={(rowData: IProducts) => (
            <InputText
              value={rowData.product_fa_code}
              onChange={(e) => onProductEditorValueChange(e.target, rowData)}
              onKeyDown={(e) => onProductEditorKeyDown(e, rowData)}
            />
          )}
        />
        <Column
          field="product_alt_fa_code"
          header="Product Alt FA Code"
          body={(rowData: IProducts) => (
            <InputText
              value={rowData.product_alt_fa_code}
              onChange={(e) => onProductEditorValueChange(e.target, rowData)}
              onKeyDown={(e) => onProductEditorKeyDown(e, rowData)}
            />
          )}
        />
      </DataTable>
      <Button label="Save" className="p-mt-2" onClick={onSave} />
    </div>
  );
});

export default ProductsTable;
