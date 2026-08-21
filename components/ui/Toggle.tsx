import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useThemeStore } from "../../store/themeStore";

export function ThemeToggle() {
  const mode = useThemeStore((state) => state.mode);
  const setMode = useThemeStore((state) => state.setMode);
  const [isEnabled, setIsEnabled] = useState(false);

  const options = ["light", "dark", "system"] as const;

  const toggleSwitch = () => {
    setIsEnabled((isEnabled) => !isEnabled);
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <View>
      <TouchableOpacity
        className="w-9 p-1 rounded-xl bg-green-500"
        onPress={toggleSwitch}
      >
        <View
          className={`w-4 h-3 bg-white  p-2 rounded-full ${mode !== "dark" ? "translate-x-3" : "translate-x-0"}`}
        >
          <Text>{mode === "dark" ? "dark" : "light"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
