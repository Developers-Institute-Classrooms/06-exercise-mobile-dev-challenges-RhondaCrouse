import { StyleSheet } from "react-native";

const color = {
  primary: "#40f010",
  secondary: "#a080ff",
  warning: "#daf035",
  black: "#051530",
  white: "#f0ffff",
};

const fontSize = {
  large: 26,
  med: 20,
  small: 16,
};

const commonStyle = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "space-around" },
  heading: { color: color.primary, fontSize: fontSize.large },
  text: { color: color.secondary, fontSize: fontSize.small },
  highlightedText: { color: color.warning, fontSize: fontSize.small },
});

export { commonStyle, color, fontSize };
