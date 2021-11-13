export const saveInLocalStorage = (name, item) => {
  localStorage('', JSON.stringify(item));
};

export const loadFromLocalStorage = name => JSON.parse(localStorage.getItem(name));

export const removeInLocalStorage = name => localStorage.removeItem(name);

export const checkInLocalStorage = name => {
  if (loadFromLocalStorage('test')) {
    console.log('yes');
  } else {
    console.log('empty');
  }
};
