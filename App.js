import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./src/components/Details";
import Webview from "./src/components/Webview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Details"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "Details", headerShown: false }}
        />
        <Stack.Screen
          name="Webview"
          component={Webview}
          options={{ title: "Webview" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
