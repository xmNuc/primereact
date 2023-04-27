import { observer } from 'mobx-react-lite';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IProducts } from './models/IProducts';
import { useObservable } from 'mobx-react-lite';

interface IProductDataTableProps {
  products: IProducts[];
}

const ProductDataTable = observer(({ products }: IProductDataTableProps) => {
  const editedProducts = useObservable<IProducts[]>(products);

  const onProductEditorSave = (rowData: IProducts) => {
    // update the editedProducts array
    const index = editedProducts.findIndex((p) => p.id === rowData.id);
    if (index !== -1) {
      editedProducts[index] = { ...rowData };
    }
  };

  const productEditor = (props: any, field: string) => {
    return (
      <InputText
        type="text"
        value={props.rowData[field] || ''}
        onChange={(e) => {
          const updatedProduct = { ...props.rowData, [field]: e.target.value };
          onProductEditorSave(updatedProduct);
        }}
      />
    );
  };

  return (
    <DataTable value={editedProducts} editable>
      <Column field="product_name" header="Product Name" />
      <Column
        field="product_fa_code"
        header="Product FA Code"
        editor={(props: any) => productEditor(props, 'product_fa_code')}
      />
      <Column
        field="product_alt_fa_code"
        header="Product Alt FA Code"
        editor={(props: any) => productEditor(props, 'product_alt_fa_code')}
      />
      <Column
        body={() => (
          <Button
            onClick={() => {
              // make a copy of the editedProducts array and add the updated products
              const updatedProducts: IProducts[] = [];
              editedProducts.forEach((p) => {
                updatedProducts.push({ ...p });
              });
              // update the original products array with the updated products
              products.replace(updatedProducts);
            }}
            label="Save"
            className="p-button-success"
          />
        )}
      />
    </DataTable>
  );
});

export default ProductDataTable;
