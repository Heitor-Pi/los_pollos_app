import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/logo.png";
import familiaImg from "../../assets/images/familia.jpg";
import porcaoFrangoImg from "../../assets/images/porcao_frango.jpg";
import chickenBurgerImg from "../../assets/images/chicken_burguer.jpg";
import frangosIcon from "../../assets/images/icons/frangos.png";
import combosIcon from "../../assets/images/icons/combos.png";
import batatasIcon from "../../assets/images/icons/batatas.png";
import bebidasIcon from "../../assets/images/icons/bebidas.png";
import iconCart from "../../assets/images/icons/icon_cart.png";
import iconSearch from "../../assets/images/icons/icon_search.png";
import { BottomNav } from "../../components/BottomNav";
import { CategoryCard } from "../../components/CategoryCard";
import { ProductCard } from "../../components/ProductCard";
import { styles } from "./style";

export const HomeScreen = () => {
  const navigation = useNavigation();

  const comboFamilia = {
    title: "Combo da Família",
    description: "6 pedaços de frango + batata + refrigerante.\nPreparado na hora para você!",
    basePrice: 89.9,
    image: familiaImg,
  };

  const popularProducts = [
    {
      title: "Frango Crocante",
      shortDesc: "6 pedaços + batata",
      description: "6 pedaços de frango crocante acompanhados de batata frita.\nPreparado na hora para você!",
      priceLabel: "R$ 59,90",
      basePrice: 59.9,
      image: porcaoFrangoImg,
    },
    {
      title: "Chicken Burger",
      shortDesc: "Frango, queijo e molho",
      description: "Hambúrguer de frango empanado, queijo cheddar e molho especial.\nPreparado na hora para você!",
      priceLabel: "R$ 22,90",
      basePrice: 22.9,
      image: chickenBurgerImg,
    },
  ];

  const categories = [
    { title: "Frangos", icon: frangosIcon },
    { title: "Combos", icon: combosIcon },
    { title: "Batatas", icon: batatasIcon },
    { title: "Bebidas", icon: bebidasIcon },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Image source={logo} style={styles.miniLogo} resizeMode="contain" />
            <View>
              <Text style={styles.deliverLabel}>Entregar em</Text>
              <Text style={styles.deliverAddress}>Av. Paulista, 1000</Text>
            </View>
          </View>

          <Pressable
            style={styles.cartBtn}
            onPress={() => navigation.navigate("tracking")}
          >
            <Image
              source={iconCart}
              style={styles.cartIcon}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <Pressable
          style={styles.searchBar}
          onPress={() => navigation.navigate("search")}
        >
          <Image
            source={iconSearch}
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <Text style={styles.searchPlaceholder}>Buscar no cardápio...</Text>
        </Pressable>

        <View style={styles.promoBanner}>
          <View style={styles.promoLeft}>
            <Text style={styles.promoTitle}>COMBO DA FAMÍLIA</Text>
            <Text style={styles.promoSubtitle}>
              6 pedaços de frango + batata + refrigerante
            </Text>
            <Pressable
              style={styles.promoBtn}
              onPress={() => navigation.navigate("product", { product: comboFamilia })}
            >
              <Text style={styles.promoBtnText}>VER OFERTA</Text>
            </Pressable>
          </View>

          <Image
            source={familiaImg}
            style={styles.promoImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <View style={styles.categoriesRow}>
            {categories.map((cat) => (
              <CategoryCard
                key={cat.title}
                image={cat.icon}
                title={cat.title}
                onPress={() =>
                  navigation.navigate("search", { category: cat.title })
                }
              />
            ))}
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Mais pedidos</Text>
            <Pressable onPress={() => navigation.navigate("search")}>
              <Text style={styles.seeAllText}>Ver todos &gt;</Text>
            </Pressable>
          </View>

          <View style={styles.productsGrid}>
            {popularProducts.map((item) => (
              <ProductCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.shortDesc}
                price={item.priceLabel}
                onPress={() =>
                  navigation.navigate("product", { product: item })
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <BottomNav active="home" />
    </SafeAreaView>
  );
};
