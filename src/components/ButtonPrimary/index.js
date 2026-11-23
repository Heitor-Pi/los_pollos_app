import { Pressable, Text } from "react-native";
import { styles } from "./style";

export const ButtonPrimary = ({ title, onPress, style, textStyle }) => {
  return (
    <Pressable style={[styles.btnPrimary, style]} onPress={onPress}>
      <Text style={[styles.txtBtnPrimary, textStyle]}>{title}</Text>
    </Pressable>
  );
};
