import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { ProductDetailsScreen } from "../screens/ProductDetailsScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { OrderTrackingScreen } from "../screens/OrderTrackingScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="product" component={ProductDetailsScreen} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="tracking" component={OrderTrackingScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
