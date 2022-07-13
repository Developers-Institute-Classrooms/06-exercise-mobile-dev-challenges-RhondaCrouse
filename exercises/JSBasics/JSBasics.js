import { Button, Text, View, FlatList } from "react-native";
import ButtonContainer from "./ButtonContainer";
import { commonStyle, color } from "../../commonStyles";

const peopleData = [
  { name: "Ann", age: 15, email: "a@test.com", birthMonth: "Jan" },
  { name: "Bob", age: 19, email: "b@test.com", birthMonth: "Mar" },
  { name: "Cam", age: 18, email: "c@test.com", birthMonth: "Feb" },
  { name: "Dan" },
  { name: "Steve", age: 14, birthMonth: "Jun" },
  { name: "Tony", age: 20, birthMonth: "Dec" },
];

export default function JSBasics({ onBack }) {
  const listItem = ({ item }) => (
    <Text style={commonStyle.text}>{JSON.stringify(item)}</Text>
  );
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.heading}>JS Basics</Text>
      <FlatList
        data={peopleData}
        renderItem={listItem}
        keyExtractor={(item) => item.name}
      />
      <ButtonContainer></ButtonContainer>
      <Button title="Back" color={color.secondary} onPress={onBack} />
    </View>
  );
}
