import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import iconHome from "../../assets/images/icons/icon_home.png";
import iconSearch from "../../assets/images/icons/icon_search.png";
import iconOrders from "../../assets/images/icons/icon_orders.png";
import iconProfile from "../../assets/images/icons/icon_profile.png";
import { colors } from "../../themes/colors";
import { styles } from "./style";

export const BottomNav = ({ active }) => {
  const navigation = useNavigation();

  const tabs = [
    { key: "home", label: "Início", icon: iconHome, route: "home" },
    { key: "search", label: "Pesquisa", icon: iconSearch, route: "search" },
    { key: "tracking", label: "Pedidos", icon: iconOrders, route: "tracking" },
    { key: "profile", label: "Perfil", icon: iconProfile, route: "profile" },
  ];

  return (
    <View style={styles.navContainer}>
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        const itemColor = isActive ? colors.colorRed : colors.colorGray;

        return (
          <Pressable
            key={tab.key}
            style={styles.navItem}
            onPress={() => navigation.navigate(tab.route)}
          >
            <Image
              source={tab.icon}
              style={[styles.navIcon, { tintColor: itemColor }]}
              resizeMode="contain"
            />
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
