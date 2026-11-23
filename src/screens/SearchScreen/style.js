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
    gap: 16,
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
  miniLogo: {
    width: 34,
    height: 34,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.colorWhite,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.colorBorder,
    paddingHorizontal: 14,
    height: 46,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.colorDark,
  },
  clearBtn: {
    padding: 4,
  },
  sectionBlock: {
    gap: 10,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.colorDark,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  recentChip: {
    backgroundColor: colors.colorWhite,
    borderWidth: 1,
    borderColor: colors.colorBorder,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  recentChipText: {
    fontSize: 12,
    color: colors.colorGray,
  },
  categoryChip: {
    backgroundColor: colors.colorSoftYellow,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  categoryChipActive: {
    backgroundColor: colors.colorRed,
  },
  categoryChipText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.colorDark,
  },
  categoryChipTextActive: {
    color: colors.colorWhite,
  },
  resultsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resultsCount: {
    fontSize: 12,
    color: colors.colorGray,
  },
  resultsList: {
    gap: 10,
  },
  emptyText: {
    textAlign: "center",
    color: colors.colorGray,
    fontSize: 13,
    paddingVertical: 24,
  },
});
