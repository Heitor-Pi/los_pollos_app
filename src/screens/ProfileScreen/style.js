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
    gap: 18,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pageTitle: {
    fontFamily: fonts.fontTitle,
    fontSize: 24,
    fontWeight: "700",
    color: colors.colorDark,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  gearIcon: {
    width: 20,
    height: 20,
    tintColor: colors.colorGray,
  },
  miniLogo: {
    width: 34,
    height: 34,
  },
  userSection: {
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
  },
  avatarCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: colors.colorAvatarBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  avatarInitials: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.colorGray,
  },
  userName: {
    fontFamily: fonts.fontTitle,
    fontSize: 22,
    fontWeight: "700",
    color: colors.colorDark,
  },
  userEmail: {
    fontSize: 13,
    color: colors.colorGray,
  },
  memberBadge: {
    backgroundColor: colors.colorSoftYellow,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: 4,
  },
  memberBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.colorRed,
  },
  menuList: {
    gap: 10,
  },
  logoutBtn: {
    marginTop: 4,
  },
});
