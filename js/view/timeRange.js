import updateModel from './../utils/updateModel.js';

function init(getData) {
  const slider = document.querySelector('#slider-term');
  const data = getData();

  noUiSlider.create(slider, {
    start: data.time,
    connect: 'lower',
    tooltips: true,
    step: 1,
    range: {
      min: data.minYear,
      max: data.maxYear,
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
      time: sliderValue,
      onUpdate: 'timeSlider',
    });
  });

  return slider;
}

export default init;
