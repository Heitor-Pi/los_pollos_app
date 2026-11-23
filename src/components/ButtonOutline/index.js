import { Pressable, Text } from "react-native";
import { styles } from "./style";

export const ButtonOutline = ({ title, onPress, style, textStyle }) => {
  return (
    <Pressable style={[styles.btnOutline, style]} onPress={onPress}>
      <Text style={[styles.txtBtnOutline, textStyle]}>{title}</Text>
    </Pressable>
  );
};
