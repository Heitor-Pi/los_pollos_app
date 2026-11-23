import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.colorWhite,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: colors.colorBorder,
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.colorDark,
  },
});
