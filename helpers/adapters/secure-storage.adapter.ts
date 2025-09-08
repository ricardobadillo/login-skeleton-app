import { Alert } from "react-native";

import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

export class SecureStorageAdapter {
  static async setItem(key: string, value: string) {
    try {
      await setItemAsync(key, value);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Ha ocurrido un error al guardar los datos");
    }
  }

  static async getItem(key: string) {
    try {
      return await getItemAsync(key);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Ha ocurrido un error al guardar los datos");
      return null;
    }
  }

  static async deleteItem(key: string) {
    try {
      await deleteItemAsync(key);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Ha ocurrido un error al guardar los datos");
    }
  }
}
