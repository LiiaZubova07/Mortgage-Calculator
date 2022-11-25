function init(getData) {
  const data = getData();

  //   console.log('FIRED');
  const input = document.querySelector('#input-cost');

  const settings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',
  };

  const cleaveInput = new Cleave(input, settings);
  //установка стартового значения
  cleaveInput.setRawValue(data.cost);

  //прослушка на ввод стоимости
  input.addEventListener('input', function () {
    const value = +cleaveInput.getRawValue();
    console.log(value);

    //проверка на минимальную и максимальную цену
    if (value < data.minPrice || value > data.maxPrice) {
      input.closest('.param__details').classList.add('param__details--error');
    }

    if (value >= data.minPrice && value <= data.maxPrice) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
    }
  });

  //когда ввели маленькое число будет сбрасываться на минимально допустимое
  input.addEventListener('change', function () {
    const value = +cleaveInput.getRawValue();

    if (value > data.maxPrice) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
      cleaveInput.setRawValue(data.maxPrice);
    }
    if (value < data.minPrice) {
      input
        .closest('.param__details')
        .classList.remove('param__details--error');
      cleaveInput.setRawValue(data.minPrice);
    }
  });
}

export default init;
