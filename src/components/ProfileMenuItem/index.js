import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";

export const ProfileMenuItem = ({ icon, label, onPress }) => {
  return (
    <Pressable style={styles.itemRow} onPress={onPress}>
      <View style={styles.leftRow}>
        <Image source={icon} style={styles.itemIcon} resizeMode="contain" />
        <Text style={styles.itemLabel}>{label}</Text>
      </View>
      <Text style={styles.arrowRight}>&gt;</Text>
    </Pressable>
  );
};
