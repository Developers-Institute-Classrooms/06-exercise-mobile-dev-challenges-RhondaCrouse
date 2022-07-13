import { StyleSheet, Text, View, Button } from "react-native";
import { commonStyle } from "../../commonStyles";
import { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

// Docs on datepicker here https://github.com/react-native-datetimepicker/datetimepicker

export default function JSDate() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [displayText, setDisplayText] = useState("Please select a date.");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (dateString) => {
    setShowDatePicker(false);
    // TODO: If dateString is in the past then setDisplayText("Selected date is X days in the past.")
    // TODO: If dateString is today then setDisplayText("Selected is today.")
    // TODO: If dateString is in the future then setDisplayText("Selected date is X days in the future.")
  };
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.heading}>JS Date Exercise</Text>
      <Text style={commonStyle.text}>{displayText}</Text>
      <Button title="Select date" onPress={() => setShowDatePicker(true)} />
      {showDatePicker ? (
        <DateTimePicker
          value={selectedDate}
          mode={"date"}
          onChange={(event, dateString) => {
            handleDateChange(dateString);
          }}
        />
      ) : null}
    </View>
  );
}
