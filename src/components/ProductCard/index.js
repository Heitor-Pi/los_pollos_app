import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";

export const ProductCard = ({ image, title, description, price, onPress }) => {
  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      <Image source={image} style={styles.imgProduct} resizeMode="cover" />

      <View style={styles.infoContainer}>
        <Text style={styles.titleProduct} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.descriptionProduct} numberOfLines={1}>
          {description}
        </Text>

        <View style={styles.footerRow}>
          <Text style={styles.priceProduct}>{price}</Text>
          <Pressable style={styles.btnAdd} onPress={onPress}>
            <Text style={styles.txtBtnAdd}>+</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
