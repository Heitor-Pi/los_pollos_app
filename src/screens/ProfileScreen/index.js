import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/logo.png";
import { AppIcon } from "../../components/AppIcon";
import { BottomNav } from "../../components/BottomNav";
import { ButtonOutline } from "../../components/ButtonOutline";
import { ProfileMenuItem } from "../../components/ProfileMenuItem";
import { colors } from "../../themes/colors";
import { styles } from "./style";

export const ProfileScreen = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      icon: "orders",
      label: "Meus pedidos",
      onPress: () => navigation.navigate("tracking"),
    },
    { icon: "address", label: "Endereços de entrega" },
    { icon: "card", label: "Formas de pagamento" },
    { icon: "coupon", label: "Cupons e promoções" },
    { icon: "bell", label: "Notificações" },
    { icon: "help", label: "Ajuda e suporte" },
    { icon: "info", label: "Sobre o app" },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <Text style={styles.pageTitle}>Meu perfil</Text>
          <View style={styles.headerRight}>
            <AppIcon name="gear" size={20} color={colors.colorGray} />
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
              iconName={item.icon}
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
