import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/logo.png";
import iconSettings from "../../assets/images/icons/icon_settings.png";
import iconOrders from "../../assets/images/icons/icon_orders.png";
import iconDiamond from "../../assets/images/icons/icon_diamond.png";
import iconCard from "../../assets/images/icons/icon_card.png";
import iconClover from "../../assets/images/icons/icon_clover.png";
import iconHelp from "../../assets/images/icons/icon_help.png";
import iconInfo from "../../assets/images/icons/icon_info.png";
import { BottomNav } from "../../components/BottomNav";
import { ButtonOutline } from "../../components/ButtonOutline";
import { ProfileMenuItem } from "../../components/ProfileMenuItem";
import { styles } from "./style";

export const ProfileScreen = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      icon: iconOrders,
      label: "Meus pedidos",
      onPress: () => navigation.navigate("tracking"),
    },
    { icon: iconDiamond, label: "Endereços de entrega" },
    { icon: iconCard, label: "Formas de pagamento" },
    { icon: iconDiamond, label: "Cupons e promoções" },
    { icon: iconClover, label: "Notificações" },
    { icon: iconHelp, label: "Ajuda e suporte" },
    { icon: iconInfo, label: "Sobre o app" },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <Text style={styles.pageTitle}>Meu perfil</Text>
          <View style={styles.headerRight}>
            <Image
              source={iconSettings}
              style={styles.gearIcon}
              resizeMode="contain"
            />
            <Image source={logo} style={styles.miniLogo} resizeMode="contain" />
          </View>
        </View>

        <View style={styles.userSection}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitials}>HP</Text>
          </View>
          <Text style={styles.userName}>Heitor Pires</Text>
          <Text style={styles.userEmail}>heitor.pires@email.com</Text>

          <View style={styles.memberBadge}>
            <Text style={styles.memberBadgeText}>Cliente desde 2023</Text>
          </View>
        </View>

        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <ProfileMenuItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              onPress={item.onPress}
            />
          ))}
        </View>

        <ButtonOutline
          title="SAIR DA CONTA"
          onPress={() => navigation.navigate("login")}
          style={styles.logoutBtn}
        />
      </ScrollView>

      <BottomNav active="profile" />
    </SafeAreaView>
  );
};
