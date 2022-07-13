import AsyncStorage from "@react-native-async-storage/async-storage";

const storageKey = "example-key";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    // TODO: Add jsonValue to local storage
  } catch (e) {
    console.error(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    // TODO: Return jsonValue as an array
  } catch (e) {
    console.error(e);
  }
};

export { storeData, getData };
