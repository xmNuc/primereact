const obj = { country: 'pl', mode: 'yes' };
const arr = [
  { other234: 'nope', other2: 'nope', data: '12.11.2020', data2: '01.02.2021', other: 'nope' },
  { other234: 'nope', other2: 'nope', data: '15.11.2020', data2: '06.02.2021', other: 'nope' },
];

arr.map(
  ({ other, ...rest }, index) =>
    (obj[`item${index + 1}`] = JSON.stringify({ data: rest.data, data2: rest.data2 }))
);

console.log(obj);

const obj = { country: 'pl', mode: 'yes' };
const arr = [
  { other234: 'nope', other2: 'nope', data: '12.11.2020', data2: '01.02.2021', other: 'nope' },
  { other234: 'nope', other2: 'nope', data: '15.11.2020', data2: '06.02.2021', other: 'nope' },
];

function addDataToObj(obj: { [key: string]: string }, arr: { [key: string]: string }[]) {
  arr.forEach((item, index) => {
    const { other, ...rest } = item;
    const key = `item${index + 1}`;
    obj[key] = JSON.stringify({ data: rest.data, data2: rest.data2 });
  });
}

addDataToObj(obj, arr);
console.log(obj);
