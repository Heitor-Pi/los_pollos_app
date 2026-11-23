import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    backgroundColor: colors.colorWhite,
    borderTopWidth: 1,
    borderTopColor: colors.colorBorder,
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 8,
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    minWidth: 64,
  },
  navIcon: {
    width: 20,
    height: 20,
  },
  navLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.colorGray,
  },
  navLabelActive: {
    color: colors.colorRed,
    fontWeight: "700",
  },
});
