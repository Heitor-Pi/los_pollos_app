import { Image, Pressable, Text } from "react-native";
import { styles } from "./style";

export const CategoryCard = ({ image, title, onPress }) => {
  return (
    <Pressable style={styles.cardCategory} onPress={onPress}>
      <Image source={image} style={styles.categoryImage} resizeMode="contain" />
      <Text style={styles.categoryTitle}>{title}</Text>
    </Pressable>
  );
};
