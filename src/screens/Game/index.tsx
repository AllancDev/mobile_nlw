import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { styles } from "../Home/styles";

export function Game() {
  return (
    <Background>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </Background>
  );
}
