import { Image, Pressable, Text, View } from "react-native";
import iconHeart from "../../assets/images/icons/icon_heart.png";
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
        {isFavorite ? (
          <Text style={styles.heartFilled}>♥</Text>
        ) : (
          <Image
            source={iconHeart}
            style={styles.heartIcon}
            resizeMode="contain"
          />
        )}
      </Pressable>
    </Pressable>
  );
};
