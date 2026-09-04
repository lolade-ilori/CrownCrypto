import { Platform } from "react-native";

export const cardShadow = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  android: {
    elevation: 2,
  },
  default: {},
});
