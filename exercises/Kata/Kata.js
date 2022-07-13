import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { commonStyle, fontSize, color } from "../../commonStyles";

export default function Kata({ createUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState();

  const checkPasswordStrength = () => {
    // TODO: Implement password validation logic here.
    // if (username exists and password is valid) {
    setPasswordValid(true);
    createUser({ username, password });
    // }
  };

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.heading}>Check for password strength</Text>
      <View>
        <TextInput
          style={styles.inputField}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        ></TextInput>
      </View>
      <View>
        <TextInput
          style={styles.inputField}
          onChangeText={setPassword}
          secureTextEntry={true}
          value={password}
          placeholder="Password"
        ></TextInput>
      </View>
      {passwordValid === true ? (
        <Text style={commonStyle.text}>Password is strong enough!</Text>
      ) : null}

      <Button title="Create User" onPress={checkPasswordStrength} />
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
