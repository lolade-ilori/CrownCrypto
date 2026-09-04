import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function PaymentCard() {
  return (
    <View style={styles.outer}>
      <LinearGradient
        colors={["#1F2937", "#111827", "#0F172A"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.topRow}>
          <View>
            <Text style={styles.bank}>NOVA BANK</Text>
            <Text style={styles.label}>Premium Card</Text>
          </View>

          <View style={styles.chipWrap}>
            <View style={styles.chip}>
              <View style={styles.chipLine} />
              <View style={styles.chipLineShort} />
              <View style={styles.chipLine} />
            </View>
          </View>
        </View>

        <View style={styles.middle}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balance}>$12,480.25</Text>
        </View>

        <View style={styles.bottomRow}>
          <View>
            <Text style={styles.metaLabel}>CARD HOLDER</Text>
            <Text style={styles.metaValue}>ALEX MORGAN</Text>
          </View>

          <View>
            <Text style={styles.metaLabel}>EXPIRES</Text>
            <Text style={styles.metaValue}>12/28</Text>
          </View>
        </View>

        <View style={styles.cardNumberWrap}>
          <Text style={styles.cardNumber}>•••• •••• •••• 4821</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: width * 0.92,
    alignSelf: "center",
    borderRadius: 24,
    marginVertical: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.2,
        shadowRadius: 18,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  card: {
    borderRadius: 24,
    padding: 20,
    minHeight: 220,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bank: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  label: {
    marginTop: 4,
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
  },
  chipWrap: {
    width: 56,
    height: 44,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.08)",
    justifyContent: "center",
    alignItems: "center",
  },
  chip: {
    width: 34,
    height: 26,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  chipLine: {
    height: 2,
    backgroundColor: "rgba(255,255,255,0.45)",
    borderRadius: 2,
  },
  chipLineShort: {
    height: 2,
    width: "70%",
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.45)",
    borderRadius: 2,
  },
  middle: {
    marginTop: 14,
  },
  balanceLabel: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 13,
    marginBottom: 6,
  },
  balance: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  metaLabel: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 10,
    letterSpacing: 1.4,
    marginBottom: 4,
  },
  metaValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  cardNumberWrap: {
    marginTop: 10,
    alignItems: "center",
  },
  cardNumber: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 16,
    letterSpacing: 4,
    fontWeight: "600",
  },
});
