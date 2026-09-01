import { Circle } from "lucide-react-native";
import { View } from "react-native";
import { useTheme } from "../../hooks/use-theme";

type ProgressBarProps = {
  current: number;
  total: number;
};

const TRACK_HEIGHT = 8;
const THUMB_SIZE = 28;

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = Math.min(Math.max(current / total, 0), 1);
  const theme = useTheme();

  return (
    <View style={{ justifyContent: "center" }}>
      {/* Track */}
      <View
        style={{
          height: TRACK_HEIGHT,
          borderRadius: TRACK_HEIGHT / 2,
          backgroundColor: theme.colors.surfaceElevated,
          overflow: "hidden",
        }}
      >
        {/* Fill */}
        <View
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            borderRadius: TRACK_HEIGHT / 2,
            backgroundColor: theme.colors.text,
          }}
        />
      </View>

      {/* Coin thumb */}
      <View
        style={{
          position: "absolute",
          left: `${progress * 100}%`,
          marginLeft: -THUMB_SIZE / 2,
          width: THUMB_SIZE,
          height: THUMB_SIZE,
        }}
      >
        {/* <CoinIcon size={THUMB_SIZE} /> */}
        <Circle
          size={THUMB_SIZE}
          color="#f59e0b"
          fill="#fbbf24"
          strokeWidth={2}
        />
      </View>
    </View>
  );
}
