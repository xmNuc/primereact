import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IProducts } from './types';
import productsStore from './productsStore';

const ProductsTable: React.FC = observer(() => {
  const [editedProducts, setEditedProducts] = useState<IProducts[]>([]);

  const handleProductEdit = (e: any) => {
    const { field, value } = e;
    const editedProduct = { ...e.data, [field]: value };
    setEditedProducts([...editedProducts, editedProduct]);
  };

  const onProductEditorCancel = () => {
    setEditedProducts([]);
  };

  const onProductEditorSave = () => {
    productsStore.saveProducts(editedProducts);
    setEditedProducts([]);
  };

  return (
    <DataTable
      value={productsStore.products}
      editable
      editMode="cell"
      onRowEditInit={onProductEditorCancel}
      onRowEditCancel={onProductEditorCancel}
      onRowEditSave={onProductEditorSave}
      rowEditorValidator={(row) => {
        const { product_fa_code, product_alt_fa_code } = row.data;
        if (!product_fa_code || !product_alt_fa_code) {
          return { product_fa_code: 'Field is required', product_alt_fa_code: 'Field is required' };
        }
        return {};
      }}
    >
      <Column field="product_name" header="Product Name" />
      <Column
        field="product_fa_code"
        header="Product FA Code"
        editor={(props) => (
          <input
            type="text"
            value={props.rowData['product_fa_code']}
            onChange={(e) =>
              handleProductEdit({ ...props, field: 'product_fa_code', value: e.target.value })
            }
          />
        )}
      />
      <Column
        field="product_alt_fa_code"
        header="Product Alt FA Code"
        editor={(props) => (
          <input
            type="text"
            value={props.rowData['product_alt_fa_code']}
            onChange={(e) =>
              handleProductEdit({ ...props, field: 'product_alt_fa_code', value: e.target.value })
            }
          />
        )}
      />
    </DataTable>
  );
});

export default ProductsTable;
