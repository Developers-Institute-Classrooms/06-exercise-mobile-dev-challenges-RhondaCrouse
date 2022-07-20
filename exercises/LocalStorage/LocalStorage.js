import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import { commonStyle, fontSize, color } from '../../commonStyles';
import { getData, storeData } from './storageApi';

export default function LocalStorage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [userList, setUserList] = useState([{ name: 'test', age: '123' }]);

  useEffect(() => {
    (async () => {
      const userList = await getData();
      setUserList(userList || []);
    })();
  }, []);

  const handleAddUser = () => {
    const newUser = { name, age };
    setUserList([...userList, newUser]);
    storeData([...userList, newUser]);
  };

  const handleClearUser = () => {
    setUserList([]);
    storeData([]);
  };
  const deleteData = (index) => {
    const newUserList = [...userList];
    newUserList.splice(index, 1);
    setUserList(newUserList);
    storeData(newUserList);
  };

  const listItem = (listData, i) => (
    <View style={styles.userListItem}>
      <Text style={commonStyle.text}>
        Index: {listData.index}, Name: {listData.item.name}, Age:{' '}
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
        keyExtractor={(item, index) => 'key' + index}
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
    height: '2rem',
    padding: '0.4rem',
    borderRadius: '0.2rem',
    width: '100%',
    color: color.black,
    backgroundColor: color.white,
  },
  userListItem: {
    display: 'flex',
    flexDirection: 'row',
  },
});
