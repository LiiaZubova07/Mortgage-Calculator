let data = {
  selectedProgram: 0.1,
  cost: 10000000,
  minPrice: 375000,
  maxPrice: 100000000,
  minPaymentPercents: 0.15,
  maxPaymentPercents: 0.9,
  programs: {
    base: 0.1,
    it: 0.047,
    gov: 0.067,
    zero: 0.12,
  },
};

let results = {
  rate: data.selectedProgram,
};

function getData() {
  //возвр объект, куда деструктуризирую data
  //чтобы передать в контроллер не ссылку на data, а его копию
  return { ...data };
}
function getResults() {
  //возвр объект, куда деструктуризирую data
  //чтобы передать в контроллер не ссылку на data, а его копию
  return { ...results };
}

function setData(newData) {
  console.log('New Data', newData);

if (newData.onUpdate === 'inputCost') {
//обновить цену
//если стоимость меньше мин цены
if (newData.cost < data.minPrice) newData.cost = data.minPrice;

//если стоимость больше макс цены
if (newData.cost > data.maxPrice) newData.cost = data.maxPrice;

}

  data = {
    ...data,
    ...newData,
  };

  results = {
    rate: data.selectedProgram,
  };

  console.log('Updated Data', data);
  console.log('New Result', results);
}

export { getData, setData, getResults };
