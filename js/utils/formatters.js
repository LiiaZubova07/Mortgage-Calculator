//функция, которая будет форматировать цену
//7 000 000 Р
const priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  //макс кол-во точек после запятой
  maximumFractionDigits: 0,
});

//функция, которая будет форматировать цену
//7 000 000.45 Р
const priceFormatterDecimals = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  //макс кол-во точек после запятой
  maximumFractionDigits: 2,
});

export { priceFormatter, priceFormatterDecimals };
