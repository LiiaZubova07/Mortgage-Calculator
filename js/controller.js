import * as Model from './model.js';
import updateResultsView from './view/updateResultsView.js';
import programs from './view/radioPrograms.js';
import { updateMinPercents } from './view/utils.js';

import costInput from './view/costInput.js';
import costRange from './view/costRange.js';

import paymentInput from './view/paymentInput.js';
import paymentRange from './view/paymentRange.js';

import timeInput from './view/timeInput.js';
import timeRange from './view/timeRange.js';

//весь код в контроллере будет запускаться, кода всё загружено
window.onload = function () {
  const getData = Model.getData;

  //отображение программ на странице(ХХ)
  //init programs
  programs(getData);

  //инициализирую запуская costInput
  const cleaveCost = costInput(getData);
  const sliderCost = costRange(getData);

  //инициализирую запуская paymentInput
  const cleavePayment = paymentInput(getData);
  const sliderPayment = paymentRange(getData);

  //инициализирую запуская timeInput
  const cleaveTime = timeInput(getData);
  const sliderTime = timeRange(getData);

  //отслеживать, что генерация идёт (прослушка пользовательского события)
  document.addEventListener('updateForm', (e) => {
    //в модели будет ф-я, которая будет обновлять данные
    Model.setData(e.detail);

    const data = Model.getData();
    const results = Model.getResults();

    //Обновить всё, что связано с внешним видом формы, основываясь на данных модели
    updateFormAndSliders(data);

    //Обновляю блок с результатами
    updateResultsView(results);
  });

  Model.setData({});
  const results = Model.getResults();
  updateResultsView(results);

  function updateFormAndSliders(data) {
    //Обновление радиокнопок
    if (data.onUpdate === 'radioProgram') {
      updateMinPercents(data);

      //update payment slider
      sliderPayment.noUiSlider.updateOptions({
        range: {
          min: data.minPaymentPercents * 100,
          max: data.maxPaymentPercents * 100,
        },
      });
    }

    //costInput
    if (data.onUpdate !== 'inputCost') {
      cleaveCost.setRawValue(data.cost);
    }

    //costSlider
    if (data.onUpdate !== 'costSlider') {
      sliderCost.noUiSlider.set(data.cost);
    }

    //paymentInput
    if (data.onUpdate !== 'inputPayment') {
      cleavePayment.setRawValue(data.payment);
    }

    //paymentInput
    if (data.onUpdate !== 'paymentSlider') {
      sliderPayment.noUiSlider.set(data.paymentPercents * 100);
    }

    //обновляю время timeInput
    if (data.onUpdate !== 'inputTime') {
      cleaveTime.setRawValue(data.time);
    }

    //timeSlider
    if (data.onUpdate !== 'timeSlider') {
      sliderTime.noUiSlider.set(data.time);
    }
  }
};
