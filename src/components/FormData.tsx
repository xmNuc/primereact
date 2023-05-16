import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

interface FormData {
  input1: string;
  input2: string;
  input3: string;
  dropdown1: string;
  dropdown2: string;
  dropdown3: string;
  dropdown4: string;
}

const MyComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    input1: '',
    input2: '',
    input3: '',
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDropdownChange = (e: { originalEvent: Event; value: any }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="input1">Input 1:</label>
        <InputText id="input1" name="input1" value={formData.input1} onChange={handleInputChange} />
      </div>

      <div>
        <label htmlFor="input2">Input 2:</label>
        <InputText id="input2" name="input2" value={formData.input2} onChange={handleInputChange} />
      </div>

      <div>
        <label htmlFor="input3">Input 3:</label>
        <InputText id="input3" name="input3" value={formData.input3} onChange={handleInputChange} />
      </div>

      <div>
        <label htmlFor="dropdown1">Dropdown 1:</label>
        <Dropdown
          id="dropdown1"
          name="dropdown1"
          value={formData.dropdown1}
          options={/* opcje dla dropdown1 */}
          onChange={handleDropdownChange}
        />
      </div>

      <div>
        <label htmlFor="dropdown2">Dropdown 2:</label>
        <Dropdown
          id="dropdown2"
          name="dropdown2"
          value={formData.dropdown2}
          options={/* opcje dla dropdown2 */}
          onChange={handleDropdownChange}
        />
      </div>

      <div>
        <label htmlFor="dropdown3">Dropdown 3:</label>
        <Dropdown
          id="dropdown3"
          name="dropdown3"
          value={formData.dropdown3}
          options={/* opcje dla dropdown3 */}
          onChange={handleDropdownChange}
        />
      </div>

      <div>
        <label htmlFor="dropdown4">Dropdown 4:</label>
        <Dropdown
          id="dropdown4"
          name="dropdown4"
          value={formData.dropdown4}
          options={/* opcje dla dropdown4 */}
          onChange={handleDropdownChange}
        />
      </div>
    </div>
  );
};

export default MyComponent;