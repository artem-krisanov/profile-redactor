const ValidateForm = (fieldName, value) => {
  let emailValid = false;
  let nameValid = false;
  let phoneValid = false;
  let regExp;
  switch (fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      return emailValid;
    case 'name':
      nameValid = value.match(/[A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)??$/);
      return nameValid;
    case 'phone':
      phoneValid = value.match(/^\d[\d\(\)\ -]{4,14}\d$/i);
      return phoneValid;
    default:
      break;
  }
};

export default ValidateForm;
