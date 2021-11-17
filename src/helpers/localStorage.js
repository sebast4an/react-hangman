export const saveInLocalStorage = (name, item) => localStorage.setItem(name, JSON.stringify(item));

export const loadFromLocalStorage = name => JSON.parse(localStorage.getItem(name));

export const removeInLocalStorage = name => localStorage.removeItem(name);
