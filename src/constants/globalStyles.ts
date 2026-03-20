import { ScaledSheet } from "react-native-size-matters";
import { colors } from "./colors";

export const globalStyles = ScaledSheet.create({
  // =========================
  // FLEX
  // =========================
  flex1: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
  },

  column: {
    flexDirection: "column",
  },

  // =========================
  // ALIGN ITEMS (Cross Axis)
  // =========================
  itemsStart: {
    alignItems: "flex-start",
  },
  itemsCenter: {
    alignItems: "center",
  },
  itemsEnd: {
    alignItems: "flex-end",
  },

  // =========================
  // JUSTIFY CONTENT (Main Axis)
  // =========================
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyAround: {
    justifyContent: "space-around",
  },
  justifyEvenly: {
    justifyContent: "space-evenly",
  },

  // =========================
  // ALIGN SELF (Individual)
  // =========================
  selfStart: {
    alignSelf: "flex-start",
  },
  selfCenter: {
    alignSelf: "center",
  },
  selfEnd: {
    alignSelf: "flex-end",
  },

  // =========================
  // COMBINED HELPERS
  // =========================
  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // =========================
  // SPACING
  // =========================
  p10: { padding: "10@ms" },
  p15: { padding: "15@ms" },
  p20: { padding: "20@ms" },

  mt10: { marginTop: "10@ms" },
  mt20: { marginTop: "20@ms" },

  mb10: { marginBottom: "10@ms" },
  mb20: { marginBottom: "20@ms" },

  // =========================
  // TEXT
  // =========================
  textCenter: {
    textAlign: "center",
  },

  textPrimary: {
    color: colors.primary.brand,
  },

  textSecondary: {
    color: colors.text.secondary,
  },

  textBold: {
    fontWeight: "600",
  },

  // =========================
  // BACKGROUND
  // =========================
  bgWhite: {
    backgroundColor: colors.neutral.white,
  },

  bgPrimary: {
    backgroundColor: colors.primary.brand,
  },

  // =========================
  // BORDER
  // =========================
  rounded8: {
    borderRadius: "8@ms",
  },

  rounded12: {
    borderRadius: "12@ms",
  },

  primaryStyle: {
    color: colors.primary.brand,
    fontWeight: 500,
    fontSize: "15@ms",
  },
  screenTitleStyle: {
    fontSize: "25@ms",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "10@ms",
    fontStyle: "italic",
  },
  title: {
    fontSize: "25@ms",
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "italic",
  },

  subtitle: {
    fontSize: "15@ms",
    color: colors.neutral.s500,
    textAlign: "center",
  },
});
