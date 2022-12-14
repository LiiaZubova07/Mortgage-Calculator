import updateModel from './../utils/updateModel.js';

function init(getData) {
  const slider = document.querySelector('#slider-downpayment');

  noUiSlider.create(slider, {
    start: getData().paymentPercents * 100,
    connect: 'lower',
    tooltips: true,
    step: 1,
    range: {
      min: getData().minPaymentPercents * 100,
      max: getData().maxPaymentPercents * 100,
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: '',
    }),
  });

  //следит за событиями slide
  slider.noUiSlider.on('slide', function () {
    //получить значение слайдера
    let sliderValue = slider.noUiSlider.get();
    //избавить от точки и пробелов в консоли
    sliderValue = sliderValue.split('.')[0];
    sliderValue = parseInt(String(sliderValue).replace(/ /g, ''));

    updateModel(slider, {
      paymentPercents: sliderValue,
      onUpdate: 'paymentSlider',
    });
  });

  return slider;
}

export default init;
