import { Pressable, Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { AppIcon } from "../AppIcon";
import { styles } from "./style";

export const ProfileMenuItem = ({ iconName, label, onPress }) => {
  return (
    <Pressable style={styles.itemRow} onPress={onPress}>
      <View style={styles.leftRow}>
        <AppIcon name={iconName} size={18} color={colors.colorRed} />
        <Text style={styles.itemLabel}>{label}</Text>
      </View>
      <AppIcon name="chevronRight" size={16} color={colors.colorGray} />
    </Pressable>
  );
};
