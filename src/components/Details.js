import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import Profile from "../../assets/edd.jpeg";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Name: Edidiong </Text>
          <Text style={styles.slackUsername}>username: @maverick</Text>
        </View>
        <View>
          <Image style={styles.image} source={Profile} />
        </View>
        <StatusBar style="auto" />

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Webview")}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Open Github</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textContainer: {
    marginBottom: 50,
  },
  text: {
    fontSize: 45,
  },
  slackUsername: {
    fontSize: 35,
    marginBottom: 30,
  },
  image: {
    height: 400,
    width: 350,
    marginBottom: 50,
  },
  button: {
    padding: 30,
    backgroundColor: "blue",
    borderRadius: 10,
  },
});
