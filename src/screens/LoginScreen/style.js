import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.colorCream,
  },
  containerLogin: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 24,
    justifyContent: "center",
    gap: 28,
  },
  logoSection: {
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 170,
    height: 170,
  },
  tagline: {
    fontFamily: fonts.fontTitle,
    fontSize: 16,
    fontWeight: "700",
    color: colors.colorRed,
  },
  formSection: {
    gap: 14,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.colorWhite,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.colorBorder,
    paddingHorizontal: 14,
    height: 50,
    gap: 10,
  },
  mailIconBox: {
    width: 16,
    height: 11,
    borderWidth: 1.5,
    borderColor: colors.colorGray,
    borderRadius: 2,
    overflow: "hidden",
    alignItems: "center",
  },
  mailFlap: {
    width: 11,
    height: 11,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: colors.colorGray,
    transform: [{ rotate: "45deg" }],
    marginTop: -6,
  },
  passwordDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.colorRed,
    marginHorizontal: 3,
  },
  visitorIcon: {
    width: 16,
    height: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.colorDark,
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginTop: -4,
  },
  forgotText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.colorRed,
  },
  btnEnter: {
    marginTop: 4,
  },
  noAccountText: {
    textAlign: "center",
    fontSize: 12,
    color: colors.colorGray,
    marginTop: 4,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 4,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.colorBorder,
  },
  dividerText: {
    fontSize: 12,
    color: colors.colorGray,
  },
  visitorBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: colors.colorBorder,
    borderRadius: 12,
    paddingVertical: 13,
    backgroundColor: colors.colorCream,
  },
  visitorText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.colorDark,
  },
  bottomStripes: {
    backgroundColor: colors.colorYellow,
    height: 30,
    justifyContent: "space-evenly",
    paddingVertical: 4,
  },
  stripeRed: {
    height: 2,
    backgroundColor: colors.colorRed,
  },
});
