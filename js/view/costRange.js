import updateModel from './../utils/updateModel.js';

function init(getData) {
  const slider = document.querySelector('#slider-cost');
  const data = getData();

  noUiSlider.create(slider, {
    start: data.cost,
    connect: 'lower',
    tooltips: true,
    step: 100000,
    range: {
      min: data.minPrice,
      '1%': [400000, 100000],
      '50%': [10000000, 500000],
      max: data.maxPrice,
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
      cost: sliderValue,
      onUpdate: 'costSlider',
    });
  });
}

export default init;
