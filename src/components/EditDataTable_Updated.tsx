import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface IProduct {
  id: string | null;
  product_name: string | null;
  product_fa_code: string | null;
  product_alt_fa_code: string | null;
  other: string | null;
}

const initialProducts: IProduct[] = [
  {
    id: '123',
    product_name: 'Product 1',
    product_fa_code: 'fa-1',
    product_alt_fa_code: 'fa-2',
    other: 'asd',
  },
  {
    id: '456',
    product_name: 'Product 2',
    product_fa_code: 'fa-1_1',
    product_alt_fa_code: 'fa-2_2',
    other: 'asd_2',
  },
];

interface IDataTableProps<T> {
  value?: T;
  editable?: boolean;
  editMode?: string;
  children?: React.ReactNode;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts);

  const onProductFaCodeEdit = (rowData: IProduct, newValue: string) => {
    const updatedProducts = [...products];
    const productIndex = updatedProducts.findIndex((p) => p.id === rowData.id);
    updatedProducts[productIndex].product_fa_code = newValue;
    setProducts(updatedProducts);
  };

  const onProductAltFaCodeEdit = (rowData: IProduct, newValue: string) => {
    const updatedProducts = [...products];
    const productIndex = updatedProducts.findIndex((p) => p.id === rowData.id);
    updatedProducts[productIndex].product_alt_fa_code = newValue;
    setProducts(updatedProducts);
  };

  return (
    <DataTable value={products} editable={true} editMode="cell">
      <Column field="product_name" header="Product Name" />
      <Column
        field="product_fa_code"
        header="Product FA Code"
        editor={(props) => (
          <input
            type="text"
            value={props.rowData.product_fa_code || ''}
            onChange={(e) => onProductFaCodeEdit(props.rowData, e.target.value)}
          />
        )}
      />
      <Column
        field="product_alt_fa_code"
        header="Product Alt FA Code"
        editor={(props) => (
          <input
            type="text"
            value={props.rowData.product_alt_fa_code || ''}
            onChange={(e) => onProductAltFaCodeEdit(props.rowData, e.target.value)}
          />
        )}
      />
    </DataTable>
  );
};

export default App;
