import updateModel from '../utils/updateModel.js';

function init(getData) {
  const input = document.querySelector('#input-downpayment');

  const settings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
  };

  const cleaveInput = new Cleave(input, settings);
  //установка стартового значения
  cleaveInput.setRawValue(getData().payment);

  //прослушка на ввод стоимости
  input.addEventListener('input', function () {
    const value = +cleaveInput.getRawValue();
    console.log(value);

    //проверка на минимальную и максимальную сумму первого платежа
    if (
      value < getData().getMinPayment() ||
      value > getData().getMaxPayment()
    ) {
      input.closest('.param__details').classList.add('param__details--error');
    }

    if (
      value >= getData().getMinPayment() &&
      value <= getData().getMaxPayment()
    ) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
    }

    //обновить модель
    updateModel(input, {
      payment: value,
      onUpdate: 'inputPayment',
    });
  });

  //когда ввели маленькое число будет сбрасываться на минимально допустимое
  input.addEventListener('change', function () {
    const value = +cleaveInput.getRawValue();

    if (value > getData().getMaxPayment()) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
      cleaveInput.setRawValue(getData().getMaxPayment());
    }

    if (value < getData().getMinPayment()) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
      cleaveInput.setRawValue(getData().getMinPayment());
    }
    //обновить модель
    updateModel(input, {
      payment: value,
      onUpdate: 'inputPayment',
    });
  });
  return cleaveInput;
}

export default init;
