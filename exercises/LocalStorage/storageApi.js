import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'example-key';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    console.log(JSON.parse(jsonValue));
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
};

export { storeData, getData };
