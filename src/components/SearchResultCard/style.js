import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.colorWhite,
    borderRadius: 14,
    padding: 10,
    gap: 12,
    borderWidth: 1,
    borderColor: colors.colorBorder,
  },
  thumb: {
    width: 68,
    height: 68,
    borderRadius: 10,
  },
  infoCol: {
    flex: 1,
    gap: 3,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.colorDark,
  },
  description: {
    fontSize: 12,
    color: colors.colorGray,
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.colorRed,
    marginTop: 2,
  },
  heartBtn: {
    padding: 6,
    alignSelf: "flex-start",
  },
});
