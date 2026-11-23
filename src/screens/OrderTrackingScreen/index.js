import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/logo.png";
import { AppIcon } from "../../components/AppIcon";
import { colors } from "../../themes/colors";
import { styles } from "./style";

export const OrderTrackingScreen = () => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);

  const steps = [
    { label: "Confirmado", done: true },
    { label: "Preparando", done: true },
    { label: "Saiu para\nentrega", done: true },
    { label: "Entregue", done: false },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerRow}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <AppIcon name="back" size={18} color={colors.colorRed} />
        </Pressable>
        <Text style={styles.pageTitle}>Acompanhe seu pedido</Text>
        <Image source={logo} style={styles.miniLogo} resizeMode="contain" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mapContainer}>
          {/* Stylized map roads */}
          <View style={styles.roadH1} />
          <View style={styles.roadH2} />
          <View style={styles.roadV1} />
          <View style={styles.roadV2} />
          <View style={styles.roadDiag1} />
          <View style={styles.roadDiag2} />

          {/* Red delivery route segments */}
          <View style={styles.routeSeg1} />
          <View style={styles.routeSeg2} />
          <View style={styles.routeSeg3} />
          <View style={styles.routeSeg4} />
          <View style={styles.routeSeg5} />

          {/* Origin pin */}
          <View style={styles.originRow}>
            <View style={styles.originPin}>
              <Image
                source={logo}
                style={styles.originLogo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.originLabelBox}>
              <Text style={styles.originTitle}>Los Pollos Hermanos</Text>
              <Text style={styles.originSub}>Albuquerque • 1,2 km</Text>
            </View>
          </View>

          {/* Destination pin */}
          <View style={styles.destPin}>
            <AppIcon name="arrowUpRight" size={18} color={colors.colorRed} />
          </View>
        </View>

        <View style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <Text style={styles.statusTitle}>Seu pedido está a caminho!</Text>
            <Text style={styles.etaLabel}>Previsão de entrega</Text>
            <Text style={styles.etaTime}>18:32</Text>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLineBg} />
            <View style={styles.progressLineActive} />
            <View style={styles.stepsRow}>
              {steps.map((step) => (
                <View key={step.label} style={styles.stepItem}>
                  <View
                    style={[
                      styles.stepDot,
                      step.done ? styles.stepDotDone : styles.stepDotPending,
                    ]}
                  />
                  <Text style={styles.stepLabel}>{step.label}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.courierSection}>
            <Text style={styles.courierHeading}>Entregador</Text>
            <View style={styles.courierRow}>
              <View style={styles.courierLeft}>
                <View style={styles.courierAvatar}>
                  <Text style={styles.courierInitials}>JP</Text>
                </View>
                <View>
                  <Text style={styles.courierName}>Jesse Pinkman</Text>
                  <Text style={styles.courierRating}>
                    ★ 4.9 • 320 entregas
                  </Text>
                </View>
              </View>

              <Pressable style={styles.chatBtn}>
                <AppIcon name="chat" size={18} color={colors.colorRed} />
              </Pressable>
            </View>
          </View>

          <Pressable
            style={styles.detailsBtn}
            onPress={() => setShowDetails((prev) => !prev)}
          >
            <Text style={styles.detailsBtnText}>Detalhes do pedido</Text>
            <AppIcon name="chevronRight" size={16} color={colors.colorRed} />
          </Pressable>

          {showDetails ? (
            <View style={styles.orderSummaryBox}>
              <Text style={styles.orderSummaryText}>
                1x Chicken Combo (Individual) — R$ 34,90
              </Text>
              <Text style={styles.orderSummarySub}>
                Entrega em: Av. Paulista, 1000
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
