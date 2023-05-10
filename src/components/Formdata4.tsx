import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import moment from 'moment';

interface FormData {
  input1: string;
  input2: string;
  input3: string;
  dropdown1: string;
  dropdown2: string;
  dropdown3: string;
  dropdown4: string;
  other: {
    oth1: string;
    oth: string;
  };
}

const MyComponent: React.FC = () => {
  const baseData = {
    field1: 'asdasd',
    input1: 'test1',
    input2: '11:00',
    input3: '15:00',
    dropdown1: 'droptest1',
    dropdown2: 'droptest2',
    dropdown3: 'droptest3',
    dropdown4: 'droptest4',
    other: { oth1: '1', oth: '2' },
  };

  const [formData, setFormData] = useState<FormData>({
    ...baseData,
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...baseData,
    }));
  }, []);

  useEffect(() => {
    const localTime1 = moment.utc(formData.input2, 'HH:mm').local().format('HH:mm');
    const localTime2 = moment.utc(formData.input3, 'HH:mm').local().format('HH:mm');
    setFormData((prevFormData) => ({
      ...prevFormData,
      input2: localTime1,
      input3: localTime2,
    }));
  }, [formData.input2, formData.input3]);

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
