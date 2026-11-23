import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRouter } from "./routes/routes";

export default function App() {
  useFonts({
    Oswald: require("./assets/fonts/Oswald-VariableFont_wght.ttf"),
  });

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AppRouter />
    </SafeAreaProvider>
  );
}
