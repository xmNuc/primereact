import { useState } from 'react';
import { observer } from 'mobx-react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IProducts } from './models/products';
import { useProductsStore } from './stores/products-store';

const ProductsTable = observer(() => {
  const productsStore = useProductsStore();
  const [editingProducts, setEditingProducts] = useState<IProducts[]>([]);

  const onEditorValueChange = (props: any, value: any) => {
    const updatedProducts = [...editingProducts];
    updatedProducts[props.rowIndex][props.field] = value;
    setEditingProducts(updatedProducts);
  };

  const onProductEditorCancel = (props: any) => {
    setEditingProducts([]);
  };

  const onProductEditorSave = (props: any) => {
    const updatedProducts = [...productsStore.products];
    editingProducts.forEach((editedProduct) => {
      const index = updatedProducts.findIndex((product) => product.id === editedProduct.id);
      updatedProducts[index] = editedProduct;
    });
    productsStore.setProducts(updatedProducts);
    setEditingProducts([]);
  };

  const onEditorInit = (props: any) => {
    setEditingProducts((prevState) => [
      ...prevState,
      { ...props.rowData, [props.field]: props.rowData[props.field] || '' },
    ]);
  };

  const editorText = (field: string, props: any) => (
    <InputText
      type="text"
      value={editingProducts[props.rowIndex][field] || ''}
      onChange={(e) => onEditorValueChange(props, e.target.value)}
    />
  );

  return (
    <DataTable value={productsStore.products} editable={true}>
      <Column field="product_name" header="Product Name" />
      <Column
        field="product_fa_code"
        header="Product FA Code"
        editor={(props) => editorText('product_fa_code', props)}
        onEditorInit={onEditorInit}
      />
      <Column
        field="product_alt_fa_code"
        header="Product Alt FA Code"
        editor={(props) => editorText('product_alt_fa_code', props)}
        onEditorInit={onEditorInit}
      />
      <Column
        body={(rowData) => (
          <Button
            icon="pi pi-times"
            className="p-button-rounded p-button-danger"
            onClick={() => productsStore.deleteProduct(rowData)}
          />
        )}
      />
      <Column
        body={(rowData) => (
          <Button
            icon="pi pi-pencil"
            className="p-button-rounded p-button-info"
            onClick={() => onProductEditorSave(rowData)}
          />
        )}
      />
      <Column
        body={() => (
          <Button
            icon="pi pi-plus"
            className="p-button-rounded p-button-success"
            onClick={() => productsStore.addProduct()}
          />
        )}
      />
    </DataTable>
  );
});
