import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  btnOutline: {
    borderWidth: 1.5,
    borderColor: colors.colorRed,
    borderRadius: 12,
    paddingVertical: 13,
    width: "100%",
    backgroundColor: colors.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtnOutline: {
    color: colors.colorRed,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.4,
  },
});
