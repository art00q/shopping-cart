const storage = {
  addToStorage: (key, item) => sessionStorage.setItem(key, JSON.stringify(item)),
  getItem: (key) => JSON.parse(sessionStorage.getItem(key))
};

export default storage;
