/* eslint-disable */
const storage = [];

const StoreMock = {
  getItem: (key) => storage [key],
  setItem: (key, value) => {
    storage [key] = value;
  }
}

export default StoreMock;