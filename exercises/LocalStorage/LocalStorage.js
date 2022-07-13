import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { commonStyle, fontSize, color } from "../../commonStyles";

export default function LocalStorage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [userList, setUserList] = useState([{ name: "test", age: "123" }]);

  // TODO: Populate userList with the data stored in local storage whenever this component loads.
  // You can also remove the test data { name: "test", age: "123" } once this is done.

  const handleAddUser = () => {
    const dataToAdd = { name, age };
    // TODO: Add data to the local storage.
  };

  const handleClearUser = () => {
    // TODO: Clear data from local storage.
  };

  const deleteData = (index) => {
    // TODO: Delete the user data with the correct index
  };

  const listItem = (listData, i) => (
    <View style={styles.userListItem}>
      <Text style={commonStyle.text}>
        Index: {listData.index}, Name: {listData.item.name}, Age:{" "}
        {listData.item.age}
      </Text>
      <Button title="🗑" onPress={() => deleteData(listData.index)} />
    </View>
  );

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.heading}>Local Storage</Text>
      <FlatList
        data={userList}
        renderItem={listItem}
        keyExtractor={(item, index) => "key" + index}
      />

      <View>
        <Text style={commonStyle.highlightedText}>Name:</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={setName}
          value={name}
        ></TextInput>
      </View>
      <View>
        <Text style={commonStyle.highlightedText}>Age:</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={setAge}
          keyboardType="numeric"
          value={age}
        ></TextInput>
      </View>
      <Button title="Add User" onPress={handleAddUser} />
      <Button title="Clear All Users" onPress={handleClearUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    fontSize: fontSize.small,
    height: "2rem",
    padding: "0.4rem",
    borderRadius: "0.2rem",
    width: "100%",
    color: color.black,
    backgroundColor: color.white,
  },
  userListItem: {
    display: "flex",
    flexDirection: "row",
  },
});
