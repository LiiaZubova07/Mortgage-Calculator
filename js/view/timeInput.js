import updateModel from './../utils/updateModel.js';

function init(getData) {
  const data = getData();
  //   console.log('FIRED');
  const input = document.querySelector('#input-term');

  const settings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
  };

  const cleaveInput = new Cleave(input, settings);
  //установка стартового значения
  cleaveInput.setRawValue(data.time);

  //прослушка на ввод стоимости
  input.addEventListener('input', function () {
    const value = +cleaveInput.getRawValue();
    console.log(value);

    //проверка на минимальную и максимальную цену
    if (value < data.minYear || value > data.maxYear) {
      input.closest('.param__details').classList.add('param__details--error');
    }

    if (value >= data.minYear && value <= data.maxYear) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
    }

    //обновить модель
    updateModel(input, {
      time: value,
      onUpdate: 'inputTime',
    });
  });

  //когда ввели маленькое число будет сбрасываться на минимально допустимое
  input.addEventListener('change', function () {
    const value = +cleaveInput.getRawValue();

    if (value > data.maxYear) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
      cleaveInput.setRawValue(data.maxYear);
    }
    if (value < data.minYear) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
      cleaveInput.setRawValue(data.minYear);
    }
    //обновить модель
    updateModel(input, {
      time: +cleaveInput.getRawValue(),
      onUpdate: 'inputTime',
    });
  });
  return cleaveInput;
}

export default init;
