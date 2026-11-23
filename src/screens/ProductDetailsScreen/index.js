import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import comboChickenImg from "../../assets/images/combo_chicken.jpg";
import logo from "../../assets/images/logo.png";
import { AppIcon } from "../../components/AppIcon";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { colors } from "../../themes/colors";
import { styles } from "./style";

export const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const productParam = route.params?.product;

  const product = productParam || {
    title: "Chicken Combo",
    description:
      "Frango crocante, batata frita e bebida.\nPreparado na hora para você!",
    basePrice: 34.9,
    image: comboChickenImg,
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Individual");
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { label: "Individual", extraPrice: 0 },
    { label: "Duplo", extraPrice: 15 },
    { label: "Família", extraPrice: 30 },
  ];

  const extras = [
    { id: "molho", label: "Molho especial", price: 2.0 },
    { id: "cheddar", label: "Queijo cheddar", price: 3.0 },
    { id: "batata", label: "Batata extra", price: 4.0 },
  ];

  const toggleExtra = (id) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const sizeExtra =
    sizes.find((s) => s.label === selectedSize)?.extraPrice || 0;
  const extrasTotal = extras
    .filter((ex) => selectedExtras.includes(ex.id))
    .reduce((sum, ex) => sum + ex.price, 0);
  const totalPrice = (product.basePrice + sizeExtra + extrasTotal) * quantity;

  const formatBRL = (value) =>
    `R$ ${value.toFixed(2).replace(".", ",")}`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerRow}>
        <Pressable style={styles.headerBtn} onPress={() => navigation.goBack()}>
          <AppIcon name="back" size={20} color={colors.colorRed} />
        </Pressable>

        <Text style={styles.headerTitle}>Detalhes do produto</Text>

        <View style={styles.headerRight}>
          <Pressable
            style={styles.headerBtn}
            onPress={() => setIsFavorite((prev) => !prev)}
          >
            <AppIcon
              name="heart"
              size={22}
              color={colors.colorRed}
              filled={isFavorite}
            />
          </Pressable>
          <Image source={logo} style={styles.miniLogo} resizeMode="contain" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={product.image}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <View style={styles.infoBlock}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>{formatBRL(totalPrice)}</Text>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionLabel}>Escolha o tamanho</Text>
          <View style={styles.sizeRow}>
            {sizes.map((size) => {
              const active = selectedSize === size.label;
              return (
                <Pressable
                  key={size.label}
                  style={[styles.sizeChip, active && styles.sizeChipActive]}
                  onPress={() => setSelectedSize(size.label)}
                >
                  <Text
                    style={[
                      styles.sizeChipText,
                      active && styles.sizeChipTextActive,
                    ]}
                  >
                    {size.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionLabel}>Adicionais</Text>
          <View style={styles.extrasList}>
            {extras.map((extra) => {
              const checked = selectedExtras.includes(extra.id);
              return (
                <Pressable
                  key={extra.id}
                  style={styles.extraRow}
                  onPress={() => toggleExtra(extra.id)}
                >
                  <View style={styles.extraLeft}>
                    <View
                      style={[styles.checkbox, checked && styles.checkboxChecked]}
                    >
                      {checked ? <Text style={styles.checkMark}>✓</Text> : null}
                    </View>
                    <Text style={styles.extraName}>{extra.label}</Text>
                  </View>
                  <Text style={styles.extraPrice}>
                    {formatBRL(extra.price)}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.quantityRow}>
          <Text style={styles.sectionLabel}>Quantidade</Text>
          <View style={styles.counterBox}>
            <Pressable
              style={styles.counterBtn}
              onPress={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <AppIcon name="minus" size={12} color={colors.colorRed} />
            </Pressable>
            <Text style={styles.counterValue}>{quantity}</Text>
            <Pressable
              style={styles.counterBtn}
              onPress={() => setQuantity((q) => q + 1)}
            >
              <AppIcon name="plus" size={13} color={colors.colorRed} />
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerBar}>
        <ButtonPrimary
          title="ADICIONAR AO CARRINHO"
          onPress={() => navigation.navigate("tracking")}
        />
      </View>
    </SafeAreaView>
  );
};
