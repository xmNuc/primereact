const data = [
  {
    id: '1234',
    benchmark: 'asd',
    complience_team: {
      id: '456asd',
      name: ' Team1',
      mail: 'team1@team1.tt',
    },
    other_team: 'Other1',
    main: 'main',
  },
];
const newData = [
  {
    complience_team: {
      id: 'ghfgh',
      name: ' Team5',
      mail: 'team5@team5.tt',
    },
    other_team: 'Other1',
  },
];

const updatedData = data.map((item) => {
  return {
    ...item,
    complience_team: {
      id: 'ghfgh',
      name: ' Team5',
      mail: 'team5@team5.tt',
    },
    other_team: 'Other1',
  };
});
