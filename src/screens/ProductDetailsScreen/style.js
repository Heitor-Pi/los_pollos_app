import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.colorCream,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 8,
  },
  headerBtn: {
    padding: 4,
  },
  backIcon: {
    width: 18,
    height: 18,
  },
  heartIcon: {
    width: 22,
    height: 22,
  },
  heartFilled: {
    fontSize: 22,
    color: colors.colorRed,
    lineHeight: 24,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.colorDark,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  miniLogo: {
    width: 30,
    height: 30,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 24,
    gap: 18,
  },
  heroImage: {
    width: "100%",
    height: 195,
    borderRadius: 16,
  },
  infoBlock: {
    gap: 6,
  },
  productTitle: {
    fontFamily: fonts.fontTitle,
    fontSize: 24,
    fontWeight: "700",
    color: colors.colorDark,
  },
  productDescription: {
    fontSize: 13,
    color: colors.colorGray,
    lineHeight: 19,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.colorRed,
    marginTop: 4,
  },
  sectionBlock: {
    gap: 10,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.colorDark,
  },
  sizeRow: {
    flexDirection: "row",
    gap: 10,
  },
  sizeChip: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.colorBorder,
    backgroundColor: colors.colorCream,
    alignItems: "center",
  },
  sizeChipActive: {
    backgroundColor: colors.colorRed,
    borderColor: colors.colorRed,
  },
  sizeChipText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.colorDark,
  },
  sizeChipTextActive: {
    color: colors.colorWhite,
    fontWeight: "700",
  },
  extrasList: {
    gap: 12,
  },
  extraRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  extraLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.colorRed,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.colorWhite,
  },
  checkboxChecked: {
    backgroundColor: colors.colorRed,
  },
  checkMark: {
    color: colors.colorWhite,
    fontSize: 12,
    fontWeight: "700",
  },
  extraName: {
    fontSize: 14,
    color: colors.colorDark,
  },
  extraPrice: {
    fontSize: 13,
    color: colors.colorGray,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  counterBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  counterBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.colorWhite,
    borderWidth: 1,
    borderColor: colors.colorBorder,
    alignItems: "center",
    justifyContent: "center",
  },
  minusIcon: {
    width: 12,
    height: 12,
  },
  plusIcon: {
    width: 13,
    height: 13,
    tintColor: colors.colorRed,
  },
  counterValue: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.colorDark,
    minWidth: 18,
    textAlign: "center",
  },
  footerBar: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 16,
    backgroundColor: colors.colorCream,
  },
});
