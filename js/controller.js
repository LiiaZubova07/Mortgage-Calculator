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

  //Order form
  const openFormBtn = document.querySelector('#openFormBtn');
  const orderForm = document.querySelector('#orderForm');
  const submitFormBtn = document.querySelector('#submitFormBtn');

  //Открытие заявки
  openFormBtn.addEventListener('click', function () {
    orderForm.classList.remove('none');
    openFormBtn.classList.add('none');
  });

  //Отправка формы
  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // сбор данных из формы перед disable
    const formData = new FormData(orderForm);
    console.log(formData);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('phone'));

    //disable для кнопки и инпутов
    submitFormBtn.setAttribute('disabled', true);
    submitFormBtn.innerText = 'Заявка отправляется...';

    //disable для поля для ввода
    orderForm.querySelectorAll('input').forEach(function (input) {
      input.setAttribute('disabled', true);
    });

    //функция, которая будет отправлять данные с помощью fetch на сервер
    fetchData();
    async function fetchData() {
      const data = Model.getData();
      const results = Model.getResults();

      //куда отправлять данные
      //код сделает так, чтоб вместо index.html появлялся mail.php
      let url = checkOnUrl(document.location.href);

      function checkOnUrl(url) {
        //http://127.0.0.1:5500/index.html
        let urlArrayDot = url.split('.');

        if (urlArrayDot[urlArrayDot.length - 1] === 'html') {
          //если в конце после точки html, тогда убираем этот html
          urlArrayDot.pop();
          //разбить по слэшу
          let newUrl = urlArrayDot.join('.');
          let urlArraySlash = newUrl.split('/');
          urlArraySlash.pop();
          newUrl = urlArraySlash.join('/') + '/';
          return newUrl;
        }
        return url;
      }

      const response = await fetch(url + 'mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          form: {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
          },
          data,
          results,
        }),
      });

      const result = await response.text();
		console.log(result);

		submitFormBtn.removeAttribute('disabled', true);
		submitFormBtn.innerText = 'Оформить заявку';

		orderForm.querySelectorAll('input').forEach((input) => {
			input.removeAttribute('disabled', true);
		});

		//очистить поля формы
		orderForm.reset();
		orderForm.classList.add('none');

		//на основе ответа от сервера показываем сообщения об успехе или ошибке
		if (result === "SUCCESS"){
			document.getElementById('success').classList.remove('none');
			} else {
				document.getElementById('error').classList.remove('none');
			}
    }
  });
};
