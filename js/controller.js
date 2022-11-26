import * as Model from './model.js';
import updateResultsView from './view/updateResultsView.js';
import programs from './view/radioPrograms.js';

import costInput from './view/costinput.js';
import costRange from './view/costRange.js';

//весь код в контроллере будет запускаться, кода всё загружено
window.onload = function () {
  const getData = Model.getData;
  //отображение программ на странице(ХХ)
  //init programs
  programs(getData);

  //инициализирую запуская costInput
  costInput(getData);

  costRange(getData);
  //отслеживать, что генерация идёт (прослушка пользовательского события)
  document.addEventListener('updateForm', (e) => {
    //в модели будет ф-я, которая будет обновлять данные
    Model.setData(e.detail);

    const data = Model.getData();
    const results = Model.getResults();

    //Обновляю блок с результатами
    updateResultsView(results);
  });
};
