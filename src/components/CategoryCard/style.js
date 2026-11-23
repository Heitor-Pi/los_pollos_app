import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  cardCategory: {
    flex: 1,
    backgroundColor: colors.colorPaleYellow,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: colors.colorSoftYellow,
  },
  categoryImage: {
    width: 36,
    height: 36,
  },
  categoryTitle: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.colorDark,
  },
});
