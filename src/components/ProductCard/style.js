import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.colorWhite,
    borderRadius: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.colorBorder,
    gap: 10,
  },
  imgProduct: {
    width: "100%",
    height: 110,
    borderRadius: 12,
  },
  infoContainer: {
    gap: 4,
  },
  titleProduct: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.colorDark,
  },
  descriptionProduct: {
    fontSize: 12,
    color: colors.colorGray,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  priceProduct: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.colorRed,
  },
  btnAdd: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.colorRed,
    alignItems: "center",
    justifyContent: "center",
  },
  iconPlus: {
    width: 13,
    height: 13,
  },
});
