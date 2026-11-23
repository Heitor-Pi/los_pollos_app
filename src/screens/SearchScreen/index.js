import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import logo from "../../assets/images/logo.png";
import porcaoFrangoImg from "../../assets/images/porcao_frango.jpg";
import familiaImg from "../../assets/images/familia.jpg";
import chickenBurgerImg from "../../assets/images/chicken_burguer.jpg";
import batataImg from "../../assets/images/batata.jpg";
import comboChickenImg from "../../assets/images/combo_chicken.jpg";
import { AppIcon } from "../../components/AppIcon";
import { BottomNav } from "../../components/BottomNav";
import { SearchResultCard } from "../../components/SearchResultCard";
import { colors } from "../../themes/colors";
import { styles } from "./style";

const CATALOG = [
  {
    id: "frango-crocante",
    title: "Frango Crocante",
    shortDesc: "6 pedaços + batata",
    description:
      "6 pedaços de frango crocante acompanhados de batata frita.\nPreparado na hora para você!",
    priceLabel: "R$ 59,90",
    basePrice: 59.9,
    category: "Frangos",
    image: porcaoFrangoImg,
  },
  {
    id: "combo-familiar",
    title: "Combo Familiar",
    shortDesc: "12 pedaços + acompanhamentos",
    description:
      "12 pedaços de frango crocante com batatas e refrigerantes.\nPreparado na hora para você!",
    priceLabel: "R$ 89,90",
    basePrice: 89.9,
    category: "Combos",
    image: familiaImg,
  },
  {
    id: "chicken-burger",
    title: "Chicken Burger",
    shortDesc: "Frango, queijo e molho",
    description:
      "Hambúrguer de frango empanado, queijo cheddar e molho especial.\nPreparado na hora para você!",
    priceLabel: "R$ 22,90",
    basePrice: 22.9,
    category: "Frangos",
    image: chickenBurgerImg,
  },
  {
    id: "batata-frita",
    title: "Batata Frita",
    shortDesc: "Porção grande",
    description:
      "Batatas fritas crocantes e douradas na porção grande.\nPreparado na hora para você!",
    priceLabel: "R$ 14,90",
    basePrice: 14.9,
    category: "Batatas",
    image: batataImg,
  },
  {
    id: "chicken-combo",
    title: "Chicken Combo",
    shortDesc: "Frango crocante, batata frita e bebida",
    description:
      "Frango crocante, batata frita e bebida.\nPreparado na hora para você!",
    priceLabel: "R$ 34,90",
    basePrice: 34.9,
    category: "Combos",
    image: comboChickenImg,
  },
];

export const SearchScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const initialCategory = route.params?.category || null;

  const [query, setQuery] = useState("frango");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (route.params?.category) {
      setSelectedCategory(route.params.category);
      setQuery("");
    }
  }, [route.params?.category]);

  const recentSearches = [
    "frango crocante",
    "combo familiar",
    "batata frita",
  ];

  const popularCategories = ["Combos", "Frangos", "Bebidas", "Batatas"];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProducts = (() => {
    if (selectedCategory) {
      return CATALOG.filter(
        (item) =>
          item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (normalizedQuery === "" || normalizedQuery === "frango") {
      return CATALOG.slice(0, 4);
    }
    return CATALOG.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.shortDesc.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery)
    );
  })();

  const countLabel =
    filteredProducts.length === 1
      ? "1 produto"
      : `${filteredProducts.length} produtos`;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headerRow}>
          <Text style={styles.pageTitle}>Pesquisar</Text>
          <Image source={logo} style={styles.miniLogo} resizeMode="contain" />
        </View>

        <View style={styles.searchBox}>
          <AppIcon name="search" size={18} color={colors.colorRed} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar no cardápio..."
            placeholderTextColor={colors.colorGray}
            value={query}
            onChangeText={(text) => {
              setSelectedCategory(null);
              setQuery(text);
            }}
          />
          {query.length > 0 || selectedCategory ? (
            <Pressable
              style={styles.clearBtn}
              onPress={() => {
                setQuery("");
                setSelectedCategory(null);
              }}
            >
              <AppIcon name="close" size={18} color={colors.colorGray} />
            </Pressable>
          ) : null}
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionLabel}>Pesquisas recentes</Text>
          <View style={styles.chipsRow}>
            {recentSearches.map((term) => (
              <Pressable
                key={term}
                style={styles.recentChip}
                onPress={() => {
                  setSelectedCategory(null);
                  setQuery(term);
                }}
              >
                <Text style={styles.recentChipText}>{term}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionLabel}>Categorias populares</Text>
          <View style={styles.chipsRow}>
            {popularCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <Pressable
                  key={cat}
                  style={[
                    styles.categoryChip,
                    isSelected && styles.categoryChipActive,
                  ]}
                  onPress={() =>
                    setSelectedCategory((prev) => (prev === cat ? null : cat))
                  }
                >
                  <Text
                    style={[
                      styles.categoryChipText,
                      isSelected && styles.categoryChipTextActive,
                    ]}
                  >
                    {cat}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <View style={styles.resultsHeader}>
            <Text style={styles.sectionLabel}>Resultados</Text>
            <Text style={styles.resultsCount}>{countLabel}</Text>
          </View>

          <View style={styles.resultsList}>
            {filteredProducts.map((item) => (
              <SearchResultCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.shortDesc}
                price={item.priceLabel}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={() => toggleFavorite(item.id)}
                onPress={() =>
                  navigation.navigate("product", { product: item })
                }
              />
            ))}
            {filteredProducts.length === 0 ? (
              <Text style={styles.emptyText}>
                Nenhum produto encontrado.
              </Text>
            ) : null}
          </View>
        </View>
      </ScrollView>

      <BottomNav active="search" />
    </SafeAreaView>
  );
};
