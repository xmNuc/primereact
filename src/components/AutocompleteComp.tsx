import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { data } from './data';

export const AutoCompleteDemo = () => {
  const [countries, setCountries] = useState<any>([]);
  const [selectedCountry1, setSelectedCountry1] = useState<any>(null);
  const [selectedCountries, setSelectedCountries] = useState<any>(null);
  const [filteredCountries, setFilteredCountries] = useState<any>(null);

  useEffect(() => {
    setCountries(data);
  }, []);

  const searchCountry = (event: { query: string }) => {
    setTimeout(() => {
      let _filteredCountries;
      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country: { name: string }) => {
          return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredCountries);
    }, 250);
  };

  return (
    <div className="card">
      <h5>Autocomplete Basic</h5>
      <AutoComplete
        value={selectedCountry1}
        suggestions={filteredCountries}
        completeMethod={searchCountry}
        field="name"
        onChange={(e) => setSelectedCountry1(e.value)}
        aria-label="Countries"
        // dropdownAriaLabel="Select Country"
      />

      <h5>Autocomplete Multiple</h5>
      <span className="p-fluid">
        <AutoComplete
          value={selectedCountries}
          suggestions={filteredCountries}
          completeMethod={searchCountry}
          field="name"
          multiple
          onChange={(e) => setSelectedCountries(e.value)}
          aria-label="Countries"
          // dropdownAriaLabel="Select Country"
        />
      </span>
    </div>
  );
};
