import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.colorCream,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  miniLogo: {
    width: 38,
    height: 38,
  },
  deliverLabel: {
    fontSize: 11,
    color: colors.colorGray,
  },
  deliverAddress: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.colorDark,
  },
  cartBtn: {
    padding: 6,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.colorWhite,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.colorBorder,
    paddingHorizontal: 14,
    height: 46,
    gap: 10,
  },
  searchPlaceholder: {
    fontSize: 14,
    color: colors.colorGray,
  },
  promoBanner: {
    backgroundColor: colors.colorYellow,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  promoLeft: {
    flex: 1,
    gap: 8,
  },
  promoTitle: {
    fontFamily: fonts.fontTitle,
    fontSize: 18,
    fontWeight: "700",
    color: colors.colorRed,
  },
  promoSubtitle: {
    fontSize: 12,
    color: colors.colorDark,
    lineHeight: 16,
  },
  promoBtn: {
    backgroundColor: colors.colorRed,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    marginTop: 2,
  },
  promoBtnText: {
    color: colors.colorWhite,
    fontSize: 11,
    fontWeight: "700",
  },
  promoImage: {
    width: 124,
    height: 92,
    borderRadius: 12,
  },
  sectionBlock: {
    gap: 12,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontFamily: fonts.fontTitle,
    fontSize: 18,
    fontWeight: "700",
    color: colors.colorDark,
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.colorRed,
  },
  categoriesRow: {
    flexDirection: "row",
    gap: 10,
  },
  productsGrid: {
    flexDirection: "row",
    gap: 12,
  },
});
