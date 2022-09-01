const store = {
  name: 'Coffee Time',
  adress: {
    country: 'UK',
    city: 'London',
    streat: 'Downing Street',
    houseNumber: 10,
  },
};

store.clients = {};

store.clients['Bohdan Onatskyi'] = {
  quantity: 10,
  bonuses: 250,
};
store.clients['Olena Kuzmychova'] = {
  quantity: 8,
  bonuses: 200,
};
store.clients['Yuriy Kruchinin'] = {
  quantity: 12,
  bonuses: 300,
};
store.clients['Yevhen Vuzlov'] = {
  quantity: 3,
  bonuses: 75,
};
store.clients['Mykola Prymachok'] = {
  quantity: 5,
  bonuses: 125,
};