function updateModel(element, data) {
  //генерация пользовательского события
  element.dispatchEvent(
    new CustomEvent('updateForm', {
      bubbles: true,
      detail: {
        ...data,
      },
    })
  );
}

export default updateModel;