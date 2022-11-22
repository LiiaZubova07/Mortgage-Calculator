//код, который будет инициализировать ставки(ХХ)

function init(getData) {
  console.log('Init programs');
  console.log(getData().programs);

  const { base, it, gov, zero } = getData().programs;

  //Устанавливаю эти значения в радиокнопку
  //Set program rates in radio buttons
  document.querySelector('#base-value').value = base;
}

export default init;
