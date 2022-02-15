//elias 14/02/2022 curso js brasil
export function validateEmptyAndLength(value) {
  if (!value) {
    return 'Este campo é obrigatori';
  }
  if (value.length < 3) {
    return '*Este campo precisa de no minimo 3 caracteres';
  }
  return true;
}
//
export function validateEmptyAndEmail(value) {
  if (!value) {
    return '*Este campo é obrigatorio !';
  }
  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value);

  if (!isValid) {
    return '*Este campo precisa ser um e-mail';
  }
  return true;
}
