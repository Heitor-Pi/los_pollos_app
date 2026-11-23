import { Image, Pressable, Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { AppIcon } from "../AppIcon";
import { styles } from "./style";

export const SearchResultCard = ({
  image,
  title,
  description,
  price,
  isFavorite,
  onToggleFavorite,
  onPress,
}) => {
  return (
    <Pressable style={styles.cardRow} onPress={onPress}>
      <Image source={image} style={styles.thumb} resizeMode="cover" />

      <View style={styles.infoCol}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {description}
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <Pressable style={styles.heartBtn} onPress={onToggleFavorite}>
        <AppIcon
          name="heart"
          size={20}
          color={colors.colorRed}
          filled={isFavorite}
        />
      </Pressable>
    </Pressable>
  );
};
