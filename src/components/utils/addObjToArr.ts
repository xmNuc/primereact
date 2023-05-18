[
    { country: 'pl', mode: 'yes', data: '12.11.2020', data2: '01.02.2021' },
    { country: undefined, mode: undefined, data: '15.11.2020', data2: '06.02.2021' }
  ]
  można użyć poniższego kodu:
  
  typescript
  Copy code
  const newArr = [
    { data: '12.11.2020', data2: '01.02.2021' },
    { data: '15.11.2020', data2: '06.02.2021' }
  ];
  
  const obj = { country: 'pl', mode: 'yes' };
  
  const updatedArr = newArr.map((item, index) => {
    if (index === 0) {
      return { ...obj, ...item };
    } else {
      return { country: undefined, mode: undefined, ...item };
    }
  });
  
  console.log(updatedArr);