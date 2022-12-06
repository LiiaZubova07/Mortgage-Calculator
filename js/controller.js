import * as Model from './model.js';
import updateResultsView from './view/updateResultsView.js';
import programs from './view/radioPrograms.js';
import { updateMinPercents } from './view/utils.js';

import costInput from './view/costinput.js';
import costRange from './view/costRange.js';

//весь код в контроллере будет запускаться, кода всё загружено
window.onload = function () {
  const getData = Model.getData;
  //отображение программ на странице(ХХ)
  //init programs
  programs(getData);

  //инициализирую запуская costInput
  const cleaveCost = costInput(getData);

  const sliderCost = costRange(getData);
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

  function updateFormAndSliders(data) {
    //Обновление радиокнопок
    if (data.onUpdate === 'radioProgram') {
      updateMinPercents(data);
    }

    //costInput
    if (data.onUpdate !== 'inputCost') {
      console.log('update Input Cost');
      cleaveCost.setRawValue(data.cost);
    }

    //costSlider
    if (data.onUpdate !== 'costSlider') {
      console.log('update Cost Slider');
      sliderCost.noUiSlider.set(data.cost);
    }
  }
};
