import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../themes/colors";
import { AppIcon } from "../AppIcon";
import { styles } from "./style";

export const BottomNav = ({ active }) => {
  const navigation = useNavigation();

  const tabs = [
    { key: "home", label: "Início", icon: "home", route: "home" },
    { key: "search", label: "Pesquisa", icon: "search", route: "search" },
    { key: "tracking", label: "Pedidos", icon: "orders", route: "tracking" },
    { key: "profile", label: "Perfil", icon: "profile", route: "profile" },
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
            <AppIcon name={tab.icon} size={20} color={itemColor} />
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
