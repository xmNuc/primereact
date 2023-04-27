import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IProducts } from './IProducts';

interface IProps {
  products: IProducts[];
}

const ProductTable: React.FC<IProps> = ({ products }) => {
  const [updatedProducts, setUpdatedProducts] = useState<IProducts[]>(products);

  const onProductUpdate = (event: any) => {
    const updatedProduct = { ...event.data };
    updatedProduct[event.field] = event.value;
    const index = updatedProducts.findIndex((p) => p.id === updatedProduct.id);
    const newProducts = [...updatedProducts];
    newProducts[index] = updatedProduct;
    setUpdatedProducts(newProducts);
  };
  const productEditor = (props: any, field: string) => {
    return (
      <InputText
        type="text"
        value={props.rowData[field]}
        onChange={(e) =>
          onProductUpdate({ data: props.rowData, field: field, value: e.target.value })
        }
      />
    );
  };

  return (
    <DataTable value={updatedProducts}>
      <Column field="product_name" header="Product Name" />
      <Column
        field="product_fa_code"
        header="Product FA Code"
        editor={(props) => productEditor(props, 'product_fa_code')}
      />
      <Column
        field="product_alt_fa_code"
        header="Product Alt FA Code"
        editor={(props) => productEditor(props, 'product_alt_fa_code')}
      />
    </DataTable>
  );
};

export default ProductTable;
