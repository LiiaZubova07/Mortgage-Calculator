function init(getData) {
  //   console.log('FIRED');
  const input = document.querySelector('#input-cost');

  const settings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
  };

  const cleaveInput = new Cleave(input, settings);
  //установка стартового значения
  cleaveInput.setRawValue(getData().cost);

  //прослушка на ввод стоимости
  input.addEventListener('input', function () {
    const value = +cleaveInput.getRawValue();
    console.log(value);

    //проверка на минимальную и максимальную цену
    if (value < getData().minPrice || value > getData().maxPrice) {
      input.closest('.param__details').classList.add('param__details--error');
    }

    if (value >= getData().minPrice && value <= getData().maxPrice) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
    }
  });

  //когда ввели маленькое число будет сбрасываться на минимально допустимое
  input.addEventListener('change', function () {
    const value = +cleaveInput.getRawValue();

    if (value > getData().maxPrice) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
      cleaveInput.setRawValue(getData().maxPrice);
    }
    if (value < getData().minPrice) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
      cleaveInput.setRawValue(getData().minPrice);
    }
  });
}

export default init;
