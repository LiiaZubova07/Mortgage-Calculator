let data = {
  selectedProgram: 0.1,
  cost: 12000000,
  minPrice: 375000,
  maxPrice: 100000000,
  minPaymentPercents: 0.15,
  maxPaymentPercents: 0.9,
  paymentPercents: 0.5,
  payment: 6000000,
  getMinPayment: function () {
    return this.cost * this.minPaymentPercents;
  },
  getMaxPayment: function () {
    return this.cost * this.maxPaymentPercents;
  },
  minYear: 1,
  maxYear: 30,
  time: 10,
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

  if (newData.onUpdate === 'radioProgram') {
    if (newData.id === 'zero-value') {
      data.minPaymentPercents = 0;
    } else {
      data.minPaymentPercents = 0.15;
    }
    //  data.minPaymentPercents = newData.id === 'zero-value' ? 0 : 0.15;
  }

  if (newData.onUpdate === 'inputCost' || newData.onUpdate === 'costSlider') {
    //обновление цены
    //если стоимость меньше мин цены
    if (newData.cost < data.minPrice) newData.cost = data.minPrice;

    //если стоимость больше макс цены
    if (newData.cost > data.maxPrice) newData.cost = data.maxPrice;

    //если новая стоимость меньше первоначальной
    console.log(data.payment);
    console.log(data.getMaxPayment());
    if (data.payment > data.getMaxPayment()) {
      console.log('here');
      data.payment = data.getMaxPayment();
    }

    //если сумма первоначальной меньше, чем допустимый мин платёж
    if (data.payment < data.getMinPayment()) {
      data.payment = data.getMinPayment();
    }

//пересчитать новые проценты, если поменялась стоимость
data.paymentPercents = ( data.payment * 100) / newData.cost / 100;

  }

  if (newData.onUpdate === 'inputPayment') {
    //пересчитываем проценты
    newData.paymentPercents = (newData.payment * 100) / data.cost / 100;

    //если проценты БОЛЬШЕ 90%
    if (newData.paymentPercents > data.maxPaymentPercents) {
      newData.paymentPercents = data.maxPaymentPercents;
      newData.payment = data.cost * newData.maxpaymentPercents;
    }
    //если проценты МЕНЬШЕ 90%
    if (newData.paymentPercents < data.minPaymentPercents) {
      newData.paymentPercents = data.minPaymentPercents;
      newData.payment = data.cost * newData.minpaymentPercents;
    }
  }

  if (newData.onUpdate === 'paymentSlider') {
    newData.paymentPercents = newData.paymentPercents / 100;
    data.payment = data.cost * newData.paymentPercents;
  }

  if (newData.onUpdate === 'inputTime') {
    if (newData.time > data.maxYear) {
      newData.time = data.maxYear;
    }
    if (newData.time < data.minYear) {
      newData.time = data.minYear;
    }
  }

  data = {
    ...data,
    ...newData,
  };

  //Расчёт ипотеки
  const months = data.time * 12;
  console.log('months', months);

  //Общая стоимость кредита
  const totalAmount = data.cost - data.payment;
  console.log('totalAmount', totalAmount);

//Месячная ставка
const monthRate = data.selectedProgram / 12;
console.log('monthRate', monthRate);

//Общая ставка
const generalRate = (1 + monthRate) ** months;
console.log('generalRate', generalRate);

//Ежемесячный платёж
const monthPayment = (totalAmount * monthRate * generalRate) / (generalRate - 1);
console.log('monthPayment', monthPayment);

//Переплата
const overPayment = monthPayment * months - totalAmount;
console.log('overPayment', overPayment);


  results = {
    rate: data.selectedProgram,
	 totalAmount,
	 monthPayment,
	 overPayment,
  };

  console.log('Updated Data', data);
  console.log('New Result', results);
}

export { getData, setData, getResults };
