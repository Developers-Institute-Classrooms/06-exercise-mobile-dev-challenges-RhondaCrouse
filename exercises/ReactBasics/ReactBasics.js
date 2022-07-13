import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { commonStyle, fontSize, color } from "../../commonStyles";

export default function ReactBasics() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [user, setUser] = useState({ name: "", age: "" });

  useEffect(() => {
    console.log("name state was updated");
  }, [name]);

  console.log("age state was updated");
  console.log("age OR name state was updated");
  console.log("user state was updated, but not necessarily changed ;)");
  console.log("user state was CHANGED (bonus point)");

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.heading}>React Basics</Text>
      <Text style={commonStyle.text}>{JSON.stringify(user)}</Text>
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
      {/* Note: {name, age} is a shorthand for {name: name, age: age} */}
      <Button title="Update User" onPress={() => setUser({ name, age })} />
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
});
