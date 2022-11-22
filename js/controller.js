import * as Model from './model.js';
import programs from './view/radioPrograms.js';

//весь код в контроллере будет запускаться, кода всё загружено
window.onload = function () {
	const getData = Model.getData;

//отображение программ на странице(ХХ)
//init programs
programs(getData);

//отслеживать, что генерация идёт (прослушка пользовательского события)
document.addEventListener('updateForm', (e) => {
	console.log('fired');
	console.log(e.detail);

	//в модели будет ф-я, которая будет обновлять данные
	Model.setData(e.detail);
});


};
