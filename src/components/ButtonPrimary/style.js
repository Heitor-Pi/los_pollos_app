import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: colors.colorRed,
    paddingVertical: 14,
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtnPrimary: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: colors.colorWhite,
    letterSpacing: 0.4,
  },
});
