//код, который будет инициализировать ставки(ХХ)

function init(getData) {
  console.log('Init programs');
  console.log(getData().programs);

  const { base, it, gov, zero } = getData().programs;

  //Устанавливаю эти значения в радиокнопку
  //Set program rates in radio buttons
  document.querySelector('#base-value').value = base;
  document.querySelector('#it-value').value = it;
  document.querySelector('#gov-value').value = gov;
  document.querySelector('#zero-value').value = zero;
}

export default init;
