import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { commonStyle, fontSize, color } from '../../commonStyles';

export default function Kata({ createUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState();
  const [message, setMessage] = useState('');

  const checkPasswordStrength = () => {
    const regex = /(?=.{8,}$)(?=(?:.*?[A-Z]){2})(?=.*?[a-z])(?=.*[0-9])/;
    if (username && password) {
      if (regex.test(password)) {
        setPasswordValid(true);
        createUser({ username, password });
      }
    } else {
      setPasswordValid(false);
    }
  };

  useEffect(() => {
    passwordValid
      ? setMessage('Password is strong enough!')
      : setMessage(
          'Password should contain at least 8 characters, 2 uppercase letters and 1 number!'
        );
  }, [passwordValid]);

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

      <Text style={commonStyle.text}>{message}</Text>

      <Button title="Create User" onPress={checkPasswordStrength} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    fontSize: fontSize.small,
    height: '2rem',
    padding: '0.4rem',
    borderRadius: '0.2rem',
    width: '100%',
    color: color.black,
    backgroundColor: color.white,
  },
});
