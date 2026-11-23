import { Image, Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { styles } from "./style";

import iconBack from "../../assets/images/icons/icon_back.png";
import iconCard from "../../assets/images/icons/icon_card.png";
import iconCart from "../../assets/images/icons/icon_cart.png";
import iconClose from "../../assets/images/icons/icon_close.png";
import iconClover from "../../assets/images/icons/icon_clover.png";
import iconDiamond from "../../assets/images/icons/icon_diamond.png";
import iconHeart from "../../assets/images/icons/icon_heart.png";
import iconHelp from "../../assets/images/icons/icon_help.png";
import iconHome from "../../assets/images/icons/icon_home.png";
import iconInfo from "../../assets/images/icons/icon_info.png";
import iconMinus from "../../assets/images/icons/icon_minus.png";
import iconOrders from "../../assets/images/icons/icon_orders.png";
import iconPhone from "../../assets/images/icons/icon_phone.png";
import iconPlus from "../../assets/images/icons/icon_plus.png";
import iconProfile from "../../assets/images/icons/icon_profile.png";
import iconSearch from "../../assets/images/icons/icon_search.png";
import iconSettings from "../../assets/images/icons/icon_settings.png";

const PNG_ICONS = {
  back: iconBack,
  card: iconCard,
  cart: iconCart,
  close: iconClose,
  bell: iconClover,
  address: iconDiamond,
  coupon: iconDiamond,
  heart: iconHeart,
  help: iconHelp,
  home: iconHome,
  info: iconInfo,
  minus: iconMinus,
  orders: iconOrders,
  phone: iconPhone,
  plus: iconPlus,
  profile: iconProfile,
  search: iconSearch,
  gear: iconSettings,
};

export const AppIcon = ({
  name,
  color = colors.colorRed,
  size = 20,
  filled = false,
}) => {
  if (name === "heart" && filled) {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <Text style={{ fontSize: size * 0.95, color, lineHeight: size * 1.05 }}>
          ♥
        </Text>
      </View>
    );
  }

  if (PNG_ICONS[name]) {
    const tint = name === "phone" ? undefined : color;
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <Image
          source={PNG_ICONS[name]}
          style={{
            width: size,
            height: size,
            tintColor: tint,
          }}
          resizeMode="contain"
        />
      </View>
    );
  }

  const stroke = Math.max(1.5, size * 0.09);

  if (name === "mail") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.82,
            height: size * 0.58,
            borderWidth: stroke,
            borderColor: color,
            borderRadius: 3,
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: size * 0.56,
              height: size * 0.56,
              borderRightWidth: stroke,
              borderBottomWidth: stroke,
              borderColor: color,
              transform: [{ rotate: "45deg" }],
              marginTop: -size * 0.34,
            }}
          />
        </View>
      </View>
    );
  }

  if (name === "lock") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.46,
            height: size * 0.46,
            borderRadius: (size * 0.46) / 2,
            backgroundColor: color,
          }}
        />
      </View>
    );
  }

  if (name === "chevronRight") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.42,
            height: size * 0.42,
            borderRightWidth: stroke * 1.1,
            borderTopWidth: stroke * 1.1,
            borderColor: color,
            transform: [{ rotate: "45deg" }],
            marginRight: size * 0.15,
          }}
        />
      </View>
    );
  }

  if (name === "arrowUpRight") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <Text
          style={{
            fontSize: size * 0.85,
            color,
            fontWeight: "700",
            lineHeight: size,
          }}
        >
          ↗
        </Text>
      </View>
    );
  }

  return null;
};
