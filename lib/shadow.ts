import { Platform } from "react-native";

export const cardShadow = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  android: {
    elevation: 2,
  },
  default: {},
});
